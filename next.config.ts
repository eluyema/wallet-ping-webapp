import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Mark PostgreSQL packages as server-only
  serverExternalPackages: ['pg', 'pg-pool', 'pg-connection-string', 'pgpass'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve server-only packages on client-side
      config.resolve.alias = {
        ...config.resolve.alias,
        'pg': false,
        'pg-pool': false,
      };
    }
    return config;
  },
};

export default nextConfig;
