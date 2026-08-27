// Direção visual: Horizonte Sintético — neo-futurismo editorial, azul-noite mineral, laranja Solar Signal e navegação por trajetória.
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if (!location.includes("#")) window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

export default App;
