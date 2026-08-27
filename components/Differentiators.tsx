// Casa de Areia: sete diferenciais com ícones gráficos reais, específicos e parametrização editorial por página.
import { Baby, Cable, Cookie, Package, SatelliteDish } from "lucide-react";
import type { Differentiator, DifferentiatorContent } from "@/lib/data";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };

function BottleIcon({ size = 25, strokeWidth = 1.35, ...props }: IconProps) { return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M9 3h6" /><path d="M10 3v3.2c0 .6-.2 1.1-.6 1.6A5.8 5.8 0 0 0 8 11.5V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8.5a5.8 5.8 0 0 0-1.4-3.7 2.6 2.6 0 0 1-.6-1.6V3" /><path d="M8 11h8" /></svg>; }
function CoconutIcon({ size = 25, strokeWidth = 1.35, ...props }: IconProps) { return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M5.4 15.2C5.9 10.1 9.1 6 13.5 6c3.1 0 5.1 2.4 5.1 5.7 0 4.6-3.5 7.3-7.2 7.3-3.2 0-5.4-1.3-6-3.8Z" /><path d="M6.2 15.6c2.1.7 4.1 1.8 5.2 3.4" /><path d="M10.5 7.1c.2-1.5 1.2-2.7 2.6-3.3" /><path d="M14.2 6.2c.7-1 1.7-1.7 3-1.9" /></svg>; }
const icons = { water: BottleIcon, coconut: CoconutIcon, snacks: Cookie, wipes: Package, chargers: Cable, signal: SatelliteDish, family: Baby };

export function Differentiators({ items, content, compact = false }: { items: Differentiator[]; content: DifferentiatorContent; compact?: boolean }) {
  return <section className={`differentiators ${compact ? "differentiators--compact" : ""}`} aria-labelledby="differentials-title">
    <div className="differentials-intro"><p className="eyebrow dark"><span className="eyebrow-dot" /> {content.eyebrow}</p><h2 id="differentials-title">{content.title}<br /><em>{content.emphasis}</em></h2>{content.description && <p className="differentials-description">{content.description}</p>}</div>
    <div className="differentials-grid">{items.map((item) => { const Icon = icons[item.kind]; return <div className="differential" key={item.kind}><span className={`differential-mark differential-mark--${item.kind}`} aria-hidden="true"><Icon size={25} strokeWidth={1.35} /></span><p>{item.text}</p></div>; })}</div>
  </section>;
}
