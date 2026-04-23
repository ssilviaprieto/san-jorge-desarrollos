import Link from "next/link";

type FooterProps = {
  urbanizations: Array<{ slug: string; name: string }>;
  email: string;
  whatsappUrl: string;
};

export function Footer({ urbanizations, email, whatsappUrl }: FooterProps) {
  return (
    <footer className="mt-24 border-t border-white/60 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_0.9fr_0.9fr] lg:px-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-300">
            San Jorge Desarrollos
          </p>
          <h2 className="font-[var(--font-display)] text-[1.9rem] text-white">
            Desarrollos con escala humana y mirada a largo plazo.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Urbanizaciones pensadas para acompañar decisiones de inversión y
            nuevos proyectos de vida en el corredor de San Vicente.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Urbanizaciones
          </h3>
          <div className="space-y-2">
            {urbanizations.map((urbanization) => (
              <Link
                key={urbanization.slug}
                href={`/urbanizaciones/${urbanization.slug}`}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                {urbanization.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Contacto
          </h3>
          <a
            href={`mailto:${email}`}
            className="block text-sm text-slate-300 transition hover:text-white"
          >
            {email}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-semibold text-teal-200 transition hover:bg-teal-400/20"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
