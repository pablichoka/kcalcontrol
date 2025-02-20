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
import styles from "@styles/common/LanguageSelector.module.css";

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
        renderValue={() => (
            <Box className={styles.container}>
            <Box className={styles.iconContainer}>
              {isPending ? (
              <CircularProgress
                size={24}
                color="inherit"
                className={styles.icon}
              />
              ) : (
              <Language className={styles.icon} />
              )}
            </Box>
            <Box ml={1}>{t(`language.${language}`)}</Box>
            </Box>
        )}
        sx={{ color: "white" }}
        onChange={(event) => onSelectChange(event)}
        value={language}
      >
        <MenuItem className={styles.menuItem} value="en">
          English
        </MenuItem>
        <MenuItem className={styles.menuItem} value="es">
          Español
        </MenuItem>
      </Select>
    </Box>
  );
};

export default LanguageSelector;
