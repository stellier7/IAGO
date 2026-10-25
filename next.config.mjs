/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/servicios/web",
        destination: "/website-design-honduras",
        permanent: true,
      },
      {
        source: "/servicios/seo",
        destination: "/seo-services-honduras",
        permanent: true,
      },
      {
        source: "/servicios/automatizaciones",
        destination: "/ai-automation-honduras",
        permanent: true,
      },
      {
        source: "/casos-recientes",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
