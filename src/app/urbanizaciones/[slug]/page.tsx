import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
import { SiteIcon } from "@/components/site-icon";
import { company } from "@/data/company";
import {
  getUrbanizationBySlug,
  urbanizations,
} from "@/data/generated-urbanizations";

type UrbanizationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return urbanizations.map((urbanization) => ({ slug: urbanization.slug }));
}

export async function generateMetadata({
  params,
}: UrbanizationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const urbanization = getUrbanizationBySlug(slug);

  if (!urbanization) {
    return { title: "Urbanización no encontrada" };
  }

  return {
    title: urbanization.name,
    description: urbanization.summary,
  };
}

export default async function UrbanizationDetailPage({
  params,
}: UrbanizationPageProps) {
  const { slug } = await params;
  const urbanization = getUrbanizationBySlug(slug);

  if (!urbanization) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Reveal className="overflow-hidden rounded-[2.6rem] border border-white/70 bg-white/88 shadow-[0_24px_78px_-52px_rgba(15,23,42,0.5)] backdrop-blur-sm">
        <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative min-h-[24rem]">
            {urbanization.heroImage && (
              <Image
                src={urbanization.heroImage}
                alt={urbanization.name}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/18 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-6 text-white sm:p-8">
              <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-md">
                {urbanization.location}
              </span>
              {urbanization.plans.length > 0 && (
                <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-md">
                  Planos incluidos
                </span>
              )}
            </div>
          </div>

          <div className="space-y-7 p-8 md:p-10 lg:p-12">
            <div className="flex min-h-16 items-center">
              {urbanization.logo ? (
                <div className="relative h-16 w-full max-w-[240px]">
                  <Image
                    src={urbanization.logo}
                    alt={urbanization.name}
                    fill
                    sizes="240px"
                    className="object-contain object-left"
                  />
                </div>
              ) : null}
            </div>

            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-700">
                Urbanización
              </p>
              <h1 className="max-w-xl font-[var(--font-display)] text-5xl leading-tight text-slate-950">
                {urbanization.name}
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-600">
                {urbanization.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {urbanization.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                Consultar por WhatsApp
              </a>
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-teal-500 hover:text-teal-700"
              >
                Ir al contacto
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <section className="mt-9 grid gap-4 lg:grid-cols-3">
        <Reveal className="rounded-[1.9rem] border border-white/70 bg-white/90 p-6 shadow-[0_18px_60px_-46px_rgba(15,23,42,0.45)]">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
            <SiteIcon name="home" />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal-700">
            Descripción general
          </p>
          <div className="mt-4 space-y-4">
            {urbanization.descriptionSections.general.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={80}
          className="rounded-[1.9rem] border border-white/70 bg-white/90 p-6 shadow-[0_18px_60px_-46px_rgba(15,23,42,0.45)]"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
            <SiteIcon name="blueprint" />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal-700">
            Características
          </p>
          <div className="mt-4 space-y-4">
            {urbanization.descriptionSections.characteristics.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={160}
          className="rounded-[1.9rem] border border-white/70 bg-white/90 p-6 shadow-[0_18px_60px_-46px_rgba(15,23,42,0.45)]"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
            <SiteIcon name="road" />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal-700">
            Entorno
          </p>
          <div className="mt-4 space-y-4">
            {urbanization.descriptionSections.surroundings.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.34fr]">
        <Reveal>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-700">
                Imágenes y planos
              </p>
              <h2 className="font-[var(--font-display)] text-4xl leading-tight text-slate-950">
                Recorrido visual del proyecto.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {urbanization.gallery.map((item, index) => (
                <Reveal key={item.src} delay={index * 60}>
                  <div className="group overflow-hidden rounded-[1.9rem] border border-white/70 bg-white/90 shadow-[0_16px_48px_-42px_rgba(15,23,42,0.45)]">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.src}
                        alt={`${urbanization.name} ${index + 1}`}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      {item.kind === "plan" && (
                        <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-800">
                          Plano
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <aside className="space-y-5 rounded-[1.9rem] border border-white/70 bg-white/90 p-6 shadow-[0_18px_60px_-45px_rgba(15,23,42,0.5)]">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-700">
                Documentación
              </p>
              <h2 className="font-[var(--font-display)] text-3xl leading-tight text-slate-950">
                Información útil
              </h2>
            </div>

            {urbanization.reglamento ? (
              <a
                href={urbanization.reglamento}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
              >
                Ver reglamento
              </a>
            ) : (
              <p className="text-sm leading-7 text-slate-600">
                No se identificó un reglamento específico dentro de la
                documentación disponible para este desarrollo.
              </p>
            )}

            {!!urbanization.documents.length && (
              <div className="space-y-2">
                {urbanization.documents.map((documentPath, index) => (
                  <a
                    key={documentPath}
                    href={documentPath}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:bg-teal-50 hover:text-slate-950"
                  >
                    Documento {index + 1}
                  </a>
                ))}
              </div>
            )}

            <div className="rounded-[1.6rem] bg-slate-50 p-5">
              <p className="text-sm leading-7 text-slate-600">
                Si necesitás detalles comerciales, disponibilidad o condiciones
                actuales, escribinos y te acompañamos en la evaluación del
                proyecto.
              </p>
            </div>
          </aside>
        </Reveal>
      </section>
    </div>
  );
}
