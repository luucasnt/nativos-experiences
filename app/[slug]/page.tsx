// Casa de Areia: páginas internas SSR para buscas específicas, com resposta direta, prova operacional e caminhos de conversão.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Differentiators } from "@/components/Differentiators";
import { Footer, Header, eventWhatsapp, partnershipWhatsapp, whatsapp, WhatsAppButton } from "@/components/SiteChrome";
import { canonicalSlugs, differentiatorContent, differentiators, getServiceBySlug, onboardDifferentiatorTypes } from "@/lib/data";

const siteUrl = "https://nativosexperiences.com";

export function generateStaticParams() { return canonicalSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceBySlug(slug);
  if (!page) return {};
  return {
    title: page.seoTitle?.replace(/\s*\|\s*Nativos Experiences\s*$/i, "") ?? page.title,
    description: page.seoDescription ?? page.intro,
    alternates: { canonical: `/${page.slug}`, languages: { "pt-BR": `${siteUrl}/${page.slug}`, en: `${siteUrl}/en/${page.slug}`, "x-default": `${siteUrl}/${page.slug}` } },
    openGraph: { type: "website", siteName: "Nativos Experiences", locale: "pt_BR", title: page.seoTitle?.replace(/\s*\|\s*Nativos Experiences\s*$/i, "") ?? page.title, description: page.seoDescription ?? page.intro, url: `${siteUrl}/${page.slug}`, images: [{ url: page.image, alt: page.imageAlt }] }, twitter: { card: "summary_large_image", title: page.seoTitle?.replace(/\s*\|\s*Nativos Experiences\s*$/i, "") ?? page.title, description: page.seoDescription ?? page.intro, images: [page.image] },
  };
}

export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServiceBySlug(slug);
  if (!page) notFound();

  const related = (page.relatedSlugs ?? ["transfer-aeroporto", "concierge-trancoso"]).map(getServiceBySlug).filter(Boolean).filter((item) => item!.slug !== page.slug).slice(0, 3);
  const serviceSchema = { "@context":"https://schema.org", "@type":"Service", "@id":`${siteUrl}/${page.slug}#service`, name:page.title, description:page.opening ?? page.intro, provider:{"@id":`${siteUrl}/#business`}, areaServed:{"@type":"Place",name:"Trancoso, Bahia"}, url:`${siteUrl}/${page.slug}`, inLanguage:"pt-BR" }; const breadcrumbSchema = { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"Nativos Experiences",item:`${siteUrl}/`},{"@type":"ListItem",position:2,name:page.title,item:`${siteUrl}/${page.slug}`}] };
  const faqSchema = page.faqs.length ? { "@context":"https://schema.org", "@type":"FAQPage", mainEntity:page.faqs.map((faq) => ({ "@type":"Question", name:faq.question, acceptedAnswer:{"@type":"Answer", text:faq.answer} })) } : null;
  const ctaHref = page.type === "partnerships" ? partnershipWhatsapp : page.type === "events" ? eventWhatsapp : whatsapp;
  const pageDifferentials = page.type === "partnerships" ? differentiators.slice(0, 3) : differentiators;
  const isPrivateRoute = ["airport", "transfer", "portoSeguro", "armored", "tours"].includes(page.type);

  return <main className="service-page sand-theme" lang="pt-BR">
    <Header />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    <section className="service-hero" data-service={page.type}>
      <picture>{page.imageMobile && <source media="(max-width: 800px)" srcSet={page.imageMobile} />}<img src={page.image} alt={page.imageAlt} loading="eager" fetchPriority="high" decoding="async" /></picture>
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
          <WhatsAppButton label={page.cta} href={ctaHref} />{isPrivateRoute && <p className="service-private-note"><strong>Todos os transfers são privativos.</strong> As rotas acima são as mais solicitadas — se o seu trajeto não estiver na lista, fale com a gente para montarmos uma rota personalizada.</p>}
        </div>
        <div className="service-facts"><span className="facts-label">O que você pode esperar</span>{page.items.map((item, index) => <div className="service-fact" key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div>
      </div>
      {onboardDifferentiatorTypes.includes(page.type) && <Differentiators items={pageDifferentials} content={differentiatorContent[page.type]} compact />}
      <div className="service-faqs"><span className="facts-label">Perguntas frequentes</span>{page.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      {related.length > 0 && <nav className="service-related" aria-label="Serviços relacionados"><span className="facts-label">Continue a planejar</span><div>{related.map((item) => item && <a key={item.slug} href={`/${item.slug}`}><span>{item.kicker}</span><strong>{item.title}</strong></a>)}</div></nav>}
    </section>
    <Footer />
  </main>;
}
