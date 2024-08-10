import ProductItem from '@/src/pages/productItem';
import styles from './styles.module.css';

const ProductList = () => {
  const products = [
    { id: 1, image: 'assets/caneca-ceramica-rustica.png', name: 'Caneca de cerâmica rústica', price: 'R$ 40,00' },
    { id: 2, image: 'assets/camiseta-not-today.png', name: 'Camiseta not today.', price: 'R$ 78,00' },
    { id: 3, image: 'assets/caneca-black-ring.png', name: 'Caneca Black Ring', price: 'R$ 32,00' },
    { id: 4, image: 'assets/camiseta-broken-saints.png', name: 'Camiseta Broken Saints', price: 'R$ 58,00' },
    { id: 5, image: 'assets/camiseta-outcast.png', name: 'Camiseta Outcast', price: 'R$ 89,00' },
    { id: 6, image: 'assets/caneca-the-grounds.png', name: 'Caneca The Grounds', price: 'R$ 85,00' },
    { id: 7, image: 'assets/camiseta-evening.png', name: 'Camiseta Evening', price: 'R$ 69,00' },
    { id: 8, image: 'assets/caneca-preto-fosco.png', name: 'Caneca Preto Fosco', price: 'R$ 28,00' },
    { id: 9, image: 'assets/caneca-never-settle.png', name: 'Caneca Never Settle', price: 'R$ 43,00' },
    { id: 10, image: 'assets/camiseta-dreamer.png', name: 'Camiseta Dreamer', price: 'R$ 55,00' },
    { id: 11, image: 'assets/caneca-decaf.png', name: 'Caneca Decaf', price: 'R$ 32,00' },
    { id: 12, image: 'assets/camiseta-ramones.png', name: 'Camiseta Ramones', price: 'R$ 92,00' },
  ];

  return (
    <div className={styles.productList}>
      {products.map((productList) => (
        <ProductItem key={productList.id} {...productList} />
      ))}
    </div>
  );
};

export default ProductList;