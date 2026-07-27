import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/it",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
