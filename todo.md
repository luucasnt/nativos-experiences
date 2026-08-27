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
