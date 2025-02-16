import { ArrowDropDown, Language } from "@mui/icons-material";
import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import styles from "@styles/LanguageSelector.module.css";
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation('translations');

  const changeLanguage = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box>
      <Select
        renderValue={(value) => (
          <Box display="flex" alignItems="center">
            <Language />
            <Box ml={1}>{t(`translations:languageSelector.options.${i18n.language}`)}</Box>
          </Box>
        )}
        className={styles.selector}
        onChange={changeLanguage}
        defaultValue={i18n.language}
        IconComponent={ArrowDropDown}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Español</MenuItem>
      </Select>
    </Box>
  );
};

export default LanguageSelector;
