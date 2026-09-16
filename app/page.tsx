import Image from "next/image";
import type { Metadata } from "next";
import { Header, Footer, WhatsAppButton } from "@/components/SiteChrome";
import { differentiatorContent, differentiators, homeHeroImage, homeServiceImages, homeWelcomeImage, serviceData } from "@/lib/data";
import { EditorialImage } from "@/components/EditorialImage";
import { Differentiators } from "@/components/Differentiators";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Nativos Experiences | Transfer Privativo e Concierge em Trancoso",
  description: "Transfer privativo, concierge, motorista à disposição, grupos e eventos em Trancoso. Atendimento local desde 2015, a partir do Aeroporto de Porto Seguro.",
  alternates: { canonical: "/", languages: { "pt-BR": "https://www.nativosexperiences.com/", en: "https://www.nativosexperiences.com/en", "x-default": "https://www.nativosexperiences.com/" } },
  openGraph: { type: "website", siteName: "Nativos Experiences", locale: "pt_BR", title: "Nativos Experiences | Trancoso começa na chegada", description: "Mobilidade privativa, concierge e experiências coordenadas por uma equipe local em Trancoso.", url: "https://www.nativosexperiences.com/" },
  twitter: { card: "summary_large_image", title: "Nativos Experiences | Trancoso", description: "Transfer privativo, concierge e experiências em Trancoso." }
};

const wa = (text: string) => `https://wa.me/5573991681630?text=${encodeURIComponent(text)}`;

const pillars = [
  ["01", "Transfer privativo", "Do aeroporto à hospedagem, com recepção personalizada e atendimento dimensionado ao seu grupo.", "/transfer-aeroporto"],
  ["02", "Concierge", "Restaurantes, praias, barcos, beach clubs, experiências e logística coordenados por quem vive o destino.", "/concierge-trancoso"],
  ["03", "Motorista à disposição", "Um veículo dedicado à sua programação por 8h, 12h ou 24h. Trancoso no seu tempo.", "/motorista-a-disposicao"],
  ["04", "Grupos & eventos", "Vans, carros e operação coordenada para casamentos, celebrações, grupos e eventos corporativos.", "/casamentos-e-eventos"]
];

const routes = [
  ["Aeroporto de Porto Seguro", "Trancoso", "/transfer-porto-seguro-trancoso"],
  ["Aeroporto de Porto Seguro", "Fasano Trancoso", "/transfer-aeroporto-fasano-trancoso"],
  ["Aeroporto de Porto Seguro", "Club Med Trancoso", "/transfer-aeroporto-club-med-trancoso"],
  ["Aeroporto Terra Vista", "Trancoso", "/transfer-aeroporto"],
  ["Trancoso", "Caraíva", "/transfer-trancoso"],
  ["Trancoso", "Praia do Espelho", "/passeios"]
];

const arrival = [
  ["01", "Antes da chegada", "Recebemos voo, hospedagem, passageiros e bagagens para planejar o atendimento."],
  ["02", "Acompanhamento", "A operação acompanha a chegada e ajusta o atendimento quando necessário."],
  ["03", "Recepção", "Seu motorista aguarda identificado no ponto combinado e auxilia com as bagagens."],
  ["04", "A viagem", "Serviço privativo, conforto, discrição e cuidado a bordo durante todo o percurso."],
  ["05", "Destino", "Você chega à hospedagem e, se quiser, o concierge continua cuidando dos próximos dias."]
];

const standards = [
  ["Local desde 2015", "Conhecimento real das rotas, acessos, horários e particularidades da região."],
  ["Operação planejada", "Cada atendimento é organizado a partir da reserva, do perfil do grupo e da logística da viagem."],
  ["Conforto a bordo", "Água, snacks e itens de apoio selecionados para tornar o percurso parte da experiência."],
  ["Conectividade", "Starlink disponível em operações selecionadas para manter você conectado no caminho."],
  ["Discrição", "Atendimento reservado e veículos sem comunicação visual ostensiva."],
  ["Uma equipe, a viagem inteira", "Transfer, motorista, concierge, passeios, grupos e eventos coordenados em um só atendimento."]
];

