import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductDetail() {
  const { productId } = useParams();

  const { setCartItems } = useContext(CartContext);

  const [itemData, setItemData] = useState({});

  useEffect(() => {
    fetchSingleItem();
  }, []);

  function addToCartDB() {
    axios
      .post("/api/shopping-cart", { itemData })
      .then((response) => {
        const { cart } = response.data.shoppingCart;

        localStorage.setItem("cart", JSON.stringify(cart));
        setCartItems(cart);
      })
      .catch((err) => console.log(err));
  }

  function fetchSingleItem() {
    axios
      .get(`/api/items/${productId}`)
      .then((response) => {
        const { singleItem } = response.data;

        setItemData(singleItem);
      })
      .catch((err) => console.log(err));
  }

  return (
    <article className="consistent-padding product-detail-container">
      <section className=" product-image-and-cta">
        <div className="container product-image-container ">
          {" "}
          <img
            className="product-detail-image"
            width="3"
            height="2"
            src={itemData?.image}
          />
        </div>

        <div className=" container   product-cta-container">
          <h3>{itemData?.title}</h3>

          <p className="price-tag">Price: $ {itemData?.price}</p>
          {/* <div className="user-and-date">
            <small>Posted by: User335</small>

            <small>
              Date: <time>11/26/33</time>
            </small>
          </div> */}
          <div className=" product-detail-btns">
            <button
              onClick={addToCartDB}
              className=" product-detail-btn add-to-cart-btn "
            >
              + Add to cart
            </button>
            {/* <button className=" product-detail-btn purchase-btn ">
              Purchase
            </button> */}
          </div>
        </div>
      </section>
      <section className="container product-description">
        <h3>Description</h3>
        <p>{itemData?.description}</p>
      </section>
    </article>
  );
}
export default ProductDetail;
