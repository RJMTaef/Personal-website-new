import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

const siteUrl = "https://personal-website-new-nine.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  authors: [{ name: portfolioData.person.name }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    siteName: "Roslan Taef",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: portfolioData.person.name,
              url: siteUrl,
              description: portfolioData.seo.description,
              sameAs: Object.values(portfolioData.person.social),
              knowsAbout: [
                "Data engineering",
                "Analytics dashboards",
                "Python",
                "SQL",
                "API integration",
                "Automation",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Halifax",
                addressRegion: "Nova Scotia",
                addressCountry: "CA",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
