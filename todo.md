# Auditoria e reconstrução B2C — Nativos Experiences

> O site deve usar o site atual como fonte factual, mas ter conteúdo, arquitetura e apresentação originais para o cliente final de luxo.

- [x] Mapear todas as páginas e abas do site atual.
- [x] Consolidar transfer de Porto Seguro, Aeroporto Terravista, Trancoso e demais rotas.
- [x] Consolidar serviços de concierge, motorista à disposição, casamentos e eventos.
- [x] Dar destaque factual ao carro blindado e validar a formulação de exclusividade regional.
- [x] Consolidar frota, categorias, capacidades e hospitalidade a bordo.
- [x] Mapear destinos, FAQs, contatos, idiomas e CTAs existentes.
- [x] Definir palavras-chave e arquitetura SEO local para o público B2C.
- [x] Criar conteúdo original para cada intenção de busca, sem copiar o site atual.
- [x] Implementar páginas e componentes B2C na nova identidade Casa de Areia.
- [x] Validar links, metadados, dados estruturados, responsividade, acessibilidade e conversão.
- [ ] Salvar checkpoint e entregar a versão final revisada.

## Novo conteúdo enviado

- [ ] Ler integralmente `pasted_content.txt`.
- [ ] Separar fatos, ofertas, diferenciais e textos que exigem confirmação.
- [ ] Mapear cada informação para a página B2C mais adequada.
- [ ] Incorporar o conteúdo com redação original e intenção de busca clara.
- [ ] Validar o novo conteúdo no preview e no build.
- [ ] Gerar novo ZIP e checkpoint atualizado.

## Migração SSR solicitada

- [ ] Avaliar compatibilidade da migração Next.js com o ambiente gerenciado atual.
- [ ] Migrar rotas para App Router sem perder os slugs existentes.
- [ ] Criar `lib/data.ts` como fonte única tipada de conteúdo.
- [ ] Extrair Header, Footer e WhatsApp para componentes compartilhados.
- [ ] Implementar `generateMetadata` por rota com canonical, Open Graph e imagens.
- [ ] Adicionar JSON-LD de TravelAgency, LocalBusiness e Service quando aplicável.
- [ ] Gerar sitemap e robots automaticamente a partir das rotas de dados.
- [ ] Validar build e presença de title, description e og:title no HTML bruto de pelo menos três rotas.

## Correções de conteúdo — pasted_content_2.txt

- [x] Completar as 10 categorias da frota na fonte central e nas referências legadas.
- [x] Expandir a descrição do Aeroporto Outeiro das Brisas/SNEC.
- [x] Adicionar tempos concretos de Porto Seguro–Trancoso e Terravista–Trancoso.
- [x] Criar alt text específico por serviço.
- [x] Adicionar CNPJ e foundingDate ao rodapé e JSON-LD.
- [x] Contextualizar Itacaré como extensão da viagem, não bate-volta.
- [x] Adicionar 2–3 FAQs específicas por página de serviço.
- [x] Criar página `/parcerias` com CTA B2B separado e link discreto no menu.
- [x] Não alterar layout ou CSS.
- [x] Validar build e gerar lista de alterações por arquivo.

## Correção do preview

- [x] Verificar se o servidor Next está respondendo na porta gerenciada.
- [x] Confirmar o endereço público atual do preview.
- [x] Reiniciar ou corrigir o servidor se necessário.
- [x] Testar a Home e uma rota interna antes de reenviar o link.

## Falha reportada no preview

- [ ] Reproduzir a falha na Home e nas rotas internas.
- [ ] Verificar erros do servidor Next, console e rede.
- [ ] Confirmar se os assets e links respondem corretamente.
- [ ] Corrigir sem apagar as alterações de conteúdo aprovadas.
- [x] Validar desktop, mobile e build antes de reenviar o preview.

## Preview ainda não localizado pelo usuário

- [ ] Confirmar o endereço de preview que está ativo no painel.
- [ ] Verificar se o servidor gerenciado está respondendo no endereço público.
- [ ] Testar a prévia em uma janela nova antes de reenviar.
- [ ] Entregar somente o acesso confirmado ou explicar claramente o bloqueio.

## Falha de CSS/JS no preview mobile

