import ProductItem from '@/src/pages/productItem';
import styles from './styles.module.css';

const products = [
  { id: 1, image: '/assets/caneca-ceramica-rustica.png', name: 'Caneca de cerâmica rústica', price: 40.00 },
  { id: 2, image: '/assets/camiseta-not-today.png', name: 'Camiseta Not Today', price: 78.00 },
  { id: 3, image: '/assets/caneca-black-ring.png', name: 'Caneca Black Ring', price: 32.00 },
  { id: 4, image: '/assets/camiseta-broken-saints.png', name: 'Camiseta Broken Saints', price: 58.00 },
  { id: 5, image: '/assets/camiseta-outcast.png', name: 'Camiseta Outcast', price: 89.00 },
  { id: 6, image: '/assets/caneca-the-grounds.png', name: 'Caneca The Grounds', price: 85.00 },
  { id: 7, image: '/assets/camiseta-evening.png', name: 'Camiseta Evening', price: 69.00 },
  { id: 8, image: '/assets/caneca-preto-fosco.png', name: 'Caneca Preto Fosco', price: 28.00 },
  { id: 9, image: '/assets/caneca-never-settle.png', name: 'Caneca Never Settle', price: 43.00 },
  { id: 10, image: '/assets/camiseta-dreamer.png', name: 'Camiseta Dreamer', price: 55.00 },
  { id: 11, image: '/assets/caneca-decaf.png', name: 'Caneca Decaf', price: 32.00 },
  { id: 12, image: '/assets/camiseta-ramones.png', name: 'Camiseta Ramones', price: 92.00 },
];

const ProductList = () => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;