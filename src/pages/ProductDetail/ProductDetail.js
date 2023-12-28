import "./ProductDetail.css";
import image from "../../images/product.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductDetail() {
  const { productId } = useParams();

  const { cartItems, setCartItems } = useContext(CartContext);

  const [itemData, setItemData] = useState({});

  useEffect(() => {
    fetchSingleItem();
  }, []);

  console.log(cartItems);

  function addToCart() {
    // check if its already in card

    if (cartItems.length === 0) {
      return setCartItems((prev) => {
        return [...prev, { ...itemData, amount: 1 }];
      });
    }

    const isInCart = cartItems.some((item) => {
      return item._id === itemData._id;
    });

    if (cartItems.length > 0 && !isInCart) {
      return setCartItems((prev) => {
        return [...prev, { ...itemData, amount: 1 }];
      });
    }

    if (isInCart) {
      console.log(isInCart);

      const arr = cartItems.map((item) => {
        if (item._id === itemData._id) {
          return { ...item, amount: item.amount + 1 };
        }
      });

      setCartItems(arr);
    }

    // if prodict exists than access the product and add amount to it
    // if not than push another product to array
  }

  function fetchSingleItem() {
    axios
      .get(`/api/items/${productId}`)
      .then((response) => {
        const { singleItem } = response.data;

        setItemData(singleItem);

        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  return (
    <article className="consistent-padding product-detail-container">
      {/* <h2 className="text-align-center">Product Name</h2> */}
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
          <div className="user-and-date">
            <small>Posted by: User335</small>

            <small>
              Date: <time>11/26/33</time>
            </small>
          </div>
          <div className=" product-detail-btns">
            <button
              onClick={addToCart}
              className=" product-detail-btn add-to-cart-btn "
            >
              + Add to cart
            </button>
            <button className=" product-detail-btn purchase-btn ">
              Purchase
            </button>
          </div>
        </div>
      </section>
      <section className="container product-description">
        <h3>Description</h3>
        <p>{itemData?.description}</p>
        {/* <div className="user-and-date">
          <small>Posted by: User335</small>

          <small>
            <time>11/26/33</time>
          </small>
        </div> */}
      </section>
    </article>
  );
}
export default ProductDetail;
