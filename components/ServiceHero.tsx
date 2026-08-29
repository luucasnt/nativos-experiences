/* Casa de Areia — hero compartilhado: texto à esquerda, assunto visual à direita e enquadramento configurado pela fonte central. */
import Image from "next/image";
import type { CSSProperties } from "react";
import type { ServiceData } from "@/lib/data";

type ServiceHeroProps = {
  page: ServiceData;
  ctaHref: string;
  locale?: "pt-BR" | "en";
};

type HeroStyle = CSSProperties & {
  "--img-focus"?: string;
  "--img-focus-mobile"?: string;
  "--img-fit"?: string;
  "--img-fit-mobile"?: string;
  "--img-bg"?: string;
};

export function ServiceHero({ page, ctaHref, locale = "pt-BR" }: ServiceHeroProps) {
  const style: HeroStyle = {
    "--img-focus": page.imageFocus ?? "75% center",
    "--img-focus-mobile": page.imageFocusMobile ?? page.imageFocus ?? "right center",
    "--img-fit": page.imageFit ?? "cover",
    "--img-fit-mobile": page.imageFitMobile ?? "contain",
    "--img-bg": page.imageBackground ?? "#344c43",
  };

  const isEnglish = locale === "en";

  return (
    <section className="service-hero" data-service={page.type} style={style}>
      <picture>
        {page.imageMobile && <source media="(max-width: 800px)" srcSet={page.imageMobile} />}
        <Image src={page.image} alt={page.imageAlt} fill priority sizes="100vw" />
      </picture>
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
