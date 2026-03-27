

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/dise%C3%B1o-eventos",
        destination: "/diseno-eventos",
        permanent: true,
      },
      {
        source: "/diseño-eventos",
        destination: "/diseno-eventos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
