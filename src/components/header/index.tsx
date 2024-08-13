import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>capputeeno</h1>
      <div className={styles.searchContainer}>
        <input type="text" className={styles.searchInput} placeholder="Procurando por algo específico?" />
       <img src="/assets/search-loupe.svg" alt="Search Icon" className={styles.searchIcon}/>
      </div>
      <button className={styles.button_shopping}>
        <img src="/assets/shopping-bag.svg" className={styles.button_shopping__icon} alt="Shopping Cart" />
        <div className={styles.circle__red}>
          <div className={styles.shopping__number}>0</div>
        </div>
      </button>
    </header>
  );
};

export default Header;