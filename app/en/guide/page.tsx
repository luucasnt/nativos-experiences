// Casa de Areia: hub do guia em inglês — lista os artigos já traduzidos.
import type { Metadata } from "next";
import { Footer, Header } from "@/components/SiteChrome";
import { guides, guidesEn, guideSlugsEn } from "@/lib/guides";

const siteUrl = "https://nativosexperiences.com";
const allGuides = guideSlugsEn.map((slug) => ({ pt: guides[slug], en: guidesEn[slug] })).filter((g) => g.pt && g.en);

export const metadata: Metadata = {
  title: "Trancoso Travel Guide | Nativos Experiences",
  description: "Direct answers about how to get there, what it costs, and what to know before traveling to Trancoso, Caraíva, and the Discovery Coast of Bahia, Brazil.",
  alternates: { canonical: "/en/guide", languages: { "pt-BR": `${siteUrl}/guia`, en: `${siteUrl}/en/guide`, "x-default": `${siteUrl}/guia` } },
};

export default function GuideHubEn() {
  return <main className="service-page sand-theme guide-page" lang="en">
    <Header locale="en" />
    <section className="guide-hero">
      <p className="eyebrow light"><span className="eyebrow-dot" /> GUIDE · TRANCOSO & REGION</p>
      <h1>Everything you need to know before you travel.</h1>
      <p className="guide-intro">Direct answers to the most common questions about getting there, planning, and experiencing Trancoso and the Discovery Coast.</p>
    </section>
    <section className="guide-body section-light">
      <div className="guide-list">
        {allGuides.map((g) => (
          <a className="guide-list-item" key={g.pt.slug} href={`/en/guide/${g.pt.slug}`}>
            <span className="facts-label">{g.en.kicker}</span>
            <h2>{g.en.title}</h2>
            <p>{g.en.intro}</p>
          </a>
        ))}
      </div>
    </section>
    <Footer locale="en" />
  </main>;
}
