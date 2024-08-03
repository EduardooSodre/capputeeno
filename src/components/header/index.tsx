import styles from "./styles.module.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/">
            <h1 className={styles.logo}>capputeeno</h1>
          </Link>
        </nav>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Procurando por algo específico?"
            className={styles.searchInput}
          />
          <Image
            src="assets/search-loupe.svg"
            alt="Search Icon"
            width={24}
            height={24}
            className={styles.searchIcon}
          />
          </div>
        <div className={styles.purchase}>
          <div className={styles.circle__red} />
          <div className={styles.button_shopping}> 
            <div className={styles.shopping__number}>2</div>
          </div>
        </div>
            <img
              className={styles.button_shopping__icon}
              loading="lazy"
              alt=""
              src="/assets/shopping-bag.svg"
              />
           
              
      </section>
    </header>
  );
}

export default Header;
