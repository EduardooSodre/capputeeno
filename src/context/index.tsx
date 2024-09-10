import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Definindo a interface para os itens do carrinho
interface CartItem {
  description: ReactNode;
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateCartItem: (id: number, quantity: number) => void;
}

// Criando o contexto do carrinho
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Carregar carrinho do localStorage quando o componente for montado
  useEffect(() => {
    if (typeof window !== 'undefined') { // Verifica se o código está rodando no lado do cliente
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        try {
          setCart(JSON.parse(storedCart)); // Se existir um carrinho salvo, seta o estado com ele
        } catch (error) {
          console.error("Erro ao carregar o carrinho do localStorage", error);
        }
      }
    }
  }, []);

  // Salvar carrinho no localStorage sempre que ele for atualizado
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart)); // Salva no localStorage sempre que o carrinho mudar
    }
  }, [cart]);

  // Adicionar item ao carrinho
  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Se o produto já estiver no carrinho, atualiza a quantidade
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        // Se o produto não estiver no carrinho, adiciona-o com a quantidade especificada
        return [...prevCart, product];
      }
    });
  };

  // Remover item do carrinho
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  // Atualizar a quantidade de um item no carrinho
  const updateCartItem = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar o carrinho
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider');
  }
  return context;
};
