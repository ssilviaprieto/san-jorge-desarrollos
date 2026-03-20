import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { company } from "@/data/company";
import { siteAssets, urbanizations } from "@/data/generated-urbanizations";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "San Jorge Desarrollos",
    template: "%s | San Jorge Desarrollos",
  },
  description:
    "Urbanizaciones y desarrollos inmobiliarios en San Vicente con una presentación clara, profesional y lista para inversión.",
  icons: {
    icon: siteAssets.favicon,
    shortcut: siteAssets.favicon,
    apple: siteAssets.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-foreground)]">
        <div className="relative min-h-screen overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(15,187,180,0.22),_transparent_58%)]" />
          <div className="pointer-events-none absolute left-0 top-28 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />
          <Navbar
            urbanizations={urbanizations}
            companyLogo={siteAssets.companyLogo}
            whatsappUrl={company.whatsappUrl}
          />
          <main>{children}</main>
          <Footer
            urbanizations={urbanizations}
            email={company.email}
            whatsappUrl={company.whatsappUrl}
          />
        </div>
      </body>
    </html>
  );
}
