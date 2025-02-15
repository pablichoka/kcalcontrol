import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>kCalControl</title>
        <meta name="description" content="Página de inicio de mi aplicación Next.js" />
        <link rel="icon" href="logo.ico" />
      </Head>
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenido a mi aplicación Next.js</h1>
        <p className={styles.description}>
          Comienza a construir tu aplicación aquí.
        </p>
      </main>
      <LoginForm />
    </div>
    </>
  );
};

export default Home;