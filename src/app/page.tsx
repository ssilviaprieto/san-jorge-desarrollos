import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SiteIcon } from "@/components/site-icon";
import { UrbanizationCard } from "@/components/urbanization-card";
import { company } from "@/data/company";
import { urbanizations } from "@/data/generated-urbanizations";

const featuredUrbanizations = urbanizations.slice(0, 4);
const heroImage = urbanizations[0]?.heroImage;

export default function Home() {
  return (
    <div className="pb-10">
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:px-8 lg:py-16">
        <Reveal className="relative flex flex-col justify-center">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-800">
              Desarrollos inmobiliarios en San Vicente
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl font-[var(--font-display)] text-5xl leading-[0.95] text-slate-950 sm:text-6xl lg:text-[4.5rem]">
                {company.name}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                {company.slogan}
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Presentamos urbanizaciones con identidad, material visual ordenado
                y una lectura comercial clara para acompañar decisiones de
                inversión y nuevos proyectos de vida.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/urbanizaciones"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                Ver urbanizaciones
              </Link>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/85 px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-teal-500 hover:text-teal-700"
              >
                Consultar por WhatsApp
              </a>
            </div>

            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
              {company.metrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <p className="font-[var(--font-display)] text-3xl text-slate-950">
                    {metric.value}
                  </p>
                  <p className="max-w-[12rem] text-sm leading-6 text-slate-600">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative flex items-center">
          <div className="relative isolate w-full overflow-hidden rounded-[2.6rem] border border-white/70 bg-slate-950 shadow-[0_30px_95px_-48px_rgba(15,23,42,0.8)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.42),_transparent_36%)]" />
            <div className="relative aspect-[4/4.8] w-full">
              {heroImage && (
                <Image
                  src={heroImage}
                  alt="San Jorge Desarrollos"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover opacity-92"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/28 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-4 p-7 text-white sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal-200">
                  Portfolio de urbanizaciones
                </p>
                <h2 className="max-w-md font-[var(--font-display)] text-3xl leading-tight sm:text-[2rem]">
                  Proyectos con imagen sólida, planos y documentación integrada.
                </h2>
                <p className="max-w-md text-sm leading-7 text-slate-200/90">
                  Un sitio pensado para recorrer cada desarrollo con mejor
                  contexto visual, comercial y documental.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Reveal className="rounded-[2.2rem] border border-white/70 bg-white/88 p-8 shadow-[0_18px_70px_-52px_rgba(15,23,42,0.5)] backdrop-blur-sm md:p-10 lg:p-11">
          <div className="space-y-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-700">
                Valores
              </p>
              <h2 className="max-w-md font-[var(--font-display)] text-4xl leading-tight text-slate-950">
                Una propuesta sobria, ordenada y bien presentada.
              </h2>
              <p className="max-w-lg text-base leading-8 text-slate-600">
                {company.intro}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {company.values.map((value, index) => (
                <Reveal
                  key={value.title}
                  delay={index * 90}
                  className="flex h-full min-h-0 flex-col rounded-[1.6rem] border border-slate-200/80 bg-slate-50/80 p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                    <SiteIcon name={value.icon} />
                  </div>
                  <h3 className="font-[var(--font-display)] text-[1.5rem] leading-tight text-slate-950">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6.5 text-slate-600">
                    {value.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
        <Reveal className="overflow-hidden rounded-[2.2rem] border border-teal-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(236,254,255,0.88))] p-7 shadow-[0_20px_70px_-56px_rgba(15,23,42,0.45)] md:p-9 lg:p-10">
          <div className="grid gap-7 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-700">
                Sustentabilidad
              </p>
              <h2 className="max-w-md font-[var(--font-display)] text-4xl leading-tight text-slate-950">
                Barrios ecológicamente sustentables.
              </h2>
              <p className="max-w-lg text-base leading-8 text-slate-600">
                {company.sustainability.intro}
              </p>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2">
              {company.sustainability.points.map((point, index) => (
                <Reveal
                  key={point.title}
                  delay={index * 80}
                  className="rounded-[1.55rem] border border-white/70 bg-white/90 p-4.5"
                >
                  <div className="mb-3.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                    <SiteIcon name={point.icon} />
                  </div>
                  <h3 className="text-base font-semibold text-slate-950">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6.5 text-slate-600">
                    {point.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Reveal className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-700">
              Decálogo
            </p>
            <h2 className="font-[var(--font-display)] text-4xl leading-tight text-slate-950">
              Criterios de convivencia para una urbanización cuidada.
            </h2>
            <p className="text-base leading-8 text-slate-600">
              Tomamos el contenido base del decálogo institucional y lo
              convertimos en pautas simples, consistentes y fáciles de entender
              para preservar el orden, la convivencia y el buen vivir.
            </p>
          </div>

          <div className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-4">
            {company.decalog.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="rounded-[1.55rem] border border-white/70 bg-white/90 p-4.5 shadow-[0_16px_48px_-42px_rgba(15,23,42,0.45)]"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-teal-200">
                  <SiteIcon name={item.icon} />
                </div>
                <h3 className="text-[15px] font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-6 text-slate-600">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-700">
              Urbanizaciones destacadas
            </p>
            <h2 className="font-[var(--font-display)] text-4xl text-slate-950">
              Una selección actual del portfolio.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Accedé a cada desarrollo con imágenes seleccionadas, planos y una
              ficha más clara para comparar alternativas.
            </p>
          </div>
          <Link
            href="/urbanizaciones"
            className="inline-flex w-fit rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-teal-500 hover:text-teal-700"
          >
            Ver todas
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredUrbanizations.map((urbanization, index) => (
            <Reveal key={urbanization.slug} delay={index * 90}>
              <UrbanizationCard urbanization={urbanization} priority={index < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contacto" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Reveal className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-slate-950 text-white shadow-[0_30px_90px_-45px_rgba(15,23,42,0.85)]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6 bg-[linear-gradient(160deg,rgba(15,23,42,0.98),rgba(13,148,136,0.9))] p-8 md:p-10 lg:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-200">
                Contacto
              </p>
              <h2 className="max-w-md font-[var(--font-display)] text-4xl leading-tight">
                Recibí asesoramiento para elegir tu próxima inversión.
              </h2>
              <p className="max-w-xl text-base leading-8 text-slate-200">
                Compartinos tu consulta y te responderemos con información
                comercial, documentación disponible y orientación según el
                desarrollo que mejor se adapte a lo que buscás.
              </p>

              <div className="space-y-4 rounded-[1.9rem] border border-white/12 bg-white/8 p-6 backdrop-blur-sm">
                <p className="text-sm leading-7 text-slate-200">
                  Si preferís una respuesta más inmediata, también podés escribir
                  directamente por WhatsApp.
                </p>
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-100"
                >
                  Ir a WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white p-8 text-slate-950 md:p-10 lg:p-12">
              <div className="flex h-full flex-col justify-center gap-5">
                <a
                  href={`mailto:${company.email}`}
                  className="group flex items-center gap-4 rounded-[1.6rem] border border-slate-200 bg-slate-50/80 p-5 transition hover:border-teal-300 hover:bg-teal-50/70"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                    <SiteIcon name="mail" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-700 transition group-hover:text-slate-950">
                      {company.email}
                    </p>
                  </div>
                </a>

                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-[1.6rem] bg-slate-950 p-5 text-white transition hover:bg-teal-600"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-teal-200">
                      <SiteIcon name="message" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
                        WhatsApp
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        Escribir ahora
                      </p>
                    </div>
                  </div>
                  <SiteIcon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
