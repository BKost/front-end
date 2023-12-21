import "./MyListings.css";
import MyPost from "../../Components/MyPost/MyPost";
import AddListingModal from "../../Components/AddListingModal/AddListingModal";
import { useEffect, useState, useContext } from "react";

import {
  DialogContext,
  DialogContextProvider,
} from "../../context/dialogContext";

import customFetch from "../../utils/customFetch";
import axios from "axios";

function MyListings() {
  const [listingsArr, setListingsArr] = useState([]);
  const [dialogOpened, setDialogOpened] = useState(false);

  useEffect(() => {
    // { withcredentials: true, credentials: "include" }
    axios
      .get("/api/my-listings")
      .then((response) => {
        const { listings } = response.data;
        setListingsArr(listings);
      })
      .catch((err) => console.log(err));
  }, []);

  const displayListings = listingsArr.map((obj) => {
    console.log(obj);
    return <MyPost title={obj.title} price={obj.price} />;
  });

  console.log(displayListings);

  function openDialog() {
    setDialogOpened(true);
  }

  function addNewListing() {
    openDialog();
    // open dialog
  }

  return (
    <section className="consistent-padding">
      <h2 className="text-align-center">My listings</h2>
      {/* <div className="  shopping-cart "> */}

      <button onClick={addNewListing} className="add-listing-btn blue-button">
        + Add new listing
      </button>

      <ul
        className=" 
         my-listings-list"
      >
        {displayListings}
      </ul>
      {dialogOpened && (
        <AddListingModal state={{ dialogOpened, setDialogOpened }} />
      )}

      {/* </div> */}
    </section>
  );
}
export default MyListings;
