import Head from "next/head";
import styles from "@/styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Capputeeno</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.category}>
          <div>Todos os produtos</div>
          <div>Camisetas</div>
          <div>Canecas</div>
        </section>

          <ul className={styles.navegation}>
          <div className={styles.organization}>Organizar por 
            <li>
              <a href="#!">
                <img src="assets/navegation.svg" alt="icone de navegacao " />
              </a>
              <ul className={styles.submenu}>
                <li>
                  <Link href="/">
                  <a>Novidades</a>
                  </Link>
                
                </li>
              </ul>
            </li>
          </div>
          </ul>
      </main>
    </div>
  );
}
