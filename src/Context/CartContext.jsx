 import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const existing = cart.find(prod => prod.id === item.id);
    if (existing) {
      setCart(
        cart.map(prod =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + item.quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: item.quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Total a pagar
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
