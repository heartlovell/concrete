import type { Metadata, Viewport } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = "https://elprimosconcrete.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Primos Concrete LLC | Premium Concrete Construction in Minnesota",
    template: "%s | Primos Concrete LLC",
  },
  description:
    "Family-owned concrete construction company building driveways, patios, foundations, stamped concrete, and commercial concrete for homes, contractors, and developers across the Twin Cities. Licensed, insured, free estimates.",
  keywords: [
    "concrete contractor",
    "concrete driveways",
    "stamped concrete",
    "concrete patios",
    "commercial concrete",
    "concrete foundations",
    "Minneapolis concrete",
    "St. Paul concrete",
    "Primos Concrete LLC",
  ],
  authors: [{ name: "Primos Concrete LLC" }],
  creator: "Primos Concrete LLC",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Primos Concrete LLC",
    title: "Primos Concrete LLC | Strong Foundations. Exceptional Craftsmanship.",
    description:
      "Professional concrete solutions for homes, businesses, and commercial developments. Built to last for generations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Primos Concrete LLC",
    description:
      "Professional concrete solutions for homes, businesses, and commercial developments.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1c1c",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Primos Concrete LLC",
  image: `${siteUrl}/og.jpg`,
  url: siteUrl,
  telephone: "+1-651-558-7970",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Minneapolis",
    addressRegion: "MN",
    addressCountry: "US",
  },
  areaServed: [
    "Minneapolis",
    "St. Paul",
    "Minnetonka",
    "Eden Prairie",
    "Plymouth",
    "Bloomington",
  ],
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "127",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
