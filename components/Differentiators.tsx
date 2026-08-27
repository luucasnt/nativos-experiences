// Casa de Areia: sete diferenciais com ícones SVG inline, renderização SSR segura e conteúdo editorial parametrizado por página.
import type { Differentiator, DifferentiatorContent } from "@/lib/data";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };
type IconComponent = (props: IconProps) => JSX.Element;

function IconBase({ children, size = 25, strokeWidth = 1.35, ...props }: IconProps & { children: React.ReactNode }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}

function BottleIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M9 3h6" /><path d="M10 3v3.2c0 .6-.2 1.1-.6 1.6A5.8 5.8 0 0 0 8 11.5V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8.5a5.8 5.8 0 0 0-1.4-3.7 2.6 2.6 0 0 1-.6-1.6V3" /><path d="M8 11h8" /></IconBase>; }
function CoconutIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M5.2 13.7c.4-4.5 3.5-7.5 7.5-7.5 3.8 0 6.3 2.6 6.1 6.3-.2 4.3-3.5 7.5-7.4 7.5-3.7 0-6.5-2.3-6.2-6.3Z" /><path d="M5.5 14.4c1.1 2.7 3.2 4.7 5.9 5.4" /><circle cx="10.2" cy="9.6" r=".75" /><circle cx="12.7" cy="8.9" r=".75" /><circle cx="14.7" cy="10.2" r=".75" /><path d="M12.3 6.2c.2-1.1.8-2 1.8-2.6" /></IconBase>; }
function SnackIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="m7 5 10 2-1.4 13H6.4L7 5Z" /><path d="m7.2 8 9.4 1.8" /><path d="m9 5 .7-2 5.7 1.1.2 2" /><path d="M9.6 13h4.8" /></IconBase>; }
function WipeIcon({ ...props }: IconProps) { return <IconBase {...props}><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /><path d="m14.5 4 1.5-2" /></IconBase>; }
function SanitizerIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M9 7h6v13H9z" /><path d="M10 7V4h4v3M12 4V2h3" /><path d="M15 3h3M11 11h2M11 15h2" /><path d="M18 9c1.2.9 1.6 2.1 1.2 3.3" /></IconBase>; }
function ChargerIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M8 3v5M11 3v5M6 8h7v3a3 3 0 0 1-3 3v7" /><path d="M17 8v5M17 13c0 2-1.5 3-3 3h-1" /><path d="M15 21h4" /></IconBase>; }
function SignalIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M12 18v3M8.5 14.5a5 5 0 0 1 7 0M5.5 11.5a9.2 9.2 0 0 1 13 0M2.8 8.5a13 13 0 0 1 18.4 0" /><circle cx="12" cy="19" r="1" /></IconBase>; }
function FamilyIcon({ ...props }: IconProps) { return <IconBase {...props}><circle cx="9" cy="7" r="2.5" /><circle cx="16.5" cy="9" r="2" /><path d="M4.5 19c.4-3.2 2-5 4.5-5s4.1 1.8 4.5 5M14 15c.6-.9 1.4-1.4 2.5-1.4 1.8 0 2.8 1.2 3 3.4" /></IconBase>; }

const icons: Record<Differentiator["kind"], IconComponent> = { water: BottleIcon, coconut: CoconutIcon, snacks: SnackIcon, wipes: WipeIcon, sanitizer: SanitizerIcon, chargers: ChargerIcon, signal: SignalIcon, family: FamilyIcon };

export function Differentiators({ items, content, compact = false }: { items: Differentiator[]; content: DifferentiatorContent; compact?: boolean }) {
  return <section className={`differentiators ${compact ? "differentiators--compact" : ""}`} aria-labelledby="differentials-title"><div className="differentials-intro"><p className="eyebrow dark"><span className="eyebrow-dot" /> {content.eyebrow}</p><h2 id="differentials-title">{content.title}<br /><em>{content.emphasis}</em></h2>{content.description && <p className="differentials-description">{content.description}</p>}</div><div className="differentials-grid">{items.map((item) => { const Icon = icons[item.kind]; return <div className="differential" key={item.kind}><span className={`differential-mark differential-mark--${item.kind}`} aria-hidden="true"><Icon size={25} strokeWidth={1.35} /></span><p>{item.text}</p></div>; })}</div></section>;
}
