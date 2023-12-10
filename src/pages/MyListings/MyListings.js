import "./MyListings.css";
import MyPost from "../../Components/MyPost/MyPost";

// make my listings page
// Funtionalities:
// -add new listing
// -delete single listing

function MyListings() {
  return (
    <section className="consistent-padding">
      <h2 className="text-align-center">My listings</h2>
      {/* <div className="  shopping-cart "> */}
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
      {/* </div> */}
    </section>
  );
}
export default MyListings;
