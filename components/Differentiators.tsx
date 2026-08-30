// Casa de Areia: seis diferenciais com ícones SVG inline, renderização SSR segura e conteúdo editorial parametrizado por página.
import type { Differentiator, DifferentiatorContent } from "@/lib/data";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };
type IconComponent = (props: IconProps) => JSX.Element;

function IconBase({ children, size = 25, strokeWidth = 1.35, ...props }: IconProps & { children: React.ReactNode }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}

function BottleIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M12 2.8C10.2 6 6.8 9.1 6.8 13.4a5.2 5.2 0 0 0 10.4 0C17.2 9.1 13.8 6 12 2.8Z" /><path d="M9.5 15.2c.7 1.2 1.6 1.8 2.8 1.9" /></IconBase>; }
function SnackIcon({ ...props }: IconProps) { return <IconBase {...props}><circle cx="12" cy="12" r="8"/><path d="M8.5 9.5h.01M12 8h.01M15.5 10h.01M9.5 14h.01M13 15.5h.01M16 14h.01" /></IconBase>; }
function SanitizerIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M12 3.2 19 6v5.1c0 4.4-2.8 7.8-7 9.7-4.2-1.9-7-5.3-7-9.7V6l7-2.8Z" /><path d="m8.8 12.1 2.1 2.1 4.4-4.5" /></IconBase>; }
function ChargerIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="m13.2 2-6 11h4.7L10.8 22l6-11h-4.7L13.2 2Z" /></IconBase>; }
function SignalIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M12 18v3M8.5 14.5a5 5 0 0 1 7 0M5.5 11.5a9.2 9.2 0 0 1 13 0M2.8 8.5a13 13 0 0 1 18.4 0" /><circle cx="12" cy="19" r="1" /></IconBase>; }
function FamilyIcon({ ...props }: IconProps) { return <IconBase {...props}><circle cx="12" cy="5" r="2.1"/><path d="M8.8 10.5c.5-1.4 1.6-2.1 3.2-2.1s2.7.7 3.2 2.1l1.2 6.2H7.6l1.2-6.2Z"/><path d="M8.2 16.7h7.6v3.5H8.2zM9.5 20.2v1.4M14.5 20.2v1.4"/></IconBase>; }

const icons: Record<Differentiator["kind"], IconComponent> = { water: BottleIcon, snacks: SnackIcon, sanitizer: SanitizerIcon, chargers: ChargerIcon, signal: SignalIcon, family: FamilyIcon };

export function DifferentialIcon({ kind, size = 72 }: { kind: Differentiator["kind"]; size?: number }) { const Icon = icons[kind]; return <Icon size={size} strokeWidth={1.35} />; }

export function Differentiators({ items, content, compact = false }: { items: Differentiator[]; content: DifferentiatorContent; compact?: boolean }) {
  return <section className={`differentiators ${compact ? "differentiators--compact" : ""}`} aria-labelledby="differentials-title"><div className="differentials-intro"><p className="eyebrow dark"><span className="eyebrow-dot" /> {content.eyebrow}</p><h2 id="differentials-title">{content.title}<br /><em>{content.emphasis}</em></h2>{content.description && <p className="differentials-description">{content.description}</p>}</div><div className="differentials-grid">{items.map((item) => <article className="differential" key={item.kind}><span className={`differential-mark differential-mark--${item.kind}`} aria-hidden="true"><DifferentialIcon kind={item.kind} size={25} /></span><h3>{item.label}</h3><p>{item.text}</p></article>)}</div></section>;
}
