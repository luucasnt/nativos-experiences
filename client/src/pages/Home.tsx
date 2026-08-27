// Direção visual: Horizonte Sintético — conteúdo em trajetória vertical, portais assimétricos, tipografia editorial e CTAs orientados à ação.
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Check, Compass, Instagram, Menu, MoveRight, Sparkles, X } from "lucide-react";

const heroImage = "/manus-storage/nativos-hero_9f65d1d5.jpg";
const markImage = "/manus-storage/nativos-mark-symbol_c3c49ab2.png";
const experienceImages = [
  "/manus-storage/nativos-experience-01_c1d06b7a.jpg",
  "/manus-storage/nativos-experience-02_6336aaa1.jpg",
  "/manus-storage/nativos-experience-03_255ffbb6.jpg",
];

const experiences = [
  { number: "01", region: "Litoral nordestino", title: "Mesa de origem", type: "Gastronomia · Cultura", image: experienceImages[0], description: "Sabores, histórias e encontros desenhados com quem faz o território acontecer." },
  { number: "02", region: "Cerrado brasileiro", title: "O caminho secreto", type: "Natureza · Expedição", image: experienceImages[1], description: "Uma travessia fora do óbvio, entre água, silêncio e paisagens que pedem presença." },
  { number: "03", region: "Ateliê brasileiro", title: "Matéria viva", type: "Arte · Imersão", image: experienceImages[2], description: "O gesto de criar como porta de entrada para uma cultura que ainda está em movimento." },
];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <button className={`brand ${compact ? "brand--compact" : ""}`} onClick={() => scrollTo("top")} aria-label="Voltar ao início">
      <img src={markImage} alt="" />
      <span><b>nativos</b><small>experiences</small></span>
    </button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
    return () => reveal.disconnect();
  }, []);

  return (
    <main id="top" className="site-shell">
      <header className="nav-wrap">
        <div className="nav-inner">
          <Logo />
          <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Navegação principal">
            <a href="#experiencias" onClick={() => setMenuOpen(false)}>Experiências <span>01</span></a>
            <a href="#metodo" onClick={() => setMenuOpen(false)}>Como fazemos <span>02</span></a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Fale com a gente <span>03</span></a>
          </nav>
          <a className="nav-cta" href="#contato">Começar uma conversa <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={heroImage} alt="Canoa atravessando um rio amazônico ao entardecer" />
        <div className="hero-shade" />
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-content">
          <p className="eyebrow light"><span className="eyebrow-dot" /> Curadoria de experiências brasileiras</p>
          <h1 id="hero-title">O Brasil que não aparece no caminho <em>mais fácil.</em></h1>
          <div className="hero-bottom">
            <p className="hero-intro">A gente abre portas para encontros que não cabem em um roteiro pronto — e desenha cada detalhe para você chegar mais perto do que importa.</p>
            <button className="hero-action" onClick={() => scrollTo("experiencias")}>Explorar possibilidades <MoveRight size={18} /></button>
          </div>
        </div>
        <div className="hero-meta"><span>03° 14' S</span><span className="meta-line" /><span>Experiências com origem</span></div>
        <div className="scroll-cue"><ArrowDownRight size={17} /><span>deslize para descobrir</span></div>
      </section>

      <section className="manifesto section-dark" aria-labelledby="manifesto-title">
        <div className="section-index">N / 00</div>
        <div className="manifesto-grid">
          <div className="manifesto-title reveal"><p className="eyebrow"><span className="eyebrow-dot" /> Não é sobre ir mais longe</p><h2 id="manifesto-title">É sobre <em>sentir</em> mais fundo.</h2></div>
          <div className="manifesto-copy reveal"><p>O Brasil é imenso demais para ser resumido a uma lista de pontos turísticos. Por isso, a Nativos aproxima você de pessoas, paisagens e saberes que revelam um lugar por dentro.</p><p>Experiências autorais para quem quer voltar com mais do que fotos: com uma nova referência de mundo.</p><button className="text-link" onClick={() => scrollTo("metodo")}>Entender nosso olhar <ArrowUpRight size={17} /></button></div>
        </div>
        <div className="orbit-line" />
      </section>

      <section id="experiencias" className="experiences section-light portal-field" aria-labelledby="experiences-title">
        <div className="section-head reveal"><div className="trajectory-label">TRILHA / 01 <span /> ABRIR UM PORTAL</div><div><p className="eyebrow dark"><span className="eyebrow-dot" /> Portais de descoberta</p><h2 id="experiences-title">Escolha por onde<br /><em>começar.</em></h2></div><p className="section-note">Cada experiência nasce de uma escuta. A gente seleciona o que é raro, constrói o acesso e deixa espaço para o inesperado.</p></div>
        <div className="experience-list">
          {experiences.map((item) => <article className="experience-card reveal" key={item.number}>
            <div className="experience-image-wrap"><span className="portal-line" /><img src={item.image} alt={item.title} /><span className="card-number">{item.number}</span><span className="card-arrow"><ArrowUpRight size={18} /></span></div>
            <div className="experience-info"><div><p className="card-region">{item.region}</p><h3>{item.title}</h3><p className="card-type">{item.type}</p></div><p className="card-description">{item.description}</p></div>
          </article>)}
        </div>
        <div className="experience-footer"><span>Não encontrou o que imaginava?</span><button className="text-link" onClick={() => scrollTo("contato")}>Conte o que você procura <ArrowUpRight size={17} /></button></div>
      </section>

      <section id="metodo" className="method section-dark" aria-labelledby="method-title">
        <div className="section-index">N / 02</div>
        <div className="method-top reveal"><p className="eyebrow light"><span className="eyebrow-dot" /> Do primeiro mapa ao último detalhe</p><h2 id="method-title">Curadoria não é<br /><em>complicar.</em> É saber escolher.</h2></div>
        <div className="method-steps">
          {["Escutar", "Conectar", "Desenhar"].map((step, i) => <div className="method-step reveal" key={step}><span className="step-no">0{i + 1}</span><h3>{step}</h3><p>{["Entendemos o que você busca, mesmo quando ainda não tem nome para isso.", "Aproximamos você de quem conhece o território por dentro e cria com verdade.", "Transformamos intenção em uma experiência com ritmo, cuidado e espaço para surpresa."][i]}</p></div>)}
        </div>
        <div className="method-foot"><Sparkles size={16} /><span>O extraordinário começa no detalhe que ninguém vê.</span></div>
      </section>

      <section className="proof section-light" aria-labelledby="proof-title">
        <div className="proof-aside"><Compass size={20} /><span>Para viajantes<br />e marcas</span></div>
        <div className="proof-content reveal"><p className="eyebrow dark"><span className="eyebrow-dot" /> O que nos move</p><h2 id="proof-title">Menos roteiro.<br /><em>Mais presença.</em></h2><p>Para uma viagem especial, uma celebração, uma produção ou uma marca que quer criar conexão de verdade: a Nativos desenha experiências com origem, intenção e beleza.</p><button className="dark-button" onClick={() => scrollTo("contato")}>Desenhar minha experiência <ArrowUpRight size={17} /></button></div>
      </section>

      <section id="contato" className="contact section-dark contact-signal" aria-labelledby="contact-title">
        <div className="contact-orbit" />
        <div className="section-index dark-index">N / 03</div>
        <div className="contact-grid"><div className="contact-copy reveal"><p className="eyebrow dark"><span className="eyebrow-dot" /> O próximo passo é uma conversa</p><h2 id="contact-title">Tem um lugar<br />na cabeça?</h2><p>Conta para a gente. Pode ser uma viagem, um projeto ou só uma vontade ainda sem forma. A primeira resposta começa aqui.</p><div className="contact-details"><span><Check size={15} /> Resposta humana, não automática</span><span><Check size={15} /> Ideias sob medida para o seu momento</span></div></div><form className="contact-form reveal" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          {sent ? <div className="form-success"><Sparkles size={26} /><h3>Recebemos seu sinal.</h3><p>Obrigado por abrir essa conversa. Em breve, a gente continua daqui.</p><button type="button" className="form-reset" onClick={() => setSent(false)}>Enviar outra mensagem</button></div> : <><label>Seu nome<input required name="name" placeholder="Como podemos chamar você?" /></label><label>Seu melhor contato<input required type="email" name="email" placeholder="voce@email.com" /></label><label>O que você quer criar?<textarea required name="message" placeholder="Uma viagem, um projeto, uma ideia..." rows={3} /></label><button className="form-submit" type="submit">Enviar meu sinal <ArrowUpRight size={18} /></button><small>Ao enviar, você inicia uma conversa — sem compromisso.</small></>}
        </form></div>
      </section>

      <footer className="footer section-dark"><Logo compact /><div className="footer-center"><span>Experiências com origem.</span><span>Brasil, de dentro para fora.</span></div><div className="footer-right"><a href="#top">Voltar ao topo <ArrowUpRight size={15} /></a><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Nativos Experiences</span><span>Feito para quem escolhe sentir.</span></div></footer>
    </main>
  );
}
