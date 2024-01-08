import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <article className="container product-card">
      <img
        className="product-image"
        alt="product-image"
        src={props.image}
        height="2"
        width="3"
      />
      {/* <time className="date-text">23/11/22</time> */}
      <h3>{props.title}</h3>
      <p className="price-tag">
        Price: <span className="price-span">$ {props.price}</span>{" "}
      </p>
      <p>{props.description}</p>
      <Link className="details-btn blue-button" to={props.id}>
        Details
      </Link>
    </article>
  );
}
export default ProductCard;
