import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { company } from "@/data/company";
import { siteAssets, urbanizations } from "@/data/generated-urbanizations";

import "./globals.css";

export const metadata: Metadata = {
  title: "San Jorge Desarrollos",
  description:
    "Urbanizaciones y desarrollos inmobiliarios en San Vicente con una presentación clara, profesional y lista para inversión.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
