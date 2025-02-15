import React from "react";
import styles from "../styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.toolbar}>      
        <img src="logo.png" alt="kCalControl Logo"/>
        <h1>kCalControl</h1>
    </header>
  );
};

export default Header;
