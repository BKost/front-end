import "./ShoppingCart.css";
import image from "../../images/product.jpg";
import CartItem from "../../Components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const navigate = useNavigate();
  return (
    <section className="consistent-padding ">
      <h2 className="text-align-center">Shopping cart</h2>

      <aside className="container cart-aside text-align-center  ">
        <h3 className="">Total amount: $ 600</h3>
        <p>Number of items : 6</p>

        <div className="cart-aside-btns">
          <button
            onClick={() => navigate("/cart/order")}
            className="place-order-btn"
          >
            Place Order
          </button>
          <button className="delete-all-btn">Delete All Items</button>
        </div>
      </aside>
      <div className="  shopping-cart ">
        <ul
          className=" 
         shopping-list"
        >
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>
      </div>
    </section>
  );
}
export default ShoppingCart;
