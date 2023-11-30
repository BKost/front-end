import "./ProductCard.css";
import image from "../../images/product.jpg";
import { Link, useParams } from "react-router-dom";

function ProductCard() {
  // const { category, productId } = useParams();

  // const url = `/${category}/gg`;

  // console.log(url);

  return (
    <article className="container product-card">
      <img className="product-image" src={image} />
      <time className="date-text">23/11/22</time>
      <h3>Headphones</h3>
      <p className="price-tag">
        Price: <span className="price-span">$ 300</span>{" "}
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nulla
        laboriosam odio provident quod, eum tempora atque quae? Necessitatibus
        deleniti corporis, quae ex porro eveniet officia omnis numquam officiis
        totam? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Delectus nulla laboriosam odio provident quod, eum tempora atque quae?
        Necessitatibus deleniti corporis, quae ex porro eveniet officia omnis
        numquam officiis totam? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Delectus nulla laboriosam odio provident quod, eum
        tempora atque quae? Necessitatibus deleniti corporis, quae ex porro
        eveniet officia omnis numquam officiis totam?
      </p>
      <Link className="details-btn" to={"gg"}>
        Details
      </Link>
    </article>
  );
}
export default ProductCard;
