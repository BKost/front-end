import "./MyListings.css";
import MyPost from "../../Components/MyPost/MyPost";
import AddListingModal from "../../Components/AddListingModal/AddListingModal";
import { useEffect, useState } from "react";

import customFetch from "../../utils/customFetch";
import axios from "axios";

function MyListings() {
  const [listingsArr, setListingsArr] = useState([]);

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

  const displayListings = listingsArr.map((obj) => (
    <MyPost title={obj.title} price={obj.price} />
  ));

  console.log(displayListings);

  return (
    <section className="consistent-padding">
      <h2 className="text-align-center">My listings</h2>
      {/* <div className="  shopping-cart "> */}

      <button className="add-listing-btn blue-button">+ Add new listing</button>

      <ul
        className=" 
         my-listings-list"
      >
        {displayListings}
        {/* <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost /> */}
        <MyPost />
      </ul>
      {/* <AddListingModal /> */}

      {/* </div> */}
    </section>
  );
}
export default MyListings;
