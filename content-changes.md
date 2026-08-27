# Alterações de conteúdo — revisão `pasted_content_2.txt`

| Arquivo | Alterações |
|---|---|
| `lib/data.ts` | Fonte única atualizada com as **10 categorias da frota** na ordem definitiva; modelos e capacidades corrigidos; tempos de Porto Seguro–Trancoso e Terravista–Trancoso; explicação do Outeiro das Brisas/SNEC; contexto de Itacaré; alt text exclusivo por serviço; FAQs específicas por rota; nova entrada `/parcerias` com público, proposta B2B e FAQs. |
| `app/[slug]/page.tsx` | Passa a usar `imageAlt` em cada página; renderiza FAQs específicas no HTML SSR; aplica CTA B2B distinto para `/parcerias`; mantém a estrutura visual existente. |
| `app/page.tsx` | Frota da Home atualizada para as 10 categorias na ordem correta; texto de frota corrigido; Itacaré contextualizado como extensão da viagem. |
| `components/SiteChrome.tsx` | Link discreto de Parcerias no menu; URL de WhatsApp B2B separada; CNPJ incluído no rodapé. |
| `app/layout.tsx` | JSON-LD institucional atualizado com `foundingDate: 2015` e CNPJ `22.891.018/0001-63`. |
| `todo.md` | Itens da revisão marcados como concluídos. |

## Escopo preservado

Nenhum arquivo CSS foi alterado nesta revisão. A página B2B não compete com o CTA principal de consumidor final: ela possui link próprio no menu e mensagem de WhatsApp pré-preenchida específica para parceria. Não foram incluídos números de comissão nem afirmações comerciais não fornecidas.

## Validação

O build de produção Next foi executado com `NODE_ENV=production` e concluiu com 22 páginas prerenderizadas, incluindo `/parcerias`, aliases existentes, `sitemap.xml` e `robots.txt`. O HTML bruto confirmou metadata de rota, JSON-LD institucional, CNPJ, tempos de trajeto e conteúdo de parceria.
