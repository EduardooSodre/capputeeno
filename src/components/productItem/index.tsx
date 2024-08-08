import Link from 'next/link';
import styles from './styles.module.css';


interface ProductItemProps {
  image: string;
  name: string;
  price: string;
  id: number;
}



const ProductItem = ({ image, name, price, id }: ProductItemProps) => {
  return (
    <Link href={`/${id}`} className={styles.productItem}>
        <img src={image} alt={name} className={styles.productImage} />
        <div className={styles.productName}>{name}</div>
        <div className={styles.productPrice}>{price}</div>
    </Link>
  );
};

export default ProductItem;