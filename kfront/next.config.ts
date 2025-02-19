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
        components: path.resolve(__dirname, "app/components"),
        utils: path.resolve(__dirname, "app/utils"),
        styles: path.resolve(__dirname, "app/styles"),
        routes: path.resolve(__dirname, "app/routes"),
        i18n: path.resolve(__dirname, "i18n"),
      }
    }},
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "app/components"),
      utils: path.resolve(__dirname, "app/utils"),
      styles: path.resolve(__dirname, "app/styles"),
      routes: path.resolve(__dirname, "app/routes"),
      i18n: path.resolve(__dirname, "i18n"),
    };
    return config;
  },
};

export default nextConfig;
