// Casa de Areia: seis diferenciais com ícones SVG inline, renderização SSR segura e conteúdo editorial parametrizado por página.
import type { Differentiator, DifferentiatorContent } from "@/lib/data";
import type { SVGProps } from "react";
import { Icon } from "lucide-react";
import { coconut } from "@lucide/lab";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };
type IconComponent = (props: IconProps) => JSX.Element;

function IconBase({ children, size = 25, strokeWidth = 1.35, ...props }: IconProps & { children: React.ReactNode }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}

function BottleIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M9 3h6" /><path d="M10 3v3.2c0 .6-.2 1.1-.6 1.6A5.8 5.8 0 0 0 8 11.5V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8.5a5.8 5.8 0 0 0-1.4-3.7 2.6 2.6 0 0 1-.6-1.6V3" /><path d="M8 11h8" /></IconBase>; }
function CoconutIcon({ size = 25, strokeWidth = 1.35, ...props }: IconProps) { return <Icon iconNode={coconut} size={size} strokeWidth={strokeWidth} aria-hidden="true" {...props} />; }
function SnackIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M7 8 Q6 5 8 4 Q9 3 10 4 Q11 3 12 4 Q13 3 14 4 Q16 5 15 8"/><path d="M6.5 8 L6 19 Q6 20 7 20 L15.5 20 Q16.5 20 16.5 19 L16 8 Z"/><path d="M8 12 L14 12"/></IconBase>; }
function WipeIcon({ ...props }: IconProps) { return <IconBase {...props}><rect x="5" y="9" width="14" height="12" rx="1.5"/><ellipse cx="12" cy="9" rx="4" ry="1.3"/><path d="M9.5 8.3 Q11 5 13.5 7.5"/></IconBase>; }
function SanitizerIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M9 7h6v13H9z" /><path d="M10 7V4h4v3M12 4V2h3" /><path d="M15 3h3M11 11h2M11 15h2" /><path d="M18 9c1.2.9 1.6 2.1 1.2 3.3" /></IconBase>; }
function ChargerIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M9 2 L9 8"/><path d="M15 2 L15 8"/><path d="M7 8 L17 8 L17 13 Q17 17 12 17 Q7 17 7 13 Z"/><path d="M12 17 L12 22"/></IconBase>; }
function SignalIcon({ ...props }: IconProps) { return <IconBase {...props}><path d="M12 18v3M8.5 14.5a5 5 0 0 1 7 0M5.5 11.5a9.2 9.2 0 0 1 13 0M2.8 8.5a13 13 0 0 1 18.4 0" /><circle cx="12" cy="19" r="1" /></IconBase>; }
function FamilyIcon({ ...props }: IconProps) { return <IconBase {...props}><circle cx="10" cy="5" r="2.2"/><path d="M7 9 Q7 7.5 8.5 7.5 L11.5 7.5 Q13 7.5 13 9 L13 15 Q13 17 15 17.5"/><path d="M6 15 L14 15 Q15 15 15 16.5 L15 18 Q15 19 14 19 L6.5 19 Q5.5 19 5.5 18 L5.5 16.5 Q5.5 15 6 15Z"/><path d="M6 19 L6 21 M14 19 L14 21"/></IconBase>; }

const icons: Record<Differentiator["kind"], IconComponent> = { water: BottleIcon, coconut: CoconutIcon, snacks: SnackIcon, wipes: WipeIcon, sanitizer: SanitizerIcon, chargers: ChargerIcon, signal: SignalIcon, family: FamilyIcon };

export function DifferentialIcon({ kind, size = 72 }: { kind: Differentiator["kind"]; size?: number }) { const Icon = icons[kind]; return <Icon size={size} strokeWidth={1.35} />; }

export function Differentiators({ items, content, compact = false }: { items: Differentiator[]; content: DifferentiatorContent; compact?: boolean }) {
  return <section className={`differentiators ${compact ? "differentiators--compact" : ""}`} aria-labelledby="differentials-title"><div className="differentials-intro"><p className="eyebrow dark"><span className="eyebrow-dot" /> {content.eyebrow}</p><h2 id="differentials-title">{content.title}<br /><em>{content.emphasis}</em></h2>{content.description && <p className="differentials-description">{content.description}</p>}</div><div className="differentials-grid">{items.map((item) => { const Icon = icons[item.kind]; return <div className="differential" key={item.kind}><span className={`differential-mark differential-mark--${item.kind}`} aria-hidden="true"><DifferentialIcon kind={item.kind} size={25} /></span><p>{item.text}</p></div>; })}</div></section>;
}
