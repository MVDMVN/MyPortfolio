import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache Components: static shell is prerendered at build time (PPR by default)
  cacheComponents: true,
  partialPrefetching: true,
  sassOptions: {
    // lets every module write `@use "tokens"` instead of a relative path
    loadPaths: ["src/styles"],
  },
};

export default nextConfig;
