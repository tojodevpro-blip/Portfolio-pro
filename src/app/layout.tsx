import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/content";
import { absoluteUrl } from "@/lib/site";
import { fraunces, jetbrainsMono, publicSans } from "@/lib/fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const pageTitle = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: pageTitle,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  category: "technology",
  keywords: [
    "développeur web junior",
    "Laravel",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Antananarivo",
    "Madagascar",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: absoluteUrl("/"),
    siteName: site.name,
    title: pageTitle,
    description: site.description,
    images: [
      {
        url: absoluteUrl(site.ogImage),
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.description,
    images: [absoluteUrl(site.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F1EA" },
    { media: "(prefers-color-scheme: dark)", color: "#14110F" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${publicSans.variable} ${jetbrainsMono.variable}`}
    >
      <body id="haut">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-2 focus:text-sm"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
