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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
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
      // Fontes com acento precisam ir percent-encoded: o Next.js compara o `source`
      // com o path bruto da requisição, sem decodificar, então o literal com acento não batia.
      { source: '/sobre-n%C3%B3s', destination: '/sobre-nativos', permanent: true },
      { source: '/sobre-nos', destination: '/sobre-nativos', permanent: true },
      { source: '/nossos-servi%C3%A7os', destination: '/', permanent: true },
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
