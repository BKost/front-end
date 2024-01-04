import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [numberOfItems, setNumberOfItems] = useState(cartItems?.length);

  const [totalPrice, setTotalPrice] = useState(0);

  function storeCartItems() {
    // setNumberOfItems(cartItems.length);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  useEffect(() => {
    setNumberOfItems(cartItems?.length);
  }, [cartItems]);

  // useEffect(() => {
  //   setCartItems();
  // }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        numberOfItems,
        setNumberOfItems,
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
