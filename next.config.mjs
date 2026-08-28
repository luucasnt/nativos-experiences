/**
 * Nativos Experiences — Casa de Areia.
 * Configuração de estabilidade para imagens remotas e preservação de autoridade
 * dos aliases antigos; as imagens reais serão substituídas em etapa posterior.
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'files.manuscdn.com' },
    ],
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
    return aliases.flatMap(([source, destination]) => [
      { source: `/${source}`, destination: `/${destination}`, permanent: true },
      { source: `/en/${source}`, destination: `/en/${destination}`, permanent: true },
    ]);
  },
};

export default nextConfig;
