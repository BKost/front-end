import "./CartItem.css";
import image from "../../images/product.jpg";

function CartItem() {
  return (
    <li className="container cart-item">
      <img
        className="cart-item-image"
        height="100"
        width="150"
        src={image}
        alt="Product image"
      />
      <h3>Headphones</h3>
      <p className="price-tag">Price: $ 300</p>
      <button className="cart-item-btn">Delete</button>
    </li>
  );
}
export default CartItem;