- [x] Reproduzir 404 dos chunks `_next/static` e do CSS.
- [x] Verificar se o preview está servindo um build antigo ou inconsistente.
- [x] Corrigir a inicialização/limpeza do Next sem remover conteúdo aprovado.
- [x] Testar layout real em desktop e mobile.
- [x] Criar checkpoint somente após a prévia estar visualmente correta.

## Revisão de alto luxo

- [x] Remover setas Unicode, triângulos e emojis decorativos dos CTAs e listas.
- [x] Substituir indicadores genéricos por microinterações discretas e ícones consistentes.
- [x] Auditar espaçamentos, cortes de texto, alinhamentos e hierarquia tipográfica.
- [x] Refinar Header, Footer, cards, frota, FAQs e botões para luxo rústico.
- [x] Verificar a experiência mobile e desktop após a revisão.
- [x] Salvar checkpoint somente depois da validação visual completa.

## Enriquecimento SEO solicitado em Pasted_content_02.txt

- [x] Criar conteúdo aprofundado para `/transfer-blindado` com abertura direta, público, reserva, região e FAQ mínimo de 4 perguntas.
- [x] Adicionar Schema Service + FAQPage específico ao transfer blindado.
- [x] Marcar com `[CONFIRMAR]` afirmações adicionadas sem base explícita nos dados fornecidos.
- [x] Enriquecer `/casamentos-e-eventos` para casais, cerimonialistas, produtoras e agências.
- [x] Criar CTA de evento com mensagem de WhatsApp específica.
- [x] Criar componente reutilizável de diferenciais com iconografia distinta por item.
- [x] Aplicar diferenciais na Home e em todas as páginas de serviço.
- [x] Padronizar ícones e estados dos botões sem reintroduzir setas genéricas.
- [x] Criar `/motorista-a-disposicao` como página SEO aprofundada.
- [x] Criar `/transfer-porto-seguro-trancoso` como página SEO específica da rota.
- [x] Aplicar abertura autoexplicativa, Service schema, FAQ schema e dois links internos por página.
- [x] Não inventar avaliações, quantidades, percentuais ou números sem confirmação.
- [x] Validar build, HTML SSR, schemas, CTAs, links e responsividade.
- [x] Entregar alterações por página e lista de afirmações `[CONFIRMAR]`.
- [ ] Salvar checkpoint atualizado.

## Correção estrutural dos diferenciais e rodapé

- [x] Auditar o componente Differentiators, suas props e todas as páginas que o utilizam.
- [x] Substituir siglas/textos em círculos por ícones gráficos reais e consistentes.
- [x] Tornar headline e copy dos diferenciais obrigatórios por página, sem hardcode compartilhado.
- [x] Definir conteúdo específico para Home/Transfer, Blindado, Motorista, Eventos, Concierge, Frota, Destinos, Reserva e Parcerias.
- [x] Adicionar contato@nativosexperiences.com como mailto visível no rodapé de todas as páginas.
- [x] Validar que Parcerias não exibe headline de chegada.
- [x] Validar desktop, mobile e build após a refatoração.
- [x] Entregar resumo de alterações por página e confirmar explicitamente a parametrização do componente.

## Correção final dos diferenciais

- [x] Substituir o ícone de gota por uma garrafinha de água reconhecível.
- [x] Substituir o copo por um ícone de coco reconhecível, com formato/casca.
- [x] Garantir a lista final exata com 7 itens, na ordem fornecida.
- [x] Adicionar ícone próprio para lenço umedecido.
- [x] Adicionar ícone próprio para carregadores eletrônicos.
- [x] Alterar toda ocorrência solta de Água para Água mineral.
- [x] Corrigir o item infantil para Bebê conforto, cadeirinha e assento elevado sem custo adicional.
- [x] Confirmar os 7 itens e ícones na Home e em todas as páginas de serviço.
- [x] Validar build, HTML, responsividade e salvar checkpoint.

## Correção de títulos duplicados

- [x] Auditar `app/layout.tsx`, `app/[slug]/page.tsx` e títulos SEO em `lib/data.ts`.
- [x] Remover o sufixo manual `| Nativos Experiences` dos títulos específicos.
- [x] Manter o template global como única fonte do sufixo.
- [x] Rodar `npm run build` e servir localmente.
- [x] Validar via curl o `<title>` de `/transfer-blindado`, `/parcerias` e `/frota`.
- [x] Confirmar uma única ocorrência de “Nativos Experiences” por título.
- [ ] Salvar checkpoint atualizado.

## Versão inglesa com SEO internacional

