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
      className="group overflow-hidden rounded-[2rem] border border-white/60 bg-white/88 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.55)] backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_85px_-40px_rgba(13,148,136,0.45)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {urbanization.previewImage && (
          <Image
            src={urbanization.previewImage}
            alt={urbanization.name}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 24vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          {urbanization.plans.length > 0 && (
            <span className="rounded-full border border-white/25 bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              Planos
            </span>
          )}
          {urbanization.reglamento && (
            <span className="rounded-full border border-white/25 bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              Reglamento
            </span>
          )}
        </div>
      </div>

      <div className="space-y-5 p-6 md:p-7">
        <div className="space-y-2.5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
            {urbanization.location}
          </p>
          <h3 className="font-[var(--font-display)] text-2xl text-slate-950">
            {urbanization.name}
          </h3>
          <p className="text-sm leading-6 text-slate-600">
            {urbanization.summary}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 transition group-hover:bg-teal-600 group-hover:text-white">
          Ver desarrollo
          <SiteIcon name="arrow" className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
