import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  i18n: {
    localeDetection: false,
    defaultLocale: "es",
    locales: ['es', 'en'],
  },
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
