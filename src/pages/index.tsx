import Head from "next/head";
import styles from "@/styles/home.module.css";

export default function Home() {
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

        <nav className={styles.nav_category}>
          Organizar por
          <a className={styles.set_nav} href="#!">
            <img src="assets/navegation.svg" alt="icone de navegacao " />
          </a>
      
          <div className={styles.navegation}>
            <ul className={styles.nav_list}>
              <li>
                <a href="/">Novidades</a>
              </li>

              <li>
                <a href="/">Preço: Maior - menor</a>
              </li>

              <li>
                <a href="/">Preço: Menor - maior</a>
              </li>

              <li>
                <a href="/">Mais vendidos</a>
              </li>
            </ul>
          </div>
        </nav>
      </main>
    </div>
  );
}
