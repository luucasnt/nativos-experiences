// SEO técnico: permitir descoberta pública, inclusive por buscadores de IA, e apontar para o sitemap canônico.
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
    ],
    sitemap: "https://nativosexperiences.com/sitemap.xml",
    host: "https://nativosexperiences.com",
  };
}
