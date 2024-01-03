import { useState } from "react";
import DeleteAccountModal from "../../Components/DeleteAccountModal/DeleteAccountModal";
import UserInfo from "../../Components/UserInfo/UserInfo";
import "./UserPage.css";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const { setIsLoggedIn } = useUserContext();

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate(null);

  function deleteAccount() {
    axios
      .delete("/api/my-profile")
      .then((response) => {
        console.log(response.data);
        navigate("/");
        setShowDeleteModal(false);
        setIsLoggedIn(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="consistent-padding">
      <h2 className="text-align-center">User Page</h2>
      <UserInfo />
      <div className="container delete-account text-align-center">
        <h3>Delete account</h3>
        <p>After submitting all your posts and account data will be deleted</p>
        <button
          onClick={() => setShowDeleteModal(true)}
          className="red-button delete-account-btn"
        >
          Delete my account
        </button>
      </div>
      {showDeleteModal && (
        <DeleteAccountModal
          setShowDeleteModal={setShowDeleteModal}
          deleteAccount={deleteAccount}
        />
      )}
    </section>
  );
}
export default UserPage;
