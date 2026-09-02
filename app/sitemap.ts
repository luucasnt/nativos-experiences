// SEO técnico: sitemap multilíngue gerado a partir dos slugs reais, com alternates por caminho.
import type { MetadataRoute } from "next";
import { canonicalSlugs } from "@/lib/data";
import { guideSlugs, guideSlugsEn } from "@/lib/guides";

const siteUrl = "https://www.nativosexperiences.com";
const entry = (slug: string, locale: "pt-BR" | "en"): MetadataRoute.Sitemap[number] => { const pt = slug ? `${siteUrl}/${slug}` : `${siteUrl}/`; const en = slug ? `${siteUrl}/en/${slug}` : `${siteUrl}/en`; const url = locale === "en" ? en : pt; return { url, lastModified: new Date(), changeFrequency: "monthly", priority: slug.includes("transfer") || slug.includes("reserva") ? .95 :  .8, alternates: { languages: { "pt-BR": pt, en, "x-default": pt } } }; };
const guideEntry = (slug: string): MetadataRoute.Sitemap[number] => { const pt = `${siteUrl}/guia/${slug}`; const hasEn = guideSlugsEn.includes(slug); const en = hasEn ? `${siteUrl}/en/guide/${slug}` : undefined; return { url: pt, lastModified: new Date(), changeFrequency: "monthly", priority: .7, alternates: en ? { languages: { "pt-BR": pt, en, "x-default": pt } } : undefined }; };
const guideEntryEn = (slug: string): MetadataRoute.Sitemap[number] => ({ url: `${siteUrl}/en/guide/${slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: .7, alternates: { languages: { "pt-BR": `${siteUrl}/guia/${slug}`, en: `${siteUrl}/en/guide/${slug}`, "x-default": `${siteUrl}/guia/${slug}` } } });

export default function sitemap(): MetadataRoute.Sitemap { return [entry("", "pt-BR"), entry("", "en"), ...canonicalSlugs.flatMap((slug) => [entry(slug, "pt-BR"), entry(slug, "en")]), { url: `${siteUrl}/guia`, lastModified: new Date(), changeFrequency: "weekly", priority: .75 }, { url: `${siteUrl}/en/guide`, lastModified: new Date(), changeFrequency: "weekly", priority: .75 }, ...guideSlugs.map(guideEntry), ...guideSlugsEn.map(guideEntryEn)]; }
