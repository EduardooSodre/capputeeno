import { useRouter } from 'next/router';
import products from '@/src/data/products';
import styles from './styles.module.css';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
<div className={styles.productDetail}>
      <button className={styles.returnButton} onClick={() => router.back()}>
        <img src="/assets/return.png" alt="Voltar" className={styles.returnIcon} /> <p>Voltar</p> </button>
      <div className={styles.productContainer}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <div className={styles.productInfo}>
          <p className={styles.category}>Caneca</p>
          <h1>{product.name}</h1>
          <div className={styles.productPrice}>{product.price}</div>
          <p className={styles.frete}>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
          <h2>DESCRIÇÃO</h2>
          <p className={styles.description}>{product.description}</p>

          <button className={styles.button_buy}>
          <img className={styles.button_shopping__icon}  src="/assets/button-buy.png" alt="Shopping Cart" />Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
