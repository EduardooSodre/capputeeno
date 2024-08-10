import styles from "./styles.module.css";
import React, { useState } from "react";

const CategoryNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.category}>
        <section className={styles.category}>
          <div>
            <a href="#">TODOS OS PRODUTOS</a>
          </div>
          <div>
            <a href="#">CAMISETAS</a>
          </div>
          <div>
            <a href="#">CANECAS</a>
          </div>
        </section>
        <div className={styles.category}>
          <nav className={styles.navegation}>
            <div className={styles.set_nav} onClick={toggleMenu}>
              Organizar por
              <img src="/assets/navegation.svg" alt="ícone de navegação" />
            </div>

            <ul
              className={`${styles.lista_menu} ${
                menuOpen ? styles.active : ""
              }`}
            >
              <li className={styles.set_nav}>
                <a href="#" className={styles.lista_menu__titulo}>
                  Novidades
                </a>
              </li>
              <li className={styles.set_nav}>
                <a href="#" className={styles.lista_menu__titulo}>
                  Preço: Maior - menor
                </a>
              </li>
              <li className={styles.set_nav}>
                <a href="#" className={styles.lista_menu__titulo}>
                  Preço: Menor - maior
                </a>
              </li>
              <li className={styles.set_nav}>
                <a href="#" className={styles.lista_menu__titulo}>
                  Mais vendidos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default CategoryNav;
