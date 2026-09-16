import type { Metadata } from "next";
import { Footer, Header } from "@/components/SiteChrome";
import { guides } from "@/lib/guides";

const siteUrl = "https://www.nativosexperiences.com";
const allGuides = Object.values(guides);
const groups = [
  { title: "Chegar em Trancoso", description: "Aeroportos, balsa, estrada e transfer privativo.", match: ["chegar", "transfer", "balsa", "estrada"] },
  { title: "Planejar a estadia", description: "Hospedagem, deslocamentos e decisões práticas antes da viagem.", match: ["hosped", "carro", "planej"] },
  { title: "Explorar a região", description: "Caraíva, Santo André e outros caminhos da Costa do Descobrimento.", match: ["caraiva", "santo-andre", "praia", "destino"] },
];

export const metadata: Metadata = {
  title: { absolute: "Guia de Trancoso e Região | Nativos Experiences" },
  description: "Guia local para planejar Trancoso: como chegar, transfer, aeroportos, hospedagem, praias, Caraíva e Costa do Descobrimento.",
  alternates: { canonical: "/guia", languages: { "pt-BR": `${siteUrl}/guia`, "x-default": `${siteUrl}/guia` } },
};

export default function GuideHub() {
  const used = new Set<string>();
  return <main className="service-page sand-theme guide-page" lang="pt-BR"><Header /><section className="guide-hero"><p className="eyebrow light"><span className="eyebrow-dot" /> GUIA LOCAL · TRANCOSO E REGIÃO</p><h1>Planeje Trancoso com informação de quem vive o destino.</h1><p className="guide-intro">Da escolha do aeroporto ao último passeio: conteúdo prático para organizar chegada, estadia e deslocamentos pela Costa do Descobrimento.</p></section><section className="guide-body section-light">{groups.map((group) => { const items = allGuides.filter((guide) => group.match.some((term) => guide.slug.includes(term))).filter((guide) => { if (used.has(guide.slug)) return false; used.add(guide.slug); return true; }); if (!items.length) return null; return <section key={group.title} className="service-related" aria-labelledby={`guide-${group.title}`}><span className="facts-label">{group.title}</span><p>{group.description}</p><div>{items.map((guide) => <a key={guide.slug} href={`/guia/${guide.slug}`}><span>{guide.kicker}</span><strong>{guide.title}</strong></a>)}</div></section>; })}<section className="service-related"><span className="facts-label">Todos os guias</span><div>{allGuides.map((guide) => <a key={guide.slug} href={`/guia/${guide.slug}`}><span>{guide.kicker}</span><strong>{guide.title}</strong></a>)}</div></section><div className="guide-cta"><span className="facts-label">Já sabe as datas?</span><h3>Conecte chegada, estadia e deslocamentos em um único atendimento.</h3><p>Fale com o concierge para organizar transfer, motorista, passeios e experiências.</p><a className="dark-button" href="/concierge-trancoso">Conhecer o concierge</a></div></section><Footer /></main>;
}
