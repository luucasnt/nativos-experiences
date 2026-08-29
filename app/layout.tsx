// Casa de Areia: layout SSR global para transfer de luxo e concierge em Trancoso, com entidade de marca consistente.
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://nativosexperiences.com";
const heroImage = "/images/VtQimewDJyvHxHBP.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Transfer de luxo e concierge em Trancoso | Nativos Experiences", template: "%s | Nativos Experiences" },
  description: "Transfer privativo de luxo em Trancoso, Bahia. Recepção no Aeroporto de Porto Seguro, Terravista e Outeiro das Brisas, motorista à disposição, concierge, eventos e carro blindado.",
  keywords: ["transfer de luxo em Trancoso", "transfer Porto Seguro Trancoso", "Aeroporto Terravista", "transfer privativo Trancoso", "concierge Trancoso", "carro blindado Trancoso"],
  authors: [{ name: "Nativos Experiences" }],
  creator: "Nativos Experiences",
  publisher: "Nativos Experiences",
  category: "travel",
  alternates: { canonical: "/", languages: { "pt-BR": "/", en: "/en", "x-default": "/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "pt_BR", alternateLocale: ["en_US"], siteName: "Nativos Experiences", title: "Transfer de luxo e concierge em Trancoso | Nativos Experiences", description: "Chegue a Trancoso com conforto, discrição e um concierge local cuidando do caminho.", url: siteUrl, images: [{ url: heroImage, width: 1600, height: 1000, alt: "SUV premium em estrada costeira de Trancoso" }] },
  twitter: { card: "summary_large_image", title: "Transfer de luxo e concierge em Trancoso | Nativos Experiences", description: "Transfer privativo, motorista à disposição e concierge em Trancoso e região.", images: [heroImage] },
  icons: { icon: "/images/usTPVzSokKzdeTWC.png", apple: "/images/usTPVzSokKzdeTWC.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
        logo: "/images/usTPVzSokKzdeTWC.png",
        sameAs: ["https://instagram.com/nativosexperiences"],
        contactPoint: [{ "@type": "ContactPoint", telephone: "+55 73 99168-1630", contactType: "customer service", availableLanguage: ["Portuguese", "English"] }],
        address: { "@type": "PostalAddress", addressLocality: "Trancoso", addressRegion: "BA", addressCountry: "BR" },
        areaServed: ["Trancoso", "Porto Seguro", "Arraial d’Ajuda", "Praia do Espelho", "Caraíva", "Santo André", "Corumbau", "Itacaré"],
        knowsAbout: ["transfer privativo", "transfer aeroporto Porto Seguro Trancoso", "concierge em Trancoso", "transfer blindado", "motorista particular", "casamentos e eventos"],
      },
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: "Nativos Experiences", publisher: { "@id": `${siteUrl}/#business` }, inLanguage: ["pt-BR", "en"] },
    ],
  };

  return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>;
}
