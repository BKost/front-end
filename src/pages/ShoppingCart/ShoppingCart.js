import "./ShoppingCart.css";
import image from "../../images/product.jpg";
import CartItem from "../../Components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../context/CartContext";

function ShoppingCart() {
  const navigate = useNavigate();
  const { cartItems, setCartItems, numberOfItems, setTotalPrice, totalPrice } =
    useContext(CartContext);

  const [isEmpty, setIsEmpty] = useState(cartItems?.length < 1);

  useEffect(() => {
    calculateTotalPrice();
    setIsEmpty(cartItems?.length < 1);
  }, [cartItems]);

  useEffect(() => {
    getCartItemsFromStorage();
  }, []);

  function getCartItemsFromStorage() {
    const items = JSON.parse(localStorage.getItem("cart"));
    setCartItems(items);

    // console.log(items, "From Storage");
  }

  function calculateTotalPrice() {
    const arr = cartItems?.map((item) => {
      return Number(item.price);
    });

    const initialValue = 0;

    const total = arr?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, initialValue);

    setTotalPrice(total);

    localStorage.setItem("totalPrice", JSON.stringify(total));
  }

  const displayCartItems = cartItems?.map((item, index) => (
    <CartItem
      id={item._id}
      index={index}
      title={item.title}
      price={item.price}
      image={item.image}
      amount={item.amount}
    />
  ));

  return (
    <section className="consistent-padding ">
      <h2 className="text-align-center">Shopping cart</h2>

      <aside className="container cart-aside text-align-center  ">
        <h3 className="">Total amount: $ {totalPrice}</h3>
        <p>Number of items : {numberOfItems}</p>

        <div className="cart-aside-btns">
          <button
            disabled={isEmpty}
            onClick={() => navigate("/cart/order")}
            className="place-order-btn"
          >
            Place Order
          </button>
          {/* <button className="delete-all-btn">Delete All Items</button> */}
        </div>
      </aside>
      <div className="  shopping-cart ">
        <ul
          className=" 
         shopping-list"
        >
          {displayCartItems}
        </ul>
      </div>
    </section>
  );
}
export default ShoppingCart;
