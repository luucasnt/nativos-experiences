/**
 * Nativos Experiences — Casa de Areia.
 * Todas as imagens são servidas localmente via /public/images.
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
  async redirects() {
    const aliases = [
      ['sobre', 'sobre-nativos'],
      ['about', 'sobre-nativos'],
      ['concierge', 'concierge-trancoso'],
      ['transfer-blindado-trancoso', 'transfer-blindado'],
      ['transfer-aeroporto-terravista', 'transfer-aeroporto'],
      ['reserva', 'reserva-online'],
    ];
    const extras = [
      { source: '/passeios-trancoso-caraiva', destination: '/passeios', permanent: true },
      { source: '/rotas-trancoso-caraiva', destination: '/guia/como-chegar-em-caraiva-sem-carro', permanent: true },
      { source: '/transfer-santo-andre-bahia', destination: '/guia/santo-andre-bahia-o-que-saber', permanent: true },
      // Caminhos herdados do domínio antigo nativostransfer.com — o redirect de domínio
      // na Vercel preserva o path, então essas rotas antigas caíam em 404 no site novo.
      { source: '/contato', destination: '/reserva-online', permanent: true },
      { source: '/sobre-nós', destination: '/sobre-nativos', permanent: true },
      { source: '/sobre-nos', destination: '/sobre-nativos', permanent: true },
      { source: '/nossos-serviços', destination: '/', permanent: true },
      { source: '/nossos-servicos', destination: '/', permanent: true },
      { source: '/service-page/transfer-aeroporto-trancoso', destination: '/transfer-aeroporto', permanent: true },
    ];
    return [
      ...aliases.flatMap(([source, destination]) => [
        { source: `/${source}`, destination: `/${destination}`, permanent: true },
        { source: `/en/${source}`, destination: `/en/${destination}`, permanent: true },
      ]),
      ...extras,
    ];
  },
};

export default nextConfig;
