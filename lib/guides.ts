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
  "onde-comer-em-trancoso": {
    slug: "onde-comer-em-trancoso",
    kicker: "GUIA · GASTRONOMIA",
    title: "Onde comer em Trancoso: guia do Quadrado e arredores",
    seoTitle: "Onde Comer em Trancoso: Guia de Restaurantes 2026",
    seoDescription: "Restaurantes no Quadrado de Trancoso, dicas de preço, horários de funcionamento e como fugir das mesas cheias em alta temporada.",
    intro: "A gastronomia é um dos grandes motivos para ir a Trancoso — mas o Quadrado tem lógica própria de horários e preços que vale entender antes de sair procurando mesa.",
    image: "/images/cmrgvDdYfvgXvSph.webp",
    imageAlt: "Mesa posta com vista para o mar em Trancoso",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Como funcionam os horários", body: "A maioria dos restaurantes do Quadrado abre só a partir do fim da tarde — early evening, entre 18h e 19h — com pouquíssimas opções para almoço dentro da praça em si. Durante o dia, o movimento gastronômico acontece nas barracas de praia (Nativos, Coqueiros, Rio Verde). O jantar no Quadrado ganha ritmo a partir das 19h e o pico de movimento fica entre 20h e 22h30." },
      { heading: "Como evitar mesa cheia", body: "Segunda a quinta costuma ser mais tranquilo que fim de semana, com menos grupos grandes e mais facilidade para conseguir mesa sem reserva. Em alta temporada, reservar com antecedência (mesmo que seja no mesmo dia, pela manhã) evita frustração — vários dos restaurantes mais procurados enchem rápido." },
      { heading: "Opções por perfil de preço", body: "O Quadrado tem cardápios elevados como padrão, mas dá para economizar sem sair do clima: restaurantes a quilo, saladerias e opções de petisco com drink saem bem mais em conta do que um jantar completo à la carte. Fora do Quadrado imediato, os preços em geral também caem." },
    ],
    faqs: [
      { question: "A que horas os restaurantes do Quadrado abrem?", answer: "A maioria abre a partir de 18h-19h. Poucos funcionam para almoço dentro da praça — o movimento diurno fica mais concentrado nas barracas de praia." },
      { question: "Preciso reservar mesa no Quadrado?", answer: "Em alta temporada, sim — o ideal é reservar com antecedência, mesmo que no mesmo dia. Em baixa temporada, principalmente durante a semana, costuma ser mais tranquilo." },
      { question: "Dá para comer bem gastando pouco no Quadrado?", answer: "Sim, com restaurantes a quilo, saladerias e opções de petisco. Fora da praça imediata, os preços também costumam ser mais acessíveis." },
    ],
    relatedServiceSlug: "motorista-a-disposicao",
    relatedServiceLabel: "Consultar motorista para minha noite",
    relatedGuideSlugs: ["horario-do-quadrado-trancoso", "beach-clubs-em-trancoso"],
  },

  "beach-clubs-em-trancoso": {
    slug: "beach-clubs-em-trancoso",
    kicker: "GUIA · PRAIAS",
    title: "Beach clubs em Trancoso: onde curtir o dia de praia",
    seoTitle: "Beach Clubs em Trancoso: Guia Completo 2026",
    seoDescription: "Praia dos Nativos, Rio Verde e Coqueiros reúnem os principais beach clubs de Trancoso. Veja o perfil de cada praia e como escolher a sua.",
    intro: "Trancoso tem três praias centrais — Nativos, Coqueiros e Rio Verde — cada uma com seu próprio conjunto de beach clubs e um clima diferente. A escolha certa depende do que você quer do dia.",
    image: "/images/KIZKtHuAwdfwuLtz.webp",
    imageAlt: "Praia com beach clubs próxima a Trancoso",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Praia dos Nativos: a mais movimentada", body: "É a praia com maior concentração de beach clubs, incluindo opções voltadas à música e agito no fim de tarde, além de estruturas mais tranquilas com serviço completo de praia. É a mais central, a poucos minutos a pé do Quadrado." },
      { heading: "Praia dos Coqueiros: areia mais fina, clima mais calmo", body: "Fica ao sul do Quadrado, com areia mais fina e mar tranquilo. Reúne beach clubs voltados a uma experiência gastronômica mais elaborada, com estrutura confortável para passar o dia inteiro." },
      { heading: "Praia do Rio Verde: um pouco mais afastada, vista privilegiada", body: "A cerca de 1 km do Quadrado, tem beach clubs com estrutura ampla e costuma ser point de fim de tarde, com música ao vivo em alguns lugares. Boa opção para quem quer um pouco mais de distância do centro sem abrir mão de infraestrutura." },
      { heading: "Um cuidado importante", body: "Nos acessos às praias, é comum encontrar pessoas se identificando como guias — a prefeitura não emprega guias de praia, então vale desconfiar de quem se oferece dessa forma e não seguir orientações não solicitadas." },
    ],
    faqs: [
      { question: "Qual é a praia mais central de Trancoso?", answer: "A Praia dos Nativos, a poucos minutos a pé do Quadrado, é a mais central e uma das mais movimentadas." },
      { question: "Existem guias oficiais nas praias de Trancoso?", answer: "Não. A prefeitura não emprega guias de praia — desconfie de quem se apresenta dessa forma nos acessos." },
      { question: "As praias de Trancoso são conectadas a pé?", answer: "Algumas sim, na maré baixa, caminhando pela areia. Em maré alta, alguns trechos exigem contornar por caminhos alternativos." },
    ],
    relatedServiceSlug: "concierge-trancoso",
    relatedServiceLabel: "Pedir dica de praia ao concierge",
    relatedGuideSlugs: ["onde-comer-em-trancoso", "praia-do-espelho-mare-baixa"],
  },

  "horario-do-quadrado-trancoso": {
    slug: "horario-do-quadrado-trancoso",
    kicker: "GUIA · TRANCOSO",
    title: "Como funciona o Quadrado: horários e ritmo do dia",
    seoTitle: "Horário do Quadrado de Trancoso: Quando Ir",
    seoDescription: "O Quadrado de Trancoso tem hora certa para cada momento: nascer do sol, tarde tranquila e noite movimentada. Veja como planejar sua visita.",
    intro: "O Quadrado não tem um horário de funcionamento único — ele muda de cara ao longo do dia, e saber isso evita chegar num momento morto sem perceber.",
    image: "/images/tqJLnuypRYdQzANN.webp",
    imageAlt: "Praça histórica do Quadrado em Trancoso ao entardecer",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Manhã: quieto, ótimo para fotos", body: "Pela manhã, o Quadrado fica praticamente vazio — a maioria das lojas e restaurantes ainda está fechada. É o melhor horário para quem quer fotografar a praça e a igrejinha de São João Batista sem gente no caminho, ou simplesmente apreciar o silêncio." },
      { heading: "Tarde: começa a esquentar", body: "O movimento começa a crescer a partir de 16h-17h, quando lojas abrem e as primeiras pessoas chegam para ver o entardecer. É um bom horário para caminhar, fazer compras e escolher onde jantar mais tarde." },
      { heading: "Noite: o auge do Quadrado", body: "A partir de 19h os restaurantes abrem para jantar, e o movimento atinge o pico entre 20h e 22h30. Em baixa temporada, o clima é mais tranquilo, com as pessoas indo dormir antes da meia-noite. Em alta temporada, surgem opções de balada que vão além disso." },
      { heading: "Um detalhe prático", body: "O Quadrado não tem iluminação pública nem asfalto — é terra batida, sem trânsito de carros. Use calçado confortável e, se for caminhar depois que escurecer, uma lanterna ou a luz do celular ajudam nos trechos mais afastados dos restaurantes." },
    ],
    faqs: [
      { question: "A que horas o Quadrado fica mais movimentado?", answer: "O pico de movimento é à noite, entre 20h e 22h30, quando a maioria dos restaurantes está funcionando." },
      { question: "O Quadrado funciona de manhã?", answer: "A maioria das lojas e restaurantes permanece fechada pela manhã. É um bom horário para fotos e caminhada tranquila, não para gastronomia." },
      { question: "O Quadrado tem iluminação pública?", answer: "Não. É uma praça de terra batida sem postes de luz — a iluminação vem dos próprios estabelecimentos." },
    ],
    relatedServiceSlug: "motorista-a-disposicao",
    relatedServiceLabel: "Reservar motorista para o Quadrado à noite",
    relatedGuideSlugs: ["onde-comer-em-trancoso", "beach-clubs-em-trancoso"],
  },

  "santo-andre-bahia-o-que-saber": {
    slug: "santo-andre-bahia-o-que-saber",
    kicker: "GUIA · SANTO ANDRÉ",
    title: "Santo André, Bahia: o que saber sobre esse destino",
    seoTitle: "Santo André Bahia: Guia Completo 2026",
    seoDescription: "Santo André é uma vila tranquila na Costa do Descobrimento, próxima a Trancoso, com resorts como Campo Bahia e Vila Angatu. Veja como chegar e o que esperar.",
    intro: "Santo André é uma vila mais discreta que Trancoso, conhecida por reunir alguns dos resorts mais exclusivos da Costa do Descobrimento — incluindo o Campo Bahia e o Vila Angatu Eco Resort & Spa.",
    image: "/images/tqJLnuypRYdQzANN.webp",
    imageAlt: "Praia tranquila na região de Santo André, Bahia",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Onde fica", body: "Santo André fica na Costa do Descobrimento, entre Trancoso e Caraíva, com acesso pela mesma estrada que liga esses dois destinos. A vila é bem menor e mais reservada que Trancoso, com uma vibe mais voltada ao descanso do que ao agito." },
      { heading: "O que encontrar por lá", body: "A vila reúne pousadas e resorts de diferentes portes, praia tranquila e uma estrutura de comércio mais simples que o Quadrado de Trancoso. É um destino que atrai principalmente quem busca privacidade e sossego, sem abrir mão de conforto — os resorts da região costumam ter estrutura completa de restaurante, spa e atividades dentro da própria propriedade." },
      { heading: "Como chegar", body: "O acesso é por estrada a partir de Trancoso, com trechos de terra que podem variar de condição conforme o período de chuva. Assim como em outros pontos da região, um transfer privativo evita a incerteza da estrada e leva direto até a recepção da hospedagem." },
    ],
    faqs: [
      { question: "Santo André é perto de Trancoso?", answer: "Sim, fica na mesma região da Costa do Descobrimento, entre Trancoso e Caraíva, a uma distância de carro relativamente curta." },
      { question: "Santo André tem estrutura de comércio como Trancoso?", answer: "É bem mais simples e discreta. A maior parte da estrutura de lazer e gastronomia fica dentro dos próprios resorts e pousadas da vila." },
      { question: "Quais resorts ficam em Santo André?", answer: "A vila reúne alguns dos resorts mais conhecidos da região, incluindo o Campo Bahia e o Vila Angatu Eco Resort & Spa." },
    ],
    relatedServiceSlug: "transfer-trancoso",
    relatedServiceLabel: "Planejar meu transfer para Santo André",
    relatedGuideSlugs: ["transfer-campo-bahia", "transfer-vila-angatu"],
  },

  "transfer-campo-bahia": {
    slug: "transfer-campo-bahia",
    kicker: "GUIA · SANTO ANDRÉ",
    title: "Transfer para o Campo Bahia: como funciona",
    seoTitle: "Transfer para Campo Bahia: Guia Completo 2026",
    seoDescription: "O Campo Bahia fica em Santo André, na Costa do Descobrimento. Veja a distância do aeroporto de Porto Seguro e como organizar o transfer até o resort.",
    intro: "O Campo Bahia é um dos resorts mais conhecidos da Costa do Descobrimento, com suas villas de dois andares em Santo André. Veja o que considerar ao planejar o transfer até lá.",
    image: "/images/OCYafloFONygDrvR.webp",
    imageAlt: "Estrada de acesso a resort na Costa do Descobrimento, Bahia",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Onde fica", body: "O Campo Bahia fica na vila de Santo André, entre Trancoso e Caraíva. A partir do Aeroporto de Porto Seguro, o trajeto passa pela mesma rota usada para chegar a Trancoso, seguindo depois por estrada até Santo André — parte dela sem pavimentação." },
      { heading: "O que considerar no transfer", body: "Por ser um trecho com estrada de terra na parte final, o tempo de viagem pode variar mais do que trajetos totalmente asfaltados, principalmente após chuva. Um veículo com boa distância do solo ajuda a tornar o trajeto mais confortável, e um motorista que conhece a estrada evita surpresas." },
      { heading: "Bagagem e grupo", body: "Hóspedes do Campo Bahia costumam viajar com bagagem generosa, dado o perfil da hospedagem. Vale considerar isso na hora de escolher a categoria do veículo — um SUV ou van comporta melhor grupos com mais volume de mala." },
    ],
    faqs: [
      { question: "O Campo Bahia fica em Trancoso?", answer: "Não. Fica na vila de Santo André, próxima a Trancoso, na Costa do Descobrimento." },
      { question: "O trajeto até o Campo Bahia tem estrada de terra?", answer: "Sim, parte do trajeto final até Santo André não é pavimentada, o que pode variar o tempo de viagem conforme as condições do dia." },
      { question: "Preciso de um veículo específico para chegar ao Campo Bahia?", answer: "Um veículo com boa distância do solo torna o trecho de terra mais confortável, especialmente com bagagem." },
    ],
    relatedServiceSlug: "transfer-trancoso",
    relatedServiceLabel: "Reservar transfer para Santo André",
    relatedGuideSlugs: ["santo-andre-bahia-o-que-saber", "transfer-vila-angatu"],
  },

  "transfer-vila-angatu": {
    slug: "transfer-vila-angatu",
    kicker: "GUIA · SANTO ANDRÉ",
    title: "Transfer para o Vila Angatu Eco Resort & Spa",
    seoTitle: "Transfer para Vila Angatu: Guia Completo 2026",
    seoDescription: "O Vila Angatu Eco Resort & Spa fica em Santo André, na Costa do Descobrimento. Veja como organizar o transfer a partir do Aeroporto de Porto Seguro.",
    intro: "O Vila Angatu Eco Resort & Spa fica em Santo André, na mesma vila que reúne alguns dos resorts mais tranquilos da região. Veja o que saber antes de organizar a chegada.",
    image: "/images/cmrgvDdYfvgXvSph.webp",
    imageAlt: "Ambiente relaxante de resort na Costa do Descobrimento",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Onde fica", body: "O Vila Angatu está em Santo André, entre Trancoso e Caraíva. O acesso a partir do Aeroporto de Porto Seguro segue a mesma rota geral até Trancoso, com trecho final por estrada de terra até a vila." },
      { heading: "Planejando a chegada", body: "Como boa parte dos hóspedes do resort busca justamente desconexão e tranquilidade, vale organizar o transfer com antecedência para chegar sem estresse — combinando o horário do voo com o motorista evita esperas desnecessárias no aeroporto." },
      { heading: "Saída e passeios", body: "Para quem hospeda em Santo André e quer conhecer Trancoso ou outros pontos da região durante a estadia, vale considerar um motorista à disposição por período, em vez de transfers avulsos para cada saída — sai mais prático para quem pretende sair mais de uma vez." },
    ],
    faqs: [
      { question: "O Vila Angatu fica em Trancoso?", answer: "Não. Fica na vila de Santo André, próxima a Trancoso e Caraíva, na Costa do Descobrimento." },
      { question: "Quanto tempo leva do aeroporto até o Vila Angatu?", answer: "O tempo varia conforme a rota e as condições da estrada de terra no trecho final até Santo André." },
      { question: "Vale contratar motorista por período para quem hospeda em Santo André?", answer: "Para quem pretende sair mais de uma vez durante a estadia, um motorista à disposição costuma ser mais prático do que reservar transfers avulsos." },
    ],
    relatedServiceSlug: "motorista-a-disposicao",
    relatedServiceLabel: "Consultar motorista à disposição",
    relatedGuideSlugs: ["santo-andre-bahia-o-que-saber", "transfer-campo-bahia"],
  },

  "terravista-golf-transfer": {
    slug: "terravista-golf-transfer",
    kicker: "GUIA · TERRAVISTA",
    title: "Terravista Golf: como chegar até o campo",
    seoTitle: "Transfer para Terravista Golf: Guia 2026",
    seoDescription: "O Terravista Golf é um campo de 18 buracos nas falésias de Trancoso, a cerca de 10 km do Quadrado. Veja como organizar o transporte até lá.",
    intro: "O Terravista Golf é um dos campos mais conhecidos do Brasil, com 18 buracos desenhados por Dan Blankenship ao longo das falésias de Trancoso. Veja o que saber sobre o acesso.",
    image: "/images/KIZKtHuAwdfwuLtz.webp",
    imageAlt: "Falésias e paisagem próximas ao campo de golfe em Trancoso",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Onde fica", body: "O condomínio Terravista, que reúne o campo de golfe e o complexo de vilas, fica a cerca de 10 km do centro histórico de Trancoso, nas falésias coloridas próximas à Praia de Taípe. O Aeroporto Terravista (SBTV), voltado à aviação executiva, também fica dentro dessa área." },
      { heading: "Chegando ao campo", body: "Para hóspedes que desembarcam em Porto Seguro, o trajeto passa pela mesma rota até Trancoso, com um desvio final até o condomínio. Para quem já está hospedado em Trancoso, o trajeto até o campo é rápido — cerca de 10 a 15 minutos de carro." },
      { heading: "Equipamento e bagagem", body: "Quem viaja com tacos de golfe e bagagem esportiva deve considerar isso na escolha do veículo — SUVs e vans acomodam melhor esse tipo de bagagem do que carros compactos." },
    ],
    faqs: [
      { question: "Qual a distância entre o Quadrado e o Terravista Golf?", answer: "Cerca de 10 km, um trajeto de cerca de 10 a 15 minutos de carro." },
      { question: "O aeroporto Terravista fica perto do campo de golfe?", answer: "Sim, o Aeroporto Terravista (SBTV) fica dentro da mesma área do condomínio Terravista." },
      { question: "Preciso de um veículo maior para levar equipamento de golfe?", answer: "Um SUV ou van costuma acomodar melhor tacos e bagagem esportiva do que um carro compacto." },
    ],
    relatedServiceSlug: "transfer-aeroporto",
    relatedServiceLabel: "Reservar transfer para o Terravista",
    relatedGuideSlugs: ["terravista-villas-transfer", "onde-fica-trancoso"],
  },

  "terravista-villas-transfer": {
    slug: "terravista-villas-transfer",
    kicker: "GUIA · TERRAVISTA",
    title: "Terravista Villas: transfer para o condomínio",
    seoTitle: "Transfer para Terravista Villas: Guia 2026",
    seoDescription: "O condomínio Terravista Villas fica nas falésias de Trancoso, a 10 km do Quadrado. Veja como organizar o transfer até as vilas.",
    intro: "O Terravista Villas é um condomínio de casas de alto padrão nas falésias de Trancoso, com vista para o mar e para o campo de golfe. Veja o que saber sobre o transporte até lá.",
    image: "/images/allohvlHTfuVZZST.webp",
    imageAlt: "Vista das falésias próximas ao condomínio Terravista, Trancoso",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Onde fica", body: "O condomínio Terravista Villas fica nas falésias coloridas próximas à Praia de Taípe, a cerca de 10 km do centro histórico de Trancoso — cerca de 10 minutos de carro em condições normais." },
      { heading: "Chegando de avião", body: "Quem viaja para uma villa no Terravista costuma ter duas opções de aeroporto: o de Porto Seguro (BPS), com voos comerciais regulares, ou o Terravista (SBTV), voltado à aviação executiva e localizado dentro do próprio condomínio." },
      { heading: "Deslocamentos durante a estadia", body: "Como o condomínio fica afastado do Quadrado, quem pretende sair para jantar ou conhecer as praias centrais de Trancoso durante a estadia costuma se beneficiar de um motorista à disposição, evitando negociar transporte a cada saída." },
    ],
    faqs: [
      { question: "Quanto tempo leva do Terravista Villas até o Quadrado?", answer: "Cerca de 10 minutos de carro, já que o condomínio fica a aproximadamente 10 km do centro histórico." },
      { question: "Dá para chegar direto no Terravista de avião?", answer: "Sim, através do Aeroporto Terravista (SBTV), voltado à aviação executiva e localizado dentro do condomínio." },
      { question: "Vale ter motorista à disposição para quem hospeda no Terravista?", answer: "Para quem pretende sair com frequência para o Quadrado ou outras praias, sim — evita reservar transfer avulso a cada trajeto." },
    ],
    relatedServiceSlug: "motorista-a-disposicao",
    relatedServiceLabel: "Consultar motorista à disposição",
    relatedGuideSlugs: ["terravista-golf-transfer", "onde-fica-trancoso"],
  },

  "fornecedores-casamentos-transporte-convidados": {
    slug: "fornecedores-casamentos-transporte-convidados",
    kicker: "GUIA · CASAMENTOS E EVENTOS",
    title: "Transporte de convidados: guia para cerimonialistas e fornecedores",
    seoTitle: "Transporte de Convidados para Casamentos em Trancoso",
    seoDescription: "Guia para cerimonialistas, produtoras de eventos e fornecedores organizando a logística de transporte de convidados para casamentos em Trancoso.",
    intro: "A logística de transporte é uma das partes mais delicadas de um casamento em Trancoso — convidados chegando de diferentes lugares, horários apertados e a expectativa de que tudo funcione sem imprevisto. Este guia é para quem organiza esse tipo de evento.",
    image: "/images/ECIeMSBmbsoSAhwF.webp",
    imageAlt: "Veículo preparado para transporte de convidados em evento na Bahia",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "O desafio de organizar convidados", body: "Diferente de um transfer individual, um casamento costuma envolver dezenas de convidados chegando em horários e origens diferentes — voos, hospedagens espalhadas pela região, e a necessidade de todos estarem no local certo, na hora certa. Sem planejamento, isso vira um dos maiores pontos de estresse da produção." },
      { heading: "Como uma logística bem planejada funciona", body: "O ideal é montar horários escalonados por grupo de convidados, com pontos de embarque definidos com antecedência — geralmente concentrados em uma ou duas pousadas centrais, para simplificar o roteiro. Categorias de veículo variam conforme o grupo: vans para conjuntos maiores, SUVs para famílias ou padrinhos, e um veículo reservado para os noivos." },
      { heading: "O que pedir de um fornecedor de transporte", body: "Para cerimonialistas e produtoras, vale confirmar com o fornecedor: capacidade de escalar múltiplos veículos no mesmo evento, flexibilidade para ajustar horários de última hora (comum em casamentos), e experiência prévia com a logística específica de Trancoso — estradas, balsas e distâncias entre pousadas e o local da cerimônia." },
    ],
    faqs: [
      { question: "Como organizar o transporte de convidados para um casamento em Trancoso?", answer: "O ideal é definir pontos de embarque centralizados, horários escalonados por grupo e categorias de veículo conforme o número de convidados e bagagem." },
      { question: "É possível ter vários veículos no mesmo evento?", answer: "Sim. Casamentos maiores costumam exigir coordenação de múltiplos veículos simultaneamente, com horários e rotas alinhados previamente." },
      { question: "Cerimonialistas podem contratar o transporte diretamente?", answer: "Sim. Cerimonialistas, produtoras e fornecedores podem alinhar o escopo completo da logística de transporte diretamente com a operação." },
    ],
    relatedServiceSlug: "casamentos-e-eventos",
    relatedServiceLabel: "Solicitar orçamento de evento",
    relatedGuideSlugs: ["quantos-dias-ficar-em-trancoso", "onde-fica-trancoso"],
  },

  "carro-blindado-quando-faz-sentido": {
    slug: "carro-blindado-quando-faz-sentido",
    kicker: "GUIA · TRANSFER BLINDADO",
    title: "Carro blindado em Trancoso: quando faz sentido",
    seoTitle: "Carro Blindado em Trancoso: Quando Contratar",
    seoDescription: "Entenda para quem e em quais situações o transfer blindado em Trancoso e Porto Seguro faz sentido, e como funciona a reserva desse serviço.",
    intro: "Transfer blindado não é sobre desconfiar da região — é sobre uma camada extra de proteção e discrição em situações específicas. Veja quando esse tipo de veículo realmente faz diferença.",
    image: "/images/nyqshkhBcWrZDrcj.png",
    imageAlt: "Mercedes-Benz GLE 400d blindado em trajeto na Bahia",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Quem costuma solicitar", body: "O serviço é procurado principalmente por executivos em viagem corporativa, autoridades, artistas e figuras públicas, e famílias que preferem uma camada adicional de discrição e segurança durante a estadia — seja pela exposição pública, seja por preferência pessoal." },
      { heading: "Situações onde faz mais sentido", body: "Trajetos entre aeroporto e hospedagem em horários de maior exposição, deslocamentos durante eventos com grande circulação de pessoas (como casamentos e festas de fim de ano), e viagens onde a discrição do veículo e da operação é parte do que se espera do serviço." },
      { heading: "Como funciona a reserva", body: "Por ser um veículo específico dentro da frota, o Mercedes-Benz GLE 400d blindado costuma exigir reserva com mais antecedência do que um transfer convencional, para garantir a disponibilidade na data desejada. A operação é organizada com o mesmo cuidado do início ao fim — do primeiro embarque ao retorno." },
    ],
    faqs: [
      { question: "Quem costuma contratar transfer blindado?", answer: "Executivos, autoridades, artistas e famílias que buscam uma camada adicional de segurança e discrição durante a estadia." },
      { question: "Preciso reservar o blindado com muita antecedência?", answer: "Recomenda-se reservar com antecedência, já que é um veículo específico da frota e a disponibilidade deve ser confirmada para a data." },
      { question: "O blindado atende também para eventos, não só transfer de aeroporto?", answer: "Sim. Pode ser solicitado para deslocamentos durante toda a estadia, incluindo eventos, casamentos e festas." },
    ],
    relatedServiceSlug: "transfer-blindado",
    relatedServiceLabel: "Solicitar transfer blindado",
    relatedGuideSlugs: ["fornecedores-casamentos-transporte-convidados", "e-seguro-chegar-em-trancoso-sozinho"],
  },
  "como-chegar-em-corumbau": {
    slug: "como-chegar-em-corumbau",
    kicker: "GUIA · CORUMBAU",
    title: "Como chegar em Corumbau: o destino mais isolado da região",
    seoTitle: "Como Chegar em Corumbau, Bahia: Guia 2026",
    seoDescription: "Corumbau fica bem mais distante de Trancoso do que parece no mapa. Veja as opções de acesso, incluindo o caminho mais prático via Caraíva.",
    intro: "Corumbau é o destino mais isolado desta lista — e vale entender a real distância antes de incluir no roteiro, porque no mapa parece mais perto do que é na prática.",
    image: "/images/juCISiyVGtGMuEWJ.jpg",
    imageAlt: "Praia isolada e preservada na região de Corumbau, Bahia",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "A distância real", body: "Por estrada, Corumbau fica a cerca de 190 a 220 km de Porto Seguro — entre 3h30 e 4h de viagem, boa parte em estrada de terra. Não é um bate-volta fácil a partir de Trancoso. O caminho mais curto na prática é via Caraíva: dali, são menos de 12 km de trilha de areia até a Ponta do Corumbau, geralmente feitos de buggy." },
      { heading: "Como as pessoas costumam chegar", body: "A forma mais comum para quem já está na região é combinar um passeio de buggy saindo de Caraíva, com parada na Aldeia Barra Velha e travessia de canoa no Rio Corumbau. Para quem vem de fora, o Aeroporto de Porto Seguro é a opção mais viável, apesar da distância, pela maior oferta de voos." },
      { heading: "Vale a pena incluir no roteiro?", body: "Pela distância, Corumbau faz mais sentido como destino de vários dias — a recomendação geral é ficar ao menos 4 noites para compensar o esforço do acesso — do que como parada rápida dentro de uma viagem focada em Trancoso. Quem tem tempo de sobra e busca isolamento de verdade encontra ali um dos trechos mais preservados da costa baiana." },
    ],
    faqs: [
      { question: "Corumbau é perto de Trancoso?", answer: "Não tanto quanto parece no mapa. Por estrada, são cerca de 190 a 220 km de Porto Seguro. O caminho mais curto na prática é via Caraíva, de buggy." },
      { question: "Qual a forma mais fácil de chegar em Corumbau saindo de Caraíva?", answer: "Um passeio de buggy de cerca de 10-12 km pela praia, com parada na Aldeia Barra Velha e travessia de canoa no Rio Corumbau." },
      { question: "Quantos dias vale ficar em Corumbau?", answer: "Dado o esforço do acesso, a recomendação geral é ficar ao menos 4 noites para aproveitar bem o destino." },
    ],
    relatedServiceSlug: "passeios",
    relatedServiceLabel: "Planejar meu passeio até a região",
    relatedGuideSlugs: ["como-chegar-em-caraiva-sem-carro", "trilha-praia-do-espelho-caraiva"],
  },

  "itacare-e-perto-de-trancoso": {
    slug: "itacare-e-perto-de-trancoso",
    kicker: "GUIA · ITACARÉ",
    title: "Itacaré é perto de Trancoso? A resposta direta",
    seoTitle: "Itacaré é Perto de Trancoso? Distância Real 2026",
    seoDescription: "Itacaré e Trancoso ficam em regiões diferentes da Bahia. Entenda a distância real e por que não vale tratar como uma extensão da mesma viagem.",
    intro: "É uma dúvida comum, e a resposta direta evita frustração: não, Itacaré não é uma extensão prática da viagem a Trancoso — são regiões diferentes da Bahia, com uma viagem considerável entre elas.",
    image: "/images/tqJLnuypRYdQzANN.webp",
    imageAlt: "Litoral verde e preservado da região de Itacaré, Bahia",
    publishedAt: "2026-08-30",
    updatedAt: "2026-08-30",
    sections: [
      { heading: "Onde cada um fica", body: "Trancoso está na Costa do Descobrimento, no extremo sul da Bahia, próxima a Porto Seguro. Itacaré fica na Costa do Cacau, mais ao norte, perto de Ilhéus — uma região com identidade e paisagem bem diferentes, mais associada a trilhas na mata atlântica e ondas para surfe." },
      { heading: "Por que não é um bate-volta", body: "A distância entre as duas regiões torna inviável um passeio de um dia — estamos falando de várias horas de estrada, sem trajeto direto e prático. Quem quer conhecer os dois costuma tratar como duas viagens distintas, não como paradas na mesma rota." },
      { heading: "Como planejar se quiser os dois", body: "O mais comum é dividir a viagem em dois blocos: alguns dias na Costa do Descobrimento (Trancoso, Arraial d'Ajuda, Caraíva) e, separadamente, outro período dedicado à Costa do Cacau (Itacaré e arredores) — geralmente voando para aeroportos diferentes (Porto Seguro para um, Ilhéus para o outro)." },
    ],
    faqs: [
      { question: "Dá para ir de Trancoso a Itacaré em um dia?", answer: "Não é recomendável. São regiões diferentes da Bahia, com uma distância considerável entre elas — não funciona como bate-volta." },
      { question: "Trancoso e Itacaré ficam na mesma região da Bahia?", answer: "Não. Trancoso fica na Costa do Descobrimento, no extremo sul. Itacaré fica na Costa do Cacau, mais ao norte, perto de Ilhéus." },
      { question: "Como incluir os dois destinos numa viagem?", answer: "O mais prático é tratá-los como duas viagens separadas, com aeroportos de entrada diferentes (Porto Seguro para Trancoso, Ilhéus para Itacaré)." },
    ],
    relatedServiceSlug: "destinos",
    relatedServiceLabel: "Conhecer os destinos que atendemos",
    relatedGuideSlugs: ["onde-fica-trancoso", "quantos-dias-ficar-em-trancoso"],
  },
};

