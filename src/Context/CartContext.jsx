import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: { ...item, quantity: 1 }
    }));
  };

  const increment = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity: prev[id].quantity + 1
      }
    }));
  };

  const decrement = (id) => {
    setCart((prev) => {
      const item = prev[id];
      if (item.quantity === 1) {
        const updatedCart = { ...prev };
        delete updatedCart[id];
        return updatedCart;
      }
      return {
        ...prev,
        [id]: {
          ...item,
          quantity: item.quantity - 1
        }
      };
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};
