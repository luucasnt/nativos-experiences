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
      ['concierge', 'concierge-trancoso'],
      ['transfer-blindado-trancoso', 'transfer-blindado'],
      ['transfer-aeroporto-terravista', 'transfer-aeroporto'],
      ['reserva', 'reserva-online'],
    ];
    const extras = [
      { source: '/passeios-trancoso-caraiva', destination: '/passeios', permanent: true },
      { source: '/rotas-trancoso-caraiva', destination: '/guia/como-chegar-em-caraiva-sem-carro', permanent: true },
      { source: '/transfer-santo-andre-bahia', destination: '/guia/santo-andre-bahia-o-que-saber', permanent: true },
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
