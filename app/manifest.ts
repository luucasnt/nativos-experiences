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
    icons: [{ src: "/images/n-icon-512.png", sizes: "any", type: "image/png" }],
  };
}
