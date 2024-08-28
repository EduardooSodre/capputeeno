import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from "./styles.module.css";
import React from 'react';


const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Carrega a contagem de itens no carrinho do localStorage
    const count = localStorage.getItem('cartCount');
    if (count) {
      setCartCount(parseInt(count));
    }
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>capputeeno</h1>
      <div className={styles.searchContainer}>
        <input type="text" className={styles.searchInput} placeholder="Procurando por algo específico?" />
       <img src="/assets/search-loupe.svg" alt="Search Icon" className={styles.searchIcon}/>
      </div>
      <Link href="/cart">
      <button className={styles.button_shopping}>
        <img src="/assets/shopping-bag.svg" className={styles.button_shopping__icon} alt="Shopping Cart" />
        <div className={styles.circle__red}>
          <div className={styles.shopping__number}>{cartCount}</div>
        </div>
      </button>
      </Link>

    </header>
  );
};

export default Header;