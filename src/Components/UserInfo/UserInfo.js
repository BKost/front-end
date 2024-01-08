import axios from "axios";
import "./UserInfo.css";
import { useEffect, useRef, useState } from "react";

function UserInfo() {
  const formRef = useRef(null);

  const [disabled, setDisabled] = useState(true);
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    fetchUserInfo();
  }, []);

  function fetchUserInfo() {
    axios
      .get("/api/my-profile")
      .then((response) => {
        const { userData } = response.data;

        setProfileInfo((prev) => {
          return { ...userData, password: "", confirm_password: "" };
        });
      })
      .catch((err) => console.log(err));
  }

  function updateUserProfile(event) {
    event.preventDefault();

    axios
      .patch("/api/my-profile", profileInfo)
      .then((response) => {
        setDisabled(true);
      })
      .catch((err) => console.log(err));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setProfileInfo((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleChangeAddress(event) {
    const { name, value } = event.target;

    setProfileInfo((prev) => {
      return { ...prev, address: { ...prev.address, [name]: value } };
    });
  }

  function edit(event) {
    event.preventDefault();
    setDisabled(false);
  }

  return (
    <form ref={formRef} className="container user-info-form" action="POST">
      <section>
        <h3>User profile</h3>
        <ul className="user-info-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="user_name">User name</label>
              <input
                disabled={disabled}
                onChange={handleChange}
                name="user_name"
                type="text"
                // defaultValue="User123"
                value={profileInfo?.user_name}
              />
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3>Contact information</h3>

        <ul className="user-info-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="first_name">First Name</label>
              <input
                disabled={disabled}
                onChange={handleChange}
                name="first_name"
                type="text"
                value={profileInfo?.first_name}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="last_name">Last Name</label>
              <input
                disabled={disabled}
                onChange={handleChange}
                name="last_name"
                type="text"
                value={profileInfo?.last_name}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="last_name">Phone number</label>
              <input
                disabled={disabled}
                onChange={handleChange}
                name="phone"
                type="tel"
                value={profileInfo?.phone}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="email">E-mail</label>
              <input
                disabled={disabled}
                onChange={handleChange}
                name="email"
                type="text"
                value={profileInfo?.email}
              />
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3>Create New Password</h3>

        <ul className="user-info-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                disabled={disabled}
                onChange={handleChange}
                name="password"
                type="text"
                // value={profileInfo?.password}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              <label htmlFor="confirm_password">Confirm password</label>
              <input
                disabled={disabled}
                onChange={handleChange}
                name="confirm_password"
                type="text"
                // value={profileInfo?.confirm_password}
              />
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3>Address</h3>

        <ul className="user-info-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="street_name">Street name</label>
              <input
                disabled={disabled}
                onChange={handleChangeAddress}
                name="street_name"
                type="text"
                value={profileInfo?.address?.street_name}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              <label htmlFor="street_number">Street number</label>
              <input
                disabled={disabled}
                onChange={handleChangeAddress}
                name="street_number"
                type="text"
                value={profileInfo?.address?.street_number}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="city">City</label>
              <input
                disabled={disabled}
                onChange={handleChangeAddress}
                name="city"
                type="text"
                value={profileInfo?.address?.city}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="postal_code">Postal code</label>
              <input
                disabled={disabled}
                onChange={handleChangeAddress}
                name="postal_code"
                type="text"
                value={profileInfo?.address?.postal_code}
              />
            </div>
          </li>
        </ul>
      </section>
      {disabled ? (
        <button onClick={edit} className="user-profile-btn blue-button">
          Edit user profile
        </button>
      ) : (
        <button
          onClick={updateUserProfile}
          className="user-profile-btn red-button"
        >
          Save changes
        </button>
      )}
    </form>
  );
}
export default UserInfo;
