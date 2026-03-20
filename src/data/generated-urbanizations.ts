export type GalleryItem = {
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
  previewImage: string | null;
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

export const siteAssets: SiteAssets = {
  "companyLogo": "/assets/logos/san-jorge-logo.webp",
  "companyMark": "/assets/logos/san-jorge-mark.png",
  "favicon": "/assets/logos/san-jorge-favicon.png"
};

export const urbanizations: Urbanization[] = [
  {
    "name": "Arroyos de San Vicente",
    "slug": "arroyos-de-san-vicente",
    "summary": "Arroyos de San Vicente integra el portfolio de San Jorge Desarrollos con una propuesta pensada para combinar inversión, entorno y una implantación residencial equilibrada.",
    "location": "San Vicente, Buenos Aires",
    "logo": "/assets/logos/arroyos-de-san-vicente-logo.png",
    "previewImage": "/assets/urbanizaciones/arroyos-de-san-vicente/1-636x360.jpg",
    "coverImage": "/assets/urbanizaciones/arroyos-de-san-vicente/arroyosback.jpg",
    "heroImage": "/assets/urbanizaciones/arroyos-de-san-vicente/arroyosback.jpg",
    "images": [
      "/assets/urbanizaciones/arroyos-de-san-vicente/arroyosback.jpg",
      "/assets/urbanizaciones/arroyos-de-san-vicente/1-636x360.jpg",
      "/assets/urbanizaciones/arroyos-de-san-vicente/14-1-1019x767.jpg",
      "/assets/urbanizaciones/arroyos-de-san-vicente/2-1165x657.jpg",
      "/assets/urbanizaciones/arroyos-de-san-vicente/3-1-1164x659.jpg",
      "/assets/urbanizaciones/arroyos-de-san-vicente/3-636x360.jpg",
      "/assets/urbanizaciones/arroyos-de-san-vicente/4-636x336.jpg",
      "/assets/urbanizaciones/arroyos-de-san-vicente/fff-313x79.jpg"
    ],
    "showcaseImages": [
      "/assets/urbanizaciones/arroyos-de-san-vicente/arroyosback.jpg",
      "/assets/urbanizaciones/arroyos-de-san-vicente/1-636x360.jpg",
      "/assets/urbanizaciones/arroyos-de-san-vicente/14-1-1019x767.jpg",
      "/assets/urbanizaciones/arroyos-de-san-vicente/master-png-1.png"
    ],
    "plans": [
      "/assets/urbanizaciones/arroyos-de-san-vicente/master-png-1.png",
      "/assets/urbanizaciones/arroyos-de-san-vicente/masterarr-png-1.jpg",
      "/assets/urbanizaciones/arroyos-de-san-vicente/masterarr-png-1.png",
      "/assets/urbanizaciones/arroyos-de-san-vicente/masterarr-png-1.webp",
      "/assets/urbanizaciones/arroyos-de-san-vicente/lasperdicesmaster-png-1.png"
    ],
    "gallery": [
      {
        "src": "/assets/urbanizaciones/arroyos-de-san-vicente/arroyosback.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/arroyos-de-san-vicente/1-636x360.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/arroyos-de-san-vicente/14-1-1019x767.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/arroyos-de-san-vicente/2-1165x657.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/arroyos-de-san-vicente/3-1-1164x659.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/arroyos-de-san-vicente/master-png-1.png",
        "kind": "plan"
      },
      {
        "src": "/assets/urbanizaciones/arroyos-de-san-vicente/masterarr-png-1.jpg",
        "kind": "plan"
      }
    ],
    "description": [
      "Arroyos de San Vicente integra el portfolio de San Jorge Desarrollos con una propuesta pensada para combinar inversión, entorno y una implantación residencial equilibrada.",
      "Cuenta con material planimétrico para comprender con mayor claridad la disposición general del proyecto y su lógica de implantación.",
      "Dispone de documentación complementaria para acompañar el proceso comercial con información accesible y ordenada.",
      "Se inserta dentro del corredor de San Vicente, una zona de crecimiento sostenido y buena conexión con los principales accesos regionales."
    ],
    "descriptionSections": {
      "general": [
        "Arroyos de San Vicente integra el portfolio de San Jorge Desarrollos con una propuesta pensada para combinar inversión, entorno y una implantación residencial equilibrada."
      ],
      "characteristics": [
        "Cuenta con material planimétrico para comprender con mayor claridad la disposición general del proyecto y su lógica de implantación.",
        "Dispone de documentación complementaria para acompañar el proceso comercial con información accesible y ordenada."
      ],
      "surroundings": [
        "Se inserta dentro del corredor de San Vicente, una zona de crecimiento sostenido y buena conexión con los principales accesos regionales."
      ]
    },
    "features": [
      "Planos integrados",
      "Documentación disponible",
      "Acompañamiento comercial personalizado"
    ],
    "reglamento": "/assets/docs/arroyos-de-san-vicente-arma.pdf",
    "documents": [
      "/assets/docs/arroyos-de-san-vicente-arma.pdf",
      "/assets/docs/arroyos-de-san-vicente-arr.pdf",
      "/assets/docs/arroyos-de-san-vicente-mas.pdf"
    ]
  },
  {
    "name": "Las Perdices",
    "slug": "las-perdices",
    "summary": "Las Perdices integra el portfolio de San Jorge Desarrollos con una propuesta pensada para combinar inversión, entorno y una implantación residencial equilibrada.",
    "location": "San Vicente, Buenos Aires",
    "logo": "/assets/logos/las-perdices-logo.png",
    "previewImage": "/assets/urbanizaciones/las-perdices/fotos-png-01.png",
    "coverImage": "/assets/urbanizaciones/las-perdices/whatsapp-image-2022-10-18-at-09-52-41.jpeg",
    "heroImage": "/assets/urbanizaciones/las-perdices/whatsapp-image-2022-10-18-at-09-52-41.jpeg",
    "images": [
      "/assets/urbanizaciones/las-perdices/whatsapp-image-2022-10-18-at-09-52-41.jpeg",
      "/assets/urbanizaciones/las-perdices/fotos-png-01.png",
      "/assets/urbanizaciones/las-perdices/fotos-png-02.png",
      "/assets/urbanizaciones/las-perdices/fotos-png-03.png",
      "/assets/urbanizaciones/las-perdices/fotos-png-04.png",
      "/assets/urbanizaciones/las-perdices/fotos-png-05.png",
      "/assets/urbanizaciones/las-perdices/fotos-png-06.png",
      "/assets/urbanizaciones/las-perdices/fotos-png-07.png",
      "/assets/urbanizaciones/las-perdices/fotos-png-08.png",
      "/assets/urbanizaciones/las-perdices/fotos-png-09.png",
      "/assets/urbanizaciones/las-perdices/fotos-png-10.png",
      "/assets/urbanizaciones/las-perdices/fotos-png-11.png"
    ],
    "showcaseImages": [
      "/assets/urbanizaciones/las-perdices/whatsapp-image-2022-10-18-at-09-52-41.jpeg",
      "/assets/urbanizaciones/las-perdices/fotos-png-01.png",
      "/assets/urbanizaciones/las-perdices/fotos-png-02.png"
    ],
    "plans": [],
    "gallery": [
      {
        "src": "/assets/urbanizaciones/las-perdices/whatsapp-image-2022-10-18-at-09-52-41.jpeg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/las-perdices/fotos-png-01.png",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/las-perdices/fotos-png-02.png",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/las-perdices/fotos-png-03.png",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/las-perdices/fotos-png-04.png",
        "kind": "image"
      }
    ],
    "description": [
      "Las Perdices integra el portfolio de San Jorge Desarrollos con una propuesta pensada para combinar inversión, entorno y una implantación residencial equilibrada.",
      "Su planteo urbano prioriza una lectura simple del conjunto, con escala residencial y una imagen cuidada.",
      "Dispone de documentación complementaria para acompañar el proceso comercial con información accesible y ordenada.",
      "Se inserta dentro del corredor de San Vicente, una zona de crecimiento sostenido y buena conexión con los principales accesos regionales."
    ],
    "descriptionSections": {
      "general": [
        "Las Perdices integra el portfolio de San Jorge Desarrollos con una propuesta pensada para combinar inversión, entorno y una implantación residencial equilibrada."
      ],
      "characteristics": [
        "Su planteo urbano prioriza una lectura simple del conjunto, con escala residencial y una imagen cuidada.",
        "Dispone de documentación complementaria para acompañar el proceso comercial con información accesible y ordenada."
      ],
      "surroundings": [
        "Se inserta dentro del corredor de San Vicente, una zona de crecimiento sostenido y buena conexión con los principales accesos regionales."
      ]
    },
    "features": [
      "Documentación disponible",
      "Acompañamiento comercial personalizado"
    ],
    "reglamento": "/assets/docs/las-perdices-0.pdf",
    "documents": [
      "/assets/docs/las-perdices-0.pdf"
    ]
  },
  {
    "name": "Oasis",
    "slug": "oasis",
    "summary": "Oasis integra el portfolio de San Jorge Desarrollos con una propuesta pensada para combinar inversión, entorno y una implantación residencial equilibrada.",
    "location": "San Vicente, Buenos Aires",
    "logo": "/assets/logos/oasis-logo.png",
    "previewImage": "/assets/urbanizaciones/oasis/piletab-1.png",
    "coverImage": "/assets/urbanizaciones/oasis/oasis.jpg",
    "heroImage": "/assets/urbanizaciones/oasis/oasis.jpg",
    "images": [
      "/assets/urbanizaciones/oasis/oasis.jpg",
      "/assets/urbanizaciones/oasis/piletab-1.png",
      "/assets/urbanizaciones/oasis/whatsapp-image-2022-03-17-at-1-32-10-am-2-636x477.jpg",
      "/assets/urbanizaciones/oasis/whatsapp-image-2022-03-17-at-1-32-10-am-4-1024x768.jpg",
      "/assets/urbanizaciones/oasis/whatsapp-image-2022-03-17-at-1-32-10-am-7-1024x768.jpg",
      "/assets/urbanizaciones/oasis/whatsapp-image-2022-03-17-at-1-32-10-am-9-636x477.jpg",
      "/assets/urbanizaciones/oasis/11-1015x762.jpg",
      "/assets/urbanizaciones/oasis/18-1-960x720.jpg",
      "/assets/urbanizaciones/oasis/7-1-500x340.jpg",
      "/assets/urbanizaciones/oasis/9-1-1017x764.jpg",
      "/assets/urbanizaciones/oasis/424c55af-477c-47f8-9e0c-ab1bc387e9fc.jpg"
    ],
    "showcaseImages": [
      "/assets/urbanizaciones/oasis/oasis.jpg",
      "/assets/urbanizaciones/oasis/piletab-1.png",
      "/assets/urbanizaciones/oasis/whatsapp-image-2022-03-17-at-1-32-10-am-2-636x477.jpg",
      "/assets/urbanizaciones/oasis/master-oasis-pintado-1.jpg"
    ],
    "plans": [
      "/assets/urbanizaciones/oasis/master-oasis-pintado-1.jpg",
      "/assets/urbanizaciones/oasis/contrafachada.jpg",
      "/assets/urbanizaciones/oasis/costado.jpg"
    ],
    "gallery": [
      {
        "src": "/assets/urbanizaciones/oasis/oasis.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/oasis/piletab-1.png",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/oasis/whatsapp-image-2022-03-17-at-1-32-10-am-2-636x477.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/oasis/whatsapp-image-2022-03-17-at-1-32-10-am-4-1024x768.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/oasis/whatsapp-image-2022-03-17-at-1-32-10-am-7-1024x768.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/oasis/master-oasis-pintado-1.jpg",
        "kind": "plan"
      },
      {
        "src": "/assets/urbanizaciones/oasis/contrafachada.jpg",
        "kind": "plan"
      }
    ],
    "description": [
      "Oasis integra el portfolio de San Jorge Desarrollos con una propuesta pensada para combinar inversión, entorno y una implantación residencial equilibrada.",
      "Cuenta con material planimétrico para comprender con mayor claridad la disposición general del proyecto y su lógica de implantación.",
      "La propuesta comercial se presenta con una comunicación directa, clara y orientada a compradores finales e inversores.",
      "Se inserta dentro del corredor de San Vicente, una zona de crecimiento sostenido y buena conexión con los principales accesos regionales."
    ],
    "descriptionSections": {
      "general": [
        "Oasis integra el portfolio de San Jorge Desarrollos con una propuesta pensada para combinar inversión, entorno y una implantación residencial equilibrada."
      ],
      "characteristics": [
        "Cuenta con material planimétrico para comprender con mayor claridad la disposición general del proyecto y su lógica de implantación.",
        "La propuesta comercial se presenta con una comunicación directa, clara y orientada a compradores finales e inversores."
      ],
      "surroundings": [
        "Se inserta dentro del corredor de San Vicente, una zona de crecimiento sostenido y buena conexión con los principales accesos regionales."
      ]
    },
    "features": [
      "Planos integrados",
      "Acompañamiento comercial personalizado"
    ],
    "documents": []
  },
  {
    "name": "El Viejo Ombú",
    "slug": "el-viejo-ombu",
    "summary": "El Viejo Ombú es un desarrollo en San Vicente pensado para quienes buscan contacto con la naturaleza, escala residencial y un proyecto con identidad propia.",
    "location": "San Vicente, Buenos Aires",
    "logo": "/assets/logos/el-viejo-ombu-logo.png",
    "previewImage": "/assets/urbanizaciones/el-viejo-ombu/pileta-2-840x631.jpg",
    "coverImage": "/assets/urbanizaciones/el-viejo-ombu/pileta-1-840x631.jpg",
    "heroImage": "/assets/urbanizaciones/el-viejo-ombu/pileta-1-840x631.jpg",
    "images": [
      "/assets/urbanizaciones/el-viejo-ombu/pileta-1-840x631.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/pileta-2-840x631.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/el-ombu11.png",
      "/assets/urbanizaciones/el-viejo-ombu/whatsapp-image-2022-03-17-at-1-38-01-am-20-840x630.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/60717105745565458297051499513931212442284839423551835115248239270083639255080-696x564.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/8338870708283291767443818864694106125958529665867098138103290393451810529774-696x320.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/f2-646x361.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/f3-646x362.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/f4-646x362.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/f6-646x362.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/f7-1240x689.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/f8-646x364.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/marca-ombu.jpg"
    ],
    "showcaseImages": [
      "/assets/urbanizaciones/el-viejo-ombu/pileta-1-840x631.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/pileta-2-840x631.jpg",
      "/assets/urbanizaciones/el-viejo-ombu/el-ombu11.png",
      "/assets/urbanizaciones/el-viejo-ombu/master-png-1.png"
    ],
    "plans": [
      "/assets/urbanizaciones/el-viejo-ombu/master-png-1.png"
    ],
    "gallery": [
      {
        "src": "/assets/urbanizaciones/el-viejo-ombu/pileta-1-840x631.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/el-viejo-ombu/pileta-2-840x631.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/el-viejo-ombu/el-ombu11.png",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/el-viejo-ombu/whatsapp-image-2022-03-17-at-1-38-01-am-20-840x630.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/el-viejo-ombu/60717105745565458297051499513931212442284839423551835115248239270083639255080-696x564.jpg",
        "kind": "image"
      },
      {
        "src": "/assets/urbanizaciones/el-viejo-ombu/master-png-1.png",
        "kind": "plan"
      }
    ],
    "description": [
      "El Viejo Ombú es un desarrollo en San Vicente pensado para quienes buscan contacto con la naturaleza, escala residencial y un proyecto con identidad propia.",
      "Su propuesta incorpora una mirada sustentable, con atención al uso eficiente de recursos y una relación más armónica con el entorno natural.",
      "Pileta sector recreativo para la familia",
      "Se vincula con facilidad a San Vicente, Canning y Ezeiza mediante las rutas provinciales 16, 6 y 58, dentro de un sector con accesos regionales consolidados."
    ],
    "descriptionSections": {
      "general": [
        "El Viejo Ombú es un desarrollo en San Vicente pensado para quienes buscan contacto con la naturaleza, escala residencial y un proyecto con identidad propia.",
        "Su propuesta incorpora una mirada sustentable, con atención al uso eficiente de recursos y una relación más armónica con el entorno natural."
      ],
      "characteristics": [
        "Pileta sector recreativo para la familia"
      ],
      "surroundings": [
        "Se vincula con facilidad a San Vicente, Canning y Ezeiza mediante las rutas provinciales 16, 6 y 58, dentro de un sector con accesos regionales consolidados."
      ]
    },
    "features": [
      "Seguridad en el predio",
      "Piscina de uso familiar",
      "Espacios recreativos",
      "Criterios de sustentabilidad",
      "Acceso regional ágil",
      "Planos integrados",
      "Documentación disponible",
      "Acompañamiento comercial personalizado"
    ],
    "reglamento": "/assets/docs/el-viejo-ombu-barrio-el-ombu-correccion.pdf",
    "documents": [
      "/assets/docs/el-viejo-ombu-barrio-el-ombu-correccion.pdf",
      "/assets/docs/el-viejo-ombu-master.pdf"
    ]
  }
];

export function getUrbanizationBySlug(slug: string) {
  return urbanizations.find((urbanization) => urbanization.slug === slug);
}
