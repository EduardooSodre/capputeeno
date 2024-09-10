import Link from 'next/link';
import styles from './styles.module.css';

interface ProductItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, image, name, price }) => {
  return (
    <Link href={`/products/${id}`} className={styles.productItem}>
      <img src={image} alt={name} className={styles.productImage} />
      <div className={styles.productName}>{name}</div>
      <div className={styles.productPrice}>R$ {price.toFixed(2)}</div>
    </Link>
  );
};

export default ProductItem;