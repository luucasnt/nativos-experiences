# Relatório de alterações — enriquecimento SEO e conversão

## Escopo

O documento foi aplicado sem trocar a direção visual Casa de Areia. As alterações concentram-se em profundidade de conteúdo, intenção de busca, conversão, dados estruturados, linkagem interna e remoção de afirmações numéricas não confirmadas.

## Alterações por página

| Página | Alterações incorporadas |
|---|---|
| `/transfer-blindado` | Página prioritária enriquecida com abertura direta sobre o Mercedes-Benz GLE 400d, público atendido, processo de reserva, região, operação discreta, quatro FAQs específicas, Service + FAQPage schema, SEO para Porto Seguro/Trancoso e links para eventos, motorista e rota Porto Seguro–Trancoso. |
| `/casamentos-e-eventos` | Conteúdo separado para casais/cerimonialistas e produtoras/agências; inclusão de casamentos, festas privadas e festivais; logística de convidados, noivos, artistas, staff e fornecedores; CTA com mensagem de WhatsApp que solicita data, convidados e tipo de evento; FAQs específicas e links para blindado, motorista e concierge. |
| `/motorista-a-disposicao` | Página enriquecida para “motorista particular Trancoso” e “motorista particular Porto Seguro”, com abertura direta, uso durante a estadia, períodos de 4h/8h/12h/24h, FAQ, metadata e links contextuais. |
| `/transfer-porto-seguro-trancoso` | Nova página dedicada à rota principal, com tempos via balsa e BR-367, condições que podem afetar o trajeto, abertura direta, metadata SEO, quatro FAQs, Service + FAQPage schema e links para aeroporto, blindado e motorista. |
| `/transfer-aeroporto` | Recebe o bloco reutilizável de diferenciais, FAQs estruturadas e linkagem contextual para páginas relacionadas. Mantidos Porto Seguro, Terravista e Outeiro das Brisas como portas de entrada. |
| `/transfer-trancoso`, `/frota`, `/concierge-trancoso`, `/destinos`, `/sobre-nativos`, `/reserva-online` | Recebem o bloco de diferenciais, FAQs renderizadas e linkagem contextual. O conteúdo existente foi preservado e não foram adicionados números de avaliações, clientes ou percentuais. |
| `/` | Bloco de diferenciais adicionado à Home com marcas próprias para água mineral, água de coco, snacks, Starlink e itens infantis, sem uso de checkmark genérico. |
| Todas as páginas de serviço | Metadata individual, abertura autoexplicativa quando definida, Service schema, FAQPage schema quando há FAQs e navegação para pelo menos duas páginas relacionadas. |

## Diferenciais reutilizáveis

O componente `Differentiators` foi criado e aplicado na Home e nas páginas de serviço. Cada diferencial possui marca visual própria: H2O para água mineral, COCO para água de coco, PAUSA para snacks, SINAL para Starlink em veículos e rotas compatíveis e FAMÍLIA para bebê conforto e cadeirinha sem custo adicional.

## Pontos `[CONFIRMAR]` antes da publicação

| Item | Status |
|---|---|
| Exclusividade do Mercedes-Benz GLE 400d como único blindado do segmento na região de Porto Seguro/Trancoso | `[CONFIRMAR]` — foi fornecido explicitamente no documento, mas deve ser validado juridicamente/comercialmente antes da publicação. |
| Nível de blindagem do Mercedes-Benz GLE 400d | `[CONFIRMAR]` — não foi publicado um nível específico; a página orienta confirmação no atendimento. |
| Starlink em veículos e rotas compatíveis | `[CONFIRMAR]` — incorporado conforme o documento, validar disponibilidade real por veículo/rota. |
| Bebê conforto e cadeirinha sem custo adicional | `[CONFIRMAR]` — incorporado conforme o documento, validar condições operacionais. |
| Disponibilidade do blindado para aeroporto, eventos e fora de Trancoso | `[CONFIRMAR]` — a página mantém “sob consulta” e requer confirmação por data e rota. |
| Modelos e capacidades da frota | `[CONFIRMAR]` — mantidos conforme dados anteriormente fornecidos; validar disponibilidade e configuração por serviço. |

## Validação técnica

O build SSR passou com 23 páginas prerenderizadas. A nova rota `/transfer-porto-seguro-trancoso` foi incluída no App Router, sitemap e geração de páginas. As páginas prioritárias foram verificadas em preview mobile, e o conteúdo SSR contém os schemas e textos principais antes da hidratação.
