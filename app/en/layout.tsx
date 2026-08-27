// Casa de Areia: escopo linguístico da experiência inglesa, mantendo o App Router SSR independente.
export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <div lang="en" className="locale-en">{children}</div>; }
