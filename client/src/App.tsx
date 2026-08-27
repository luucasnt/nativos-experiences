// Direção visual: Casa de Areia — arquitetura B2C com páginas de serviço, SEO local e navegação editorial para o cliente final.
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";

function ScrollToTop() { const [location] = useLocation(); useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [location]); return null; }
function App() { return <ErrorBoundary><ScrollToTop /><Switch><Route path="/" component={Home} /><Route path="/transfer-aeroporto" component={() => <ServicePage type="airport" />} /><Route path="/transfer-aeroporto-terravista" component={() => <ServicePage type="airport" />} /><Route path="/transfer-trancoso" component={() => <ServicePage type="transfer" />} /><Route path="/frota" component={() => <ServicePage type="fleet" />} /><Route path="/transfer-blindado" component={() => <ServicePage type="armored" />} /><Route path="/transfer-blindado-trancoso" component={() => <ServicePage type="armored" />} /><Route path="/motorista-a-disposicao" component={() => <ServicePage type="chauffeur" />} /><Route path="/concierge" component={() => <ServicePage type="concierge" />} /><Route path="/concierge-trancoso" component={() => <ServicePage type="concierge" />} /><Route path="/casamentos-e-eventos" component={() => <ServicePage type="events" />} /><Route path="/destinos" component={() => <ServicePage type="destinations" />} /><Route path="/reserva" component={() => <ServicePage type="booking" />} /><Route path="/reserva-online" component={() => <ServicePage type="booking" />} /><Route path="/sobre" component={() => <ServicePage type="about" />} /><Route path="/sobre-nativos" component={() => <ServicePage type="about" />} /><Route component={NotFound} /></Switch></ErrorBoundary>; }
export default App;
