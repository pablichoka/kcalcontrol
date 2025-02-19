# Setting Up next-intl in a Next.js Project

This guide will walk you through the steps to set up next-intl in a Next.js project, from installation to configuration. By the end of this guide, you will have a fully functional internationalization setup in your Next.js application.

**Be aware that there's no better guide that the offical documentation, please use this after having checked the offical docs.**

## Prerequisites

- Basic knowledge of Next.js
- Node.js and npm/yarn installed

## Step 1: Install next-intl

First, you need to install next-intl and its dependencies.

```bash
npm install next-intl
# or
yarn add next-intl
```

## Step 2: Configure next-intl Plugin

Create a `next.config.mjs` file in the root of your project if it doesn't already exist. Add the following configuration to enable the next-intl plugin:

```typescript
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
```

This configuration ensures that next-intl is integrated into your Next.js project.

## Step 3: Define Routing

Create a file named `routing.ts` in the `i18n` directory. This file will define the locales and routing for your application.

```typescript
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  //Set your preferred languages
  locales: ['en', 'es'],
  localePrefix: 'always',
  defaultLocale: 'es',
  pathnames: {
    '/': '/',
    '/pathnames': {
      en: '/pathnames',
      es: '/nombres-de-ruta'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
```

This configuration defines the supported locales (en and es), the default locale (es), and the pathnames for each locale.

## Step 4: Create Middleware

Create a file named `middleware.ts` in the `src` directory. This file will handle locale detection and redirection.

```typescript
import createMiddleware from "next-intl/middleware";
import { routing } from "i18n/routing";

export default createMiddleware(routing);

export const config = {
  //Adapt as your preferences
  matcher: [
    '/',
    '/(es|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)',
    '/((?!api|_next|.*\\..*).*)'
  ]
};
```

This middleware ensures that the correct locale is used based on the URL.

## Step 5: Create Request Configuration

Create a file named `request.ts` in the `i18n` directory. This file will handle the locale and messages for each request.

```typescript
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === 'es-ES'
        ? import('../messages/es.json')
        : import(`../messages/${locale}.json`))
    ).default
  };
});
```

This configuration ensures that the correct locale and messages are loaded for each request.

## Step 6: Create Language Selector Component

Create a file named `LanguageSelector.tsx` in the `components` directory. This component will allow users to switch between languages.

```typescript
"use client";

import { ArrowDropDown, Language } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Locale, usePathname, useRouter } from "i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState, useTransition } from "react";

const LanguageSelector: React.FC = () => {
  const t = useTranslations("frontpage");
  const initialLanguage = useLocale().split("-")[0];
  const [language, setLanguage] = useState(initialLanguage);

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage, pathname]);

  function onSelectChange(event: SelectChangeEvent<string>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.push(pathname, { locale: nextLocale });
      setLanguage(nextLocale);
    });
  }

  return (
    <Box>
      <Select
        renderValue={() =>
          isPending ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <Box display="flex" alignItems="center">
              <Language />
              <Box ml={1}>{t(`language.${language}`)}</Box>
            </Box>
          )
        }
        style={{ color: "white" }}
        onChange={(event) => onSelectChange(event)}
        value={language}
        IconComponent={ArrowDropDown}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Español</MenuItem>
      </Select>
    </Box>
  );
};

export default LanguageSelector;
```

This component allows users to switch between languages and updates the URL accordingly.

## Step 7: Create Sitemap

Create a file named `sitemap.ts` in the `[locale]` directory. This file will generate a sitemap for your application.

```typescript
import { MetadataRoute } from 'next';
import { host } from 'config';
import { Locale, getPathname, routing } from 'i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  return [...getEntries('/'), ...getEntries('/pathnames')];
}

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      )
    }
  }));
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}
```

This file ensures that your application has a sitemap with URLs for all supported locales.

## Conclusion

By following these steps, you have successfully set up next-intl in your Next.js project. This setup allows you to support multiple languages and locales, providing a better user experience for your international audience.

## Project structure:

```
kcalcontrol/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── sitemap.ts
│   │   │   └── pathnames/
│   │   │       └── page.tsx
│   ├── components/
│   │   └── LanguageSelector.tsx
│   ├── i18n/
│   │   ├── request.ts
│   │   └── routing.ts
│   ├── styles/
│   │   └── globals.css
│   └── middleware.ts
├── messages/
│   ├── en.json
│   └── es.json
├── public/
│   └── ...
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```