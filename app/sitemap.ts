// SEO técnico: sitemap multilíngue gerado a partir dos slugs reais, com alternates por caminho.
import type { MetadataRoute } from "next";
import { canonicalSlugs } from "@/lib/data";

const siteUrl = "https://nativosexperiences.com";
const entry = (slug: string, locale: "pt-BR" | "en"): MetadataRoute.Sitemap[number] => { const pt = slug ? `${siteUrl}/${slug}` : `${siteUrl}/`; const en = slug ? `${siteUrl}/en/${slug}` : `${siteUrl}/en`; const url = locale === "en" ? en : pt; return { url, lastModified: new Date(), changeFrequency: "monthly", priority: slug.includes("transfer") || slug.includes("reserva") ? .95 :  .8, alternates: { languages: { "pt-BR": pt, en, "x-default": pt } } }; };

export default function sitemap(): MetadataRoute.Sitemap { return [entry("", "pt-BR"), entry("", "en"), ...canonicalSlugs.flatMap((slug) => [entry(slug, "pt-BR"), entry(slug, "en")])]; }
