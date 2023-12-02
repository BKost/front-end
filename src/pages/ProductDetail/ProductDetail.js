import "./ProductDetail.css";
import image from "../../images/product.jpg";

function ProductDetail() {
  return (
    <article className="consistent-padding product-detail-container">
      {/* <h2 className="text-align-center">Product Name</h2> */}
      <section className=" product-image-and-cta">
        <div className="container product-image-container ">
          {" "}
          <img className="product-detail-image" src={image} />
        </div>

        <div className=" container   product-cta-container">
          <h3>Product name</h3>

          <p className="price-tag">Price: $ 300</p>
          <div className="user-and-date">
            <small>Posted by: User335</small>

            <small>
              Date: <time>11/26/33</time>
            </small>
          </div>
          <div className=" product-detail-btns">
            <button className=" product-detail-btn add-to-cart-btn ">
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam,
          sunt necessitatibus porro ipsa eius aut beatae amet similique unde.
          Nobis et quisquam blanditiis harum explicabo officia vitae atque
          magnam!
        </p>
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
