// Casa de Areia: versão em inglês do template de guia — traduz apenas os 10 artigos
// de maior valor comercial para busca internacional (o resto segue só em PT por ora).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Header, whatsapp, WhatsAppButton } from "@/components/SiteChrome";
import { getGuideBySlug, getGuideTranslation, guideSlugsEn, guides, guidesEn } from "@/lib/guides";
import { getServiceBySlug, getLocalizedServiceBySlug } from "@/lib/data";

const siteUrl = "https://nativosexperiences.com";

export function generateStaticParams() { return guideSlugsEn.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const en = getGuideTranslation(slug);
  if (!guide || !en) return {};
  return {
    title: en.seoTitle,
    description: en.seoDescription,
    alternates: { canonical: `/en/guide/${guide.slug}`, languages: { "pt-BR": `${siteUrl}/guia/${guide.slug}`, en: `${siteUrl}/en/guide/${guide.slug}`, "x-default": `${siteUrl}/guia/${guide.slug}` } },
    openGraph: { type: "article", siteName: "Nativos Experiences", locale: "en_US", title: en.seoTitle, description: en.seoDescription, url: `${siteUrl}/en/guide/${guide.slug}`, images: [{ url: guide.image, alt: guide.imageAlt }] },
    twitter: { card: "summary_large_image", title: en.seoTitle, description: en.seoDescription, images: [guide.image] },
  };
}

export default async function GuideRouteEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const en = getGuideTranslation(slug);
  if (!guide || !en) notFound();

  const relatedService = getLocalizedServiceBySlug(guide.relatedServiceSlug, "en") ?? getServiceBySlug(guide.relatedServiceSlug);
  const relatedGuides = guide.relatedGuideSlugs.map((s) => ({ pt: guides[s], en: guidesEn[s] })).filter((g) => g.pt && g.en);

  const articleSchema = { "@context": "https://schema.org", "@type": "Article", "@id": `${siteUrl}/en/guide/${guide.slug}#article`, headline: en.title, description: en.seoDescription, image: guide.image, datePublished: guide.publishedAt, dateModified: guide.updatedAt, author: { "@id": `${siteUrl}/#business` }, publisher: { "@id": `${siteUrl}/#business` }, inLanguage: "en", url: `${siteUrl}/en/guide/${guide.slug}` };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Nativos Experiences", item: `${siteUrl}/en` }, { "@type": "ListItem", position: 2, name: "Guide", item: `${siteUrl}/en/guide` }, { "@type": "ListItem", position: 3, name: en.title, item: `${siteUrl}/en/guide/${guide.slug}` }] };
  const faqSchema = en.faqs.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: en.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) } : null;

  return <main className="service-page sand-theme guide-page" lang="en">
    <Header locale="en" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

    <section className="guide-hero">
      <p className="eyebrow light"><span className="eyebrow-dot" /> {en.kicker}</p>
      <h1>{en.title}</h1>
      <p className="guide-intro">{en.intro}</p>
    </section>

    <section className="guide-body section-light">
      <article className="guide-article">
        {en.sections.map((section) => (
          <div className="guide-section" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </article>

      {relatedService && (
        <div className="guide-cta">
          <span className="facts-label">Ready to book?</span>
          <h3>{relatedService.title}</h3>
          <p>{relatedService.intro}</p>
          <WhatsAppButton label={en.relatedServiceLabel} href={whatsapp} />
        </div>
      )}

      <div className="service-faqs">
        <span className="facts-label">Frequently asked questions</span>
        {en.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </div>

      {relatedGuides.length > 0 && (
        <nav className="service-related" aria-label="More guides">
          <span className="facts-label">Keep reading</span>
          <div>{relatedGuides.map((g) => <a key={g.pt.slug} href={`/en/guide/${g.pt.slug}`}><span>{g.en.kicker}</span><strong>{g.en.title}</strong></a>)}</div>
        </nav>
      )}
    </section>
    <Footer locale="en" />
  </main>;
}
