import "./AddListingModal.css";
import { useRef } from "react";
import customFetch from "../../utils/customFetch";
import image from "../../images/product.jpg";

function AddListingModal() {
  // check if all fields aren t empty
  // if empty ? display error message
  // if ok than send to server
  // close dialog

  const formRef = useRef(null);

  async function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(formRef.current);

    const formDataObj = Object.fromEntries(formData.entries());

    console.log(formDataObj);
  }

  return (
    <dialog>
      <form
        onSubmit={handleFormSubmit}
        className=" add-listing-dialog-container"
        ref={formRef}
      >
        {/* <h3>New listing</h3> */}
        <div className="add-listing-ul-container">
          <ul className="container add-listing-ul-2">
            <li className="input-container">
              <label htmlFor="">Upload image</label>
              <input name="image" type="file" />

              <img className="add-listing-image" src={image} alt="" />
            </li>
          </ul>
          <ul className="container add-listing-ul">
            <li className="input-container">
              <label htmlFor="">Title</label>
              <input name="title" type="text" defaultValue={"Headphones"} />
            </li>
            <li className="input-container">
              <label htmlFor="">Price $</label>
              <input name="price" type="text" defaultValue={"1200"} />
            </li>
          </ul>
        </div>
        <div className="input-container container">
          <label htmlFor="">Description</label>
          <textarea
            rows={"5"}
            type="text"
            name="description"
            defaultValue={"Some description text"}
          />
          <button className="create-listing-btn blue-button">
            + Create new listing
          </button>
        </div>
      </form>
    </dialog>
  );
}
export default AddListingModal;
