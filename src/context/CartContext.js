import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const numberOfItems = cartItems.length;
  const [totalPrice, setTotalPrice] = useState(0);

  function storeCartItems() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        numberOfItems,
        totalPrice,
        setTotalPrice,
        storeCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
