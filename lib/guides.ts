// Casa de Areia: conteúdo editorial de SEO — guias que respondem dúvidas reais de busca
// sobre a região e convertem em reserva através de CTA para a página de serviço certa.

export type GuideFaq = { question: string; answer: string };
export type GuideSection = { heading: string; body: string };

export type GuideData = {
  slug: string;
  kicker: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  updatedAt: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
  relatedServiceSlug: string;
  relatedServiceLabel: string;
  relatedGuideSlugs: string[];
};

export const guides: Record<string, GuideData> = {
  "como-chegar-em-trancoso": {
    slug: "como-chegar-em-trancoso",
    kicker: "GUIA · TRANCOSO",
    title: "Como chegar em Trancoso: todas as formas, e qual escolher",
    seoTitle: "Como Chegar em Trancoso: Guia Completo 2026",
    seoDescription: "Avião, balsa, estrada, ônibus ou transfer privativo? Compare tempo, custo e conforto de cada forma de chegar em Trancoso, Bahia, e escolha a certa para você.",
    intro: "Trancoso não tem aeroporto próprio, e isso confunde muita gente na hora de planejar a viagem. A boa notícia é que, hoje, chegar até lá é bem mais simples do que era há alguns anos. Este guia reúne todas as formas de chegada, com tempo, custo aproximado e para quem cada opção faz mais sentido.",
    image: "/images/IXsbtKKPZyLFaNZk.webp",
    imageAlt: "Estrada de acesso a Trancoso, Bahia, ao entardecer",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      {
        heading: "De avião até Porto Seguro",
        body: "O aeroporto mais próximo de Trancoso é o de Porto Seguro (BPS), a cerca de 80 km de distância. Ele recebe voos diários das principais capitais brasileiras, com duração média de 1h40 partindo de São Paulo. Não existe voo comercial direto para Trancoso — todo mundo desembarca em Porto Seguro e segue por terra a partir daí. Duas exceções: o Aeroporto Terravista (SBTV), a cerca de 15 minutos de Trancoso, e o Outeiro das Brisas (SNEC), próximo à Praia do Espelho — mas ambos atendem principalmente aviação executiva ou privada, não voos comerciais regulares.",
      },
      {
        heading: "De Porto Seguro a Trancoso: balsa ou estrada",
        body: "A partir do aeroporto, existem dois caminhos possíveis. O primeiro é a balsa: uma travessia de cerca de 10 minutos sobre o Rio Buranhém até Arraial d'Ajuda, de onde se segue por estrada pavimentada até Trancoso. A balsa custa na faixa de R$ 20 a R$ 25 por veículo (mais barato em dias de semana) e funciona 24 horas — mas em alta temporada e feriados a fila pode passar de uma hora de espera. O segundo caminho é a estrada seca, pela BR-367, sem travessia nenhuma: são cerca de 80 km, 100% asfaltados, com viagem de até 1h20. É a opção mais previsível quando o tempo importa, mas perde o charme da travessia pelo rio.",
      },
      {
        heading: "Preciso de carro 4×4?",
        body: "Não, na maioria dos casos. As estradas principais até Trancoso e entre os destinos mais visitados da região (Arraial d'Ajuda, Trancoso, Praia do Espelho) são pavimentadas ou bem conservadas — um carro popular resolve tranquilamente. A exceção fica por conta de trechos de terra específicos, como o acesso final à Praia do Espelho ou o caminho até Caraíva, que podem ficar mais difíceis depois de chuva forte. Se o seu roteiro não inclui esses trechos finais, não vale pagar a mais por um 4×4.",
      },
      {
        heading: "De ônibus",
        body: "A empresa Águia Azul opera a linha entre Arraial d'Ajuda e Trancoso, com saídas de hora em hora, geralmente entre 6h e 18h45. É a opção mais econômica, mas também a menos flexível: você fica sujeito aos horários da empresa e ainda precisa resolver o trecho até a balsa por conta própria.",
      },
      {
        heading: "De transfer privativo",
        body: "É a forma mais direta: você desembarca em Porto Seguro (ou no Terravista) e o motorista já está esperando, com o veículo certo para o seu grupo e a bagagem. Não tem fila de balsa para negociar, não tem horário de ônibus para encaixar, e não tem a incerteza de chegar num lugar novo sem saber exatamente para onde ir. Para quem está de família, em grupo, ou simplesmente quer começar a viagem sem estresse logo na chegada, costuma ser a opção mais tranquila — principalmente depois de um voo longo.",
      },
    ],
    faqs: [
      { question: "Quanto tempo leva de Porto Seguro a Trancoso?", answer: "Via balsa, de 1h15 a 2h, dependendo da fila. Pela BR-367, sem balsa, até 1h20 em cerca de 80 km." },
      { question: "Trancoso tem aeroporto próprio?", answer: "Não. O aeroporto mais próximo é o de Porto Seguro (BPS), a cerca de 80 km. Existem também o Terravista e o Outeiro das Brisas, voltados à aviação executiva." },
      { question: "Preciso alugar carro 4×4 para ir a Trancoso?", answer: "Não, para chegar até Trancoso e circular entre os principais pontos. Um carro popular resolve. 4×4 só faz diferença em trechos de terra específicos, como o acesso final a algumas praias." },
      { question: "Vale mais a pena ir de balsa ou pela estrada seca?", answer: "A balsa é mais pitoresca, mas pode ter fila longa em alta temporada. A BR-367 é mais previsível em tempo, embora sem a experiência da travessia. Quem tem hora marcada costuma preferir a estrada seca." },
    ],
    relatedServiceSlug: "transfer-aeroporto",
    relatedServiceLabel: "Reservar transfer de aeroporto",
    relatedGuideSlugs: ["quanto-custa-transfer-porto-seguro-trancoso"],
  },

  "quanto-custa-transfer-porto-seguro-trancoso": {
    slug: "quanto-custa-transfer-porto-seguro-trancoso",
    kicker: "GUIA · TRANCOSO",
    title: "Quanto custa o transfer de Porto Seguro para Trancoso",
    seoTitle: "Quanto Custa o Transfer Porto Seguro Trancoso?",
    seoDescription: "Entenda o que influencia o preço do transfer entre o Aeroporto de Porto Seguro e Trancoso: número de passageiros, categoria do veículo, rota e temporada.",
    intro: "O preço de um transfer entre Porto Seguro e Trancoso varia bastante — e entender por que ajuda a comparar propostas e evitar surpresa na hora de fechar. Aqui estão os fatores que realmente pesam na conta, sem tabela genérica que não reflete a sua viagem.",
    image: "/images/OCYafloFONygDrvR.webp",
    imageAlt: "Motorista organizando bagagem em transfer privativo na Bahia",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      {
        heading: "O que muda o preço",
        body: "Cinco fatores respondem pela maior parte da variação: número de passageiros e volume de bagagem (definem a categoria do veículo — de um sedan a uma van), a rota escolhida (via balsa ou pela BR-367 seca), o horário do voo (chegadas de madrugada costumam ter um adicional), a temporada (alta temporada e feriados custam mais em praticamente todos os prestadores da região) e se o transfer é privativo ou compartilhado — o privativo custa mais, mas você não divide o veículo com desconhecidos nem depende do horário de outras pessoas.",
      },
      {
        heading: "Privativo ou compartilhado?",
        body: "Serviços compartilhados (tipo van coletiva) tendem a ser mais baratos, mas você embarca com outros passageiros, faz paradas que não são suas e fica sujeito ao horário de saída deles — não do seu voo. Já o transfer privativo é só para o seu grupo: sai no seu horário, sem escala, com o motorista te esperando mesmo se o voo atrasar. Para quem viaja em família, com crianças, ou simplesmente não quer imprevisto logo na chegada, a diferença de preço costuma valer a pena.",
      },
      {
        heading: "Como comparar propostas",
        body: "Ao pedir cotação, confirme sempre: o preço já inclui a travessia da balsa (quando aplicável)? O motorista acompanha o horário do voo, ou você precisa avisar se atrasar? Existe cobrança extra por bagagem, criança ou horário noturno? Essas perguntas evitam que um preço aparentemente mais baixo vire mais caro na hora de pagar.",
      },
    ],
    faqs: [
      { question: "O transfer privativo é muito mais caro que o compartilhado?", answer: "Costuma custar mais, mas a diferença varia por prestador. Vale pesar o ganho em conforto e flexibilidade — sem escalas, sem esperar por outros passageiros — contra a diferença de preço." },
      { question: "O preço muda entre alta e baixa temporada?", answer: "Sim, em praticamente toda a região. Réveillon, Carnaval e alta temporada costumam ter valores mais altos que o resto do ano." },
      { question: "A travessia da balsa está incluída no preço do transfer?", answer: "Depende do prestador — por isso vale confirmar antes de fechar. Alguns incluem, outros cobram à parte." },
      { question: "Como faço para saber o valor exato do meu transfer?", answer: "Envie origem, destino, data, horário, número de passageiros e bagagem para receber uma cotação personalizada — o preço muda conforme esses detalhes." },
    ],
    relatedServiceSlug: "transfer-porto-seguro-trancoso",
    relatedServiceLabel: "Pedir cotação do meu transfer",
    relatedGuideSlugs: ["como-chegar-em-trancoso"],
  },
};

export const guideSlugs = Object.values(guides).map((g) => g.slug);
export function getGuideBySlug(slug: string) { return guides[slug]; }
