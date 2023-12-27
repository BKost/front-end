import "./MyPostDetail.css";

import image from "../../images/product.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

function MyPostDetail() {
  const { myPostId } = useParams();

  const formRef = useRef(null);

  const [listingData, setListingData] = useState({});
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    fetchSingleListing();
  }, []);

  function fetchSingleListing() {
    axios
      .get(`/api/my-listings/${myPostId}`)
      .then((response) => {
        const {
          data: { singleListing },
        } = response;

        setListingData(singleListing);
        // console.log(response);
      })
      .catch((err) => console.log(err));
  }

  function updateListing(event) {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    // console.log(Object.fromEntries(formData));
    // console.log(formRef.current);

    axios
      .patch(`/api/my-listings/${myPostId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setDisabled(true);
        fetchSingleListing();
        console.log(response);
        // console.log("Fetcg single listing after update");
      })
      .catch((err) => console.log(err));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setListingData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function edit(event) {
    event.preventDefault();

    setDisabled(false);
  }

  return (
    <form ref={formRef} className="consistent-padding my-post-detail-container">
      <section className=" my-post-image-and-cta">
        <div className="container my-post-image-container ">
          {" "}
          <img
            className="my-post-detail-image"
            width="300"
            height="200"
            src={listingData.image}
          />
        </div>

        <div className=" container   my-post-detail-cta-container">
          <div className="input-container">
            <label htmlFor="first_name">Product name</label>

            <input
              onChange={handleChange}
              name="title"
              type="text"
              value={listingData.title}
              disabled={disabled}
            />
          </div>
          <div className="input-container">
            <label htmlFor="image">Image</label>
            <input disabled={disabled} name="image" type="file" />
          </div>
          <div className="input-container">
            <label htmlFor="first_name">Price $</label>
            <input
              onChange={handleChange}
              name="price"
              type="text"
              value={listingData.price}
              disabled={disabled}
            />
          </div>
        </div>
      </section>
      <section className="container product-description">
        <div className="input-container">
          <label htmlFor="first_name">Description</label>
          <textarea
            onChange={handleChange}
            name="description"
            rows={"10"}
            type="text"
            value={listingData.description}
            disabled={disabled}
          />
          {disabled ? (
            <button
              onClick={edit}
              className="my-post-detail-edit-btn blue-button"
            >
              Edit listing
            </button>
          ) : (
            <button
              onClick={updateListing}
              className="my-post-detail-edit-btn red-button"
            >
              Save changes
            </button>
          )}
        </div>
      </section>
    </form>
  );
}
export default MyPostDetail;
