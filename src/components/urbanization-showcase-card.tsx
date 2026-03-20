import Image from "next/image";
import Link from "next/link";

import { SiteIcon } from "@/components/site-icon";
import type { Urbanization } from "@/data/generated-urbanizations";

type UrbanizationShowcaseCardProps = {
  urbanization: Urbanization;
  priority?: boolean;
};

export function UrbanizationShowcaseCard({
  urbanization,
  priority = false,
}: UrbanizationShowcaseCardProps) {
  const previewImages = urbanization.showcaseImages.slice(0, 4);

  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-[0_22px_70px_-48px_rgba(15,23,42,0.55)] backdrop-blur-sm">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col gap-6 p-6 md:p-8">
          <div className="flex min-h-16 items-center">
            {urbanization.logo ? (
              <div className="relative h-14 w-full max-w-[220px]">
                <Image
                  src={urbanization.logo}
                  alt={urbanization.name}
                  fill
                  sizes="220px"
                  className="object-contain object-left"
                />
              </div>
            ) : (
              <h2 className="font-[var(--font-display)] text-3xl text-slate-950">
                {urbanization.name}
              </h2>
            )}
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-700">
              {urbanization.location}
            </p>
            <h3 className="font-[var(--font-display)] text-3xl text-slate-950">
              {urbanization.name}
            </h3>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              {urbanization.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {urbanization.plans.length > 0 && (
              <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
                Incluye planos
              </span>
            )}
            {urbanization.reglamento && (
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                Documentación disponible
              </span>
            )}
          </div>

          <div className="pt-2">
            <Link
              href={`/urbanizaciones/${urbanization.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              Ver desarrollo
              <SiteIcon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-2 bg-slate-100/80 p-2 sm:grid-cols-2">
          {previewImages.map((imagePath, index) => (
            <div
              key={imagePath}
              className={`relative overflow-hidden rounded-[1.35rem] ${
                index === 0 ? "aspect-[1.2/1]" : "aspect-[1.25/1]"
              }`}
            >
              <Image
                src={imagePath}
                alt={`${urbanization.name} vista ${index + 1}`}
                fill
                priority={priority && index === 0}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
