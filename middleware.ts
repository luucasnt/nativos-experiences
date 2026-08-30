import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Casa de Areia: expõe o pathname atual via header para o layout raiz
// definir corretamente o atributo lang do <html> (pt-BR vs en).
// Trade-off aceito e documentado: como o layout raiz passa a ler headers(),
// as rotas "/" e "/en" deixam de ser estáticas e passam a ser renderizadas
// sob demanda (SSR por requisição). As páginas de serviço [slug] continuam
// estáticas normalmente. Ver auditoria de 29/08/2026 para detalhes.
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