export const guideSlugs = Object.values(guides).map((g) => g.slug);
export function getGuideBySlug(slug: string) { return guides[slug]; }

// Traduções em inglês — cobrem os 10 artigos de maior valor para busca internacional.
// Os campos não-textuais (imagem, CTA de serviço, links relacionados) são reaproveitados do PT.
export type GuideTranslation = { kicker: string; title: string; seoTitle: string; seoDescription: string; intro: string; sections: GuideSection[]; faqs: GuideFaq[]; relatedServiceLabel: string };

export const guidesEn: Record<string, GuideTranslation> = {
  "como-chegar-em-trancoso": {
    kicker: "GUIDE · TRANCOSO",
    title: "How to Get to Trancoso: Every Option Compared",
    seoTitle: "How to Get to Trancoso, Brazil: Complete 2026 Guide",
    seoDescription: "Flight, ferry, road, bus, or private transfer? Compare time, cost, and comfort for every way to reach Trancoso, Bahia, and pick the right one for you.",
    intro: "Trancoso has no airport of its own, which confuses a lot of first-time visitors. The good news: getting there is far simpler today than it used to be. This guide covers every option, with time, approximate cost, and who each one suits best.",
    sections: [
      { heading: "By air to Porto Seguro", body: "The closest airport to Trancoso is Porto Seguro (BPS), about 80 km away. It receives daily flights from Brazil's main capitals, roughly 1h40 from São Paulo. There's no direct commercial flight into Trancoso itself — everyone lands in Porto Seguro and continues by land. Two exceptions: Terravista Airport (SBTV), about 15 minutes from Trancoso, and Outeiro das Brisas (SNEC), near Praia do Espelho — both serve mostly executive or private aviation, not scheduled commercial flights." },
      { heading: "From Porto Seguro to Trancoso: ferry or road", body: "From the airport, two routes exist. The ferry crosses the Buranhém River to Arraial d'Ajuda in about 10 minutes, then continues on paved road to Trancoso. It costs roughly R$20-25 per vehicle and runs 24 hours — but in high season the queue can run past an hour. The dry road, BR-367, skips the crossing entirely: about 80 km, fully paved, up to 1h20. It's the more predictable option when timing matters, though it trades away the charm of the river crossing." },
      { heading: "Do I need a 4x4?", body: "Not in most cases. The main roads to Trancoso and between the most-visited spots (Arraial d'Ajuda, Trancoso, Praia do Espelho) are paved or well-kept — a regular car handles it fine. The exception is specific dirt stretches, like the final approach to Praia do Espelho or the road to Caraíva, which can get rough after heavy rain. If your itinerary skips those final stretches, a 4x4 isn't worth the extra cost." },
      { heading: "By bus", body: "The Águia Azul company runs the route between Arraial d'Ajuda and Trancoso, with hourly departures roughly between 6am and 6:45pm. It's the cheapest option, but also the least flexible — you're bound to the company's schedule and still need to sort out the ferry leg on your own." },
      { heading: "By private transfer", body: "This is the most direct route: you land in Porto Seguro (or Terravista), and your driver is already waiting, with the right vehicle for your group and luggage. No ferry queue to negotiate, no bus schedule to fit, no uncertainty about where to go in an unfamiliar place. For families, groups, or anyone who just wants to start the trip without stress — especially after a long flight — it tends to be the most relaxed option." },
    ],
    faqs: [
      { question: "How long does it take from Porto Seguro to Trancoso?", answer: "By ferry, 1h15 to 2h depending on the queue. By the BR-367 road, up to 1h20 over about 80 km." },
      { question: "Does Trancoso have its own airport?", answer: "No. The nearest airport is Porto Seguro (BPS), about 80 km away. Terravista and Outeiro das Brisas also exist, serving mostly executive aviation." },
      { question: "Do I need to rent a 4x4 to go to Trancoso?", answer: "No, for reaching Trancoso and getting around the main spots. A regular car works. 4x4 only matters on specific dirt stretches near some beaches." },
      { question: "Is the ferry or the dry road better?", answer: "The ferry is more scenic but can have long queues in high season. The BR-367 is more predictable timewise, though it skips the river crossing experience." },
    ],
    relatedServiceLabel: "Book my airport transfer",
  },

  "quanto-custa-transfer-porto-seguro-trancoso": {
    kicker: "GUIDE · TRANCOSO",
    title: "How Much Does a Transfer from Porto Seguro to Trancoso Cost?",
    seoTitle: "Porto Seguro to Trancoso Transfer Cost: 2026 Guide",
    seoDescription: "Understand what drives the price of a transfer between Porto Seguro Airport and Trancoso: passengers, vehicle category, route, and season.",
    intro: "Transfer prices between Porto Seguro and Trancoso vary a fair amount — understanding why helps you compare quotes and avoid surprises when it's time to pay.",
    sections: [
      { heading: "What changes the price", body: "Five factors account for most of the variation: number of passengers and luggage volume (which determine vehicle category, from sedan to van), the chosen route (ferry vs. dry road), flight time (very early or late arrivals often carry a surcharge), season (high season and holidays cost more across nearly every provider in the region), and whether the transfer is private or shared — private costs more, but you won't share the vehicle with strangers or depend on someone else's schedule." },
      { heading: "Private or shared?", body: "Shared services (collective vans) tend to be cheaper, but you board with other passengers, make stops that aren't yours, and depend on their departure time — not your flight's. A private transfer is just for your group: it leaves on your schedule, no detours, with the driver waiting even if your flight is delayed. For families, travelers with children, or anyone who simply doesn't want surprises right after landing, the price difference is often worth it." },
      { heading: "How to compare quotes", body: "When requesting a quote, always confirm: does the price already include the ferry crossing (when applicable)? Does the driver track your flight time, or do you need to report a delay yourself? Is there an extra charge for luggage, children, or night-time arrival? These questions keep an apparently lower price from turning out more expensive at payment time." },
    ],
    faqs: [
      { question: "Is a private transfer much more expensive than a shared one?", answer: "It usually costs more, though the gap varies by provider. Weigh the extra comfort and flexibility — no stops, no waiting for other passengers — against the price difference." },
      { question: "Does the price change between high and low season?", answer: "Yes, across nearly the whole region. New Year's, Carnival, and high season generally cost more than the rest of the year." },
      { question: "Is the ferry crossing included in the transfer price?", answer: "It depends on the provider — worth confirming before booking. Some include it, others charge separately." },
      { question: "How do I find out the exact price for my transfer?", answer: "Send your origin, destination, date, time, number of passengers, and luggage for a personalized quote — the price changes based on these details." },
    ],
    relatedServiceLabel: "Request my transfer quote",
  },

  "e-seguro-chegar-em-trancoso-sozinho": {
    kicker: "GUIDE · TRANCOSO",
    title: "Is It Safe to Arrive in Trancoso Alone?",
    seoTitle: "Is Trancoso Safe? What to Know Before You Arrive",
    seoDescription: "What to expect when landing in Porto Seguro for Trancoso, including unsolicited offers from strangers at the airport, and how to avoid any hassle on arrival.",
    intro: "This question comes up often in travel forums, and it has a direct answer: yes, it's safe — but it helps to know what to expect on arrival so nothing catches you off guard.",
    sections: [
      { heading: "What can happen on arrival", body: "Some travelers report being approached by people offering themselves as guides or informal helpers right outside Porto Seguro Airport, asking for money to help with luggage or directions. It's not a physical safety risk, but it can be uncomfortable, especially for solo travelers unsure where to go." },
      { heading: "How to avoid the hassle", body: "The simplest fix is knowing exactly who's picking you up and where. Travelers with a transfer booked in advance are typically met right inside the arrivals area, driver holding a sign with their name — which removes any doubt about who to follow and cuts off unsolicited approaches at the source. If you're using a taxi or rideshare app, agree on the meeting point before leaving the terminal and avoid negotiating transport with anyone who approaches you along the way." },
      { heading: "Beyond the airport", body: "Trancoso itself is a well-established, tourist-friendly destination with steady visitor flow. The same basic precautions as any trip — not flashing valuables, avoiding deserted areas at night — apply normally, with no need for extra caution beyond that." },
    ],
    faqs: [
      { question: "Is it safe to travel alone to Trancoso?", answer: "Yes. It's an established tourist destination with good infrastructure. The main thing to watch for is unsolicited offers at the Porto Seguro airport arrivals area." },
      { question: "How do I avoid being approached at the airport?", answer: "Booking a transfer in advance, with your driver meeting you holding a name sign, is the most direct way to avoid this kind of approach." },
      { question: "Should I negotiate transport with someone who approaches me at the airport?", answer: "It's not recommended. It's best to arrange transport before the trip or use taxis and apps with a pre-defined meeting point." },
    ],
    relatedServiceLabel: "Book my airport pickup",
  },

  "como-chegar-em-caraiva-sem-carro": {
    kicker: "GUIDE · CARAÍVA",
    title: "How to Get to Caraíva (the Village Has No Cars)",
    seoTitle: "How to Get to Caraíva, Brazil: No-Car Guide 2026",
    seoDescription: "Caraíva has no vehicle traffic at all. Learn how to get there, the canoe crossing, and what to know before visiting this village in Bahia.",
    intro: "Caraíva stands apart from every other destination in the region for one simple reason: no cars enter the village. The streets are sand, and the final leg of the journey is always a canoe crossing. It catches a lot of people off guard — here's exactly how it works.",
    sections: [
      { heading: "The route to the riverbank", body: "By car, van, or transfer, you reach Nova Caraíva, on the opposite bank of the Caraíva River. From Trancoso it's about 33 km, much of it on dirt road — manageable in any car on dry days, though some stretches get rough after heavy rain. Those arriving by their own car leave it in one of the guarded parking lots (around R$30/day)." },
      { heading: "The canoe crossing", body: "From the riverbank to the village, the crossing is done in canoes operated by local residents, running 24 hours. It takes under 5 minutes and costs between R$5 and R$10 per person. There's no other way in — no cars, no motorcycles, no bikes cross — just on foot, by canoe." },
      { heading: "What to know before you go", body: "Inside the village, getting around means walking, horse-cart (for luggage), or bicycle. Pack light and skip rolling suitcases — the sandy streets aren't kind to them. Bring cash: internet signal is unreliable, and card machines sometimes don't work. Electricity only arrived in 2007 and the streets have no public lighting, so a flashlight or your phone helps after dark." },
    ],
    faqs: [
      { question: "Can I drive into Caraíva?", answer: "No. Motorized vehicles don't circulate in the village. You leave the car in Nova Caraíva and cross the river by canoe." },
      { question: "How much does the canoe crossing cost?", answer: "Between R$5 and R$10 per person, with crossings running 24 hours." },
      { question: "Do I need cash in Caraíva?", answer: "It's advisable. Internet signal is unreliable and card machines don't always work." },
      { question: "How long does it take from Trancoso to Caraíva?", answer: "About 33 km to the riverbank, plus the canoe crossing. Total time varies with road conditions." },
    ],
    relatedServiceLabel: "Plan my route to Caraíva",
  },

  "praia-do-espelho-mare-baixa": {
    kicker: "GUIDE · PRAIA DO ESPELHO",
    title: "Praia do Espelho: Why Tide Timing Matters",
    seoTitle: "Praia do Espelho Low Tide Times: 2026 Guide",
    seoDescription: "The natural pools at Praia do Espelho only appear at low tide. Learn how to check the right time and not miss the beach's main attraction.",
    intro: "Arriving at Praia do Espelho at the wrong tide is the most common first-timer mistake — and also the easiest one to avoid, if you know what to check beforehand.",
    sections: [
      { heading: "Why the tide changes everything", body: "Praia do Espelho's main draw is the natural pools formed by coral reefs — but they're only visible and swimmable at low tide. At high tide, water covers the reefs and the beach loses much of the look that made it famous in photos. It's not luck; it's just timing." },
      { heading: "How to find the low tide time", body: "The time shifts daily, so check an updated tide table the day before your visit, not too far in advance. Aim to arrive about an hour before the lowest point to catch the full window before the water starts rising again." },
      { heading: "Planning your arrival", body: "The beach is about 25 km from Trancoso, much of it on dirt road — the final stretch usually calls for a car with decent ground clearance, and can get harder after rain. If your plan depends on a specific tide window, it's worth securing transport that arrives on time, without relying on bus schedules or group-tour timing." },
    ],
    faqs: [
      { question: "Do the natural pools appear at any time?", answer: "No. They're only visible and accessible at low tide. At high tide, the reefs are submerged." },
      { question: "How do I know the low tide time for my visit?", answer: "Check an updated tide table, ideally the day before — the time shifts daily." },
      { question: "How early should I arrive before low tide?", answer: "About 1 hour before the lowest point, to make the most of the full window." },
    ],
    relatedServiceLabel: "Plan my day trip to Praia do Espelho",
  },

  "onde-fica-trancoso": {
    kicker: "GUIDE · TRANCOSO",
    title: "Where Is Trancoso? Location and Distances",
    seoTitle: "Where Is Trancoso, Brazil? Map & Distances 2026",
    seoDescription: "Trancoso sits in southern Bahia, part of Porto Seguro. See exact distances from the airport and other destinations on the Discovery Coast.",
    intro: "Trancoso is a district of Porto Seguro, in the far south of Bahia, in the area known as the Costa do Descobrimento (Discovery Coast) — though that alone doesn't help much with visualizing the map. Here are the distances that actually matter for planning.",
    sections: [
      { heading: "Distance from the airport", body: "Porto Seguro Airport (BPS), the region's main entry point, sits about 80 km from Trancoso — between 1h15 and 2h away, depending on the route (ferry or dry road) and traffic." },
      { heading: "Distance from nearby destinations", body: "Arraial d'Ajuda is about 20 km from Trancoso. Praia do Espelho, about 25 km. Caraíva, about 33 km (mostly dirt road). All these trips typically take under an hour by car, barring road surprises." },
      { heading: "Relative to the rest of Brazil", body: "From São Paulo, the flight to Porto Seguro takes about 1h40. From other capitals it varies — but overall it's considered an easy-to-reach destination by air, with daily flights from Brazil's main cities." },
    ],
    faqs: [
      { question: "Which city does Trancoso belong to?", answer: "Trancoso is a district of the municipality of Porto Seguro, in southern Bahia." },
      { question: "How far is Trancoso from the nearest airport?", answer: "About 80 km from Porto Seguro Airport (BPS), between 1h15 and 2h depending on the route." },
      { question: "Is Trancoso close to Arraial d'Ajuda?", answer: "Yes, about 20 km away, one of the shortest routes in the region." },
    ],
    relatedServiceLabel: "Book my transfer",
  },

  "quantos-dias-ficar-em-trancoso": {
    kicker: "GUIDE · TRANCOSO",
    title: "How Many Days to Spend in Trancoso",
    seoTitle: "How Many Days in Trancoso? 2026 Itinerary Guide",
    seoDescription: "From 3-4 days to a full week: see how much time makes sense in Trancoso depending on what you want to see, including Caraíva and Praia do Espelho.",
    intro: "There's no magic number, but a practical way to think about it: the more you want to venture outside Trancoso, the more days are worth setting aside.",
    sections: [
      { heading: "3-4 days: Trancoso only", body: "Enough time to enjoy the Quadrado properly, see 2-3 beaches at a relaxed pace, and take your time at restaurants. Works well for repeat visitors or anyone with limited travel time." },
      { heading: "5-7 days: Trancoso plus day trips", body: "With a week, you can set aside a full day for Praia do Espelho (remember to check the low tide) and another for Caraíva, which is worth more with at least one overnight stay than as a quick day trip, according to travelers who've done both." },
      { heading: "More than a week", body: "If time allows, consider staying in Caraíva itself for 2-3 nights instead of just a day trip, and add Arraial d'Ajuda to the itinerary. Itacaré doesn't fit into this — it's in a different part of Bahia and calls for a separate trip." },
    ],
    faqs: [
      { question: "What's the minimum number of days to see Trancoso?", answer: "3 days already allow a good experience of the Quadrado and main beaches, but 4 gives more breathing room." },
      { question: "How many days does Caraíva need in the itinerary?", answer: "A day trip is possible, but staying at least one night helps you feel the local vibe." },
      { question: "Can I fit Trancoso and Itacaré in the same trip?", answer: "They're different regions of Bahia with no direct proximity. It's best treated as two separate trips." },
    ],
    relatedServiceLabel: "Plan my itinerary",
  },

  "carro-blindado-quando-faz-sentido": {
    kicker: "GUIDE · ARMORED TRANSFER",
    title: "Armored Car in Trancoso: When It Makes Sense",
    seoTitle: "Armored Transfer in Trancoso: When to Book",
    seoDescription: "Understand who and in which situations an armored transfer in Trancoso and Porto Seguro makes sense, and how booking this service works.",
    intro: "An armored transfer isn't about distrusting the region — it's about an extra layer of protection and discretion in specific situations. Here's when this kind of vehicle actually makes a difference.",
    sections: [
      { heading: "Who typically requests it", body: "The service is sought mainly by executives on corporate trips, public figures and officials, artists, and families who prefer an added layer of discretion and security during their stay — whether due to public exposure or personal preference." },
      { heading: "Situations where it makes the most sense", body: "Airport-to-accommodation transfers during higher-exposure hours, movement during events with large crowds (weddings, year-end parties), and trips where discretion in both vehicle and operation is part of what's expected from the service." },
      { heading: "How booking works", body: "Being a specific vehicle within the fleet, the armored Mercedes-Benz GLE 400d usually requires more advance booking than a standard transfer, to secure availability on the desired date. The operation is handled with the same care from start to finish — from first pickup to final return." },
    ],
    faqs: [
      { question: "Who typically books armored transfer?", answer: "Executives, officials, artists, and families seeking an added layer of security and discretion during their stay." },
      { question: "Do I need to book the armored vehicle far in advance?", answer: "Advance booking is recommended, as it's a specific vehicle in the fleet and availability must be confirmed for the date." },
      { question: "Does the armored vehicle serve events too, not just airport transfers?", answer: "Yes. It can be requested for transportation throughout the stay, including events, weddings, and parties." },
    ],
    relatedServiceLabel: "Request armored transfer",
  },

  "transfer-campo-bahia": {
    kicker: "GUIDE · SANTO ANDRÉ",
    title: "Transfer to Campo Bahia: How It Works",
    seoTitle: "Transfer to Campo Bahia, Brazil: 2026 Guide",
    seoDescription: "Campo Bahia is located in Santo André, on the Discovery Coast. See the distance from Porto Seguro Airport and how to arrange the transfer.",
    intro: "Campo Bahia is one of the best-known resorts on the Discovery Coast, with its two-story villas in Santo André. Here's what to consider when planning the transfer there.",
    sections: [
      { heading: "Where it is", body: "Campo Bahia is in the village of Santo André, between Trancoso and Caraíva. From Porto Seguro Airport, the route follows the same path used to reach Trancoso, then continues by road to Santo André — part of it unpaved." },
      { heading: "What to consider for the transfer", body: "Because the final stretch is dirt road, travel time can vary more than fully paved routes, especially after rain. A vehicle with good ground clearance makes for a more comfortable ride, and a driver who knows the road avoids surprises." },
      { heading: "Luggage and group size", body: "Guests heading to Campo Bahia often travel with generous luggage, given the profile of the property. Worth factoring into the vehicle category — an SUV or van handles larger luggage volumes better." },
    ],
    faqs: [
      { question: "Is Campo Bahia in Trancoso?", answer: "No. It's in the village of Santo André, near Trancoso, on the Discovery Coast." },
      { question: "Is there dirt road on the way to Campo Bahia?", answer: "Yes, part of the final stretch to Santo André is unpaved, which can affect travel time depending on conditions." },
      { question: "Do I need a specific vehicle to reach Campo Bahia?", answer: "A vehicle with good ground clearance makes the dirt stretch more comfortable, especially with luggage." },
    ],
    relatedServiceLabel: "Book my transfer to Santo André",
  },

  "terravista-golf-transfer": {
    kicker: "GUIDE · TERRAVISTA",
    title: "Terravista Golf: How to Get to the Course",
    seoTitle: "Transfer to Terravista Golf, Trancoso: 2026 Guide",
    seoDescription: "Terravista Golf is an 18-hole course on the cliffs of Trancoso, about 10 km from the Quadrado. See how to arrange transportation there.",
    intro: "Terravista Golf is one of Brazil's best-known courses, 18 holes designed by Dan Blankenship along the cliffs of Trancoso. Here's what to know about getting there.",
    sections: [
      { heading: "Where it is", body: "The Terravista condominium, home to the golf course and villa complex, sits about 10 km from Trancoso's historic center, on the colorful cliffs near Taípe Beach. Terravista Airport (SBTV), geared toward executive aviation, is also located within this area." },
      { heading: "Getting to the course", body: "For guests landing in Porto Seguro, the route follows the same path to Trancoso, with a final detour to the condominium. For those already staying in Trancoso, the drive to the course is quick — about 10 to 15 minutes." },
      { heading: "Equipment and luggage", body: "Travelers bringing golf clubs and sports gear should factor that into their vehicle choice — SUVs and vans accommodate this kind of luggage better than compact cars." },
    ],
    faqs: [
      { question: "How far is Terravista Golf from the Quadrado?", answer: "About 10 km, roughly a 10-15 minute drive." },
      { question: "Is Terravista Airport close to the golf course?", answer: "Yes, Terravista Airport (SBTV) is within the same condominium area." },
      { question: "Do I need a larger vehicle for golf equipment?", answer: "An SUV or van usually accommodates clubs and sports luggage better than a compact car." },
    ],
    relatedServiceLabel: "Book my transfer to Terravista",
  },
};

export function getGuideTranslation(slug: string): GuideTranslation | undefined { return guidesEn[slug]; }
export const guideSlugsEn = Object.keys(guidesEn);