- [x] Auditar arquitetura atual, dados, rotas e metadados.
- [x] Estruturar traduções dentro da mesma fonte central `lib/data.ts`.
- [x] Criar rotas próprias `/en/*` com SSR/SSG independente.
- [x] Traduzir conteúdo, CTAs, FAQs, diferenciais e navegação para inglês natural.
- [x] Implementar hreflang específico por caminho em PT e EN.
- [x] Atualizar sitemap para incluir URLs PT/EN e alternates.
- [x] Manter robots permitindo crawlers.
- [x] Rodar `npm run build` com as novas rotas.
- [x] Validar HTML puro de pelo menos 3 páginas em cada idioma.
- [x] Confirmar sitemap com URLs `/en/*`.
- [ ] Salvar checkpoint e gerar ZIP atualizado.

## Correções de interface, diferenciais e SEO — agosto de 2026

- [x] Corrigir numeração da frota para exibir `10` sem prefixo `0` na décima categoria blindada.
- [x] Corrigir quebra do e-mail no rodapé mobile com coluna responsiva e quebra de linha segura.
- [x] Redesenhar o ícone de coco em SVG de linha com silhueta e marcas naturais reconhecíveis.
- [x] Adicionar álcool em gel aos diferenciais PT/EN.
- [x] Uniformizar todos os ícones pelo mesmo sistema SVG, tamanho e traço.
- [x] Exibir diferenciais de bordo apenas nas páginas de transfer, motorista, eventos e reserva onde são contextuais; manter frota, concierge, destinos, sobre e parcerias sem o bloco.
- [x] Enriquecer SEO local com title, description, abertura, FAQs e links relacionados em páginas de aeroporto, transfer, frota, concierge, destinos, sobre, reserva e parcerias.
- [x] Rodar `npm run build` e `npm run check` sem erros, com 41 páginas estáticas.
- [x] Validar visualmente `/transfer-blindado`, `/frota` e `/en/transfer-blindado` em mobile.
- [x] Validar HTML bruto: `10` na frota, ausência de `010`, e-mail completo, álcool em gel, diferenciais condicionais e metadata SEO.
- [ ] Salvar checkpoint atualizado.

## Especificação final Pasted_content_04

- [x] Auditar toda numeração e garantir `String(i + 1).padStart(2, "0")` ou equivalente em todas as listas.
- [x] Corrigir os sete ícones: garrafa, coco, pacote de snack, lenço com folha, álcool em gel, carregador e cadeirinha infantil.
- [x] Padronizar tamanho, stroke, cor e estilo de todos os ícones em todas as páginas.
- [x] Implementar header completo com 9 links na ordem especificada e CTA separado.
- [x] Implementar menu hambúrguer/drawer mobile com os mesmos 9 links.
- [x] Implementar footer com colunas Serviços e Empresa, além de contatos, CNPJ e idioma.
- [x] Rodar build e validar rotas.
- [x] Capturar prova visual dos diferenciais.
- [x] Capturar prova visual da frota 01–10.
- [x] Capturar prova visual do header desktop e mobile.
- [x] Capturar prova visual do footer com colunas.

## Ajuste de aceite identificado após prova visual

- [x] Alinhar a lista renderizada ao documento final: exatamente 7 diferenciais, sem perder a exigência de álcool em gel. Definir a composição final conforme a especificação mais recente antes de regenerar as capturas.

## Correções comprovadas nas imagens anexadas

- [x] Rastrear e remover o `010` da frota em toda fonte, renderização e cache, confirmando `01`–`10` no HTML final.
- [x] Reorganizar o header desktop para o menu completo caber com leitura clara, sem esmagar links nem CTA.
- [x] Redesenhar os ícones para que garrafa, coco, pacote de snack, lenço com folha, álcool em gel, carregador e cadeirinha sejam reconhecíveis à primeira vista.
- [x] Recompilar, reiniciar a prévia e anexar novas provas visuais dos três pontos.

## Nova especificação final — Pasted_content.txt

- [x] Confirmar quantos componentes/definições de ícones existem e consolidar o caminho renderizado.
- [x] Aplicar literalmente os SVGs fornecidos para coco, snacks, lenço, carregadores e família; preservar o ícone de garrafa e higiene conforme especificado.
- [x] Unificar álcool em gel e lenço em um único diferencial, totalizando exatamente 6 itens em PT e EN.
- [x] Simplificar menu desktop para Transfer, Frota, Concierge, Casamentos e Eventos, Parcerias, com English e CTA separados.
- [x] Garantir espaçamento e leitura do header em viewport de 1440px.
- [x] Capturar screenshots em zoom individual dos ícones e do header desktop em 1440px.
- [x] Build, HTML bruto e checkpoint final.

