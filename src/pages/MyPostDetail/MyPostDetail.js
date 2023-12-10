import "./MyPostDetail.css";

import image from "../../images/product.jpg";

function MyPostDetail() {
  return (
    <article className="consistent-padding my-post-detail-container">
      <section className=" my-post-image-and-cta">
        <div className="container my-post-image-container ">
          {" "}
          <img
            className="my-post-detail-image"
            width="300"
            height="200"
            src={image}
          />
        </div>

        <div className=" container   my-post-detail-cta-container">
          <div className="input-container">
            <label htmlFor="first_name">Product name</label>

            <input name="first_name" type="text" defaultValue="Headphones" />
            <button className="my-post-detail-edit-btn blue-button">
              Edit
            </button>
          </div>
          <div className="input-container">
            <label htmlFor="first_name">Image</label>
            <input name="first_name" type="file" />
            <button className="my-post-detail-edit-btn blue-button">
              Edit
            </button>
          </div>
          <div className="input-container">
            <label htmlFor="first_name">Price $</label>
            <input name="first_name" type="text" defaultValue="300" />
            <button className="my-post-detail-edit-btn blue-button">
              Edit
            </button>
          </div>
        </div>
      </section>
      <section className="container product-description">
        <div className="input-container">
          <label htmlFor="first_name">Description</label>
          <textarea
            name="first_name"
            rows={"10"}
            type="text"
            defaultValue="300"
          />
          <button className="my-post-detail-edit-btn blue-button">Edit</button>
        </div>
      </section>
    </article>
  );
}
export default MyPostDetail;
