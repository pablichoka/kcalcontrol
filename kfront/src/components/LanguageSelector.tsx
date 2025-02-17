"use client";

import { ArrowDropDown, Language } from "@mui/icons-material";
import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Locale, usePathname, useRouter } from "i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useTransition, useEffect, useState } from "react";

const LanguageSelector: React.FC = () => {
  const t = useTranslations("frontpage");
  const initialLanguage = useLocale();
  const [language, setLanguage] = useState(initialLanguage);

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {    
    setLanguage(initialLanguage);
  }, [initialLanguage, pathname]);

  function onSelectChange(event: SelectChangeEvent<string>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      const newPathname = pathname.replace(`/${language}`, `/${nextLocale}`);
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname: newPathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <Box>
      <Select
        renderValue={() =>
          !isPending && (
            <Box display="flex" alignItems="center">
              <Language />
              <Box ml={1}>
                {t(`language.${language}`)}
              </Box>
            </Box>
          )
        }
        style={{ color: "white" }}
        onChange={(event) => onSelectChange(event)}
        value={language}
        IconComponent={ArrowDropDown}
      >
        <MenuItem value="en-US">English</MenuItem>
        <MenuItem value="es-ES">Español</MenuItem>
      </Select>
    </Box>
  );
};

export default LanguageSelector;