import "./DeleteAccountModal.css";

function DeleteAccountModal(props) {
  return (
    <dialog className="">
      <div className="container delete-account-dialog-container">
        {" "}
        <h3 className="text-align-center">Sure you want to delete account ?</h3>
        <div className="delete-account-dialog-btns">
          <button
            onClick={props.deleteAccount}
            className="delete-account-dialog-btn red-button"
          >
            Yes
          </button>
          <button
            onClick={() => props.setShowDeleteModal(false)}
            className="delete-account-dialog-btn blue-button"
          >
            No
          </button>
        </div>
      </div>
    </dialog>
  );
}
export default DeleteAccountModal;
