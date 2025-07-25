import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig: NextConfig = {};

export default nextConfig;

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}
