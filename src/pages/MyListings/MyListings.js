import "./MyListings.css";
import MyPost from "../../Components/MyPost/MyPost";
import AddListingModal from "../../Components/AddListingModal/AddListingModal";
import { useEffect, useState, useContext } from "react";

import axios from "axios";

function MyListings() {
  const [listingsArr, setListingsArr] = useState([]);
  const [dialogOpened, setDialogOpened] = useState(false);

  useEffect(() => {
    // { withcredentials: true, credentials: "include" }

    fetchMyListings();
  }, []);

  function fetchMyListings() {
    axios
      .get("/api/my-listings")
      .then((response) => {
        const { listings } = response.data;

        setListingsArr(listings.reverse());
      })
      .catch((err) => console.log(err));
  }

  const displayListings = listingsArr.map((obj) => {
    return (
      <MyPost
        listingId={obj._id}
        title={obj.title}
        price={obj.price}
        imageSrc={obj.image}
        state={{ listingsArr, setListingsArr }}
      />
    );
  });

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
        <AddListingModal
          state={{ dialogOpened, setDialogOpened }}
          fetchListings={fetchMyListings}
        />
      )}

      {/* </div> */}
    </section>
  );
}
export default MyListings;