export default function Home() {
  const services = [{ item: serviceData.airport, media: homeServiceImages.airport }, { item: serviceData.chauffeur, media: homeServiceImages.chauffeur }, { item: serviceData.concierge, media: homeServiceImages.concierge }];
  const homeFaqs = [serviceData.transfer.faqs[2], serviceData.transfer.faqs[3], serviceData.airport.faqs[0], serviceData.armored.faqs[2]];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: homeFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

  return <main id="top" className="site-shell sand-theme">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <noscript><style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style></noscript><ScrollReveal /><Header />

    <section className="hero sand-hero" aria-labelledby="hero-title"><Image className="hero-image" src={homeHeroImage} alt="Chegada privativa em Trancoso" fill priority sizes="100vw" /><div className="hero-shade" /><div className="hero-content"><p className="eyebrow light"><span className="eyebrow-dot" /> Trancoso · Bahia · Desde 2015</p><h1 id="hero-title">Sua experiência em Trancoso<br />começa <em>antes de chegar.</em></h1><div className="hero-bottom"><p className="hero-intro">Mobilidade privativa, concierge e experiências coordenadas por uma equipe local. Do desembarque ao último jantar, cuidamos para que você só precise viver o destino.</p><a className="hero-action" href={wa("Olá! Estou planejando uma viagem para Trancoso e gostaria de falar com um concierge da Nativos Experiences. Datas: | Pessoas: | Hospedagem:")} target="_blank" rel="noreferrer">Planejar minha experiência</a><span className="hero-trust">Transfer · Concierge · Motorista · Grupos & Eventos</span></div></div><div className="hero-meta"><span>NATIVOS EXPERIENCES</span><span className="meta-line" /><span>TRANCOSO / BAHIA</span></div></section>

    <section className="welcome section-light" aria-labelledby="welcome-title"><div className="section-index dark-index">N / 01</div><div className="welcome-grid"><div className="welcome-image reveal"><Image src={homeWelcomeImage} alt="Recepção privativa em Trancoso" fill sizes="(max-width: 800px) 100vw, 50vw" /><span>Uma chegada tranquila muda tudo.</span></div><div className="welcome-copy reveal"><p className="eyebrow dark"><span className="eyebrow-dot" /> Somos de Trancoso</p><h2 id="welcome-title">Você traz os planos.<br />A gente cuida <em>dos caminhos.</em></h2><p>Conhecemos o destino por dentro: aeroportos, estradas, praias, horários, acessos e o ritmo de cada época do ano. Não entregamos apenas um carro. Coordenamos sua chegada e tudo o que fizer sentido depois dela.</p><WhatsAppButton label="Falar com um concierge" href={wa("Olá! Gostaria de falar com um concierge da Nativos Experiences sobre minha viagem a Trancoso.")} /></div></div></section>

    <section className="experiences section-sand" aria-labelledby="journey-title"><div className="section-head reveal"><div><p className="eyebrow dark"><span className="eyebrow-dot" /> Uma equipe, do início ao fim</p><h2 id="journey-title">A viagem inteira,<br /><em>conectada.</em></h2></div><p className="section-note">Escolha o que precisa agora. Se quiser, conectamos os serviços e cuidamos da logística completa.</p></div><div className="experience-list">{pillars.map(([n,title,text,href]) => <a className="experience-card reveal" href={href} key={title}><div className="experience-info"><div><p className="card-region">{n} · NATIVOS EXPERIENCES</p><h3>{title}</h3></div><p className="card-description">{text}<br /><strong>Conhecer serviço →</strong></p></div></a>)}</div></section>

    <section className="fleet-section section-dark" aria-labelledby="standard-title"><div className="section-index">N / 02</div><div className="fleet-head reveal"><p className="eyebrow light"><span className="eyebrow-dot" /> O padrão Nativos</p><h2 id="standard-title">Luxo é quando tudo<br /><em>funciona sem esforço.</em></h2><p>Nosso padrão nasce da atenção: informação certa, categoria adequada, equipe preparada e alguém cuidando do próximo passo.</p></div><div className="fleet-grid">{standards.map(([title,text],i) => <div className="fleet-item reveal" key={title}><span className="step-no">{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>

    <section className="experiences section-light" aria-labelledby="routes-title"><div className="section-head reveal"><div><p className="eyebrow dark"><span className="eyebrow-dot" /> Rotas mais procuradas</p><h2 id="routes-title">Do desembarque<br /><em>ao destino certo.</em></h2></div><p className="section-note">Rotas privativas planejadas conforme passageiros, bagagens, horário e hospedagem.</p></div><div className="experience-list">{routes.map(([from,to,href],i) => <a className="experience-card reveal" href={href} key={`${from}-${to}`}><div className="experience-info"><div><p className="card-region">ROTA {String(i+1).padStart(2,"0")}</p><h3>{from}<br />→ {to}</h3></div><p className="card-description">Recepção e deslocamento privativo com planejamento da operação.<br /><strong>Ver rota →</strong></p></div></a>)}</div></section>

    <section className="fleet-section section-dark" aria-labelledby="arrival-title"><div className="section-index">N / 03</div><div className="fleet-head reveal"><p className="eyebrow light"><span className="eyebrow-dot" /> Como funciona</p><h2 id="arrival-title">Da confirmação<br /><em>à porta da hospedagem.</em></h2><p>Um protocolo simples para deixar a chegada previsível, confortável e sem ruído.</p></div><div className="fleet-grid">{arrival.map(([n,title,text]) => <div className="fleet-item reveal" key={n}><span className="step-no">{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><div className="fleet-note"><a className="hero-action" href={wa("Olá! Quero solicitar um transfer. Data: | Voo: | Origem: | Destino/hospedagem: | Passageiros: | Bagagens:")} target="_blank" rel="noreferrer">Solicitar transfer</a></div></section>

    <section id="servicos" className="experiences section-sand" aria-labelledby="services-title"><div className="section-head reveal"><div><p className="eyebrow dark"><span className="eyebrow-dot" /> Além da chegada</p><h2 id="services-title">Trancoso no seu ritmo,<br /><em>sem montar a logística sozinho.</em></h2></div><p className="section-note">Mobilidade e concierge trabalham juntos para transformar programação em experiência.</p></div><div className="experience-list">{services.map(({ item, media }, index) => <a className="experience-card reveal" href={`/${item.slug}`} key={item.type}><EditorialImage className="experience-image-wrap" src={media.image} alt={media.imageAlt} imageFocus={media.imageFocus} imageFocusMobile={media.imageFocusMobile} imageFit={media.imageFit} imageFitMobile={media.imageFitMobile}><span className="card-number">{String(index + 1).padStart(2, "0")}</span></EditorialImage><div className="experience-info"><div><p className="card-region">Nativos Experiences</p><h3>{item.title}</h3></div><p className="card-description">{item.intro}</p></div></a>)}</div></section>

    <section id="frota" className="fleet-section section-dark" aria-labelledby="fleet-title"><div className="section-index">N / 04</div><div className="fleet-head reveal"><p className="eyebrow light"><span className="eyebrow-dot" /> A categoria certa para cada viagem</p><h2 id="fleet-title">Escolha o padrão.<br /><em>Nós cuidamos do restante.</em></h2><p>De categorias compactas a SUVs premium, vans e blindado. A categoria é confirmada conforme passageiros, bagagens e necessidade da operação; o modelo pode variar por disponibilidade.</p><a className="hero-action" href="/frota">Conhecer categorias</a></div></section>

    <section id="destinos" className="destinations section-light" aria-labelledby="destinations-title"><div className="destination-image reveal"><Image src={serviceData.destinations.image} alt="Praia na Costa do Descobrimento" fill sizes="(max-width: 800px) 100vw, 50vw" /><span>o destino começa no caminho</span></div><div className="destination-copy reveal"><p className="eyebrow dark"><span className="eyebrow-dot" /> Curadoria local</p><h2 id="destinations-title">Uma estadia,<br /><em>muitas possibilidades.</em></h2><p>Restaurantes, praias, barcos, beach clubs, festas e experiências. Conte o perfil da sua viagem e nosso concierge ajuda a conectar os dias, os horários e os deslocamentos.</p><div className="destination-list">{["Trancoso","Arraial d’Ajuda","Praia do Espelho","Caraíva","Santo André","Corumbau","Itacaré"].map((destination,i) => <span key={destination}><i>{String(i + 1).padStart(2, "0")}</i>{destination}</span>)}</div><WhatsAppButton label="Montar minha experiência" href={wa("Olá! Gostaria de ajuda do concierge para montar minha experiência em Trancoso. Datas: | Pessoas: | Interesses:")} /></div></section>

    <section id="avaliacoes" className="testimonials section-light" aria-labelledby="reviews-title"><div className="section-head reveal"><div><p className="eyebrow dark"><span className="eyebrow-dot" /> Experiências reais</p><h2 id="reviews-title">Quem chega com a Nativos<br /><em>entende o cuidado.</em></h2></div><p className="section-note">Veja avaliações públicas e conheça a experiência de quem já viajou com a gente.</p></div><a className="text-link" href="https://www.tripadvisor.com.br/Attraction_Review-g303279-d33405648-Reviews-Nativos_Transfer_Trancoso-Trancoso_Porto_Seguro_State_of_Bahia.html" target="_blank" rel="noreferrer">Ver avaliações no TripAdvisor</a></section>

    <section id="faq" className="home-faq section-sand" aria-labelledby="faq-title"><div className="section-head reveal"><div><p className="eyebrow dark"><span className="eyebrow-dot" /> Perguntas frequentes</p><h2 id="faq-title">Antes de reservar,<br /><em>tire suas dúvidas.</em></h2></div></div><div className="service-faqs">{homeFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>

    <Differentiators items={differentiators} content={differentiatorContent.home} />
    <section id="contato" className="contact sand-contact" aria-labelledby="contact-title"><div className="section-index dark-index">N / 05</div><div className="contact-grid"><div className="contact-copy reveal"><p className="eyebrow dark"><span className="eyebrow-dot" /> Sua viagem começa aqui</p><h2 id="contact-title">Conte o plano.<br />A gente organiza <em>o caminho.</em></h2><p>Envie datas, número de pessoas, hospedagem e o que gostaria de viver. Você pode começar apenas pelo transfer ou deixar o concierge conectar toda a experiência.</p></div><div className="contact-card reveal"><span className="card-region">CONCIERGE NATIVOS</span><h3>Planejar minha viagem</h3><p>Transfer, motorista, concierge, grupos, eventos e experiências em Trancoso.</p><a className="form-submit" href={wa("Olá! Gostaria de planejar minha viagem com a Nativos Experiences. Datas: | Pessoas: | Hospedagem: | Preciso de:")} target="_blank" rel="noreferrer">Abrir conversa no WhatsApp</a><a className="contact-email" href="mailto:contato@nativosexperiences.com">contato@nativosexperiences.com</a></div></div></section>
    <Footer />
  </main>;
}
