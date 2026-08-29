import Image from "next/image";
import type { CSSProperties } from "react";
import type { ServiceData } from "@/lib/data";

type ServiceHeroProps = {
  page: ServiceData;
  ctaHref: string;
  locale?: "pt-BR" | "en";
};

type HeroStyle = CSSProperties & {
  "--img-bg"?: string;
};

export function ServiceHero({ page, ctaHref, locale = "pt-BR" }: ServiceHeroProps) {
  const style: HeroStyle = {
    "--img-bg": page.imageBackground ?? "#0b1820",
  };
  const isEnglish = locale === "en";

  return (
    <section className="service-hero" data-service={page.type} style={style}>
      <div className="service-hero-media" aria-hidden="true">
        <picture>
          {page.imageMobile && <source media="(max-width: 800px)" srcSet={page.imageMobile} />}
          <Image src={page.image} alt={page.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 58vw" />
        </picture>
      </div>
      <div className="service-hero-shade" />
      <div className="service-hero-content">
        <a href={isEnglish ? "/en" : "/"} className="back-link">{isEnglish ? "Back to Nativos" : "Voltar à Nativos"}</a>
        <p className="eyebrow light"><span className="eyebrow-dot" /> {page.kicker}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <a className="hero-action" href={ctaHref} target="_blank" rel="noreferrer">{page.cta}</a>
      </div>
    </section>
  );
}
