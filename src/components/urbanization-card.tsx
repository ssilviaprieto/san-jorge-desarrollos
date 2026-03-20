import Image from "next/image";
import Link from "next/link";

import { SiteIcon } from "@/components/site-icon";
import type { Urbanization } from "@/data/generated-urbanizations";

type UrbanizationCardProps = {
  urbanization: Urbanization;
  priority?: boolean;
};

export function UrbanizationCard({
  urbanization,
  priority = false,
}: UrbanizationCardProps) {
  return (
    <Link
      href={`/urbanizaciones/${urbanization.slug}`}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-[0_18px_54px_-40px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-36px_rgba(13,148,136,0.35)]"
    >
      <div className="grid gap-0 md:grid-cols-[0.94fr_1.06fr]">
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[11rem]">
          {urbanization.previewImage && (
            <Image
              src={urbanization.previewImage}
              alt={urbanization.name}
              fill
              priority={priority}
              sizes="(min-width: 768px) 24vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/10" />
        </div>

        <div className="flex flex-col justify-between gap-4 p-4 md:p-5">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
              {urbanization.location}
            </p>
            <h3 className="font-[var(--font-display)] text-[1.45rem] leading-tight text-slate-950">
              {urbanization.name}
            </h3>
            <p className="text-sm leading-6 text-slate-600">
              {urbanization.summary}
            </p>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {urbanization.plans.length > 0 && (
                <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-teal-700">
                  Planos
                </span>
              )}
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-sm font-semibold text-teal-700 transition group-hover:bg-teal-600 group-hover:text-white">
              Ver desarrollo
              <SiteIcon name="arrow" className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
