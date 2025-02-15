import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mi Aplicación Next.js</title>
        <meta name="description" content="Página de inicio de mi aplicación Next.js" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenido a mi aplicación Next.js</h1>
        <p className={styles.description}>
          Comienza a construir tu aplicación aquí.
        </p>
      </main>
    </div>
  );
};

export default Home;