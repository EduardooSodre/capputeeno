import Link from 'next/link';
import styles from './styles.module.css';

interface ProductItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

const ProductItem: React.FC<ProductItemProps> = ({ id, image, name, price }) => {
  return (
    <Link href={`/products/${id}`} className={styles.productItem}>
      <img src={image} alt={name} className={styles.productImage} />
      <div className={styles.productName}>{name}</div>
      <div className={styles.productPrice}>{formatPrice(price)}</div>
    </Link>
  );
};

export default ProductItem;