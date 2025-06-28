// next.config.js o next.config.ts
import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/koinonia-app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/koinonia-app' : '',
  images: {
    unoptimized: true,
  },
  // Los headers no funcionan en export estático, se manejan en el servidor
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})(nextConfig);
