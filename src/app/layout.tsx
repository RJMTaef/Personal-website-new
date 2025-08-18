import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords.join(", "),
  authors: [{ name: portfolioData.person.name }],
  creator: portfolioData.person.name,
  publisher: portfolioData.person.name,
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roslantaef.com",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    siteName: `${portfolioData.person.name} - Portfolio`,
    images: [
      {
        url: portfolioData.person.headshot_url,
        width: 1200,
        height: 630,
        alt: portfolioData.person.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    images: [portfolioData.person.headshot_url],
    creator: "@roslantaef",
  },
  alternates: {
    canonical: "https://roslantaef.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": portfolioData.person.name,
              "jobTitle": portfolioData.person.tagline,
              "description": portfolioData.person.one_liner,
              "url": portfolioData.person.website,
              "sameAs": [
                portfolioData.person.social.github,
                portfolioData.person.social.linkedin,
                portfolioData.person.social.youtube,
                portfolioData.person.social.instagram,
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Dalhousie University"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Dalhousie University"
              },
              "knowsAbout": portfolioData.skills.languages.concat(portfolioData.skills.data, portfolioData.skills.devops),
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Halifax",
                "addressRegion": "Nova Scotia",
                "addressCountry": "CA"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
