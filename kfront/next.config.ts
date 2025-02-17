import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        components: path.resolve(__dirname, "components"),
        utils: path.resolve(__dirname, "utils"),
        styles: path.resolve(__dirname, "styles"),
        routes: path.resolve(__dirname, "routes"),
      }
    }},
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "components"),
      utils: path.resolve(__dirname, "utils"),
      styles: path.resolve(__dirname, "styles"),
      routes: path.resolve(__dirname, "routes"),
    };
    return config;
  },
};

export default nextConfig;
