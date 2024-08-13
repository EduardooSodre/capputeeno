import styles from "./styles.module.css";
import React, { useState } from "react";

const CategoryNav = () => {
  // Estado para armazenar a categoria selecionada
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
        <section className={styles.category}>
          <div>
            <a href="#"
              className={selectedCategory === "TODOS OS PRODUTOS"? styles.activeCategory: ""}
              onClick={() => handleCategoryClick("TODOS OS PRODUTOS")}
            >
                TODOS OS PRODUTOS
            </a>
          </div>
          <div>
            <a href="#"
              className={selectedCategory === "CAMISETAS" ? styles.activeCategory : ""}
              onClick={() => handleCategoryClick("CAMISETAS")}
            >
                CAMISETAS
          </a>
          </div>
          <div>
            <a href="#"
              className={selectedCategory === "CANECAS" ? styles.activeCategory : ""}
              onClick={() => handleCategoryClick("CANECAS")}
            >
                CANECAS
            </a>
          </div>
        </section>

        <div className={styles.category}>
          <nav className={styles.navegation}>
            <div className={styles.set_nav} onClick={toggleMenu}>
                  Organizar por
              <img src="/assets/navegation.svg" alt="ícone de navegação" />
            </div>

            <ul
              className={`${styles.lista_menu} ${menuOpen ? styles.active : ""}`}
            >
              <li className={styles.set_nav}>
                <a href="#"
                  className={`${styles.lista_menu__titulo} ${selectedCategory === "Novidades" ? styles.activeCategory: ""}`}
                  onClick={() => handleCategoryClick("Novidades")}
                >
                    Novidades
                </a>
              </li>
              <li className={styles.set_nav}>
                <a href="#"
                  className={`${styles.lista_menu__titulo} ${selectedCategory === "Maior - menor" ? styles.activeCategory: ""}`}
                  onClick={() => handleCategoryClick("Maior - menor")}
                >
                    Preço: Maior - menor
                </a>
              </li>
              <li className={styles.set_nav}>
                <a href="#"
                  className={`${styles.lista_menu__titulo} ${selectedCategory === "Menor - maior" ? styles.activeCategory: ""}`}
                  onClick={() => handleCategoryClick("Menor - maior")}
                >
                    Preço: Menor - maior
                </a>
              </li>
              <li className={styles.set_nav}>
                <a
                  href="#"
                  className={`${styles.lista_menu__titulo} ${selectedCategory === "Mais vendidos" ? styles.activeCategory: ""}`}
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
