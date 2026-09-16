import Image from "next/image";
import type { Metadata } from "next";
import { Header, Footer, WhatsAppButton } from "@/components/SiteChrome";
import { englishDifferentiatorContent, englishDifferentiators, homeHeroImage, homeServiceImages, homeWelcomeImage, getLocalizedServiceBySlug } from "@/lib/data";
import { EditorialImage } from "@/components/EditorialImage";
import { Differentiators } from "@/components/Differentiators";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Private Luxury Transfer Porto Seguro–Trancoso",
  description: "Private luxury transfer from Porto Seguro Airport to Trancoso, Bahia. Reception at Terravista and Outeiro das Brisas, chauffeur service, concierge, events and an armored vehicle.",
  alternates: { canonical: "/en", languages: { "pt-BR": "https://www.nativosexperiences.com/", en: "https://www.nativosexperiences.com/en", "x-default": "https://www.nativosexperiences.com/" } },
  openGraph: { type: "website", siteName: "Nativos Experiences", locale: "en_US", title: "Private Luxury Transfer Porto Seguro–Trancoso | Nativos Experiences", description: "Private luxury transfer from Porto Seguro Airport to Trancoso, with a local concierge taking care of every detail of your arrival.", url: "https://www.nativosexperiences.com/en" },
  twitter: { card: "summary_large_image", title: "Private Luxury Transfer Porto Seguro–Trancoso | Nativos Experiences", description: "Private luxury transfer, chauffeur service and concierge in Trancoso and the Bahia region." }
};

const wa = (text: string) => `https://wa.me/5573991681630?text=${encodeURIComponent(text)}`;

const pillars = [
  ["01", "Private transfer", "From the airport to your accommodation, with a personalized reception sized to your group.", "/en/transfer-aeroporto"],
  ["02", "Concierge", "Restaurants, beaches, boats, beach clubs, experiences and logistics coordinated by people who live the destination.", "/en/concierge-trancoso"],
  ["03", "Chauffeur service", "A dedicated vehicle for your schedule for 8h, 12h or 24h. Trancoso, on your own time.", "/en/motorista-a-disposicao"],
  ["04", "Groups & events", "Vans, cars and coordinated operations for weddings, celebrations, groups and corporate events.", "/en/casamentos-e-eventos"]
];

const routes = [
  ["Porto Seguro Airport", "Trancoso", "/en/transfer-porto-seguro-trancoso"],
  ["Porto Seguro Airport", "Fasano Trancoso", "/en/transfer-aeroporto-fasano-trancoso"],
  ["Porto Seguro Airport", "Club Med Trancoso", "/en/transfer-aeroporto-club-med-trancoso"],
  ["Terravista Airport", "Trancoso", "/en/transfer-aeroporto"],
  ["Trancoso", "Caraíva", "/en/transfer-trancoso"],
  ["Trancoso", "Praia do Espelho", "/en/passeios"]
];

const arrival = [
  ["01", "Before you arrive", "We collect your flight, accommodation, passengers and luggage to plan the service."],
  ["02", "Monitoring", "The operation tracks your arrival and adjusts the service whenever needed."],
  ["03", "Reception", "Your chauffeur waits, identified, at the agreed point and helps with your luggage."],
  ["04", "The journey", "Private service, comfort, discretion and care on board throughout the route."],
  ["05", "Destination", "You arrive at your accommodation and, if you'd like, the concierge keeps taking care of the days ahead."]
];

const standards = [
  ["Local since 2015", "Real knowledge of the routes, access points, timing and particularities of the region."],
  ["Planned operation", "Every service is organized around the booking, the group's profile and the trip's logistics."],
  ["Comfort on board", "Water, snacks and support items selected to make the journey part of the experience."],
  ["Connectivity", "Starlink available on selected operations to keep you connected along the way."],
  ["Discretion", "Private, reserved service with vehicles free of conspicuous branding."],
  ["One team, the whole trip", "Transfer, chauffeur, concierge, tours, groups and events coordinated through a single point of contact."]
];

