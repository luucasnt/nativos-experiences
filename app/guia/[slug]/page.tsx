// Casa de Areia: template de artigo de guia — conteúdo editorial que responde dúvida real
// de busca e converte para a página de serviço relacionada via CTA.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Header, whatsapp, WhatsAppButton } from "@/components/SiteChrome";
import { getGuideBySlug, guideSlugs, guides } from "@/lib/guides";
import { getServiceBySlug } from "@/lib/data";

const siteUrl = "https://www.nativosexperiences.com";

export function generateStaticParams() { return guideSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    alternates: { canonical: `/guia/${guide.slug}`, languages: { "pt-BR": `${siteUrl}/guia/${guide.slug}`, "x-default": `${siteUrl}/guia/${guide.slug}` } },
    openGraph: { type: "article", siteName: "Nativos Experiences", locale: "pt_BR", title: guide.seoTitle, description: guide.seoDescription, url: `${siteUrl}/guia/${guide.slug}`, images: [{ url: guide.image, alt: guide.imageAlt }] },
    twitter: { card: "summary_large_image", title: guide.seoTitle, description: guide.seoDescription, images: [guide.image] },
  };
}

export default async function GuideRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedService = getServiceBySlug(guide.relatedServiceSlug);
  const relatedGuides = guide.relatedGuideSlugs.map((s) => guides[s]).filter(Boolean);

  const articleSchema = { "@context": "https://schema.org", "@type": "Article", "@id": `${siteUrl}/guia/${guide.slug}#article`, headline: guide.title, description: guide.seoDescription, image: guide.image, datePublished: guide.publishedAt, dateModified: guide.updatedAt, author: { "@id": `${siteUrl}/#business` }, publisher: { "@id": `${siteUrl}/#business` }, inLanguage: "pt-BR", url: `${siteUrl}/guia/${guide.slug}` };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Nativos Experiences", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Guia", item: `${siteUrl}/guia` }, { "@type": "ListItem", position: 3, name: guide.title, item: `${siteUrl}/guia/${guide.slug}` }] };
  const faqSchema = guide.faqs.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: guide.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) } : null;

  return <main className="service-page sand-theme guide-page" lang="pt-BR">
    <Header />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

    <section className="guide-hero">
      <p className="eyebrow light"><span className="eyebrow-dot" /> {guide.kicker}</p>
      <h1>{guide.title}</h1>
      <p className="guide-intro">{guide.intro}</p>
    </section>

    <section className="guide-body section-light">
      <article className="guide-article">
        {guide.sections.map((section) => (
          <div className="guide-section" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </article>

      {relatedService && (
        <div className="guide-cta">
          <span className="facts-label">Pronto para reservar?</span>
          <h3>{relatedService.title}</h3>
          <p>{relatedService.intro}</p>
          <WhatsAppButton label={guide.relatedServiceLabel} href={whatsapp} />
        </div>
      )}

      <div className="service-faqs">
        <span className="facts-label">Perguntas frequentes</span>
        {guide.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </div>

      {relatedGuides.length > 0 && (
        <nav className="service-related" aria-label="Outros guias">
          <span className="facts-label">Continue lendo</span>
          <div>{relatedGuides.map((g) => <a key={g.slug} href={`/guia/${g.slug}`}><span>{g.kicker}</span><strong>{g.title}</strong></a>)}</div>
        </nav>
      )}
    </section>
    <Footer />
  </main>;
}
