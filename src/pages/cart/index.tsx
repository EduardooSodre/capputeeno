import { useCart } from "@/src/context/index";
import styles from "./styles.module.css";
import {  useRouter } from "next/router";

const CartPage = () => {
  const router = useRouter();
  const { cart, removeFromCart } = useCart();

  // Calcula o subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function updateQuantity(id: any, arg1: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={styles.cartPage}>
      <button className={styles.returnButton} onClick={() => router.back()}>
        <img src="/assets/return.png" alt="Voltar" className={styles.returnIcon} /> <p>Voltar</p>
      </button>

      <h1>SEU CARRINHO</h1>
      <p>Total ({cart.length} produtos): R${subtotal.toFixed(2)}</p>

<div className={styles.divisao}>
      {/* Lista de produtos no carrinho */}
      <div className={styles.cartItems}>
        {cart.map((product) => (
          <div key={product.id} className={styles.cartItem}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.cartItemImage}
            />
            <div className={styles.cartItemDetails}>
              <h2>
                {product.name}
                <button
                className={styles.removeButton} onClick={() => removeFromCart(product.id)}>  <img src="/assets/delete.png" alt="Deletar" /> 
      
                </button>
              </h2>
              <p>{product.description}</p>

              <select
                value={product.quantity}
                onChange={(e) =>
                  updateQuantity(product.id, parseInt(e.target.value))
                }
                className={styles.quantitySelect}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
              <p>
                R$
                {cart
                  .reduce((acc, item) => acc + parseFloat(item.price), 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Resumo do Pedido */}
      <div className={styles.orderSummary}>
        <h2>RESUMO DO PEDIDO</h2>
        <div className={styles.summaryItem}>
          <span>Subtotal de produtos</span>
          <span>R${subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Entrega</span>
          <span>R$40,00</span>
        </div>
        <div className={styles.summaryTotal}>
          <span>Total</span>
          <span>R${(subtotal + 40).toFixed(2)}</span>
        </div>
        <button className={styles.checkoutButton}>FINALIZAR A COMPRA</button>
      </div>
    </div>
  </div>
  );
};

export default CartPage;

// import { useCart } from '@/src/context/index';
// import styles from './styles.module.css';
// import {  useRouter } from 'next/router';

// const CartPage = () => {
//   const router = useRouter();
//   const { cart, removeFromCart } = useCart();

//   return (
//     <div className={styles.cartPage}>
//       <button className={styles.returnButton} onClick={() => router.back()}>
//         <img src="/assets/return.png" alt="Voltar" className={styles.returnIcon} /> <p>Voltar</p>
//       </button>
//       <h1>SEU CARRINHO</h1>
//       <p>Total ({cart.length} produtos): R${cart.reduce((acc, item) => acc + item.price, 0)}</p>
//       <div className={styles.cartItems}>
//         {cart.map((product) => (
//           <div key={product.id} className={styles.cartItem}>
//             <img src={product.image} alt={product.name} className={styles.cartItemImage} />
//             <div className={styles.cartItemDetails}>
//               <h2>{product.name}</h2>
//               <p>{product.description}</p>
//               <p>R${product.price}</p>
//               <button onClick={() => removeFromCart(product.id)}>Remover</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//   );
// };

// export default CartPage;
