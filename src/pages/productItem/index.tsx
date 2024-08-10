import Link from 'next/link';
import styles from './styles.module.css';

const ProductItem = ({ image, name, price, id }: { image: string; name: string; price: string; id: number }) => {
  return (
    <Link href={`/products/${id}`} className={styles.productItem}>
        <img src={image} alt={name} className={styles.productImage} />
        <div className={styles.productName}>{name}</div>
        <div className={styles.productPrice}>{price}</div>
    </Link>
  );
};

export default ProductItem;