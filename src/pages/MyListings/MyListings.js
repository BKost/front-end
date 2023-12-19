import "./MyListings.css";
import MyPost from "../../Components/MyPost/MyPost";
import AddListingModal from "../../Components/AddListingModal/AddListingModal";

// make my listings page
// Funtionalities:
// -add new listing
// -delete single listing

function MyListings() {
  return (
    <section className="consistent-padding">
      <h2 className="text-align-center">My listings</h2>
      {/* <div className="  shopping-cart "> */}

      <button className="add-listing-btn blue-button">+ Add new listing</button>

      <ul
        className=" 
         my-listings-list"
      >
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
      </ul>
      {/* <AddListingModal /> */}

      {/* </div> */}
    </section>
  );
}
export default MyListings;
