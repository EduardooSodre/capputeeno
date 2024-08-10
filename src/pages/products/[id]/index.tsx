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
    <div className={styles.productPage}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h1 className={styles.productName}>{product.name}</h1>
      <p className={styles.productPrice}>{product.price}</p>
      <p className={styles.productDescription}>{product.description}</p>
    </div>
  );
};

export default ProductPage;
