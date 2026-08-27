'use client';
// Casa de Areia: submenu desktop de Serviços, discreto, acessível por teclado, hover e clique.
import { useEffect, useState } from "react";

type Item = { label: string; path: string };
export function ServicesMenu({ label, items, prefix }: { label: string; items: Item[]; prefix: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (new URLSearchParams(window.location.search).get("services") === "open") setOpen(true); }, []);
  return <div className={`services-menu${open ? " is-open" : ""}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}><button type="button" className="services-trigger" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>{label}<span aria-hidden="true">+</span></button>{open && <div className="services-dropdown" role="menu">{items.map((item) => <a role="menuitem" key={item.path} href={`${prefix}/${item.path}`}>{item.label}</a>)}</div>}</div>;
}
