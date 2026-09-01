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
  "balsa-ou-estrada-para-trancoso": {
    slug: "balsa-ou-estrada-para-trancoso",
    kicker: "GUIA · TRANCOSO",
    title: "Balsa ou estrada para Trancoso? Como escolher",
    seoTitle: "Balsa ou Estrada para Trancoso: Qual Escolher?",
    seoDescription: "Compare a travessia de balsa em Arraial d'Ajuda com a estrada seca pela BR-367 até Trancoso: tempo, fila, custo e quando cada opção vale mais a pena.",
    intro: "Essa é uma das primeiras decisões de quem chega em Porto Seguro de carro: atravessar de balsa até Arraial d'Ajuda ou seguir pela estrada seca até Trancoso. As duas funcionam bem — a diferença está no que você valoriza mais na viagem.",
    image: "/images/gsTpXZOkVNducwum.webp",
    imageAlt: "Vista da travessia de balsa entre Porto Seguro e Arraial d'Ajuda",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Como funciona a balsa", body: "A balsa cruza o Rio Buranhém entre Porto Seguro e Arraial d'Ajuda em cerca de 10 minutos, funcionando 24 horas por dia. O custo fica entre R$ 20 e R$ 25 por veículo, um pouco mais caro em fins de semana e feriados. O grande porém é a fila: em dias normais é rápida, mas em alta temporada, Réveillon e Carnaval pode passar de uma hora de espera — e não tem como prever com exatidão." },
      { heading: "Como funciona a estrada seca", body: "A BR-367 liga Porto Seguro a Trancoso sem nenhuma travessia, 100% asfaltada, com cerca de 80 km e até 1h20 de viagem em condições normais de trânsito. É mais previsível: o tempo não depende de fila nem de horário de funcionamento, só das condições da estrada." },
      { heading: "Quando escolher cada uma", body: "Se você tem hora marcada — check-in, voo de conexão, compromisso — a estrada seca é mais segura porque o tempo não varia. Se você está sem pressa e quer aproveitar a paisagem do rio, a balsa vale a experiência, principalmente fora de alta temporada. Quem viaja de transfer privativo não precisa decidir sozinho: o motorista já sabe qual rota está mais rápida no dia e horário da sua chegada." },
    ],
    faqs: [
      { question: "Quanto tempo demora a fila da balsa?", answer: "Em dias normais, poucos minutos. Em alta temporada, Réveillon e Carnaval, pode passar de uma hora — não há garantia." },
      { question: "A estrada seca tem pedágio?", answer: "Não é uma via pedagiada; o custo da viagem depende do transporte escolhido, não de pedágio na BR-367." },
      { question: "Qual rota um transfer privativo costuma usar?", answer: "Varia conforme o horário e as condições do dia. Um motorista local avalia qual caminho está mais rápido no momento da sua chegada." },
    ],
    relatedServiceSlug: "transfer-porto-seguro-trancoso",
    relatedServiceLabel: "Reservar Porto Seguro — Trancoso",
    relatedGuideSlugs: ["como-chegar-em-trancoso", "quanto-custa-transfer-porto-seguro-trancoso"],
  },

  "como-chegar-em-caraiva-sem-carro": {
    slug: "como-chegar-em-caraiva-sem-carro",
    kicker: "GUIA · CARAÍVA",
    title: "Como chegar em Caraíva (a vila não tem carro)",
    seoTitle: "Como Chegar em Caraíva: Guia Sem Carro 2026",
    seoDescription: "Caraíva não tem circulação de veículos. Entenda como chegar até lá, a travessia de canoa, e o que saber antes de ir a essa vila da Bahia.",
    intro: "Caraíva é diferente de qualquer outro destino da região por um motivo simples: não entra carro na vila. As ruas são de areia, e a última etapa da viagem é sempre uma travessia de canoa. Isso pega muita gente de surpresa — este guia explica exatamente como funciona.",
    image: "/images/juCISiyVGtGMuEWJ.jpg",
    imageAlt: "Vegetação e praia próximas à vila de Caraíva, Bahia",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "O trajeto até a margem do rio", body: "De carro, van ou transfer, você chega até Nova Caraíva, no lado oposto do Rio Caraíva. De Trancoso são cerca de 33 km, boa parte em estrada de terra — dá para ir com qualquer carro em dias secos, mas alguns trechos ficam esburacados depois de chuva forte. Quem vem de carro próprio deixa o veículo num dos estacionamentos vigiados (em torno de R$ 30 por dia)." },
      { heading: "A travessia de canoa", body: "Da margem até a vila, a travessia é feita em canoas operadas pelos próprios moradores, funcionando 24 horas. Dura menos de 5 minutos e custa entre R$ 5 e R$ 10 por pessoa. Não tem outra forma de entrar: nem carro, nem moto, nem bicicleta atravessam — só a pé, de canoa." },
      { heading: "O que saber antes de ir", body: "Dentro da vila, os deslocamentos são a pé, de charrete (para bagagem) ou de bicicleta. Leve roupas leves e evite malas com rodinha — as ruas de areia não são amigáveis com elas. Tenha dinheiro em espécie: o sinal de internet é instável, e as maquininhas de cartão às vezes não funcionam. A energia elétrica chegou em 2007 e as ruas não têm iluminação pública, então uma lanterna ou o celular ajudam à noite." },
    ],
    faqs: [
      { question: "Dá para entrar em Caraíva de carro?", answer: "Não. Veículos motorizados não circulam na vila. Você deixa o carro em Nova Caraíva e atravessa o rio de canoa." },
      { question: "Quanto custa a travessia de canoa?", answer: "Entre R$ 5 e R$ 10 por pessoa, com travessia funcionando 24 horas." },
      { question: "Preciso de dinheiro em espécie em Caraíva?", answer: "É recomendável. O sinal de internet é instável e nem sempre as maquininhas de cartão funcionam." },
      { question: "Quanto tempo leva de Trancoso a Caraíva?", answer: "Cerca de 33 km até a margem do rio, seguidos da travessia de canoa. O tempo total varia conforme a condição da estrada." },
    ],
    relatedServiceSlug: "transfer-trancoso",
    relatedServiceLabel: "Planejar meu trajeto até Caraíva",
    relatedGuideSlugs: ["como-chegar-em-trancoso", "trilha-praia-do-espelho-caraiva"],
  },

  "praia-do-espelho-mare-baixa": {
    slug: "praia-do-espelho-mare-baixa",
    kicker: "GUIA · PRAIA DO ESPELHO",
    title: "Praia do Espelho: por que o horário da maré importa",
    seoTitle: "Praia do Espelho: Horário da Maré Baixa 2026",
    seoDescription: "As piscinas naturais da Praia do Espelho só aparecem na maré baixa. Veja como consultar o horário certo e não perder o principal atrativo da praia.",
    intro: "Chegar na Praia do Espelho na hora errada da maré é o erro mais comum de quem visita pela primeira vez — e também o mais fácil de evitar, se você souber o que procurar antes de ir.",
    image: "/images/KIZKtHuAwdfwuLtz.webp",
    imageAlt: "Piscinas naturais e recifes na Praia do Espelho, Bahia",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Por que a maré muda tudo", body: "O principal atrativo da Praia do Espelho são as piscinas naturais formadas pelos recifes de corais — mas elas só ficam visíveis e navegáveis na maré baixa. Na maré alta, a água cobre os recifes e a praia perde boa parte do encanto que aparece nas fotos. Não é uma questão de sorte: é só uma questão de horário." },
      { heading: "Como saber o horário da maré baixa", body: "O horário muda todos os dias, então vale consultar uma tábua de maré atualizada (tem opções gratuitas online) na véspera da visita, não com muita antecedência. O ideal é chegar cerca de 1h antes do horário de maré mais baixa, para aproveitar a janela completa antes da água voltar a subir." },
      { heading: "Planejando a chegada", body: "A praia fica a cerca de 25 km de Trancoso, boa parte em estrada de terra — o acesso final costuma exigir carro com boa distância do solo, e pode ficar mais difícil depois de chuva. Se o seu roteiro depende de estar lá num horário específico por causa da maré, vale garantir um transporte que chegue pontualmente, sem depender de horário de ônibus ou passeio em grupo." },
    ],
    faqs: [
      { question: "As piscinas naturais aparecem em qualquer horário?", answer: "Não. Elas só ficam visíveis e acessíveis na maré baixa. Na maré alta, os recifes ficam submersos." },
      { question: "Como sei o horário da maré baixa no dia da minha visita?", answer: "Consulte uma tábua de maré atualizada, de preferência na véspera — o horário muda diariamente." },
      { question: "Quanto tempo antes da maré baixa devo chegar?", answer: "O ideal é chegar cerca de 1 hora antes do horário de maré mais baixa para aproveitar toda a janela." },
    ],
    relatedServiceSlug: "passeios",
    relatedServiceLabel: "Planejar meu passeio à Praia do Espelho",
    relatedGuideSlugs: ["trilha-praia-do-espelho-caraiva", "como-chegar-em-trancoso"],
  },

  "e-seguro-chegar-em-trancoso-sozinho": {
    slug: "e-seguro-chegar-em-trancoso-sozinho",
    kicker: "GUIA · TRANCOSO",
    title: "É seguro chegar em Trancoso sozinho?",
    seoTitle: "É Seguro Chegar em Trancoso Sozinho? O Que Saber",
    seoDescription: "O que esperar do desembarque em Porto Seguro rumo a Trancoso, incluindo abordagens de terceiros no aeroporto, e como evitar dor de cabeça na chegada.",
    intro: "É uma pergunta que aparece com frequência em fóruns de viagem, e tem uma resposta direta: sim, é seguro — mas vale saber o que esperar do desembarque para não ser pego de surpresa.",
    image: "/images/jPyGigNXWIoKvSaN.webp",
    imageAlt: "Recepção tranquila de passageiro no desembarque em Porto Seguro",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "O que pode acontecer no desembarque", body: "Alguns viajantes relatam ser abordados por pessoas se oferecendo como guias ou informantes assim que saem do aeroporto de Porto Seguro, pedindo dinheiro para ajudar com bagagem ou orientação. Não é um risco à segurança física, mas pode ser desconfortável, principalmente para quem está sozinho e sem saber exatamente para onde ir." },
      { heading: "Como evitar o desconforto", body: "A forma mais simples é já saber exatamente quem vai te buscar e onde. Quem tem um transfer reservado com antecedência normalmente é recebido já dentro da área de desembarque, com o motorista segurando uma placa com seu nome — o que elimina qualquer dúvida sobre quem seguir e corta pela raiz a abordagem de terceiros. Se você optar por táxi ou aplicativo, combine o ponto de encontro antes de sair do saguão e evite negociar transporte com quem te aborda no caminho." },
      { heading: "Fora do aeroporto", body: "Trancoso em si é um destino tranquilo, com boa infraestrutura turística e fluxo constante de visitantes. As mesmas precauções básicas de qualquer viagem — não exibir objetos de valor à toa, evitar áreas desertas à noite — se aplicam normalmente, sem necessidade de cuidado extra além disso." },
    ],
    faqs: [
      { question: "É seguro viajar sozinho para Trancoso?", answer: "Sim. É um destino turístico consolidado, com boa infraestrutura. A principal atenção é no desembarque em Porto Seguro, onde pode haver abordagem de terceiros oferecendo serviços não solicitados." },
      { question: "Como evito ser abordado no aeroporto?", answer: "Reservar um transfer com antecedência, com o motorista te recebendo já com uma placa de identificação, é a forma mais direta de evitar esse tipo de abordagem." },
      { question: "Preciso negociar transporte com quem me aborda no aeroporto?", answer: "Não é recomendável. O ideal é combinar o transporte antes da viagem ou usar táxis e aplicativos com ponto de encontro já definido." },
    ],
    relatedServiceSlug: "transfer-aeroporto",
    relatedServiceLabel: "Reservar recepção no aeroporto",
    relatedGuideSlugs: ["como-chegar-em-trancoso", "quanto-custa-transfer-porto-seguro-trancoso"],
  },

  "quantos-dias-ficar-em-trancoso": {
    slug: "quantos-dias-ficar-em-trancoso",
    kicker: "GUIA · TRANCOSO",
    title: "Quantos dias ficar em Trancoso: um roteiro sensato",
    seoTitle: "Quantos Dias Ficar em Trancoso? Roteiro 2026",
    seoDescription: "De 3 a 4 dias até uma semana: veja quanto tempo faz sentido ficar em Trancoso conforme o que você quer conhecer, incluindo Caraíva e Praia do Espelho.",
    intro: "Não existe um número mágico, mas dá para pensar de forma prática: quanto mais você quer sair de Trancoso para conhecer os arredores, mais dias vale reservar.",
    image: "/images/tqJLnuypRYdQzANN.webp",
    imageAlt: "Praia da região de Trancoso ao entardecer",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "3 a 4 dias: só Trancoso", body: "Esse período é suficiente para curtir bem o Quadrado, conhecer 2 ou 3 praias com calma e aproveitar os restaurantes sem pressa. Funciona bem para quem já esteve na região antes ou tem tempo de viagem limitado." },
      { heading: "5 a 7 dias: Trancoso + bate-voltas", body: "Com uma semana, dá para reservar pelo menos um dia inteiro para a Praia do Espelho (lembrando de checar a maré baixa) e outro para Caraíva, que vale mais a pena com ao menos uma noite hospedado do que só um passeio rápido, segundo quem já fez os dois formatos." },
      { heading: "Mais de uma semana", body: "Se o tempo permitir, vale considerar ficar hospedado diretamente em Caraíva por 2 a 3 noites (em vez de só bate-volta), e incluir Arraial d'Ajuda no roteiro. Itacaré não entra nessa conta — fica em outra região da Bahia e pede uma viagem à parte." },
    ],
    faqs: [
      { question: "Qual o mínimo de dias para conhecer Trancoso?", answer: "3 dias já permitem uma boa experiência do Quadrado e das praias principais, mas 4 dias dão mais folga para não correr." },
      { question: "Preciso de quantos dias para incluir Caraíva no roteiro?", answer: "Um bate-volta é possível em um dia, mas para sentir a vibe local vale reservar ao menos uma noite hospedado lá." },
      { question: "Dá para conhecer Trancoso e Itacaré na mesma viagem?", answer: "São regiões diferentes da Bahia, sem proximidade direta. O ideal é tratar como duas viagens, não uma extensão da outra." },
    ],
    relatedServiceSlug: "passeios",
    relatedServiceLabel: "Planejar meu roteiro",
    relatedGuideSlugs: ["arraial-dajuda-ou-trancoso-onde-ficar", "como-chegar-em-caraiva-sem-carro"],
  },

  "arraial-dajuda-ou-trancoso-onde-ficar": {
    slug: "arraial-dajuda-ou-trancoso-onde-ficar",
    kicker: "GUIA · ARRAIAL D'AJUDA",
    title: "Arraial d'Ajuda ou Trancoso: onde se hospedar",
    seoTitle: "Arraial d'Ajuda ou Trancoso: Onde Ficar?",
    seoDescription: "Comparação direta entre Arraial d'Ajuda e Trancoso para quem está decidindo onde se hospedar na Costa do Descobrimento, Bahia.",
    intro: "Os dois ficam próximos, mas têm perfis bem diferentes. A escolha certa depende menos de qual é 'melhor' e mais do tipo de viagem que você quer ter.",
    image: "/images/allohvlHTfuVZZST.webp",
    imageAlt: "Caminho arborizado em direção à praia na Costa do Descobrimento",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Trancoso: charme e discrição", body: "O Quadrado de Trancoso é o cartão-postal da região — casario colorido, gastronomia elevada e um clima mais reservado. É a escolha mais comum para quem busca sofisticação discreta e não se importa com preços um pouco mais altos, principalmente em alta temporada." },
      { heading: "Arraial d'Ajuda: mais agito e opções de preço", body: "Arraial tem vida noturna mais movimentada, maior variedade de hospedagem (de econômica a luxo) e fica mais perto da balsa, o que facilita idas e vindas de Porto Seguro. É uma boa base para quem quer circular bastante pela região sem gastar tanto com deslocamento." },
      { heading: "Como decidir", body: "Se o foco da viagem é relaxar com boa gastronomia e cenário elegante, Trancoso tende a entregar mais. Se você quer opções variadas de preço, mais agito à noite e fácil acesso a outros pontos da região, Arraial d'Ajuda cumpre bem esse papel. De qualquer forma, a distância entre os dois é pequena — muita gente hospeda num e visita o outro no mesmo dia." },
    ],
    faqs: [
      { question: "Trancoso é mais caro que Arraial d'Ajuda?", answer: "Em geral sim, principalmente em alta temporada. Arraial oferece maior variedade de faixas de preço." },
      { question: "Dá para visitar Trancoso hospedado em Arraial d'Ajuda?", answer: "Sim, a distância é curta e o passeio é comum entre quem hospeda em um e quer conhecer o outro." },
      { question: "Qual dos dois tem vida noturna mais movimentada?", answer: "Arraial d'Ajuda costuma ter agenda noturna mais intensa. Trancoso é mais discreto, com o movimento concentrado no Quadrado." },
    ],
    relatedServiceSlug: "transfer-trancoso",
    relatedServiceLabel: "Planejar meu trajeto entre destinos",
    relatedGuideSlugs: ["quantos-dias-ficar-em-trancoso", "como-chegar-em-trancoso"],
  },

  "trilha-praia-do-espelho-caraiva": {
    slug: "trilha-praia-do-espelho-caraiva",
    kicker: "GUIA · PRAIA DO ESPELHO",
    title: "Trilha da Praia do Espelho até Caraíva: vale a pena?",
    seoTitle: "Trilha Praia do Espelho até Caraíva: Vale a Pena?",
    seoDescription: "A trilha de cerca de 10 km entre a Praia do Espelho e Caraíva passa por rios, lagoas e falésias. Veja o que saber antes de encarar o percurso.",
    intro: "Para quem gosta de caminhar e quer ver um lado mais selvagem da região, a trilha entre a Praia do Espelho e Caraíva é uma das experiências mais lembradas por quem já fez.",
    image: "/images/juCISiyVGtGMuEWJ.jpg",
    imageAlt: "Trilha costeira entre falésias na região de Trancoso",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Como é o percurso", body: "São cerca de 10 km de trilha à beira-mar, passando por rios, lagoas, desfiladeiros e trechos de areia. O caminho é bem sinalizado, mas exige preparo físico razoável — não é uma caminhada leve, principalmente com calor forte." },
      { heading: "O que levar", body: "Água em quantidade generosa, protetor solar, calçado confortável para areia e travessias rasas de rio, e um lanche leve. A maioria das pessoas leva de 3 a 4 horas para completar o trajeto, dependendo do ritmo e das paradas." },
      { heading: "Atenção à maré", body: "Assim como na Praia do Espelho, a maré influencia o percurso: em maré alta, alguns trechos de travessia ficam mais difíceis ou até intransitáveis. Vale checar a tábua de maré antes de sair e planejar para fazer a trilha em maré baixa ou de vazante." },
    ],
    faqs: [
      { question: "Quanto tempo leva a trilha da Praia do Espelho até Caraíva?", answer: "Em média de 3 a 4 horas, dependendo do ritmo e das paradas ao longo do trajeto de cerca de 10 km." },
      { question: "A trilha é difícil?", answer: "Exige preparo físico razoável — não é pesada tecnicamente, mas é longa e passa por areia e travessias, o que cansa mais do que o esperado." },
      { question: "A maré afeta a trilha?", answer: "Sim. Alguns trechos ficam mais difíceis ou intransitáveis em maré alta. O ideal é fazer o percurso em maré baixa ou de vazante." },
    ],
    relatedServiceSlug: "passeios",
    relatedServiceLabel: "Planejar meu passeio na região",
    relatedGuideSlugs: ["praia-do-espelho-mare-baixa", "como-chegar-em-caraiva-sem-carro"],
  },

  "onde-fica-trancoso": {
    slug: "onde-fica-trancoso",
    kicker: "GUIA · TRANCOSO",
    title: "Onde fica Trancoso: localização e distâncias",
    seoTitle: "Onde Fica Trancoso? Mapa e Distâncias 2026",
    seoDescription: "Trancoso fica no sul da Bahia, distrito de Porto Seguro. Veja a distância exata do aeroporto e de outros destinos da Costa do Descobrimento.",
    intro: "Trancoso é um distrito de Porto Seguro, no extremo sul da Bahia, na região conhecida como Costa do Descobrimento — mas isso sozinho não ajuda muito a visualizar o mapa. Aqui vão as distâncias que realmente importam para planejar a viagem.",
    image: "/images/tqJLnuypRYdQzANN.webp",
    imageAlt: "Vista aérea da costa próxima a Trancoso, Bahia",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Distância do aeroporto", body: "O Aeroporto de Porto Seguro (BPS), o principal ponto de chegada da região, fica a cerca de 80 km de Trancoso — entre 1h15 e 2h de viagem, dependendo da rota (balsa ou estrada seca) e do trânsito." },
      { heading: "Distância dos destinos vizinhos", body: "Arraial d'Ajuda fica a cerca de 20 km de Trancoso. A Praia do Espelho, a cerca de 25 km. Caraíva, a cerca de 33 km (a maior parte em estrada de terra). Todos esses trajetos costumam ser feitos em menos de uma hora de carro, salvo imprevistos na estrada." },
      { heading: "Em relação ao resto do Brasil", body: "De São Paulo, o voo até Porto Seguro leva cerca de 1h40. De outras capitais, o tempo varia — mas em geral é considerado um destino de fácil acesso aéreo, com voos diários das principais cidades do país." },
    ],
    faqs: [
      { question: "Trancoso pertence a qual cidade?", answer: "Trancoso é um distrito do município de Porto Seguro, no sul da Bahia." },
      { question: "Qual a distância entre Trancoso e o aeroporto mais próximo?", answer: "Cerca de 80 km até o Aeroporto de Porto Seguro (BPS), entre 1h15 e 2h de viagem conforme a rota." },
      { question: "Trancoso fica perto de Arraial d'Ajuda?", answer: "Sim, cerca de 20 km de distância, um dos trajetos mais curtos da região." },
    ],
    relatedServiceSlug: "transfer-aeroporto",
    relatedServiceLabel: "Reservar meu transfer",
    relatedGuideSlugs: ["como-chegar-em-trancoso", "quantos-dias-ficar-em-trancoso"],
  },

  "quanto-custa-transfer-caraiva": {
    slug: "quanto-custa-transfer-caraiva",
    kicker: "GUIA · CARAÍVA",
    title: "Quanto custa o transfer para Caraíva",
    seoTitle: "Quanto Custa o Transfer para Caraíva? 2026",
    seoDescription: "Entenda o que influencia o preço do transfer até Caraíva a partir de Porto Seguro, Trancoso ou Arraial d'Ajuda, incluindo o trecho final de canoa.",
    intro: "O transfer para Caraíva tem uma particularidade que outros trajetos da região não têm: o preço cobre só até a margem do rio — a travessia final de canoa é sempre à parte.",
    image: "/images/gsTpXZOkVNducwum.webp",
    imageAlt: "Detalhe de conforto em veículo de transfer na Bahia",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "O que compõe o preço", body: "O valor do transfer depende principalmente da origem (Porto Seguro, Trancoso ou Arraial d'Ajuda variam de distância), do número de passageiros, da categoria do veículo e da condição da estrada de terra no trecho final até Nova Caraíva — que costuma ser mais cara de rodar do que estrada asfaltada." },
      { heading: "A travessia de canoa é à parte", body: "Nenhum transfer de carro entra em Caraíva — é fisicamente impossível, já que a vila não recebe veículos. O preço do transfer cobre até a margem do rio; a canoa (entre R$ 5 e R$ 10 por pessoa) é paga separadamente, ali mesmo na travessia." },
      { heading: "Vale contratar transfer privativo até Caraíva?", body: "Para quem viaja com bagagem, crianças ou não quer se preocupar com estrada de terra e horário de ônibus, sim. O motorista conhece as condições da estrada no dia e evita a incerteza de pegar uma via ruim sem saber." },
    ],
    faqs: [
      { question: "O transfer para Caraíva entra na vila?", answer: "Não. Nenhum veículo motorizado circula em Caraíva. O transfer leva até a margem do rio, e a travessia final é sempre de canoa." },
      { question: "A canoa está incluída no preço do transfer?", answer: "Normalmente não. É paga separadamente, na hora da travessia, direto para os canoeiros locais." },
      { question: "O preço muda conforme a origem?", answer: "Sim. Partir de Porto Seguro, Trancoso ou Arraial d'Ajuda resulta em distâncias diferentes, o que afeta o valor final." },
    ],
    relatedServiceSlug: "transfer-trancoso",
    relatedServiceLabel: "Pedir cotação para Caraíva",
    relatedGuideSlugs: ["como-chegar-em-caraiva-sem-carro", "quanto-custa-transfer-porto-seguro-trancoso"],
  },
};

export const guideSlugs = Object.values(guides).map((g) => g.slug);
export function getGuideBySlug(slug: string) { return guides[slug]; }
