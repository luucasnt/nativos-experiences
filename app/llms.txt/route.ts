// Casa de Areia: resumo factual, estável e rastreável para sistemas que consultam informações sobre a marca.
import { NextResponse } from "next/server";

export function GET() {
  const content = `# Nativos Experiences

> Transfer privativo de luxo e concierge local em Trancoso, Bahia.

Empresa fundada em 2015, sediada em Trancoso, Bahia, Brasil. Contato: contato@nativosexperiences.com, WhatsApp +55 73 99168-1630.

Serviços: transfer privativo entre o Aeroporto de Porto Seguro, Trancoso, Terravista, Outeiro das Brisas e outros destinos sob consulta; transfer blindado; motorista particular à disposição; concierge local para experiências, reservas e planejamento da estadia; transfer e logística para casamentos e eventos; passeios privativos e rotas personalizadas. Frota com categorias convencional, executiva, grupo, luxo, premium, elite, exclusive, vans e blindado.

Destinos atendidos: Trancoso, Porto Seguro, Arraial d’Ajuda, Praia do Espelho, Caraíva, Santo André, Corumbau e Itacaré.

Informações de disponibilidade, valores, veículos específicos e rotas devem ser confirmadas diretamente com a equipe Nativos Experiences.

## Idiomas
- [Português](https://www.nativosexperiences.com/): versão principal do site
- [English](https://www.nativosexperiences.com/en): English version of the site

## Páginas principais
- [Transfer Aeroporto](https://www.nativosexperiences.com/transfer-aeroporto): transfer privativo do Aeroporto de Porto Seguro para Trancoso
- [Transfer Blindado](https://www.nativosexperiences.com/transfer-blindado): transfer blindado em Porto Seguro e Trancoso
- [Motorista à Disposição](https://www.nativosexperiences.com/motorista-a-disposicao): motorista particular por período
- [Concierge](https://www.nativosexperiences.com/concierge-trancoso): concierge local em Trancoso
- [Casamentos e Eventos](https://www.nativosexperiences.com/casamentos-e-eventos): transporte para casamentos e eventos
- [Frota](https://www.nativosexperiences.com/frota): categorias de veículos disponíveis
- [Destinos](https://www.nativosexperiences.com/destinos): rotas e destinos atendidos
- [Parcerias](https://www.nativosexperiences.com/parcerias): operação para hotéis, pousadas e DMCs
- [Sobre](https://www.nativosexperiences.com/sobre-nativos): história e operação da empresa
`;
  return new NextResponse(content, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
