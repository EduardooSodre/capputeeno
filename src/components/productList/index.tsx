import ProductItem from '../productItem'
import styles from '../productList/styles.module.css';

const ProductList = () => {
  const products = [
    { image: 'assets/caneca-ceramica-rustica.png', name: 'Caneca de cerâmica rústica', price: 'R$ 40,00' },
    { image: 'assets/camiseta-not-today.png', name: 'Camiseta not today.', price: 'R$ 78,00' },
    { image: 'assets/caneca-black-ring.png', name: 'Caneca Black Ring', price: 'R$ 32,00' },
    { image: 'assets/camiseta-broken-saints.png', name: 'Camiseta Broken Saints', price: 'R$ 28,00' },

    { image: 'assets/camiseta-outcast.png', name: 'camiseta outcast rústica', price: 'R$ 89,00' },
    { image: 'assets/caneca-the-grounds.png', name: 'caneca da the grounds.', price: 'R$ 85,00' },
    { image: 'assets/caneca-preto-fosco.png', name: 'caneca preto fosco', price: 'R$ 28,00' },
    { image: 'assets/camiseta-broken-saints.png', name: 'Camiseta Broken Saints', price: 'R$ 28,00' },

    { image: 'assets/caneca-never-settle.png', name: 'Caneca de cerâmica rústica', price: 'R$ 43,00' },
    { image: 'assets/camiseta-dreamer.png', name: 'camiseta da DREAMER.', price: 'R$ 55,00' },
    { image: 'assets/caneca-decaf.png', name: 'caneca da decaf', price: 'R$ 32,00' },
    { image: 'assets/camiseta-ramones.png', name: 'camiseta da ramones Saints', price: 'R$ 92,00' },
  ];

  return (
    <div className={styles.productList}>
      {products.map((product, index) => (
        <ProductItem key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
