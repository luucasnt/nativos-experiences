import type { Metadata } from "next";
import { Header, Footer } from "@/components/SiteChrome";

const siteUrl = "https://www.nativosexperiences.com";

export const metadata: Metadata = {
  title: "Termos e Condições",
  description: "Termos e Condições Gerais de Uso dos serviços da Nativos Experiences LTDA em Trancoso, Bahia.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/termos-e-condicoes" },
};

export default function TermosECondicoes() {
  return (
    <main className="service-page sand-theme legal-page" lang="pt-BR">
      <Header />
      <section className="service-body section-light">
        <div className="legal-wrap">
          <p className="eyebrow dark"><span className="eyebrow-dot" /> Documentação legal</p>
          <h1>Termos e Condições</h1>
          <p className="legal-updated">Última atualização: 16 de setembro de 2026</p>

          <h2>1. Disposições Gerais</h2>
          <p>A <strong>Nativos Experiences LTDA</strong>, sociedade limitada com sede na Rua Carlos Alberto Parracho, 436, Trancoso, Porto Seguro - BA, CEP 45818-000, inscrita no CNPJ sob o nº 22.891.018/0001-63 (doravante "Nativos Experiences" ou "Nativos"), é uma empresa especializada na prestação de serviços de transporte privativo, motorista particular, concierge e logística de eventos, atuando em Trancoso e na Costa do Descobrimento, Bahia, desde 2015.</p>
          <p>Estes Termos e Condições Gerais de Uso ("Termos") constituem um acordo entre a Nativos Experiences e seus clientes ("Usuário" ou "Cliente"), estabelecendo os direitos, deveres e obrigações de ambas as partes. Ao solicitar ou utilizar qualquer serviço da Nativos Experiences, o Usuário manifesta concordância integral com estes Termos.</p>

          <h2>2. Serviços Oferecidos</h2>
          <p>A Nativos Experiences presta os seguintes serviços, sempre em caráter privativo:</p>
          <ul>
            <li><strong>Transfer de aeroporto:</strong> deslocamento entre os aeroportos de Porto Seguro (BPS), Terravista (SBTV), Outeiro das Brisas (SNEC) e a hospedagem do Usuário.</li>
            <li><strong>Transfer entre cidades e destinos:</strong> deslocamentos entre Trancoso, Arraial d'Ajuda, Praia do Espelho, Caraíva, Santo André, Corumbau, Itacaré e outros pontos da região, sob consulta.</li>
            <li><strong>Motorista à disposição:</strong> locação de veículo com motorista por período determinado (4h, 8h, 12h ou 24h).</li>
            <li><strong>Passeios privativos:</strong> saídas de até 8 horas com motorista aguardando durante o passeio.</li>
            <li><strong>Transfer blindado:</strong> serviço de transporte em veículo blindado, disponível sob demanda e reserva antecipada.</li>
            <li><strong>Concierge:</strong> curadoria e intermediação de reservas em restaurantes, passeios, barcos e experiências locais, prestadas por terceiros.</li>
            <li><strong>Casamentos e eventos:</strong> coordenação de transporte de convidados, noivos, artistas e equipes para celebrações e eventos.</li>
          </ul>
          <p>A frota é organizada por categoria (convencional, executiva, premium, SUV, van e blindado). A categoria reservada é garantida; o modelo específico do veículo pode variar conforme disponibilidade, sendo sempre da mesma categoria contratada ou superior.</p>

          <h2>3. Reservas e Confirmação</h2>
          <p>As reservas podem ser solicitadas pelos seguintes canais:</p>
          <ul>
            <li>WhatsApp oficial da Nativos Experiences;</li>
            <li>E-mail (contato@nativosexperiences.com);</li>
            <li>Formulários disponíveis no site nativosexperiences.com;</li>
            <li>Parceiros e afiliados (hotéis, pousadas, agências, DMCs e cerimonialistas), que atuam como intermediários na oferta do serviço.</li>
          </ul>
          <p>A reserva é considerada confirmada somente após a Nativos Experiences validar disponibilidade, categoria de veículo e condições comerciais, e comunicar a confirmação ao Usuário. Quando o serviço é contratado por meio de um parceiro ou afiliado, a relação de prestação do serviço permanece entre a Nativos Experiences e o Usuário final; o parceiro atua apenas como intermediário da reserva.</p>

          <h2>4. Preços e Pagamento</h2>
          <p>Os valores são informados no momento da confirmação da reserva, considerando origem, destino, categoria de veículo, data, horário e serviços adicionais solicitados. As formas de pagamento aceitas são comunicadas junto à confirmação e podem incluir transferência bancária, PIX ou outros meios informados pela equipe da Nativos Experiences.</p>

          <h2>5. Cancelamento e Alterações</h2>
          <p>Solicitações de cancelamento ou alteração devem ser comunicadas com a maior antecedência possível pelos canais de atendimento da Nativos Experiences. Salvo condição diversa informada expressamente no momento da reserva:</p>
          <ul>
            <li>Cancelamentos com <strong>24 horas ou mais</strong> de antecedência do horário confirmado não geram cobrança.</li>
            <li>Cancelamentos com <strong>menos de 24 horas</strong> de antecedência podem estar sujeitos à cobrança total ou parcial do valor do serviço, em razão da alocação prévia de veículo e motorista.</li>
            <li>Alterações de data, horário ou trajeto estão sujeitas à disponibilidade e podem implicar em novo cálculo de valor.</li>
          </ul>

          <h2>6. Responsabilidades da Nativos Experiences</h2>
          <p>A Nativos Experiences compromete-se a prestar os serviços contratados com atenção, pontualidade e segurança, utilizando motoristas habilitados e veículos em condições adequadas de uso. A empresa não se responsabiliza por atrasos ou alterações decorrentes de caso fortuito, força maior, condições climáticas, interrupção de balsas, bloqueios de via, atrasos de voo ou outras circunstâncias alheias à sua vontade, comprometendo-se a comunicar o Usuário e buscar a melhor alternativa disponível nessas situações.</p>
          <p>Serviços prestados por terceiros e intermediados pelo concierge da Nativos Experiences (restaurantes, passeios, barcos, fornecedores de eventos) são de responsabilidade dos respectivos prestadores; a Nativos atua como intermediária na indicação e organização desses serviços.</p>

          <h2>7. Responsabilidades do Usuário</h2>
          <p>O Usuário compromete-se a fornecer informações corretas no momento da reserva (data, horário, número de passageiros, bagagem e, quando aplicável, número do voo), a estar no local combinado no horário acordado e a zelar pela integridade do veículo durante o trajeto. Danos causados ao veículo por uso indevido, mau uso ou negligência do Usuário poderão ser cobrados à parte.</p>

          <h2>8. Transfer Blindado — Condições Específicas</h2>
          <p>O serviço de transfer blindado está sujeito à disponibilidade do veículo na data solicitada, sendo recomendada reserva com antecedência. O nível de blindagem e as condições específicas do veículo são informados no momento da confirmação da reserva.</p>

          <h2>9. Propriedade Intelectual</h2>
          <p>A marca "Nativos Experiences", o conteúdo do site nativosexperiences.com e os materiais relacionados são de propriedade da Nativos Experiences LTDA, sendo vedada sua reprodução sem autorização prévia por escrito.</p>

          <h2>10. Privacidade</h2>
          <p>Os dados pessoais fornecidos para fins de reserva (nome, contato, informações de voo e hospedagem) são utilizados exclusivamente para a execução do serviço contratado, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).</p>

          <h2>11. Alterações destes Termos</h2>
          <p>A Nativos Experiences poderá atualizar estes Termos a qualquer momento, sendo a versão vigente sempre a publicada nesta página, com a respectiva data de atualização.</p>

          <h2>12. Lei Aplicável e Foro</h2>
          <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Porto Seguro, Bahia, para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.</p>

          <h2>13. Contato</h2>
          <p>Dúvidas sobre estes Termos podem ser enviadas para <a href="mailto:contato@nativosexperiences.com">contato@nativosexperiences.com</a> ou pelo WhatsApp oficial da Nativos Experiences.</p>
        </div>
      </section>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: "Termos e Condições", url: `${siteUrl}/termos-e-condicoes`, isPartOf: { "@id": `${siteUrl}/#website` } }) }} />
    </main>
  );
}
