import "./MyPost.css";

import image from "../../images/product.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function MyPost(props) {
  const { listingsArr, setListingsArr } = props.state;

  function removeListingFromArray() {
    const filteredArr = listingsArr.filter((ob) => ob._id !== props.listingId);
    console.log(filteredArr);
    setListingsArr(filteredArr);
  }

  function deleteListing() {
    axios
      .delete(`/api/my-listings/${props.listingId}`)
      .then((response) => {
        // console.log(response);
        removeListingFromArray();
      })
      .catch((err) => console.log(err));
    // console.log(props.listingId);
  }
  return (
    <li className="container my-post">
      <img
        className="my-post-image"
        height="100"
        width="150"
        src={`${props.imageSrc}`}
        alt="Product image"
      />
      <h3>{props.title}</h3>
      <p className="price-tag">Price: $ {props.price}</p>
      <div className="my-post-btns">
        <button onClick={deleteListing} className="my-post-btn red-button">
          Delete
        </button>
        <Link style={{ width: "100%" }} to={"myPostId"}>
          <button className="my-post-btn blue-button">Edit</button>
        </Link>
      </div>
    </li>
  );
}
export default MyPost;
