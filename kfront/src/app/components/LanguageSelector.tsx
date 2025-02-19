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
