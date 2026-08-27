// SEO técnico: sitemap gerado a partir dos dados centrais, incluindo aliases preservados.
import type { MetadataRoute } from "next";
import { allSlugs } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap { const lastModified = new Date(); return [{ url:"https://nativosexperiences.com/", lastModified, changeFrequency:"monthly", priority:1 }, ...allSlugs.map((slug) => ({ url:`https://nativosexperiences.com/${slug}`, lastModified, changeFrequency:"monthly" as const, priority: slug.includes("transfer") || slug.includes("reserva") ? .95 : .8 }))]; }
