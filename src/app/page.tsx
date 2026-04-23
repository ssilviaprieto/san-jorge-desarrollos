import Image from "next/image";
import Link from "next/link";

import { DecalogGrid } from "@/components/decalog-grid";
import { Reveal } from "@/components/reveal";
import { SiteIcon } from "@/components/site-icon";
import { UrbanizationCard } from "@/components/urbanization-card";
import { company } from "@/data/company";
import { urbanizations } from "@/data/generated-urbanizations";

const featuredUrbanizations = urbanizations.slice(0, 4);
const heroImage = urbanizations[0]?.heroImage;

export default function Home() {
  return (
    <div className="pb-8">
      <section className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-6xl gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:items-center lg:px-8 lg:py-10">
        <Reveal className="relative flex flex-col justify-center">
          <div className="max-w-xl space-y-6">
            <div className="inline-flex rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-800">
              Desarrollos inmobiliarios en San Vicente
            </div>

            <div className="space-y-4">
              <h1 className="max-w-lg font-[var(--font-display)] text-4xl leading-[0.96] text-slate-950 sm:text-5xl lg:text-[3.7rem]">
                {company.name}
              </h1>
              <p className="max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                {company.slogan}
              </p>
              <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Presentamos urbanizaciones con identidad, material visual ordenado
                y una lectura comercial clara para acompañar decisiones de
                inversión y nuevos proyectos de vida.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/urbanizaciones"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                Ver urbanizaciones
              </Link>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/85 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-teal-500 hover:text-teal-700"
              >
                Consultar por WhatsApp
              </a>
            </div>

            <div className="grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-3">
              {company.metrics.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <p className="font-[var(--font-display)] text-2xl text-slate-950 sm:text-[1.75rem]">
                    {metric.value}
                  </p>
                  <p className="max-w-[11rem] text-xs leading-5 text-slate-600 sm:text-sm">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative flex items-center">
          <div className="relative isolate w-full overflow-hidden rounded-[1.8rem] border border-white/70 bg-slate-950 shadow-[0_24px_72px_-44px_rgba(15,23,42,0.75)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.35),_transparent_35%)]" />
            <div className="relative aspect-[16/14] w-full sm:aspect-[16/13]">
              {heroImage && (
                <Image
                  src={heroImage}
                  alt="San Jorge Desarrollos"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover opacity-92"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-5 text-white sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-teal-200">
                  Portfolio de urbanizaciones
                </p>
                <h2 className="max-w-sm font-[var(--font-display)] text-2xl leading-tight sm:text-[1.8rem]">
                  Proyectos con imagen sólida, planos y documentación integrada.
                </h2>
                <p className="max-w-sm text-sm leading-6 text-slate-200/90">
                  Un sitio pensado para recorrer cada desarrollo con contexto
                  visual y comercial más claro.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <Reveal className="rounded-[1.8rem] border border-white/70 bg-white/88 p-5 shadow-[0_18px_60px_-50px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-6 lg:p-7">
          <div className="space-y-5">
            <div className="max-w-2xl space-y-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                Valores
              </p>
              <h2 className="max-w-md font-[var(--font-display)] text-3xl leading-tight text-slate-950 sm:text-[2.1rem]">
                Una propuesta sobria, ordenada y bien presentada.
              </h2>
              <p className="max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                {company.intro}
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {company.values.map((value, index) => (
                <Reveal
                  key={value.title}
                  delay={index * 70}
                  className="flex h-full flex-col rounded-[1.3rem] border border-slate-200/80 bg-slate-50/85 p-4"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                    <SiteIcon name={value.icon} className="h-4 w-4" />
                  </div>
                  <h3 className="font-[var(--font-display)] text-[1.35rem] leading-tight text-slate-950">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    {value.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <Reveal className="overflow-hidden rounded-[1.8rem] border border-teal-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(236,254,255,0.88))] p-5 shadow-[0_18px_60px_-50px_rgba(15,23,42,0.42)] sm:p-6 lg:p-7">
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                Sustentabilidad
              </p>
              <h2 className="max-w-md font-[var(--font-display)] text-3xl leading-tight text-slate-950 sm:text-[2rem]">
                Barrios ecológicamente sustentables.
              </h2>
              <p className="max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                {company.sustainability.intro}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {company.sustainability.points.map((point, index) => (
                <Reveal
                  key={point.title}
                  delay={index * 60}
                  className="rounded-[1.25rem] border border-white/70 bg-white/90 p-4"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                    <SiteIcon name={point.icon} className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-950 sm:text-base">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    {point.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <Reveal className="space-y-5">
          <div className="max-w-3xl space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
              Decálogo
            </p>
            <h2 className="font-[var(--font-display)] text-3xl leading-tight text-slate-950 sm:text-[2rem]">
              Criterios de convivencia para una urbanización cuidada.
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Tomamos el contenido base del decálogo institucional y lo
              convertimos en pautas simples, consistentes y fáciles de entender
              para preservar el orden y el buen vivir.
            </p>
          </div>

          <DecalogGrid items={company.decalog} />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
              Urbanizaciones destacadas
            </p>
            <h2 className="font-[var(--font-display)] text-3xl text-slate-950 sm:text-[2rem]">
              Una selección actual del portfolio.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Accedé a cada desarrollo con imágenes seleccionadas, planos y una
              ficha más clara para comparar alternativas.
            </p>
          </div>
          <Link
            href="/urbanizaciones"
            className="inline-flex w-fit rounded-full border border-slate-300 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-teal-500 hover:text-teal-700"
          >
            Ver todas
          </Link>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {featuredUrbanizations.map((urbanization, index) => (
            <Reveal key={urbanization.slug} delay={index * 70}>
              <UrbanizationCard urbanization={urbanization} priority={index < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <Reveal className="rounded-[1.8rem] border border-white/70 bg-white/88 p-5 shadow-[0_18px_60px_-50px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-6 lg:p-7">
          <div className="grid items-stretch gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="h-full space-y-4 rounded-[1.25rem] border border-slate-200/80 bg-slate-50/85 p-4">
              <div className="space-y-2">
                <h2 className="font-[var(--font-display)] text-2xl leading-tight text-slate-950 sm:text-[1.85rem]">
                  Obrador de uso obligatorio en la obra (provisorio)
                </h2>
                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  Es obligatoria la instalación de un obrador previo al inicio de la obra. El mismo deberá ejecutarse en forma prolija.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Condiciones técnicas
                </h3>
                <ul className="list-outside list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-600 marker:text-teal-700 sm:text-base">
                  <li>Su medida no debe ser superior a 2 x 3 m².</li>
                  <li>Materiales permitidos: chapa/madera.</li>
                  <li>Pintado verde (elección).</li>
                  <li>Ubicado dentro del lote (no sobre línea municipal).</li>
                  <li>Baño químico.</li>
                  <li>Perforación.</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-2.5">
              <div className="rounded-[1.25rem] border border-slate-200/80 bg-white/90 p-4 lg:p-3.5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Restricciones
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  Queda terminantemente prohibido utilizar el obrador como:
                </p>
                <ul className="mt-1.5 list-outside list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600 marker:text-teal-700">
                  <li>Vivienda provisoria.</li>
                  <li>Lugar de descanso de propietarios y/o personal.</li>
                  <li>Espacio de permanencia fuera del horario de obra.</li>
                </ul>
              </div>

              <div className="rounded-[1.25rem] border border-slate-200/80 bg-white/90 p-4 lg:p-3.5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                  No se permiten
                </h3>
                <ul className="mt-1.5 list-outside list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600 marker:text-teal-700">
                  <li>Construcciones precarias con fines habitacionales.</li>
                  <li>Instalaciones improvisadas para pernoctar.</li>
                  <li>El obrador deberá mantenerse ordenado y en condiciones de higiene y seguridad.</li>
                </ul>
              </div>

              <div className="rounded-[1.25rem] border border-teal-200/70 bg-teal-50/75 p-4 sm:col-span-2 lg:col-span-1 lg:p-3.5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Nota final
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  Su uso será exclusivo para tareas de obra.
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Deberá retirarse una vez finalizada la misma.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contacto" className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <Reveal className="overflow-hidden rounded-[1.8rem] border border-white/70 bg-slate-950 text-white shadow-[0_24px_70px_-48px_rgba(15,23,42,0.82)]">
          <div className="grid items-stretch gap-0 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="space-y-4 bg-[linear-gradient(160deg,rgba(15,23,42,0.98),rgba(13,148,136,0.86))] p-5 sm:p-6 lg:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-200">
                Contacto
              </p>
              <h2 className="max-w-md font-[var(--font-display)] text-3xl leading-tight sm:text-[2rem]">
                Recibí asesoramiento para elegir tu próxima inversión.
              </h2>
              <p className="max-w-md text-sm leading-7 text-slate-200 sm:text-base">
                Compartinos tu consulta y te orientaremos con información
                comercial, documentación disponible y alternativas según el
                desarrollo que mejor se adapte a lo que buscás.
              </p>
            </div>

            <div className="bg-white p-5 text-slate-950 sm:p-6 lg:p-7">
              <div className="flex h-full flex-col justify-center gap-3">
                <div className="flex items-center gap-3 rounded-[1.2rem] border border-slate-200 bg-slate-50/80 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                    <SiteIcon name="mail" className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {company.email}
                    </p>
                  </div>
                </div>

                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-[1.2rem] bg-slate-950 p-4 text-white transition hover:bg-teal-600"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-teal-200">
                      <SiteIcon name="message" className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-200">
                        WhatsApp
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        Escribir ahora
                      </p>
                    </div>
                  </div>
                  <SiteIcon name="arrow" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
