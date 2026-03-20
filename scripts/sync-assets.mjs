import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const projectRoot = process.cwd();
const sourceRoot =
  process.env.SAN_JORGE_ASSETS_ROOT ??
  path.join(os.homedir(), "Documents", "sanjorge");

const publicAssetsRoot = path.join(projectRoot, "public", "assets");
const urbanizationsRoot = path.join(publicAssetsRoot, "urbanizaciones");
const logosRoot = path.join(publicAssetsRoot, "logos");
const docsRoot = path.join(publicAssetsRoot, "docs");
const appRoot = path.join(projectRoot, "src", "app");
const generatedDataPath = path.join(
  projectRoot,
  "src",
  "data",
  "generated-urbanizations.ts",
);

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const ignoredDirectories = new Set([
  ".git",
  "logo san jorge",
  "logo socios",
  "node_modules",
  "san-jorge-desarrollos",
]);

const displayNameOverrides = {
  arroyos: "Arroyos de San Vicente",
  lasperdices: "Las Perdices",
  oasis: "Oasis",
  ombu: "El Viejo Ombú",
};

const planPattern =
  /(plan|plano|master|croquis|mapa|layout|fachada|contrafachada|costado)/i;
const logoPattern = /(logo|marca|png)/i;
const pdfPattern = /\.pdf$/i;
const explicitUrbanizationLogos = {
  "las-perdices": "Perdices png.png",
  oasis: "Logo-oasis-1024x365.png",
  "el-viejo-ombu": "ombu png.png",
  "arroyos-de-san-vicente": "Arroyos de San Vicente.png",
};

function ensureDirectory(targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function slugify(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function sanitizeFileName(fileName) {
  const extension = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName, extension);
  return `${slugify(baseName) || "asset"}${extension}`;
}

function getAllFiles(directoryPath) {
  return fs.readdirSync(directoryPath, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directoryPath, entry.name);
    if (entry.isDirectory()) return getAllFiles(entryPath);
    return [entryPath];
  });
}

function getRelativePublicPath(...segments) {
  return `/${path.posix.join(...segments.map((segment) => segment.replaceAll(path.sep, "/")))}`;
}

function copyFileSafe(sourcePath, destinationPath) {
  ensureDirectory(path.dirname(destinationPath));
  fs.copyFileSync(sourcePath, destinationPath);
}

function humanizeFolderName(folderName) {
  const normalized = slugify(folderName);
  if (displayNameOverrides[normalized]) {
    return displayNameOverrides[normalized];
  }

  return folderName
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (fragment) => fragment.toUpperCase());
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&ordm;/g, "°")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&iexcl;/g, "¡")
    .replace(/&iquest;/g, "¿")
    .replace(/&ntilde;/g, "ñ")
    .replace(/&Ntilde;/g, "Ñ")
    .replace(/&aacute;/g, "á")
    .replace(/&eacute;/g, "é")
    .replace(/&iacute;/g, "í")
    .replace(/&oacute;/g, "ó")
    .replace(/&uacute;/g, "ú");
}

function cleanHtmlText(value) {
  return decodeHtmlEntities(value)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s*\n\s*/g, "\n")
    .trim();
}

function normalizeSpanishCopy(value) {
  return value
    .replace(/Capital federal/gi, "Capital Federal")
    .replace(/Ruta provincial/gi, "Ruta Provincial")
    .replace(/estret[eé]gicamente/gi, "estratégicamente")
    .replace(/provisi[oó]nde/gi, "provisión de")
    .replace(/cesped/gi, "césped")
    .replace(/basquet/gi, "básquet")
    .replace(/San Viciente/gi, "San Vicente")
    .replace(/!!+/g, "¡")
    .replace(/\s+/g, " ")
    .trim();
}

function copyPreferredAsset(directoryPath, candidates, destinationBaseName) {
  for (const candidate of candidates) {
    const sourcePath = path.join(directoryPath, candidate);
    if (fs.existsSync(sourcePath)) {
      const extension = path.extname(sourcePath).toLowerCase();
      const destinationFileName = `${destinationBaseName}${extension}`;
      const destinationPath = path.join(logosRoot, destinationFileName);
      copyFileSafe(sourcePath, destinationPath);
      return getRelativePublicPath("assets", "logos", destinationFileName);
    }
  }

  return undefined;
}

function copyAppIcon(sourcePath) {
  if (!sourcePath || !fs.existsSync(sourcePath)) return;
  const destinationPath = path.join(appRoot, "icon.png");
  copyFileSafe(sourcePath, destinationPath);
}

