"use client";

import { useState } from "react";

import { SiteIcon } from "@/components/site-icon";

type DecalogItem = {
  title: string;
  description: string;
  icon:
    | "check"
    | "drop"
    | "road"
    | "handshake"
    | "blueprint"
    | "shield"
    | "star"
    | "community";
};

type DecalogGridProps = {
  items: readonly DecalogItem[];
};

export function DecalogGrid({ items }: DecalogGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-3.5">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <article
            key={item.title}
            className={`rounded-[1.4rem] border border-white/70 bg-white/90 p-4 shadow-[0_16px_48px_-42px_rgba(15,23,42,0.45)] ${
              index >= 4 && !isExpanded ? "hidden md:block" : ""
            }`}
          >
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-teal-200">
              <SiteIcon name={item.icon} className="h-4 w-4" />
            </div>
            <h3 className="text-[15px] font-semibold text-slate-950">
              {item.title}
            </h3>
            <p className="mt-1.5 text-[13px] leading-[1.35rem] text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-400 hover:text-teal-700"
        >
          {isExpanded ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
}
