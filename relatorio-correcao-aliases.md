# Relatório técnico — correção de aliases canônicos

## Escopo

Foi aplicada exclusivamente a correção de geração estática, sitemap, metadata canônica e validação de redirects para os cinco aliases informados. Não foram alterados H1, H2, títulos SEO, descriptions, FAQs, conteúdo, CTA, WhatsApp, frota, destinos, navegação, footer, header, CSS, responsividade, imagens ou a configuração de `images` do `next.config.mjs`.

## 1. Arquivos modificados

| Arquivo | Alteração |
|---|---|
| `lib/data.ts` | Adicionado `canonicalSlugs`; `allSlugs` permanece disponível somente para resolução de aliases; `getLocalizedSlugs()` passou a usar slugs canônicos. |
| `app/sitemap.ts` | Sitemap passou a ser gerado exclusivamente com `canonicalSlugs`. |
| `app/[slug]/page.tsx` | `generateStaticParams()` passou a usar `canonicalSlugs`; canonical, hreflang e `openGraph.url` passaram a usar `page.slug`. |
| `app/en/[slug]/page.tsx` | `generateStaticParams()` passou a usar `canonicalSlugs`; metadata EN já usava `page.slug` e foi preservada. |
| `todo.md` | Checklist e evidências da validação registrados. |

## 2. Aliases removidos da geração estática

Os cinco aliases deixaram de ser usados por `generateStaticParams()` em português e inglês:

- `/sobre` e `/en/sobre`
- `/concierge` e `/en/concierge`
- `/transfer-blindado-trancoso` e `/en/transfer-blindado-trancoso`
- `/transfer-aeroporto-terravista` e `/en/transfer-aeroporto-terravista`
- `/reserva` e `/en/reserva`

O build caiu de **45 páginas para 35 páginas**, redução equivalente às dez páginas de alias nos dois idiomas.

## 3. Redirects preservados e testados

O `next.config.mjs` continua cobrindo todos os aliases em PT e EN. O Next entrega redirect permanente HTTP **308**, que é o comportamento padrão de `permanent: true` no Next.js; não foi convertido artificialmente para 301.

| Origem | Destino | Resultado |
|---|---|---|
| `/sobre` | `/sobre-nativos` | 308, sem chain |
| `/concierge` | `/concierge-trancoso` | 308, sem chain |
| `/transfer-blindado-trancoso` | `/transfer-blindado` | 308, sem chain |
| `/transfer-aeroporto-terravista` | `/transfer-aeroporto` | 308, sem chain |
| `/reserva` | `/reserva-online` | 308, sem chain |
| `/en/sobre` | `/en/sobre-nativos` | 308, sem chain |
| `/en/concierge` | `/en/concierge-trancoso` | 308, sem chain |
| `/en/transfer-blindado-trancoso` | `/en/transfer-blindado` | 308, sem chain |
| `/en/transfer-aeroporto-terravista` | `/en/transfer-aeroporto` | 308, sem chain |
| `/en/reserva` | `/en/reserva-online` | 308, sem chain |

Cada destino respondeu normalmente com status final 200. Não foi detectado loop ou cadeia adicional.

## 4. Quantidade de páginas geradas

A contagem anterior era de **45 páginas**. Após a alteração, o build gerou **35 páginas**: 10 páginas a menos, correspondentes aos cinco aliases em dois idiomas.

## 5. `npm install`, `npm run check` e `npm run build`

O primeiro `npm install` encontrou um erro do resolvedor do npm ao reconciliar um `node_modules` pré-existente criado pelo pnpm. A instalação local foi limpa sem alteração no código ou lockfile e o comando foi executado novamente com sucesso.

Depois disso:

- `npm install --no-audit --no-fund`: aprovado após limpeza de `node_modules`.
- `npm run check`: aprovado, sem erros TypeScript.
- `npm run build`: aprovado, com 35 páginas estáticas geradas.

## 6. Sitemap final

O endpoint `/sitemap.xml` respondeu 200 e contém **28 URLs `<loc>`**, sendo 14 canônicas em português/inglês incluindo as duas homes. A inspeção confirmou:

- zero aliases dos cinco grupos;
- 28 URLs totais;
- 28 URLs únicas;
- zero duplicidades;
- presença de todos os 13 slugs canônicos em PT e EN;
- nenhum link quebrado identificado na lista gerada.

## 7. Canonical e hreflang

As páginas canônicas PT e EN foram testadas. Exemplos:

- `/sobre-nativos` declara canonical `https://nativosexperiences.com/sobre-nativos`;
- `/en/sobre-nativos` declara canonical `https://nativosexperiences.com/en/sobre-nativos`;
- `/transfer-blindado` declara canonical `https://nativosexperiences.com/transfer-blindado`;
- `/en/transfer-blindado` declara canonical `https://nativosexperiences.com/en/transfer-blindado`.

O HTML final contém as alternativas `pt-BR`, `en` e `x-default`, todas apontando para os caminhos canônicos correspondentes.

## 8. Links internos

Foi feita busca em `app`, `components` e `lib` pelos cinco caminhos antigos. Nenhum href interno ou `relatedSlug` aponta diretamente para um alias. `allSlugs` permanece somente na declaração e na função de lookup; não é mais usado para rotas ou sitemap.

## 9. Problemas encontrados

O único problema encontrado durante a validação foi o erro inicial do npm ao reconciliar uma instalação anterior de pnpm. A limpeza de `node_modules` resolveu o problema; nenhum arquivo de código ou lockfile precisou ser alterado. Nenhum problema permaneceu no check, build, sitemap, redirects, canonicals, hreflang ou links internos.
