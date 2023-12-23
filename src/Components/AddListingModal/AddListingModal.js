import "./AddListingModal.css";
import { useEffect, useRef, useState } from "react";
import customFetch from "../../utils/customFetch";
import image from "../../images/product.jpg";
import axios from "axios";

function AddListingModal(props) {
  // check if all fields aren t empty
  // if empty ? display error message
  // if ok than send to server
  // close dialog

  const { dialogOpened, setDialogOpened } = props.state;

  const formRef = useRef(null);
  const dialogRef = useRef(null);

  async function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(formRef.current);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      // send data to server
      const response = await axios.post("/api/my-listings", formData, config);
      console.log(response);
      // close dialog if successful
      closeDialog();
    } catch (error) {
      // Display error message in form
      console.log(error);
    }
  }

  function closeDialog() {
    setDialogOpened(false);
  }

  return (
    <dialog ref={dialogRef}>
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
          <div className="add-listing-btn-container">
            <button
              onClick={closeDialog}
              className="create-listing-btn red-button"
            >
              Cancel
            </button>
            <button className="create-listing-btn blue-button">
              + Create new listing
            </button>
          </div>
        </div>
      </form>
    </dialog>
  );
}
export default AddListingModal;
