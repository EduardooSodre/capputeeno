import styles from "./styles.module.css";
import React, { useState } from "react";

const CategoryNav = () => {
  const [selectedCategory, setSelectedCategory] = useState("TODOS OS PRODUTOS");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className={styles.category}>
        <div className={styles.category}>
          <div>
            <a href="#"
              className={selectedCategory === "TODOS OS PRODUTOS" ? styles.activeCategory : styles.categoryLink}
              onClick={() => handleCategoryClick("TODOS OS PRODUTOS")}
            >
              TODOS OS PRODUTOS
            </a>
          </div>
          <div>
            <a href="#"
              className={selectedCategory === "CAMISETAS" ? styles.activeCategory : styles.categoryLink}
              onClick={() => handleCategoryClick("CAMISETAS")}
            >
              CAMISETAS
            </a>
          </div>
          <div>
            <a href="#"
              className={selectedCategory === "CANECAS" ? styles.activeCategory : styles.categoryLink}
              onClick={() => handleCategoryClick("CANECAS")}
            >
              CANECAS
            </a>
          </div>
        </div>

        <div className={styles.category}>
          <nav className={styles.navegation}>
            <div className={styles.set_nav} onClick={toggleMenu}>
              Organizar por
              <img src="/assets/navegation.svg" alt="ícone de navegação" />
            </div>

            <ul className={`${styles.lista_menu} ${menuOpen ? styles.active : ""}`}>
              <li className={styles.set_nav}>
                <a href="#"
                  className={`${styles.navLink} ${selectedCategory === "Novidades" ? styles.active : ""}`}
                  onClick={() => handleCategoryClick("Novidades")}
                >
                  Novidades
                </a>
              </li>
              <li className={styles.set_nav}>
                <a href="#"
                  className={`${styles.navLink} ${selectedCategory === "Maior - menor" ? styles.active : ""}`}
                  onClick={() => handleCategoryClick("Maior - menor")}
                >
                  Preço: Maior - menor
                </a>
              </li>
              <li className={styles.set_nav}>
                <a href="#"
                  className={`${styles.navLink} ${selectedCategory === "Menor - maior" ? styles.active : ""}`}
                  onClick={() => handleCategoryClick("Menor - maior")}
                >
                  Preço: Menor - maior
                </a>
              </li>
              <li className={styles.set_nav}>
                <a href="#"
                  className={`${styles.navLink} ${selectedCategory === "Mais vendidos" ? styles.active : ""}`}
                  onClick={() => handleCategoryClick("Mais vendidos")}
                >
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
