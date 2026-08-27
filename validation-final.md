# Validação final — Pasted_content_04

O `npm run build` e `npm run check` passaram após os ajustes de numeração, ícones e SEO, com 41 páginas estáticas. A captura intermediária mostrou que a prévia gerenciada ainda exibia o chrome anterior em algumas rotas: o footer não apresentava as novas colunas e o header ainda não refletia de forma clara o menu completo. O próximo passo obrigatório é reiniciar o servidor gerenciado e capturar novas provas visuais depois que o build atual estiver ativo.

## Capturas finais parciais

As capturas desktop confirmaram o header com navegação, a seção de diferenciais com os ícones gráficos, a frota com 01 a 10 e o footer com Serviços, Empresa e contatos. As capturas mobile confirmaram o bloco de diferenciais, o número 10 sem dígito extra e o footer responsivo. A tentativa de abrir o drawer via query string não foi refletida na captura; será criada uma rota temporária de prova para visualizar o menu mobile aberto e removida antes do checkpoint.

## Provas visuais finais

A prévia final confirmou o drawer mobile aberto com os nove links na ordem especificada e CTA separado. A página de blindado mostrou os ícones de garrafa, coco com textura e canudo, pacote de snack, lenço com folha, álcool em gel, carregador, Starlink e cadeirinha infantil, todos no mesmo sistema de linha. A página de frota mostrou a sequência 01 a 10, com Blindado como 10 e sem `010`. O footer exibiu as colunas Serviços e Empresa, além de WhatsApp, Instagram, e-mail, idioma e CNPJ.

## Ajuste definitivo de aceite

A lista final foi reduzida para exatamente sete diferenciais, conforme o documento Pasted_content_04: água mineral, água de coco, snacks, lenço umedecido, álcool em gel, carregadores e cadeirinha infantil. Starlink permanece disponível apenas como componente gráfico não renderizado, pois não faz parte da lista final de sete itens do documento. O build passou novamente com 41 páginas. A captura mobile do drawer aberto mostra os nove links na ordem solicitada; as capturas finais mostram os sete ícones, a frota 01–10 e o footer com colunas.

## Auditoria das imagens do usuário

A imagem original do header mede 1284×143 e confirma que os nove links, seletor de idioma e CTA estão comprimidos em uma única linha, reduzindo a legibilidade. A imagem original da frota confirma visualmente `010` antes de `Blindado`, portanto a correção precisa cobrir a fonte efetivamente renderizada nessa seção, não apenas uma ocorrência de template encontrada por busca.

## Pasted_content.txt — validação final

A implementação agora tem um único mapa de ícones em `components/Differentiators.tsx`; os cinco SVGs fornecidos foram aplicados literalmente nos componentes correspondentes. `lib/data.ts` contém exatamente seis diferenciais PT/EN, com higiene unificada em “Álcool em gel e lenço umedecido disponíveis a bordo”. `SiteChrome.tsx` contém cinco links principais — Transfer, Frota, Concierge, Casamentos e Eventos e Parcerias — enquanto English e o CTA permanecem separados. O build passou com 41 rotas, e a prévia atualizada foi capturada em viewport desktop de 1440 px e em zoom individual dos ícones.

A captura anterior à reinicialização mostrou o chrome antigo; ela foi descartada. A captura válida é a feita após o reinício e o build limpo, na qual o header exibe os cinco destinos e o bloco de diferenciais exibe seis itens.

## Provas finais — Coconut oficial e submenu

A fonte oficial do Lucide confirma que `Coconut` não é exportado pelo pacote principal `lucide-react`; ele pertence ao pacote oficial separado `@lucide/lab` e é renderizado via `Icon iconNode={coconut}`. A dependência `@lucide/lab@0.2.0` foi adicionada e o build SSR passou. A captura em zoom mostra um coco tridimensional reconhecível, com casca, abertura e canudo. A captura desktop em 1440 px mostra o submenu Serviços aberto com Transfer Aeroporto, Transfer Blindado, Motorista à Disposição, Concierge, Casamentos e Eventos, Frota e Destinos; Parcerias, Sobre, English e o CTA permanecem fora do submenu.

## Fonte oficial consultada

- Lucide Coconut: https://lucide.dev/icons/lab/coconut — página oficial mostra `coconut` no segmento Lab e o uso React com `Icon` e `@lucide/lab`.
- Lucide React — With Lucide Lab: https://lucide.dev/guide/react/advanced/with-lucide-lab — documenta que Lucide Lab reúne ícones que não fazem parte da biblioteca principal e mostra `import { coconut } from '@lucide/lab'`.
- NPM @lucide/lab: https://www.npmjs.com/package/@lucide/lab — pacote oficial, versão consultada 0.2.0, sem dependências, usado com `lucide-react`.

## Revisão visual da referência editorial

A captura após o build final mostra o bloco de diferenciais com a composição corrigida: headline introdutório acima, seis cards em grade 3×2, ícones pequenos e finos, sem círculos ou molduras, títulos editoriais e descrições completas. A largura dos cards foi liberada para evitar a compressão anterior; no mobile a grade colapsa para uma coluna com o mesmo espaçamento e hierarquia. HTML bruto confirma os seis conteúdos: Internet Starlink; Água e água de coco; Snacks a bordo; Lenços umedecidos; Álcool em gel; Carregadores para eletrônicos.
