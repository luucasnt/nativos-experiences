'use client';
// Casa de Areia: drawer mobile com navegação completa, contraste alto e fechamento explícito por link.
import { useEffect, useState } from "react";

type Item = { label: string; path: string };
export function MobileMenu({ items, prefix, cta, ctaHref }: { items: Item[]; prefix: string; cta: string; ctaHref: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (new URLSearchParams(window.location.search).get("menu") === "open") setOpen(true); }, []);
  return <div className="mobile-menu"><button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>{open && <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu"><div className="mobile-drawer-head"><strong>Navigate</strong><button className="mobile-close" type="button" onClick={() => setOpen(false)} aria-label="Close navigation menu">Close</button></div><nav className="mobile-nav">{items.map((item) => <a key={item.path} href={`${prefix}/${item.path}`} onClick={() => setOpen(false)}>{item.label}</a>)}</nav><a className="mobile-cta" href={ctaHref} target="_blank" rel="noreferrer">{cta}</a></div>}</div>;
}
