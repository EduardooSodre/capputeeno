import { useCart } from "@/src/context/index";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CartPage = () => {
  const router = useRouter();
  const { cart, removeFromCart, updateCartItem } = useCart(); // Supondo que você tenha essa função no contexto
  const [subtotal, setSubtotal] = useState(0);
  const [frete, setFrete] = useState(40); // Valor inicial do frete

  // Função para calcular o subtotal
  useEffect(() => {
    const calculatedSubtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);

    // Se o subtotal for maior ou igual a R$ 900,00, frete grátis
    if (calculatedSubtotal >= 900) {
      setFrete(0);
    } else {
      setFrete(40);
    }
  }, [cart]);

  // Função para atualizar a quantidade
  function updateQuantity(id: number, quantity: number): void {
    updateCartItem(id, quantity); // Supondo que tenha uma função no contexto que atualiza o item
  }

  return (
    <div className={styles.cartPage}>
      <button className={styles.returnButton} onClick={() => router.back()}>
        <img
          src="/assets/return.png"
          alt="Voltar"
          className={styles.returnIcon}
        />{" "}
        <p>Voltar</p>
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
                    className={styles.removeButton}
                    onClick={() => removeFromCart(product.id)}
                  >
                    <img src="/assets/delete.png" alt="Deletar" />
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

                <p>R${(product.price * product.quantity).toFixed(2)}</p> {/* Exibindo o preço total por item */}
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
            <span>{frete === 0 ? "Grátis" : `R$${frete.toFixed(2)}`}</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>R${(subtotal + frete).toFixed(2)}</span>
          </div>
          <button className={styles.checkoutButton}onClick={() => alert('Compra realizada com sucesso')}>FINALIZAR A COMPRA</button>
          <div className={styles.rodape}>
          <a className={styles.link_rodape}>AJUDA</a>
          <a className={styles.link_rodape}>REEMBOLSO</a>
          <a className={styles.link_rodape}>ENTREGAS E FRETE</a>
          <a className={styles.link_rodape}>TROCAS E DEVOLUÇÔES</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;