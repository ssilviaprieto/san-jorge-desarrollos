"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { GENERAL_REGLAMENTO_ROUTE } from "@/data/reglamento";

type NavbarProps = {
  urbanizations: Array<{ slug: string; name: string }>;
  companyLogo?: string;
  whatsappUrl: string;
};

export function Navbar({
  urbanizations,
  companyLogo,
  whatsappUrl,
}: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const isUrbanizationsSection = pathname.startsWith("/urbanizaciones");

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[rgba(248,250,252,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-5 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          {companyLogo ? (
            <div className="relative h-10 w-40 sm:h-11 sm:w-48">
              <Image
                src={companyLogo}
                alt="San Jorge Desarrollos"
                fill
                className="object-contain object-left"
                sizes="(min-width: 640px) 192px, 160px"
                priority
              />
            </div>
          ) : (
            <span className="font-[var(--font-display)] text-xl text-slate-950">
              San Jorge Desarrollos
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            href="/"
            className={`text-sm font-medium transition ${
              pathname === "/" ? "text-slate-950" : "text-slate-600 hover:text-slate-950"
            }`}
          >
            Inicio
          </Link>

          <div className="group relative">
            <Link
              href="/urbanizaciones"
              className={`inline-flex items-center gap-2 text-sm font-medium transition ${
                isUrbanizationsSection
                  ? "text-slate-950"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Urbanizaciones
              <span className="text-xs transition duration-300 group-hover:rotate-180">
                ▾
              </span>
            </Link>

            <div className="pointer-events-none absolute left-0 top-full pt-4 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="min-w-72 rounded-[1.8rem] border border-white/70 bg-white/96 p-3 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.45)] backdrop-blur-xl">
                {urbanizations.map((urbanization) => (
                  <Link
                    key={urbanization.slug}
                    href={`/urbanizaciones/${urbanization.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl px-4 py-3 text-sm text-slate-600 transition hover:bg-teal-50 hover:text-slate-950"
                  >
                    {urbanization.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/#contacto"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Contacto
          </Link>

          <a
            href={GENERAL_REGLAMENTO_ROUTE}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Reglamento
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-30px_rgba(13,148,136,0.9)] transition hover:bg-teal-500"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 lg:hidden"
          aria-label="Abrir menú"
        >
          <span className="text-lg">{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/60 bg-white/95 transition-[max-height] duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <div className="space-y-3 px-4 py-5 sm:px-6">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Inicio
          </Link>

          <div className="rounded-3xl border border-slate-200">
            <button
              type="button"
              onClick={() =>
                setIsMobileDropdownOpen((current) => !current)
              }
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-700"
            >
              Urbanizaciones
              <span
                className={`transition duration-300 ${
                  isMobileDropdownOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                isMobileDropdownOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-1 px-3 pb-3">
                  <Link
                    href="/urbanizaciones"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-2xl px-3 py-2 text-sm text-slate-600 transition hover:bg-teal-50 hover:text-slate-950"
                  >
                    Ver todas
                  </Link>
                  {urbanizations.map((urbanization) => (
                    <Link
                      key={urbanization.slug}
                      href={`/urbanizaciones/${urbanization.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-2xl px-3 py-2 text-sm text-slate-600 transition hover:bg-teal-50 hover:text-slate-950"
                    >
                      {urbanization.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/#contacto"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Contacto
          </Link>

          <a
            href={GENERAL_REGLAMENTO_ROUTE}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Reglamento
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