export default function EnglishHome() {
  const services = [{ item: getLocalizedServiceBySlug("transfer-aeroporto", "en")!, media: homeServiceImages.airport }, { item: getLocalizedServiceBySlug("motorista-a-disposicao", "en")!, media: homeServiceImages.chauffeur }, { item: getLocalizedServiceBySlug("concierge-trancoso", "en")!, media: homeServiceImages.concierge }];
  const transferFaqs = getLocalizedServiceBySlug("transfer-trancoso", "en")!.faqs;
  const airportFaqs = getLocalizedServiceBySlug("transfer-aeroporto", "en")!.faqs;
  const armoredFaqs = getLocalizedServiceBySlug("transfer-blindado", "en")!.faqs;
  const homeFaqs = [transferFaqs[1], airportFaqs[0], armoredFaqs[0]];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", inLanguage: "en", mainEntity: homeFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

  return <main id="top" className="site-shell sand-theme" lang="en">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <noscript><style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style></noscript><ScrollReveal /><Header locale="en" />

    <section className="hero sand-hero" aria-labelledby="hero-title"><Image className="hero-image" src={homeHeroImage} alt="Private arrival in Trancoso" fill priority sizes="100vw" /><div className="hero-shade" /><div className="hero-content"><p className="eyebrow light"><span className="eyebrow-dot" /> Trancoso · Bahia · Since 2015</p><h1 id="hero-title">Your Trancoso experience<br />starts <em>before you arrive.</em></h1><div className="hero-bottom"><p className="hero-intro">Private mobility, concierge and coordinated experiences from a local team. From touchdown to your last dinner, we take care of it so you only need to live the destination.</p><a className="hero-action" href={wa("Hello! I'm planning a trip to Trancoso and would like to speak with a Nativos Experiences concierge. Dates: | People: | Accommodation:")} target="_blank" rel="noreferrer">Plan my experience</a><span className="hero-trust">Transfer · Concierge · Chauffeur · Groups & Events</span></div></div><div className="hero-meta"><span>NATIVOS EXPERIENCES</span><span className="meta-line" /><span>TRANCOSO / BAHIA</span></div></section>

    <section className="welcome section-light" aria-labelledby="welcome-title"><div className="section-index dark-index">N / 01</div><div className="welcome-grid"><div className="welcome-image reveal"><Image src={homeWelcomeImage} alt="Private reception in Trancoso" fill sizes="(max-width: 800px) 100vw, 50vw" /><span>A calm arrival changes everything.</span></div><div className="welcome-copy reveal"><p className="eyebrow dark"><span className="eyebrow-dot" /> We are from Trancoso</p><h2 id="welcome-title">You bring the plans.<br />We take care <em>of the way there.</em></h2><p>We know the destination inside out: airports, roads, beaches, schedules, access points and the rhythm of every season. We don't just hand you a car. We coordinate your arrival and everything that makes sense after it.</p><WhatsAppButton label="Talk to a concierge" href={wa("Hello! I would like to speak with a Nativos Experiences concierge about my trip to Trancoso.")} /></div></div></section>

    <section className="experiences section-sand" aria-labelledby="journey-title"><div className="section-head reveal"><div><p className="eyebrow dark"><span className="eyebrow-dot" /> One team, start to finish</p><h2 id="journey-title">The whole trip,<br /><em>connected.</em></h2></div><p className="section-note">Choose what you need right now. If you'd like, we'll connect the services and handle the full logistics.</p></div><div className="experience-list">{pillars.map(([n,title,text,href]) => <a className="experience-card reveal" href={href} key={title}><div className="experience-info"><div><p className="card-region">{n} · NATIVOS EXPERIENCES</p><h3>{title}</h3></div><p className="card-description">{text}<br /><strong>Learn more →</strong></p></div></a>)}</div></section>

    <section className="fleet-section section-dark" aria-labelledby="standard-title"><div className="section-index">N / 02</div><div className="fleet-head reveal"><p className="eyebrow light"><span className="eyebrow-dot" /> The Nativos standard</p><h2 id="standard-title">Luxury is when everything<br /><em>works effortlessly.</em></h2><p>Our standard comes from attention to detail: the right information, the right category, a prepared team, and someone looking after the next step.</p></div><div className="fleet-grid">{standards.map(([title,text],i) => <div className="fleet-item reveal" key={title}><span className="step-no">{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>

    <section className="experiences section-light" aria-labelledby="routes-title"><div className="section-head reveal"><div><p className="eyebrow dark"><span className="eyebrow-dot" /> Most requested routes</p><h2 id="routes-title">From touchdown<br /><em>to the right destination.</em></h2></div><p className="section-note">Private routes planned around passengers, luggage, timing and accommodation.</p></div><div className="experience-list">{routes.map(([from,to,href],i) => <a className="experience-card reveal" href={href} key={`${from}-${to}`}><div className="experience-info"><div><p className="card-region">ROUTE {String(i+1).padStart(2,"0")}</p><h3>{from}<br />→ {to}</h3></div><p className="card-description">Private reception and transfer, planned around your operation.<br /><strong>See route →</strong></p></div></a>)}</div></section>

    <section className="fleet-section section-dark" aria-labelledby="arrival-title"><div className="section-index">N / 03</div><div className="fleet-head reveal"><p className="eyebrow light"><span className="eyebrow-dot" /> How it works</p><h2 id="arrival-title">From confirmation<br /><em>to your door.</em></h2><p>A simple protocol to keep your arrival predictable, comfortable and hassle-free.</p></div><div className="fleet-grid">{arrival.map(([n,title,text]) => <div className="fleet-item reveal" key={n}><span className="step-no">{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><div className="fleet-note"><a className="hero-action" href={wa("Hello! I would like to request a transfer. Date: | Flight: | Origin: | Destination/accommodation: | Passengers: | Luggage:")} target="_blank" rel="noreferrer">Request transfer</a></div></section>

    <section id="services" className="experiences section-sand" aria-labelledby="services-title"><div className="section-head reveal"><div><p className="eyebrow dark"><span className="eyebrow-dot" /> Beyond the arrival</p><h2 id="services-title">Trancoso at your pace,<br /><em>without building the logistics yourself.</em></h2></div><p className="section-note">Mobility and concierge work together to turn your schedule into an experience.</p></div><div className="experience-list">{services.map(({ item, media }, index) => <a className="experience-card reveal" href={`/en/${item.slug}`} key={item.type}><EditorialImage className="experience-image-wrap" src={media.image} alt={media.imageAlt} imageFocus={media.imageFocus} imageFocusMobile={media.imageFocusMobile} imageFit={media.imageFit} imageFitMobile={media.imageFitMobile}><span className="card-number">{String(index + 1).padStart(2, "0")}</span></EditorialImage><div className="experience-info"><div><p className="card-region">Nativos Experiences</p><h3>{item.title}</h3></div><p className="card-description">{item.intro}</p></div></a>)}</div></section>

    <section id="fleet" className="fleet-section section-dark" aria-labelledby="fleet-title"><div className="section-index">N / 04</div><div className="fleet-head reveal"><p className="eyebrow light"><span className="eyebrow-dot" /> The right category for every trip</p><h2 id="fleet-title">Choose the standard.<br /><em>We handle the rest.</em></h2><p>From compact categories to premium SUVs, vans and the armored Mercedes-Benz GLE 400d — <strong>the only armored vehicle for executive transfer in the region</strong>. The category is confirmed based on passengers, luggage and the operation's needs; the exact model may vary by availability.</p><a className="hero-action" href="/en/frota">View the fleet</a></div></section>

    <section id="destinations" className="destinations section-light" aria-labelledby="destinations-title"><div className="destination-image reveal"><Image src={getLocalizedServiceBySlug("destinos", "en")!.image} alt="Beach on the Discovery Coast" fill sizes="(max-width: 800px) 100vw, 50vw" /><span>the destination begins on the way</span></div><div className="destination-copy reveal"><p className="eyebrow dark"><span className="eyebrow-dot" /> Local curation</p><h2 id="destinations-title">One stay,<br /><em>many possibilities.</em></h2><p>Restaurants, beaches, boats, beach clubs, parties and experiences. Tell us about your trip and our concierge will help connect the days, the timing and the transfers.</p><div className="destination-list">{["Trancoso","Arraial d'Ajuda","Praia do Espelho","Caraíva","Santo André","Corumbau","Itacaré"].map((destination,i) => <span key={destination}><i>{String(i + 1).padStart(2, "0")}</i>{destination}</span>)}</div><WhatsAppButton label="Plan my experience" href={wa("Hello! I would like the concierge's help planning my experience in Trancoso. Dates: | People: | Interests:")} /></div></section>

    <section id="reviews" className="testimonials section-light" aria-labelledby="reviews-title"><div className="section-head reveal"><div><p className="eyebrow dark"><span className="eyebrow-dot" /> Real experiences</p><h2 id="reviews-title">Guests who arrive with Nativos<br /><em>feel the difference.</em></h2></div><p className="section-note">See public reviews and hear from people who have already traveled with us.</p></div><div className="testimonial-list">{[{quote:"An attentive team that knows every detail of the region — discreet from start to finish.",context:"Couple, September 2026"},{quote:"Spotless car, an attentive chauffeur, and a sense of security from the first mile to the last.",context:"Family trip, August 2025"},{quote:"Punctuality, comfort and a level of service that made a difference throughout the whole stay.",context:"Trip with friends, August 2025"}].map((t)=><div className="testimonial-card reveal" key={t.context}><p>&ldquo;{t.quote}&rdquo;</p><span>{t.context}</span></div>)}</div><a className="text-link" href="https://www.tripadvisor.com.br/Attraction_Review-g303279-d33405648-Reviews-Nativos_Transfer_Trancoso-Trancoso_Porto_Seguro_State_of_Bahia.html" target="_blank" rel="noreferrer">See all reviews on TripAdvisor</a></section>

    <section id="faq" className="home-faq section-sand" aria-labelledby="faq-title"><div className="section-head reveal"><div><p className="eyebrow dark"><span className="eyebrow-dot" /> Frequently asked questions</p><h2 id="faq-title">Before you book,<br /><em>get your answers.</em></h2></div></div><div className="service-faqs">{homeFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>

    <Differentiators items={englishDifferentiators} content={englishDifferentiatorContent.home} />
    <section id="contact" className="contact sand-contact" aria-labelledby="contact-title"><div className="section-index dark-index">N / 05</div><div className="contact-grid"><div className="contact-copy reveal"><p className="eyebrow dark"><span className="eyebrow-dot" /> Your trip starts here</p><h2 id="contact-title">Tell us the plan.<br />We'll organize <em>the way there.</em></h2><p>Send us your dates, number of people, accommodation and what you'd like to experience. You can start with just the transfer, or let the concierge connect the whole experience.</p></div><div className="contact-card reveal"><span className="card-region">NATIVOS CONCIERGE</span><h3>Plan my trip</h3><p>Transfer, chauffeur, concierge, groups, events and experiences in Trancoso.</p><a className="form-submit" href={wa("Hello! I would like to plan my trip with Nativos Experiences. Dates: | People: | Accommodation: | I need:")} target="_blank" rel="noreferrer">Open WhatsApp chat</a><a className="contact-email" href="mailto:contato@nativosexperiences.com">contato@nativosexperiences.com</a></div></div></section>
    <Footer locale="en" />
  </main>;
}
