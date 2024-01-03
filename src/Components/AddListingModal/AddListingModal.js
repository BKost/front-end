import "./AddListingModal.css";
import { useEffect, useRef, useState } from "react";
import customFetch from "../../utils/customFetch";
import image from "../../images/product.jpg";
import axios from "axios";

function AddListingModal(props) {
  const { dialogOpened, setDialogOpened } = props.state;
  const [uploadImageSrc, setUploadImageSrc] = useState(null);

  const formRef = useRef(null);
  const imageInputRef = useRef(null);
  const imageRef = useRef(null);

  function showImageFile() {
    const file = imageInputRef.current.files[0];

    const reader = new FileReader();

    reader.onload = (event) => {
      setUploadImageSrc(event.target.result);
      console.log(event.target.result);
      console.log("loaded");
    };

    reader.readAsDataURL(file);

    // console.log(file, reader);
  }

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
      props.fetchListings();
    } catch (error) {
      // Display error message in form
      console.log(error);
    }
  }

  function closeDialog() {
    setDialogOpened(false);
  }

  return (
    <dialog className="add-listing-dialog">
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
              <input
                ref={imageInputRef}
                onChange={showImageFile}
                name="image"
                type="file"
              />

              <img
                className="add-listing-image"
                ref={imageRef}
                src={uploadImageSrc}
                alt=""
              />
            </li>
          </ul>
          <ul className="container add-listing-ul">
            <li className="input-container">
              <label htmlFor="">Title</label>
              <input name="title" type="text" />
            </li>
            <li className="input-container">
              <label htmlFor="">Price $</label>
              <input name="price" type="text" />
            </li>

            <li className="input-container">
              <label htmlFor="category">Category</label>
              <select
                // onChange={handleChange}
                // disabled={disabled}
                id="category"
                name="category"
                // value={listingData.category}
              >
                <option value="">--Please choose an option--</option>
                <option value="Electronics">Electronics</option>
                <option value="Home">Home</option>
                <option value="Cars">Cars</option>
                <option value="Digital">Digital</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="input-container container">
          <label htmlFor="">Description</label>
          <textarea rows={"5"} type="text" name="description" />
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