function classifyImage(filePath) {
  const normalizedName = normalizeText(path.basename(filePath));

  return {
    isPlan: planPattern.test(normalizedName),
    isLogo: logoPattern.test(normalizedName) && !planPattern.test(normalizedName),
  };
}

function scoreImage(filePath) {
  const normalizedName = normalizeText(path.basename(filePath));
  let score = 0;

  if (planPattern.test(normalizedName)) score -= 10;
  if (/whatsapp|fotos|foto/i.test(normalizedName)) score += 1;
  if (/back|pileta|vista|oasis|ombu|perdices|arroyos/i.test(normalizedName)) score += 2;
  if (/\d{2,4}x\d{2,4}/i.test(normalizedName)) score += 1;
  if (/logo|marca/i.test(normalizedName)) score -= 10;

  return score;
}

function scorePlan(filePath, slug) {
  const normalizedName = normalizeText(path.basename(filePath));
  let score = 0;

  if (/master|plano|plan/i.test(normalizedName)) score += 3;
  if (slug.includes("arroyos") && normalizedName.includes("lasperdices")) score -= 6;
  if (slug.includes("perdices") && normalizedName.includes("arroyos")) score -= 6;
  if (slug.includes("oasis") && normalizedName.includes("ombu")) score -= 6;
  if (slug.includes("ombu") && normalizedName.includes("oasis")) score -= 6;

  return score;
}

function pickBestPdf(pdfFiles, slug) {
  if (!pdfFiles.length) return undefined;

  return [...pdfFiles].sort((left, right) => {
    const leftName = normalizeText(path.basename(left));
    const rightName = normalizeText(path.basename(right));

    const score = (name) => {
      let current = 0;
      if (/regl|reglamento/i.test(name)) current += 10;
      if (name.includes(slug)) current += 3;
      if (/barrio|urbanizacion/i.test(name)) current += 2;
      if (/master|plano/i.test(name)) current -= 1;
      return current;
    };

    return score(rightName) - score(leftName);
  })[0];
}

function createGenericSections(name, hasPlans, hasDocuments) {
  return {
    general: [
      `${name} integra el portfolio de San Jorge Desarrollos con una propuesta pensada para combinar inversión, entorno y una implantación residencial equilibrada.`,
    ],
    characteristics: [
      hasPlans
        ? "Cuenta con material planimétrico para comprender con mayor claridad la disposición general del proyecto y su lógica de implantación."
        : "Su planteo urbano prioriza una lectura simple del conjunto, con escala residencial y una imagen cuidada.",
      hasDocuments
        ? "Dispone de documentación complementaria para acompañar el proceso comercial con información accesible y ordenada."
        : "La propuesta comercial se presenta con una comunicación directa, clara y orientada a compradores finales e inversores.",
    ],
    surroundings: [
      "Se inserta dentro del corredor de San Vicente, una zona de crecimiento sostenido y buena conexión con los principales accesos regionales.",
    ],
  };
}

function extractOmbuSections(directoryPath) {
  const htmlPath = path.join(directoryPath, "download.html");

  if (!fs.existsSync(htmlPath)) {
    return createGenericSections("El Viejo Ombú", true, true);
  }

  const html = fs.readFileSync(htmlPath, "utf8");
  const textChunks = Array.from(
    html.matchAll(/<(h[1-6]|p)[^>]*>([\s\S]*?)<\/\1>/gi),
    (match) => cleanHtmlText(match[2]),
  )
    .map(normalizeSpanishCopy)
    .filter((chunk) => chunk.length > 20);

  const findChunk = (pattern, fallback) =>
    textChunks.find((chunk) => pattern.test(chunk)) ?? fallback;

  return {
    general: [
      "El Viejo Ombú es un desarrollo en San Vicente pensado para quienes buscan contacto con la naturaleza, escala residencial y un proyecto con identidad propia.",
      "Su propuesta incorpora una mirada sustentable, con atención al uso eficiente de recursos y una relación más armónica con el entorno natural.",
    ],
    characteristics: [
      findChunk(
        /sal[oó]n de usos m[uú]ltiples|pileta|paneles solares|residuos/i,
        "Su propuesta combina espacios residenciales y áreas comunes con servicios pensados para el uso cotidiano y social del barrio.",
      ).replace(
        /El sum cuenta adem[aá]s.*$/i,
        "El conjunto incorpora espacios comunes y criterios de funcionamiento alineados con una lógica ambiental más responsable.",
      ),
    ],
    surroundings: [
      "Se vincula con facilidad a San Vicente, Canning y Ezeiza mediante las rutas provinciales 16, 6 y 58, dentro de un sector con accesos regionales consolidados.",
    ],
  };
}

