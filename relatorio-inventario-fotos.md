# Inventário de fotos — Nativos Experiences

## Objetivo

Este relatório lista todas as fotos atualmente referenciadas pelo site, identifica onde cada uma aparece e registra os dados técnicos necessários para planejar a substituição por imagens reais. O inventário foi extraído da fonte central `lib/data.ts` e das Homes PT/EN; as páginas inglesas reutilizam as mesmas fotos das páginas portuguesas.

> **Resumo:** o site usa atualmente **4 arquivos de imagem únicos**, reutilizados em **13 páginas de serviço canônicas** e nas duas Homes. A futura substituição deve ser feita por função visual, não apenas por nome de arquivo, porque cada foto aparece em mais de uma página.

## Resumo técnico

| ID | Nome lógico | URL atual | Formato detectado | Extensão/Content-Type | Dimensões | Tamanho | Uso em páginas de serviço |
|---|---|---|---|---|---:|---:|---:|
| 01 | `hero` | `https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/VtQimewDJyvHxHBP.jpg` | PNG no conteúdo binário | `.jpg` / `image/jpeg` | 2560 × 1440 px | 6.101.104 bytes · 5,82 MiB | 3 |
| 02 | `arrival` | `https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/bJeJxNaHowAcQwoA.jpg` | PNG no conteúdo binário | `.jpg` / `image/jpeg` | 1664 × 2080 px | 5.606.583 bytes · 5,35 MiB | 4 |
| 03 | `coast` | `https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/juCISiyVGtGMuEWJ.jpg` | PNG no conteúdo binário | `.jpg` / `image/jpeg` | 1664 × 2080 px | 6.130.886 bytes · 5,85 MiB | 4 |
| 04 | `interior` | `https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/fYDlnobOrHYCOWuB.jpg` | PNG no conteúdo binário | `.jpg` / `image/jpeg` | 1664 × 2080 px | 5.053.126 bytes · 4,82 MiB | 2 |

### Observação importante sobre formato

Os quatro endpoints respondem com cabeçalho `Content-Type: image/jpeg` e usam URLs terminadas em `.jpg`, mas a assinatura binária detectada pelo Pillow identifica o conteúdo como **PNG**. Isso indica uma inconsistência entre extensão, cabeçalho e formato real. Na substituição, recomendamos enviar arquivos corretamente codificados em WebP, AVIF ou JPEG otimizado, com Content-Type correspondente.

## Mapa de uso por imagem

### 01 — `hero`

**Função visual:** hero amplo, veículo premium e atmosfera de chegada/celebração.

| Idioma | Página | Rota | Seção |
|---|---|---|---|
| PT | Home | `/` | Hero principal da Home |
| EN | Home | `/en` | Hero principal da Home |
| PT/EN | Transfer Blindado | `/transfer-blindado` · `/en/transfer-blindado` | Hero da página de serviço |
| PT/EN | Casamentos e Eventos | `/casamentos-e-eventos` · `/en/casamentos-e-eventos` | Hero da página de serviço |
| PT/EN | Parcerias | `/parcerias` · `/en/parcerias` | Hero da página de serviço |

**Alt atual principal:** “SUV premium em estrada costeira de Trancoso” na Home; nas páginas internas, o texto varia conforme o contexto, como veículo blindado, evento ou operação para hóspedes.

**Imagem real recomendada:** uma fotografia horizontal de alto impacto, com veículo premium realmente pertencente à frota, cenário reconhecível de Trancoso/Bahia e espaço negativo suficiente no lado esquerdo para o título branco. Ideal: 2560 × 1440 ou 2400 × 1350 px, composição horizontal 16:9.

### 02 — `arrival`

**Função visual:** chegada, acolhimento, motorista e transferência de aeroporto.

| Idioma | Página | Rota | Seção |
|---|---|---|---|
| PT/EN | Transfer Aeroporto | `/transfer-aeroporto` · `/en/transfer-aeroporto` | Hero de serviço |
| PT/EN | Transfer Porto Seguro–Trancoso | `/transfer-porto-seguro-trancoso` · `/en/transfer-porto-seguro-trancoso` | Hero de serviço |
| PT/EN | Motorista à Disposição | `/motorista-a-disposicao` · `/en/motorista-a-disposicao` | Hero de serviço |
| PT/EN | Sobre a Nativos | `/sobre-nativos` · `/en/sobre-nativos` | Hero de serviço |
| PT | Home | `/` | Seção “Você informa o voo. A gente cuida do resto.” |
| EN | Home | `/en` | Seção equivalente de chegada |
| PT/EN | Serviços da Home | `/` · `/en` | Cards de Transfer Aeroporto e Motorista à Disposição |

**Alt atuais:** variam entre recepção de passageiros, motorista local, chegada acolhedora e recepção privativa.

**Imagem real recomendada:** fotografia vertical ou retrato editorial de motorista recebendo passageiros ou abrindo a porta de um veículo premium, com contexto de aeroporto/hospedagem sem mostrar rostos sem autorização. Ideal para a página de serviço: 1664 × 2080 px ou 1800 × 2250 px, proporção aproximada 4:5.

### 03 — `coast`

