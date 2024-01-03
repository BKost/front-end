import { useState } from "react";
import "./LogOutModal.css";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";

function LogOutModal() {
  const { setShowLogout, setIsLoggedIn } = useUserContext();
  // const [showDialog, setShowDialog] = useState(false);

  function logOut() {
    axios
      .get("/api/logout")
      .then((response) => {
        console.log(response);
        setShowLogout(false);
        setIsLoggedIn(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <dialog className="dialog">
      <div className="container dialog-container">
        {" "}
        <h3 className="text-align-center">Sure you want to logout ?</h3>
        <div className="dialog-btns">
          <button onClick={logOut} className="dialog-btn red-button">
            Yes
          </button>
          <button
            onClick={() => setShowLogout(false)}
            className="dialog-btn blue-button"
          >
            No
          </button>
        </div>
      </div>
    </dialog>
  );
}
export default LogOutModal;
