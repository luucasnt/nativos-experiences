// Casa de Areia: layout SSR global para transfer de luxo e concierge em Trancoso, com entidade de marca consistente.
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://www.nativosexperiences.com";
const heroImage = "/images/VtQimewDJyvHxHBP.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Transfer de Luxo Porto Seguro–Trancoso | Nativos Experiences", template: "%s | Nativos Experiences" },
  description: "Transfer privativo de luxo do Aeroporto de Porto Seguro a Trancoso, Bahia. Recepção em Terravista e Outeiro das Brisas, motorista à disposição, concierge, eventos e carro blindado.",
  keywords: ["transfer de luxo em Trancoso", "transfer Porto Seguro Trancoso", "Aeroporto Terravista", "transfer privativo Trancoso", "concierge Trancoso", "carro blindado Trancoso"],
  authors: [{ name: "Nativos Experiences" }],
  creator: "Nativos Experiences",
  publisher: "Nativos Experiences",
  category: "travel",
  alternates: { canonical: "/", languages: { "pt-BR": "/", en: "/en", "x-default": "/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "pt_BR", alternateLocale: ["en_US"], siteName: "Nativos Experiences", title: "Transfer de Luxo Porto Seguro–Trancoso | Nativos Experiences", description: "Transfer privativo de luxo do Aeroporto de Porto Seguro a Trancoso, com concierge local cuidando de cada detalhe da chegada.", url: siteUrl, images: [{ url: heroImage, width: 1600, height: 1000, alt: "SUV premium em estrada costeira de Trancoso" }] },
  twitter: { card: "summary_large_image", title: "Transfer de Luxo Porto Seguro–Trancoso | Nativos Experiences", description: "Transfer privativo de luxo, motorista à disposição e concierge em Trancoso e região da Bahia.", images: [heroImage] },
  icons: { icon: "/images/n-icon-512.png", apple: "/images/n-icon-512.png" },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";
  const htmlLang = pathname.startsWith("/en") ? "en" : "pt-BR";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": `${siteUrl}/#business`,
        name: "Nativos Experiences",
        url: `${siteUrl}/`,
        description: "Transfer privativo de luxo e concierge em Trancoso e região.",
        foundingDate: "2015",
        identifier: { "@type": "PropertyValue", propertyID: "CNPJ", value: "22.891.018/0001-63" },
        telephone: "+55 73 99168-1630",
        email: "contato@nativosexperiences.com",
        image: heroImage,
        logo: "/images/n-icon-512.png",
        sameAs: ["https://instagram.com/nativosexperiences"],
        contactPoint: [{ "@type": "ContactPoint", telephone: "+55 73 99168-1630", contactType: "customer service", availableLanguage: ["Portuguese", "English"] }],
        address: { "@type": "PostalAddress", streetAddress: "Rua Carlos Alberto Parracho, 436", addressLocality: "Trancoso", addressRegion: "BA", postalCode: "45818-000", addressCountry: "BR" },
        priceRange: "$$$$",
        areaServed: ["Trancoso", "Porto Seguro", "Arraial d’Ajuda", "Praia do Espelho", "Caraíva", "Santo André", "Corumbau", "Itacaré"],
        knowsAbout: ["transfer privativo", "transfer aeroporto Porto Seguro Trancoso", "concierge em Trancoso", "transfer blindado", "motorista particular", "casamentos e eventos"],
      },
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: "Nativos Experiences", publisher: { "@id": `${siteUrl}/#business` }, inLanguage: ["pt-BR", "en"] },
    ],
  };

  return <html lang={htmlLang} className={`${cormorantGaramond.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>;
}
