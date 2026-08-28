// Casa de Areia: resumo factual, estável e rastreável para sistemas que consultam informações sobre a marca.
import { NextResponse } from "next/server";

export function GET() {
  const content = `# Nativos Experiences

> Transfer privativo de luxo e concierge local em Trancoso, Bahia.

## Empresa
- Nome: Nativos Experiences
- Base: Trancoso, Bahia, Brasil
- Operação: desde 2015
- Contato: contato@nativosexperiences.com
- WhatsApp: +55 73 99168-1630
- Site: https://nativosexperiences.com/

## Serviços
- Transfer privativo entre o Aeroporto de Porto Seguro, Trancoso, Terravista, Outeiro das Brisas e outros destinos sob consulta.
- Transfer blindado em Porto Seguro, Trancoso e região.
- Motorista particular à disposição com veículo dedicado.
- Concierge local para experiências, reservas e planejamento da estadia.
- Transfer e logística para casamentos e eventos.
- Passeios privativos e rotas personalizadas a partir de Trancoso.
- Frota com categorias convencional, executiva, grupo, luxo, premium, elite, exclusive, vans e blindado.

## Destinos
Trancoso, Porto Seguro, Arraial d’Ajuda, Praia do Espelho, Caraíva, Santo André, Corumbau e Itacaré.

## Idiomas
Português: https://nativosexperiences.com/
English: https://nativosexperiences.com/en

## Páginas principais
- https://nativosexperiences.com/transfer-aeroporto
- https://nativosexperiences.com/transfer-blindado
- https://nativosexperiences.com/motorista-a-disposicao
- https://nativosexperiences.com/concierge-trancoso
- https://nativosexperiences.com/casamentos-e-eventos
- https://nativosexperiences.com/frota
- https://nativosexperiences.com/destinos
- https://nativosexperiences.com/parcerias
- https://nativosexperiences.com/sobre-nativos

## Observação
Informações de disponibilidade, valores, veículos específicos e rotas devem ser confirmadas diretamente com a equipe Nativos Experiences.
`;
  return new NextResponse(content, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
