import React from "react";
import styles from "@styles/Header.module.css";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation('header');

  return (
    <header className={styles.toolbar}>
      <img src="logo.png" alt="kCalControl Logo" />
      <h1>{t('header:text')}</h1>
    </header>
  );
}

export default Header;