## Nova correção — Coconut oficial e submenu Serviços

- [x] Verificar se a dependência instalada exporta `Coconut` e confirmar a versão atual.
- [x] Se disponível, usar `Coconut` oficial somente no diferencial de água de coco; não alterar os outros cinco ícones.
- [x] Se indisponível, parar antes de desenhar SVG customizado e informar o usuário.
- [x] Criar submenu desktop de Serviços com os 7 serviços especificados.
- [x] Manter Parcerias, Sobre, English e CTA fora do submenu, na ordem solicitada.
- [x] Capturar submenu aberto em 1440px e coco em zoom individual.
- [x] Build, type-check e checkpoint final.

## Seção Diferenciais — especificação exata do usuário

- [x] Água mineral e água de coco — “Água mineral e água de coco a bordo.” — ícone de gota d’água.
- [x] Snacks a bordo — “Snacks selecionados para o trajeto.” — ícone de biscoito.
- [x] Álcool em gel e lenços — “Álcool em gel e lenço umedecido disponíveis a bordo.” — escudo com check.
- [x] Internet Starlink — “Conexão via satélite em veículos e rotas compatíveis.” — sinal de wifi.
- [x] Carregadores — “Carregadores para eletrônicos disponíveis a bordo.” — raio.
- [x] Conforto para crianças — copy fornecida — ícone de cadeirinha/criança.
- [x] Screenshot completo desktop e mobile da seção com os seis itens.

## Correção do espaçamento do hero de serviço

- [x] Auditar `service-hero`, `service-hero-content`, header fixo e `back-link`.
- [x] Garantir respiro mínimo equivalente ao header + margem extra em todas as páginas de serviço.
- [x] Validar `/transfer-blindado` e `/frota` em 1440×700, 1440×900 e 1440×1200.
- [x] Confirmar visualmente que “Voltar à Nativos” não encosta nem sobrepõe o header.
- [x] Salvar checkpoint e entregar screenshots 1440×900.

## Remoção do seletor visível de idioma

- [x] Remover o link/botão de idioma do header desktop e mobile.
- [x] Remover o seletor de idioma do footer e da Home.
- [x] Preservar `/en`, canonical, hreflang, sitemap e robots.
- [x] Validar build e aparência desktop/mobile.
- [ ] Salvar checkpoint atualizado.

## Correções finais e página de passeios — Pasted_content_2

- [x] Reorganizar menu: apenas 4 itens no submenu Serviços, incluindo Passeios.
- [x] Mover Concierge, Casamentos e Eventos, Frota e Destinos para a barra principal.
- [x] Ajustar submenu para verde profundo translúcido, hover dourado e bordas sutis.
- [x] Confirmar e incluir Corumbau, Santo André e Itacaré nos destinos onde a lista aparece.
- [x] Reforçar em todas as páginas de transfer que o serviço é 100% privativo e aceita rotas personalizadas sob consulta.
- [x] Criar página indexável de passeios com rotas, duração de até 8 horas, saída da hospedagem, motorista aguardando e retorno no mesmo veículo.
- [x] Incluir funcionamento dos passeios no corpo, items e FAQ.
- [x] Atualizar sitemap e links PT/EN.
- [x] Rodar build, validar HTML e capturar as cinco provas solicitadas.

## Reordenação da jornada do cliente

- [x] Definir a sequência de navegação pela jornada B2C, não pela ordem interna dos serviços.
- [x] Reordenar os itens do header e do submenu mantendo todos os destinos acessíveis.
- [x] Espelhar a mesma lógica no drawer mobile e no footer.
- [x] Validar clareza, densidade e links em desktop/mobile.
- [ ] Salvar checkpoint atualizado.

## Nova ordem e efeitos de interação

- [x] Reordenar header, drawer mobile e footer para: Sobre, Serviços, Frota, Concierge, Casamentos e Eventos, Parcerias.
- [x] Manter o submenu de Serviços com os serviços já definidos.
- [x] Adicionar efeitos sutis de revelação, luz, hover editorial e textura coerentes com Casa de Areia.
- [x] Respeitar `prefers-reduced-motion`, performance e contraste.
- [x] Rodar build e validar desktop/mobile.
- [ ] Salvar checkpoint atualizado.

