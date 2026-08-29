#!/usr/bin/env bash
# Migra as imagens temporárias do Manus (files.manuscdn.com) para public/images/
# e atualiza as referências no código para caminhos locais (/images/...).
#
# Rode isso na raiz do projeto (onde fica package.json), com o Claude Code
# ou direto no terminal:
#   bash scripts/migrate_manuscdn_images.sh
#
# Depois, confira com `git diff` e rode `pnpm run build` pra validar.

set -euo pipefail

DEST="public/images"
mkdir -p "$DEST"

URLS=(
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/BLAidOFJuLwOGhEK.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/CSAFLzWlbPbtvXRM.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/ECIeMSBmbsoSAhwF.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/IXsbtKKPZyLFaNZk.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/KIZKtHuAwdfwuLtz.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/MJdtpvqcywBvshoF.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/OCYafloFONygDrvR.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/VtQimewDJyvHxHBP.jpg"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/allohvlHTfuVZZST.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/bJeJxNaHowAcQwoA.jpg"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/cmrgvDdYfvgXvSph.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/fYDlnobOrHYCOWuB.jpg"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/gltiRcInjrrrCZrE.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/gsTpXZOkVNducwum.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/hodWAOaJoddYhWeW.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/jPyGigNXWIoKvSaN.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/juCISiyVGtGMuEWJ.jpg"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/ngYUjyrErIzmCAtY.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/nyqshkhBcWrZDrcj.png"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/oeIYXQIDdmsezNou.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/tqJLnuypRYdQzANN.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/usTPVzSokKzdeTWC.png"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/zLrDzOoUTkwXaknX.webp"
)

echo "Baixando ${#URLS[@]} imagens para $DEST ..."
for url in "${URLS[@]}"; do
  filename=$(basename "$url")
  if [ -f "$DEST/$filename" ]; then
    echo "  já existe, pulando: $filename"
    continue
  fi
  echo "  baixando: $filename"
  curl -sSL --fail "$url" -o "$DEST/$filename" || {
    echo "  ERRO ao baixar $url — verifique se o link ainda está ativo." >&2
    exit 1
  }
done

echo ""
echo "Reescrevendo referências no código (manuscdn.com -> /images/...) ..."

# Arquivos que contêm URLs do manuscdn.com
FILES=("lib/data.ts" "app/layout.tsx" "components/SiteChrome.tsx")

for f in "${FILES[@]}"; do
  if [ -f "$f" ]; then
    # Troca a URL completa do CDN temporário pelo caminho local /images/arquivo.ext
    sed -i -E 's#https://files\.manuscdn\.com/user_upload_by_module/session_file/[0-9]+/([A-Za-z0-9]+\.(webp|jpg|jpeg|png))#/images/\1#g' "$f"
    echo "  atualizado: $f"
  fi
done

echo ""
echo "Concluído. Próximos passos:"
echo "  1. git diff            (conferir as mudanças)"
echo "  2. pnpm run build      (validar que o build passa)"
echo "  3. git add -A && git commit -m 'chore: migra imagens do CDN temporário do Manus para public/images'"
echo "  4. git push"
echo ""
echo "IMPORTANTE: depois de confirmar que tudo carrega certo, você pode remover"
echo "'files.manuscdn.com' de remotePatterns no next.config.mjs, já que não será mais usado."
