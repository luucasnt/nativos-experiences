// Casa de Areia: páginas internas SSR para buscas específicas, com resposta direta, prova operacional e caminhos de conversão.
import type { Metadata } from "next";
import { Differentiators } from "@/components/Differentiators";
import { Footer, Header, eventWhatsapp, partnershipWhatsapp, whatsapp, WhatsAppButton } from "@/components/SiteChrome";
import { allSlugs, differentiatorContent, differentiators, getServiceBySlug } from "@/lib/data";

const siteUrl = "https://nativosexperiences.com";

export function generateStaticParams() { return allSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceBySlug(slug);
  if (!page) return {};
  return {
    title: page.seoTitle?.replace(/\s*\|\s*Nativos Experiences\s*$/i, "") ?? page.title,
    description: page.seoDescription ?? page.intro,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title: page.seoTitle?.replace(/\s*\|\s*Nativos Experiences\s*$/i, "") ?? page.title, description: page.seoDescription ?? page.intro, url: `${siteUrl}/${page.slug}`, images: [{ url: page.image, alt: page.imageAlt }] },
  };
}

export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServiceBySlug(slug);
  if (!page) return <main className="section-light" style={{ minHeight: "100vh", padding: "12vw" }}><h1>Página não encontrada</h1><a className="dark-button" href="/">Voltar para Trancoso</a></main>;

  const related = (page.relatedSlugs ?? ["transfer-aeroporto", "concierge-trancoso"]).map(getServiceBySlug).filter(Boolean).filter((item) => item!.slug !== page.slug).slice(0, 3);
  const serviceSchema = { "@context":"https://schema.org", "@type":"Service", name:page.title, description:page.opening ?? page.intro, provider:{"@type":"TravelAgency",name:"Nativos Experiences",url:siteUrl}, areaServed:{"@type":"Place",name:"Trancoso, Bahia"}, url:`${siteUrl}/${page.slug}` };
  const faqSchema = page.faqs.length ? { "@context":"https://schema.org", "@type":"FAQPage", mainEntity:page.faqs.map((faq) => ({ "@type":"Question", name:faq.question, acceptedAnswer:{"@type":"Answer", text:faq.answer} })) } : null;
  const ctaHref = page.type === "partnerships" ? partnershipWhatsapp : page.type === "events" ? eventWhatsapp : whatsapp;
  const pageDifferentials = page.type === "partnerships" ? differentiators.slice(0, 3) : differentiators;

  return <main className="service-page sand-theme">
    <Header />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    <section className="service-hero">
      <img src={page.image} alt={page.imageAlt} />
      <div className="service-hero-shade" />
      <div className="service-hero-content">
        <a href="/" className="back-link">Voltar à Nativos</a>
        <p className="eyebrow light"><span className="eyebrow-dot" /> {page.kicker}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <a className="hero-action" href={ctaHref} target="_blank" rel="noreferrer">{page.cta}</a>
      </div>
    </section>
    <section className="service-body section-light">
      <div className="service-body-grid">
        <div className="service-copy">
          <p className="eyebrow dark"><span className="eyebrow-dot" /> Nativos Experiences · Trancoso</p>
          <h2>{page.heading.split("\n").map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}</h2>
          <p className="service-opening">{page.opening ?? page.intro}</p>
          <p>{page.body}</p>
          <WhatsAppButton label={page.cta} href={ctaHref} />
        </div>
        <div className="service-facts"><span className="facts-label">O que você pode esperar</span>{page.items.map((item, index) => <div className="service-fact" key={item}><span>0{index+1}</span><strong>{item}</strong></div>)}</div>
      </div>
      <Differentiators items={pageDifferentials} content={differentiatorContent[page.type]} compact />
      <div className="service-faqs"><span className="facts-label">Perguntas frequentes</span>{page.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      {related.length > 0 && <nav className="service-related" aria-label="Serviços relacionados"><span className="facts-label">Continue a planejar</span><div>{related.map((item) => item && <a key={item.slug} href={`/${item.slug}`}><span>{item.kicker}</span><strong>{item.title}</strong></a>)}</div></nav>}
    </section>
    <Footer />
  </main>;
}