## Ajuste do menu mobile

- [x] Confirmar a sequência do drawer mobile: Sobre, Serviços, Frota, Concierge, Casamentos e Eventos, Parcerias.
- [x] Garantir que o submenu/agrupamento de Serviços permaneça claro no celular.
- [x] Validar abertura, fechamento, foco e links em viewport mobile.
- [ ] Rodar build e salvar checkpoint atualizado.

## Otimização pré-publicação — SEO, marca e conversão

- [x] Auditar e corrigir metadata, canonical, hreflang, sitemap, robots e entidades globais.
- [x] Expandir a mensagem comercial das Homes para intenções de transfer Porto Seguro–Trancoso e atendimento internacional.
- [x] Fortalecer JSON-LD, entidade da empresa, serviços, BreadcrumbList e prontidão para crawlers de IA.
- [x] Adicionar `/llms.txt` factual e controlado, sem substituir sitemap ou robots.
- [x] Identificar CTAs de WhatsApp com atributos semânticos para futura medição de conversão.
- [x] Otimizar imagens: hero prioritário, imagens secundárias lazy e decoding assíncrono.
- [x] Corrigir soft-404 nas rotas dinâmicas com `notFound()` real.
- [x] Validar build, type-check, rotas geradas e HTML SSR; a captura visual automatizada apresentou exceção inconsistente, enquanto a navegação direta do browser renderizou a Home corretamente.
- [ ] Documentar dependências externas: publicação, Search Console, Perfil da Empresa, avaliações reais e backlinks.
- [ ] Salvar checkpoint atualizado antes da publicação.

## Correção crítica do preview mobile

- [x] Reproduzir a exceção client-side na Home e em uma rota interna.
- [x] Identificar a causa operacional: preview servindo bundle/cache antigo após rebuild.
- [x] Reiniciar o runtime e validar renderização sem remover SEO.
- [x] Validar Home e rota interna em viewport mobile, incluindo hero, CTA e navegação.
- [x] Confirmar HTML SSR com status 200 nas rotas válidas e 404 real em slug inexistente.
- [ ] Salvar checkpoint estável após a correção.

## Ícones de contato no rodapé

- [x] Adicionar ícones finos e consistentes para WhatsApp, Instagram e e-mail nos rodapés PT/EN.
- [x] Preservar texto completo, links funcionais, labels acessíveis e boa leitura no celular.
- [x] Validar build, type-check e capturas mobile PT/EN; salvar checkpoint.

## Refinamento de escala dos contatos do rodapé

- [x] Reduzir os ícones para uma escala proporcional ao texto.
- [x] Compactar o espaçamento vertical e equalizar o alinhamento dos três contatos.
- [x] Manter o e-mail completo, foco acessível e boa leitura no celular.
- [x] Validar desktop/mobile, build e salvar checkpoint.

## Correção estrutural do bloco de contatos — nova rodada

- [x] Reproduzir o rodapé em recorte aproximado para avaliar escala real.
- [x] Refazer a coluna de contatos com ícones pequenos, linhas compactas e espaçamento controlado.
- [x] Garantir que a alteração seja claramente visível, não apenas uma regra CSS marginal.
- [x] Validar build e a versão reiniciada em mobile; desktop permanece validado no checkpoint anterior.

## Correção pontual — distância ícone/texto

- [x] Remover o deslocamento estrutural introduzido no bloco de contatos.
- [x] Manter tamanho, posição e espaçamento vertical; aumentar somente o gap horizontal ícone/texto.
- [x] Validar a alteração sem mover o bloco para o centro da página.
- [ ] Rodar build e salvar checkpoint.

## Gap ícone/texto no rodapé — correção objetiva

- [x] Auditar os gaps atuais dos três contatos e dos demais pares ícone+texto.
- [x] Aplicar `gap: 9px` de forma consistente em WhatsApp, Instagram e e-mail.
- [x] Não alterar posição do bloco, tamanho dos ícones ou espaçamento vertical.
- [x] Validar build e preparar captura ampliada exclusivamente do rodapé.

## Diagnóstico obrigatório — gap do rodapé

