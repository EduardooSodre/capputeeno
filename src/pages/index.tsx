import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/home.module.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Capputeeno</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.category}>
          <div>Todos os produtos</div>
          <div>Camisetas</div>
          <div>Canecas</div>
        </div>
        <nav className={styles.navegation}>
          <div className={styles.set_nav} onClick={toggleMenu}>
            Organizar por
            <img src="assets/navegation.svg" alt="ícone de navegação" />
          </div>

          <ul className={`${styles.lista_menu} ${menuOpen ? styles.active : ""}`}>
            <li className={styles.set_nav}>
              <a href="#" className={styles.lista_menu__titulo}>Novidades</a>
            </li>
            <li className={styles.set_nav}>
              <a href="#" className={styles.lista_menu__titulo}>Preço: Maior - menor</a>
            </li>
            <li className={styles.set_nav}>
              <a href="#" className={styles.lista_menu__titulo}>Preço: Menor - maior</a>
            </li>
            <li className={styles.set_nav}>
              <a href="#" className={styles.lista_menu__titulo}>Mais vendidos</a>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
