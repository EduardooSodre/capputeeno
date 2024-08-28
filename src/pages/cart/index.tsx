import { useState } from 'react';
import styles from './styles.module.css';



const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Caneca de cerâmica rústica', price: 40.00, quantity: 1 },
    { id: 2, name: 'Camiseta Not Today', price: 78.00, quantity: 3 },
    // Outros itens do carrinho...
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className={styles.cart}>
      <h1>Seu Carrinho</h1>
      <div className={styles.cartTotal}>
        <span>Total: (4 Produtos)</span>
        <span>R$ {total.toFixed(2)}</span>
      </div>
      <div className={styles.cartItems}>
        {cartItems.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <div>{item.name}</div>
            <div>{item.price.toFixed(2)}</div>
            <div>{item.quantity}</div>
            <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