- [x] Inspecionar HTML renderizado dos três links de contato.
- [x] Listar todas as regras CSS efetivas e verificar sobrescritas.
- [x] Confirmar componentes e arquivos de estilo únicos em uso.
- [x] Responder o diagnóstico antes de editar CSS.
- [x] Corrigir a causa raiz (`.footer-right a { gap: 0; }`), validar build, preview reiniciado e screenshot ampliado.
- [x] Entregar HTML/CSS final e documentar a cascata corrigida.

## Ícones oficiais de Instagram e WhatsApp no rodapé

- [x] Auditar imports e markup atuais dos três contatos.
- [x] Usar Instagram reconhecível no formato quadrado arredondado, lente e ponto superior.
- [x] Criar WhatsApp outline com balão, rabinho e fone interno.
- [x] Preservar tamanho, cor âmbar e `gap: 9px` dos contatos.
- [x] Validar build, preview reiniciado e captura ampliada dos três ícones lado a lado.

## Auditoria externa — comparação e priorização

- [ ] Confrontar rotas e recomendações de SEO com a estrutura atual.
- [ ] Verificar cobertura real de páginas em inglês e hreflang.
- [ ] Avaliar imagens, Core Web Vitals e uso de next/image.
- [ ] Avaliar E-E-A-T, Sobre, prova institucional e sameAs.
- [ ] Definir páginas de rotas/destinos e conteúdos editoriais sem duplicação.
- [ ] Separar ações externas: GBP, reviews reais, Search Console, Bing e backlinks.

## Verificação do parecer do Claude

- [ ] Contar referências de imagem e identificar seus domínios/formatos.
- [ ] Confirmar se existe configuração `next.config.*` e se `next/image` está em uso.
- [ ] Mapear slugs atuais e comparar com possíveis URLs legadas.
- [ ] Verificar se redirects são necessários ou apenas recomendáveis.
- [ ] Entregar parecer factual antes de implementar qualquer migração.

## Correções consolidadas das duas auditorias

- [x] Consolidar achados e separar correções de código das dependências externas.
- [x] Criar `next.config.mjs` com otimização futura de imagens remotas e redirects permanentes dos aliases confirmados.
- [x] Fortalecer E-E-A-T técnico com entidade, contactPoint, CNPJ, foundingDate, área de atuação e sameAs oficial confirmado, sem fabricar provas.
- [x] Confirmar cobertura atual de rotas PT/EN, hreflang, schemas, sitemap, robots e 404 real.
- [x] Revisar conversão, acessibilidade e instrumentação já existente.
- [x] Validar build com 45 páginas, type-check, manifest e redirects 308.
- [ ] Migrar imagens atuais para `next/image` junto com os arquivos reais enviados pelo usuário.
- [ ] Documentar pendências externas: imagens reais, GBP, reviews reais, Search Console, Bing e backlinks.

## Correção de aliases canônicos concluída

- [x] Criar `canonicalSlugs` somente com slugs principais.
- [x] Usar `canonicalSlugs` em sitemap e geração estática PT/EN.
- [x] Corrigir metadata PT para usar `page.slug` canônico; EN já estava correto.
- [x] Confirmar redirects permanentes dos cinco aliases em PT/EN; Next entrega 308 permanente.
- [x] Revisar links internos e confirmar ausência de hrefs para aliases.
- [x] Rodar `npm install` (após limpar node_modules), `npm run check` e `npm run build`, todos aprovados.
- [x] Inspecionar sitemap, contagem antes/depois, HTML, redirects, canonicals e hreflang.

## Correções consolidadas das duas auditorias

- [x] Consolidar achados e separar correções de código das dependências externas.
- [x] Criar `next.config.mjs` com otimização futura de imagens remotas e redirects permanentes dos aliases confirmados.
- [x] Fortalecer E-E-A-T técnico com entidade, contactPoint, CNPJ, foundingDate, área de atuação e sameAs oficial confirmado, sem fabricar provas.
- [x] Confirmar cobertura atual de rotas PT/EN, hreflang, schemas, sitemap, robots e 404 real.
- [x] Revisar conversão, acessibilidade e instrumentação já existente.
- [x] Validar build com 35 páginas após remoção dos aliases da geração estática e redirects 308.
- [ ] Migrar imagens atuais para `next/image` junto com os arquivos reais enviados pelo usuário.
- [ ] Documentar pendências externas: imagens reais, GBP, reviews reais, Search Console, Bing e backlinks.
