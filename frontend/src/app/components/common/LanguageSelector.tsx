"use client";

import { Language } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
  SvgIcon,
} from "@mui/material";
import { Locale, usePathname, useRouter } from "i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState, useTransition } from "react";
import styles from "@styles/common/LanguageSelector.module.css";
import EsFlag from "../../../../public/flags/es.svg";
import EnFlag from "../../../../public/flags/gb.svg";
import Image from "next/image";

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
      className={styles.select}
        renderValue={() => (
          <Box className={styles.container}>
              {isPending ? (
                <CircularProgress
                  size={26}
                  color="inherit"
                  className={styles.icon}
                />
              ) : (
                <Image
                  src={language === "en" ? EnFlag : EsFlag}
                  alt="flag"
                  className={styles.icon}
                />
              )}
          </Box>
        )}
        sx={{ color: "white" }}
        onChange={(event) => onSelectChange(event)}
        value={language}
      >
        <MenuItem className={styles.menuItem} value="en">
          <Image src={EnFlag} alt="english" className={styles.flag} />
        </MenuItem>
        <MenuItem className={styles.menuItem} value="es">
          <Image src={EsFlag} alt="english" className={styles.flag} />
        </MenuItem>
      </Select>
    </Box>
  );
};

export default LanguageSelector;
