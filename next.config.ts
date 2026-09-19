import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Set on the separate "KOL media kit" Vercel project only, so that
    // domain's root serves the template directly while the personal
    // portfolio project (no env var set) is unaffected.
    if (process.env.IS_KOL_SITE === "1") {
      return [{ source: "/", destination: "/kol-media-kit" }];
    }
    return [];
  },
};

export default nextConfig;
