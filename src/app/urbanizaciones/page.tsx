import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { UrbanizationShowcaseCard } from "@/components/urbanization-showcase-card";
import { urbanizations } from "@/data/generated-urbanizations";

export const metadata: Metadata = {
  title: "Urbanizaciones",
  description:
    "Conocé las urbanizaciones de San Jorge Desarrollos con imágenes seleccionadas, planos y documentación complementaria.",
};

export default function UrbanizationsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Reveal className="max-w-3xl space-y-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-700">
          Urbanizaciones
        </p>
        <h1 className="font-[var(--font-display)] text-5xl leading-tight text-slate-950">
          Portfolio completo de desarrollos.
        </h1>
        <p className="text-base leading-8 text-slate-600">
          Cada emprendimiento se presenta con una selección más cuidada de
          imágenes, planos y documentación para facilitar la comparación y la
          lectura general del proyecto.
        </p>
      </Reveal>

      <div className="mt-12 space-y-7">
        {urbanizations.map((urbanization, index) => (
          <Reveal key={urbanization.slug} delay={index * 70}>
            <UrbanizationShowcaseCard
              urbanization={urbanization}
              priority={index < 2}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
