import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es-ES", "en-US"],
  defaultLocale: "es-ES",
  localePrefix: {
    mode: "always",
    prefixes: {
      "en-US": "/en",
      "es-ES": "/es",
    },
  },
  pathnames: {
    home: {
      "en-US": "/en/home",
      "es-ES": "/es/inicio",
    },
    about: {
      "en-US": "/en/about",
      "es-ES": "/es/acerca",
    },
    contact: {
      "en-US": "/en/contact",
      "es-ES": "/es/contacto",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
