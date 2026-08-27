// Casa de Areia: bloco compartilhado com conteúdo editorial parametrizado e iconografia gráfica real.
import { Baby, Cookie, Droplet, GlassWater, SatelliteDish } from "lucide-react";
import type { Differentiator, DifferentiatorContent } from "@/lib/data";

const icons = { water: Droplet, coconut: GlassWater, snacks: Cookie, signal: SatelliteDish, family: Baby };

export function Differentiators({ items, content, compact = false }: { items: Differentiator[]; content: DifferentiatorContent; compact?: boolean }) {
  return <section className={`differentiators ${compact ? "differentiators--compact" : ""}`} aria-labelledby="differentials-title">
    <div className="differentials-intro"><p className="eyebrow dark"><span className="eyebrow-dot" /> {content.eyebrow}</p><h2 id="differentials-title">{content.title}<br /><em>{content.emphasis}</em></h2>{content.description && <p className="differentials-description">{content.description}</p>}</div>
    <div className="differentials-grid">{items.map((item) => { const Icon = icons[item.kind]; return <div className="differential" key={item.kind}><span className={`differential-mark differential-mark--${item.kind}`} aria-hidden="true"><Icon size={22} strokeWidth={1.35} /></span><p>{item.text}</p></div>; })}</div>
  </section>;
}