**Função visual:** destino, litoral, descoberta, concierge e passeios.

| Idioma | Página | Rota | Seção |
|---|---|---|---|
| PT/EN | Transfer Trancoso | `/transfer-trancoso` · `/en/transfer-trancoso` | Hero de serviço |
| PT/EN | Passeios | `/passeios` · `/en/passeios` | Hero de serviço |
| PT/EN | Concierge Trancoso | `/concierge-trancoso` · `/en/concierge-trancoso` | Hero de serviço |
| PT/EN | Destinos | `/destinos` · `/en/destinos` | Hero de serviço |
| PT | Home | `/` | Seção “Trancoso é a base. A Bahia é o convite.” |
| EN | Home | `/en` | Seção equivalente de destinos |
| PT/EN | Serviços da Home | `/` · `/en` | Cards de Concierge e Passeios, conforme dados exibidos |

**Alt atuais:** variam entre estrada costeira, praia da Costa do Descobrimento e paisagem para experiências em Trancoso.

**Imagem real recomendada:** fotografia vertical de praia, estrada costeira, falésia, barco ou experiência local realmente relacionada aos destinos ofertados. Ideal: 1664 × 2080 px ou 1800 × 2250 px, proporção aproximada 4:5. Não usar uma foto genérica de praia se o objetivo for demonstrar um destino específico.

### 04 — `interior`

**Função visual:** conforto, frota e início de reserva.

| Idioma | Página | Rota | Seção |
|---|---|---|---|
| PT/EN | Frota | `/frota` · `/en/frota` | Hero de serviço |
| PT/EN | Reserva Online | `/reserva-online` · `/en/reserva-online` | Hero de serviço |
| PT | Home | `/` | Não aparece como foto nesta Home atual; a frota é apresentada em lista textual |
| EN | Home | `/en` | Não aparece como foto nesta Home atual; a frota é apresentada em lista textual |

**Alt atual:** “Interior confortável de veículo premium para transfer em Trancoso” na frota e “Detalhe de conforto no interior de veículo para reserva em Trancoso” na reserva.

**Imagem real recomendada:** fotografia horizontal ou vertical do interior real dos veículos da Nativos, destacando acabamento, espaço, limpeza, conforto e detalhes de categoria. Ideal: 1664 × 2080 px para o hero atual; enviar também uma versão horizontal de 2000 × 1250 px se a seção de frota evoluir para cards visuais.

## Uso nas Homes

A Home PT e a Home EN utilizam a mesma estrutura visual e as mesmas quatro referências, com textos e alt localizados:

| Foto | Home PT | Home EN |
|---|---|---|
| `hero` | Hero principal | Hero principal |
| `arrival` | Seção de chegada/welcome e card de Transfer Aeroporto | Seção de chegada/welcome e card de Transfer Aeroporto |
| `coast` | Seção Destinos e cards de Concierge/Passeios conforme fonte de dados | Seção Destinos e cards correspondentes em inglês |
| `interior` | Não há uso visual direto na Home atual | Não há uso visual direto na Home atual |

## Prioridade para envio das imagens reais

| Prioridade | Imagem a substituir | Motivo |
|---|---|---|
| P0 | `hero` | É a primeira impressão, o maior elemento visual e aparece em várias páginas estratégicas. |
| P0 | `arrival` | Sustenta a promessa central de transfer do aeroporto, chegada e atendimento local. |
| P1 | `coast` | É essencial para Trancoso, destinos, concierge e passeios; deve comunicar localização real. |
| P1 | `interior` | Reforça frota, conforto e reserva; importante para confiança e percepção premium. |

## O que enviar para a próxima etapa

Para cada imagem, envie preferencialmente o arquivo original em qualidade máxima e informe, se souber, a página/seção desejada. O conjunto mínimo recomendado é:

| Código | Arquivo desejado | Quantidade mínima |
|---|---|---:|
| HERO | Veículo premium em cenário de Trancoso, composição horizontal | 1 |
| ARRIVAL | Recepção/motorista/chegada de aeroporto ou hospedagem | 1–2 |
| COAST | Praia, estrada, destino ou experiência real da região | 2–3 |
| INTERIOR | Interior real dos veículos da frota | 1–2 |

Fotos de pessoas, hóspedes, casais, crianças, parceiros ou eventos devem ter autorização de uso. Para SEO e credibilidade, as imagens devem representar a operação real da Nativos, não bancos genéricos ou imagens geradas que possam sugerir uma frota ou experiência inexistente.

## Checklist da substituição futura

| Item | Situação |
|---|---|
| Receber imagens reais | Pendente do usuário |
| Confirmar página e seção de cada foto | Pendente após recebimento |
| Otimizar para WebP/AVIF ou JPEG correto | Próxima etapa |
| Gerar versões responsivas | Próxima etapa |
| Substituir referências em `lib/data.ts` | Próxima etapa |
| Atualizar alt text factual em PT/EN | Próxima etapa |
| Configurar dimensões e `sizes` com `next/image` | Próxima etapa |
| Validar LCP, CLS, mobile e recortes visuais | Próxima etapa |
| Remover dependência das URLs temporárias | Próxima etapa |
