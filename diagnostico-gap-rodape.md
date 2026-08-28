# Diagnóstico — espaçamento entre ícone e texto no rodapé

## 1. Estrutura HTML renderizada

Os três links usam o mesmo componente `Footer` em `components/SiteChrome.tsx`. Cada ícone e seu texto são filhos diretos do próprio link, que possui um pai comum com `display: inline-flex`:

```html
<div class="footer-right">
  <a class="footer-contact-link" href="...whatsapp...">
    <svg aria-hidden="true">...</svg>
    <span>WhatsApp</span>
  </a>
  <a class="footer-contact-link" href="https://instagram.com/nativosexperiences">
    <svg aria-hidden="true">...</svg>
    <span>Instagram</span>
  </a>
  <a class="footer-contact-link footer-email-link" href="mailto:contato@nativosexperiences.com">
    <svg aria-hidden="true">...</svg>
    <span>contato@nativosexperiences.com</span>
  </a>
</div>
```

A estrutura flex existia; portanto, o problema não era falta de container comum.

## 2. Causa raiz na cascata CSS

Havia uma regra genérica anterior que atingia os links com maior especificidade e zerava o espaçamento:

```css
.nav-cta, .footer-right a { gap: 0; }
```

Mesmo quando `.footer-contact-link { gap: 9px; }` aparecia depois, o seletor `.footer-right a` tinha especificidade maior. A regra final corrigida deixou de atingir os contatos:

```css
.nav-cta, .back-link { gap: 0; }
```

Também foram encontradas regras antigas redundantes para `.footer-right` e `.footer-contact-link`; a regra efetiva final dos contatos agora é explícita e não é anulada por `.footer-right a`.

## 3. Arquivos realmente utilizados

Existe um único componente de rodapé: `components/SiteChrome.tsx`. Existe um único stylesheet-fonte: `app/globals.css`. O arquivo `.next/static/css/...css` é apenas o artefato gerado pelo build, não uma segunda fonte de edição.

## 4. Trecho final aplicado

```tsx
<div className="footer-right">
  <a className="footer-contact-link" href={whatsappHref} aria-label="Falar pelo WhatsApp">
    <MessageCircle aria-hidden="true" />
    <span>WhatsApp</span>
  </a>
  <a className="footer-contact-link" href={instagramHref} aria-label="Abrir Instagram">
    <Camera aria-hidden="true" />
    <span>Instagram</span>
  </a>
  <a className="footer-contact-link footer-email-link" href="mailto:contato@nativosexperiences.com" aria-label="Enviar e-mail">
    <Mail aria-hidden="true" />
    <span>contato@nativosexperiences.com</span>
  </a>
</div>
```

```css
.nav-cta, .back-link { gap: 0; }

.footer-right {
  display: flex;
  flex-direction: column;
  justify-self: end;
  gap: 10px;
}

.footer-contact-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
}

.footer-contact-link svg {
  width: 14px !important;
  height: 14px !important;
  flex: 0 0 14px;
}

@media (max-width: 800px) {
  .footer-contact-link { gap: 9px; }
}
```

## Validação

O build e o type-check passaram com 45 páginas. O preview foi reiniciado antes da captura. A captura ampliada entregue junto deste relatório mostra o rodapé mobile com os três pares ícone+texto.