function getUrbanizationFeatures(slug, hasPlans, hasDocuments, htmlSource = "") {
  const features = [];

  if (slug === "el-viejo-ombu") {
    if (/Seguridad 24hs/i.test(htmlSource)) features.push("Seguridad en el predio");
    if (/Piscina/i.test(htmlSource)) features.push("Piscina de uso familiar");
    if (/Plaza/i.test(htmlSource)) features.push("Espacios recreativos");
    if (/paneles solares/i.test(htmlSource)) {
      features.push("Criterios de sustentabilidad");
    }
    if (/f[áa]cil acceso/i.test(htmlSource)) features.push("Acceso regional ágil");
  }

  if (hasPlans) features.push("Planos integrados");
  if (hasDocuments) features.push("Documentación disponible");
  features.push("Acompañamiento comercial personalizado");

  return Array.from(new Set(features));
}

function selectShowcaseImages(images, plans) {
  const mainImages = [...images]
    .sort((left, right) => scoreImage(right) - scoreImage(left))
    .slice(0, 3);

  const selected = [...mainImages];

  if (plans[0]) selected.push(plans[0]);

  return selected.slice(0, 4);
}

function collectUrbanizationData(directoryPath) {
  const folderName = path.basename(directoryPath);
  const name = humanizeFolderName(folderName);
  const slug = slugify(name);
  const publicUrbanizationDirectory = path.join(urbanizationsRoot, slug);

  ensureDirectory(publicUrbanizationDirectory);

  const files = getAllFiles(directoryPath);
  const imageFiles = files.filter((filePath) =>
    imageExtensions.has(path.extname(filePath).toLowerCase()),
  );
  const pdfFiles = files.filter((filePath) => pdfPattern.test(filePath));

  const copiedImages = imageFiles.map((imagePath) => {
    const sanitizedName = sanitizeFileName(path.basename(imagePath));
    const destinationPath = path.join(publicUrbanizationDirectory, sanitizedName);

    copyFileSafe(imagePath, destinationPath);

    return {
      sourcePath: imagePath,
      publicPath: getRelativePublicPath("assets", "urbanizaciones", slug, sanitizedName),
      ...classifyImage(imagePath),
    };
  });

  const explicitLogoName = explicitUrbanizationLogos[slug];
  const explicitLogoSource = explicitLogoName
    ? files.find((filePath) => path.basename(filePath) === explicitLogoName)
    : undefined;

  const logoSource =
    explicitLogoSource ??
    copiedImages
      .filter((item) => item.isLogo)
      .sort((left, right) => {
        const leftName = normalizeText(path.basename(left.sourcePath));
        const rightName = normalizeText(path.basename(right.sourcePath));
        const score = (name) => {
          let current = 0;
          if (/logo|marca/i.test(name)) current += 6;
          if (/png|webp/i.test(name)) current += 3;
          if (/master|plano/i.test(name)) current -= 10;
          return current;
        };
        return score(rightName) - score(leftName);
      })[0]?.sourcePath;

  let logo;

  if (logoSource) {
    const extension = path.extname(logoSource).toLowerCase();
    const logoFileName = `${slug}-logo${extension}`;
    const logoDestination = path.join(logosRoot, logoFileName);
    copyFileSafe(logoSource, logoDestination);
    logo = getRelativePublicPath("assets", "logos", logoFileName);
  }

  const plans = copiedImages
    .filter((item) => item.isPlan)
    .sort((left, right) => scorePlan(right.sourcePath, slug) - scorePlan(left.sourcePath, slug))
    .map((item) => item.publicPath);

  const images = copiedImages
    .filter((item) => !item.isPlan && item.sourcePath !== logoSource)
    .sort((left, right) => scoreImage(right.sourcePath) - scoreImage(left.sourcePath))
    .map((item) => item.publicPath);

  const selectedGallery = [
    ...images.slice(0, 5).map((imagePath) => ({ src: imagePath, kind: "image" })),
    ...plans.slice(0, 2).map((imagePath) => ({ src: imagePath, kind: "plan" })),
  ];

  const documents = pdfFiles.map((pdfPath) => {
    const outputFileName = `${slug}-${sanitizeFileName(path.basename(pdfPath))}`;
    copyFileSafe(pdfPath, path.join(docsRoot, outputFileName));
    return getRelativePublicPath("assets", "docs", outputFileName);
  });

  const bestPdf = pickBestPdf(pdfFiles, slug);
  const reglamento = bestPdf
    ? getRelativePublicPath(
        "assets",
        "docs",
        `${slug}-${sanitizeFileName(path.basename(bestPdf))}`,
      )
    : undefined;

  const ombuHtmlPath = path.join(directoryPath, "download.html");
  const ombuHtml = fs.existsSync(ombuHtmlPath)
    ? fs.readFileSync(ombuHtmlPath, "utf8")
    : "";
  const descriptionSections =
    slug === "el-viejo-ombu"
      ? extractOmbuSections(directoryPath)
      : createGenericSections(name, plans.length > 0, documents.length > 0);

  const summary = descriptionSections.general[0];

  return {
    name,
    slug,
    summary,
    location: "San Vicente, Buenos Aires",
    logo,
    coverImage: images[0] ?? plans[0] ?? null,
    heroImage: images[0] ?? plans[0] ?? null,
    images,
    showcaseImages: selectShowcaseImages(images, plans),
    plans,
    gallery: selectedGallery,
    description: [
      ...descriptionSections.general,
      ...descriptionSections.characteristics,
      ...descriptionSections.surroundings,
    ],
    descriptionSections,
    features: getUrbanizationFeatures(
      slug,
      plans.length > 0,
      documents.length > 0,
      ombuHtml,
    ),
    reglamento,
    documents,
  };
}

