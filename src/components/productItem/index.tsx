import styles from '../productItem/styles.module.css';

type ProductItemProps = {
  image: string;
  name: string;
  price: string;
};

const ProductItem = ({ image, name, price }: ProductItemProps) => {
  return (
    <div className={styles.productItem}>
      <img src={image} alt={name} className={styles.productImage} />
      <div className={styles.productName}>{name}</div>
      <div className={styles.productPrice}>{price}</div>
    </div>
  );
};

export default ProductItem;
