'use client';
// Casa de Areia: drawer mobile com jornada explícita, serviços agrupados e contraste alto.
import { useEffect, useState } from "react";

type Item = { label: string; path: string };
type MobileMenuProps = { items: Item[]; serviceItems?: Item[]; prefix: string; cta: string; ctaHref: string };

export function MobileMenu({ items, serviceItems = [], prefix, cta, ctaHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (new URLSearchParams(window.location.search).get("menu") === "open") setOpen(true); }, []);
  const [first, ...rest] = items;
  return <div className="mobile-menu"><button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>{open && <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu"><div className="mobile-drawer-head"><strong>Navigate</strong><button className="mobile-close" type="button" onClick={() => setOpen(false)} aria-label="Close navigation menu">Close</button></div><nav className="mobile-nav">{first && <a className="mobile-nav-primary" href={`${prefix}/${first.path}`} onClick={() => setOpen(false)}>{first.label}</a>}{serviceItems.length > 0 && <div className="mobile-nav-group"><span className="mobile-nav-label">{prefix === "/en" ? "Services" : "Serviços"}</span>{serviceItems.map((item) => <a key={item.path} href={`${prefix}/${item.path}`} onClick={() => setOpen(false)}>{item.label}</a>)}</div>}{rest.map((item) => <a key={item.path} className="mobile-nav-primary" href={`${prefix}/${item.path}`} onClick={() => setOpen(false)}>{item.label}</a>)}</nav><a className="mobile-cta" href={ctaHref} target="_blank" rel="noreferrer">{cta}</a></div>}</div>;
}