function writeGeneratedModule(urbanizations, siteAssets) {
  const moduleContents = `export type GalleryItem = {
  src: string;
  kind: "image" | "plan";
};

export type DescriptionSections = {
  general: string[];
  characteristics: string[];
  surroundings: string[];
};

export type Urbanization = {
  name: string;
  slug: string;
  summary: string;
  location: string;
  logo?: string;
  coverImage: string | null;
  heroImage: string | null;
  images: string[];
  showcaseImages: string[];
  plans: string[];
  gallery: GalleryItem[];
  description: string[];
  descriptionSections: DescriptionSections;
  features: string[];
  reglamento?: string;
  documents: string[];
};

export type SiteAssets = {
  companyLogo?: string;
  companyMark?: string;
  favicon?: string;
};

export const siteAssets: SiteAssets = ${JSON.stringify(siteAssets, null, 2)};

export const urbanizations: Urbanization[] = ${JSON.stringify(urbanizations, null, 2)};

export function getUrbanizationBySlug(slug: string) {
  return urbanizations.find((urbanization) => urbanization.slug === slug);
}
`;

  ensureDirectory(path.dirname(generatedDataPath));
  fs.writeFileSync(generatedDataPath, moduleContents);
}

function main() {
  ensureDirectory(urbanizationsRoot);
  ensureDirectory(logosRoot);
  ensureDirectory(docsRoot);

  if (!fs.existsSync(sourceRoot)) {
    console.log(`[sync-assets] Source root not found at ${sourceRoot}.`);
    return;
  }

  const sourceDirectories = fs
    .readdirSync(sourceRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((directoryName) => !ignoredDirectories.has(directoryName))
    .sort((left, right) => left.localeCompare(right));

  const urbanizations = sourceDirectories
    .map((directoryName) => collectUrbanizationData(path.join(sourceRoot, directoryName)))
    .filter((urbanization) => urbanization.coverImage);

  const brandDirectory = path.join(sourceRoot, "logo san jorge");
  const companyLogo = copyPreferredAsset(
    brandDirectory,
    ["sanjorgedeblack.webp", "sanjorgedeblack1.webp", "SAN JORGE.png"],
    "san-jorge-logo",
  );
  const companyMark = copyPreferredAsset(
    brandDirectory,
    ["sjtrns.png", "sanjorgede.png"],
    "san-jorge-mark",
  );
  const favicon = copyPreferredAsset(
    brandDirectory,
    ["sjtrns.png"],
    "san-jorge-favicon",
  );

  if (favicon) {
    copyAppIcon(path.join(brandDirectory, "sjtrns.png"));
  }

  writeGeneratedModule(urbanizations, {
    companyLogo,
    companyMark,
    favicon,
  });

  console.log(`[sync-assets] Synced ${urbanizations.length} urbanizations.`);
}

main();
