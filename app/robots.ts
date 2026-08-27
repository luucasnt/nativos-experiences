// SEO técnico: política automática para crawlers e sitemap canônico.
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://nativosexperiences.com/sitemap.xml", host: "https://nativosexperiences.com" }; }
