import "./MyPost.css";

import image from "../../images/product.jpg";
import { Link } from "react-router-dom";

function MyPost(props) {
  return (
    <li className="container my-post">
      <img
        className="my-post-image"
        height="100"
        width="150"
        src={`http://localhost:5100/${props.image}`}
        alt="Product image"
      />
      <h3>Headphones</h3>
      <p className="price-tag">Price: $ 300</p>
      <div className="my-post-btns">
        <button className="my-post-btn red-button">Delete</button>
        <Link style={{ width: "100%" }} to={"myPostId"}>
          <button className="my-post-btn blue-button">Edit</button>
        </Link>
      </div>
    </li>
  );
}
export default MyPost;
