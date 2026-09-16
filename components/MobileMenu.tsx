'use client';

import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarDays, ChevronRight, X } from "lucide-react";

type Item = { label: string; path: string };
type MobileMenuProps = { items: Item[]; serviceItems?: Item[]; prefix: string; cta: string; ctaHref: string };

export function MobileMenu({ items, serviceItems = [], prefix, cta, ctaHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (new URLSearchParams(window.location.search).get("menu") === "open") setOpen(true); }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
  }, [open]);

  const close = () => setOpen(false);
  const about = items.find((item) => item.path === "sobre-nativos");
  const fleet = items.find((item) => item.path === "frota");
  const concierge = items.find((item) => item.path === "concierge-trancoso");
  const events = items.find((item) => item.path === "casamentos-e-eventos");
  const partnerships = items.find((item) => item.path === "parcerias");
  const localeEn = prefix === "/en";
  const secondary = [about, fleet, concierge, partnerships].filter(Boolean) as Item[];
  const services = [...serviceItems, ...(events ? [events] : [])];

  return <div className="mobile-menu">
    <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
    {open && <div className="mobile-menu-layer">
      <button className="mobile-backdrop" type="button" aria-label="Close navigation menu" onClick={close} />
      <aside className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div className="mobile-drawer-head">
          <a className="mobile-brand" href={localeEn ? "/en" : "/"} onClick={close}><strong>nativos</strong><span>EXPERIENCES</span></a>
          <button className="mobile-close" type="button" onClick={close} aria-label="Close navigation menu"><X size={20} strokeWidth={1.4}/><span>{localeEn ? "Close" : "Fechar"}</span></button>
        </div>
        <nav className="mobile-nav" aria-label={localeEn ? "Mobile navigation" : "Navegação mobile"}>
          <a className="mobile-home-link" href={localeEn ? "/en" : "/"} onClick={close}><span>{localeEn ? "Home" : "Início"}</span><ChevronRight size={17}/></a>
          <div className="mobile-nav-group">
            <span className="mobile-nav-label">{localeEn ? "Services" : "Serviços"}</span>
            {services.map((item) => <a key={item.path} href={`${prefix}/${item.path}`} onClick={close}><span>{item.label}</span><ChevronRight size={16}/></a>)}
          </div>
          <div className="mobile-nav-group mobile-nav-group-secondary">
            <span className="mobile-nav-label">{localeEn ? "Explore" : "Nativos"}</span>
            {secondary.map((item) => <a key={item.path} href={`${prefix}/${item.path}`} onClick={close}><span>{item.label}</span><ChevronRight size={16}/></a>)}
            <a href={`${prefix}/${localeEn ? "guide" : "guia"}`} onClick={close}><span>{localeEn ? "Trancoso Guide" : "Guia de Trancoso"}</span><ChevronRight size={16}/></a>
          </div>
        </nav>
        <div className="mobile-menu-actions">
          <a className="mobile-cta mobile-cta-primary" href={ctaHref} target="_blank" rel="noreferrer"><span>{cta}</span><ArrowUpRight size={17}/></a>
          <a className="mobile-cta mobile-cta-secondary" href={`${prefix}/reserva-online`} onClick={close}><span><CalendarDays size={17}/>{localeEn ? "Request a booking" : "Solicitar reserva"}</span><ChevronRight size={17}/></a>
        </div>
        <div className="mobile-menu-foot"><span>TRANCOSO · BAHIA</span><span>{localeEn ? "Private mobility · Concierge" : "Mobilidade privativa · Concierge"}</span></div>
      </aside>
    </div>}
  </div>;
}
