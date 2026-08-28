// Casa de Areia: identidade técnica para dispositivos e navegadores.
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nativos Experiences — Transfer e Concierge em Trancoso",
    short_name: "Nativos Experiences",
    description: "Transfer privativo de luxo e concierge local em Trancoso, Bahia.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1820",
    theme_color: "#0b1820",
    lang: "pt-BR",
    icons: [{ src: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029716923/usTPVzSokKzdeTWC.png", sizes: "any", type: "image/png" }],
  };
}
