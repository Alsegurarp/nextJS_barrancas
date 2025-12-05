import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Explicitly set Turbopack root so Next.js doesn't infer a parent folder
  // (helps when there are multiple lockfiles or monorepos).
  experimental: {
  },
};

export default nextConfig;
