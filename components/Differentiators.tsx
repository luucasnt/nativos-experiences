// Casa de Areia: diferenciais de hospitalidade com sinais próprios, discretos e sem iconografia genérica.
import type { Differentiator } from "@/lib/data";

export function Differentiators({ items, compact = false }: { items: Differentiator[]; compact?: boolean }) {
  return <section className={`differentiators ${compact ? "differentiators--compact" : ""}`} aria-labelledby="differentials-title">
    <div className="differentials-intro"><p className="eyebrow dark"><span className="eyebrow-dot" /> O cuidado nos detalhes</p><h2 id="differentials-title">Uma chegada com<br /><em>tudo no lugar.</em></h2></div>
    <div className="differentials-grid">{items.map((item) => <div className="differential" key={item.kind}><span className={`differential-mark differential-mark--${item.kind}`} aria-hidden="true">{item.label}</span><p>{item.text}</p></div>)}</div>
  </section>;
}
