// Casa de Areia: hub do guia — lista todos os artigos, ponto de entrada para o conteúdo de SEO.
import type { Metadata } from "next";
import { Footer, Header } from "@/components/SiteChrome";
import { guides } from "@/lib/guides";

const siteUrl = "https://nativosexperiences.com";
const allGuides = Object.values(guides);

export const metadata: Metadata = {
  title: "Guia de Trancoso e Região | Nativos Experiences",
  description: "Respostas diretas sobre como chegar, quanto custa e o que saber antes de viajar para Trancoso, Arraial d'Ajuda, Caraíva e a Costa do Descobrimento.",
  alternates: { canonical: "/guia", languages: { "pt-BR": `${siteUrl}/guia`, "x-default": `${siteUrl}/guia` } },
};

export default function GuideHub() {
  return <main className="service-page sand-theme guide-page" lang="pt-BR">
    <Header />
    <section className="guide-hero">
      <p className="eyebrow light"><span className="eyebrow-dot" /> GUIA · TRANCOSO E REGIÃO</p>
      <h1>Tudo o que você precisa saber antes de viajar.</h1>
      <p className="guide-intro">Respostas diretas para as dúvidas mais comuns sobre chegar, se planejar e viver Trancoso e a Costa do Descobrimento.</p>
    </section>
    <section className="guide-body section-light">
      <div className="guide-list">
        {allGuides.map((guide) => (
          <a className="guide-list-item" key={guide.slug} href={`/guia/${guide.slug}`}>
            <span className="facts-label">{guide.kicker}</span>
            <h2>{guide.title}</h2>
            <p>{guide.intro}</p>
          </a>
        ))}
      </div>
    </section>
    <Footer />
  </main>;
}
