import { useState } from "react";
import "./LogOutModal.css";

function LogOutModal() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <dialog className="dialog">
      <div className="container dialog-container">
        {" "}
        <h3 className="text-align-center">Sure you want to logout ?</h3>
        <div className="dialog-btns">
          <button className="dialog-btn red-button">Yes</button>
          <button
            onClick={() => setShowDialog(false)}
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
