import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Set on the separate "KOL media kit" Vercel project only, so that
    // domain's root serves the template directly while the personal
    // portfolio project (no env var set) is unaffected.
    // Must run via beforeFiles: a plain array is checked *after* the
    // filesystem, by which point "/" already resolves to the portfolio
    // home page and the rewrite would never be reached.
    if (process.env.IS_KOL_SITE === "1") {
      return { beforeFiles: [{ source: "/", destination: "/kol-media-kit" }] };
    }
    return { beforeFiles: [] };
  },
};

export default nextConfig;
