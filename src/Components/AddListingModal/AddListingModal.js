import "./AddListingModal.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useErrorMessage from "../../hooks/useErrorMessage";

function AddListingModal(props) {
  const { dialogOpened, setDialogOpened } = props.state;
  const [uploadImageSrc, setUploadImageSrc] = useState(null);
  const { setErrorMessage, ErrorMessageElement } = useErrorMessage({
    marginTop: "1em",
  });

  const formRef = useRef(null);
  const imageInputRef = useRef(null);
  const imageRef = useRef(null);

  function showImageFile() {
    const file = imageInputRef.current.files[0];

    const reader = new FileReader();

    reader.onload = (event) => {
      setUploadImageSrc(event.target.result);
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
      const { msg } = error.response.data;
      setErrorMessage(msg);
      console.log(msg);
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
              <label htmlFor="">Upload image *</label>
              <input
                required
                ref={imageInputRef}
                onChange={showImageFile}
                name="image"
                type="file"
              />
              {uploadImageSrc && (
                <img
                  className="add-listing-image"
                  ref={imageRef}
                  src={uploadImageSrc}
                  alt="Image of your listing"
                />
              )}
            </li>
          </ul>
          <ul className="container add-listing-ul">
            <li className="input-container">
              <label htmlFor="">Title *</label>
              <input required name="title" type="text" />
            </li>
            <li className="input-container">
              <label htmlFor="">Price $ *</label>
              <input required name="price" type="number" />
            </li>

            <li className="input-container">
              <label htmlFor="category">Category *</label>
              <select id="category" name="category">
                <option value="">--Please select a category--</option>
                <option value="Electronics">Electronics</option>
                <option value="Home">Home</option>
                <option value="Cars">Cars</option>
                <option value="Digital">Digital</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="input-container container">
          <label htmlFor="">Description *</label>
          <textarea required rows={"5"} type="text" name="description" />
          {ErrorMessageElement}
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
