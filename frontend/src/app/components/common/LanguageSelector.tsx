"use client";

import {
  Box,
  CircularProgress,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Locale, usePathname, useRouter } from "i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState, useTransition } from "react";
import styles from "@styles/common/LanguageSelector.module.css";
import "@styles/fonts.css";
import EsFlag from "@public/flags/es.svg";
import EnFlag from "@public/flags/gb.svg";
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
    <>
      <Select
        size="small"
        className={styles.selectContainer}
        renderValue={() => (
          <Box className={styles.value}>
            {isPending ? (
              <CircularProgress
                size={19}
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
        onChange={(event) => onSelectChange(event)}
        value={language}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: 'var(--background)',
              color: 'var(--foreground)',
              '& .MuiMenuItem-root:hover': {
                bgcolor: 'var(--foreground)',
                color: 'var(--background) !important',
              }

            }
          }
        }}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--foreground)'
          },
          '& .MuiSvgIcon-root': {
            color: 'var(--foreground)'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--foreground)'
          }
        }}
      >
        <MenuItem value="en">
          <Box className={`${styles.menuItem} poppins-600`} >
            <Image src={EnFlag} alt="english" className={styles.flag} />
            EN
          </Box>
        </MenuItem>
        <MenuItem value="es">
          <Box className={`${styles.menuItem} poppins-600`}>
            <Image src={EsFlag} alt="spanish" className={styles.flag} />
            ES
          </Box>
        </MenuItem>
      </Select>
    </>
  );
};

export default LanguageSelector;
