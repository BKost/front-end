import { useEffect, useRef, useState } from "react";
import "./OrderForm.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import axios from "axios";

function OrderForm(props) {
  // if user logged in, fill the form from user info

  const { isLoggedIn } = useUserContext();

  const formRef = useRef(null);

  const navigate = useNavigate();

  const [buyerInfo, setBuyerInfo] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setBuyerInfo((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleChangeAddress(event) {
    const { name, value } = event.target;

    setBuyerInfo((prev) => {
      return { ...prev, address: { ...prev.address, [name]: value } };
    });

    // console.log(name, value);
  }

  function getUserInfo() {
    axios
      .get("/api/my-profile")
      .then((response) => {
        const { userData } = response.data;
        setBuyerInfo(userData);
      })
      .catch((err) => console.log(err));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(formRef.current);

    // const formDataObj = Object.fromEntries(formData);

    localStorage.setItem("buyer", JSON.stringify(buyerInfo));

    props.setRenderCheckout(true);

    // const formData = new FormData(formRef.current);

    // console.log(Object.fromEntries(formData));
  }

  return (
    <form
      ref={formRef}
      // onSubmit={handleSubmit}
      onSubmit={(e) => e.preventDefault()}
      className="container order-form "
      action="POST"
    >
      <section>
        <h3>Contact information</h3>

        <ul className="order-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="first_name">First Name</label>
              <input
                onChange={handleChange}
                name="first_name"
                type="text"
                value={buyerInfo?.first_name}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="last_name">Last Name</label>
              <input
                onChange={handleChange}
                name="last_name"
                type="text"
                value={buyerInfo?.last_name}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="phone">Phone number</label>
              <input
                onChange={handleChange}
                name="phone"
                type="tel"
                value={buyerInfo?.phone}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="email">E-mail</label>
              <input
                onChange={handleChange}
                name="email"
                type="text"
                value={buyerInfo?.email}
              />
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3>Address</h3>

        <ul className="order-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="street_name">Street name</label>
              <input
                onChange={handleChangeAddress}
                name="street_name"
                type="text"
                value={buyerInfo?.address?.street_name}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              <label htmlFor="street_number">Street number</label>
              <input
                onChange={handleChangeAddress}
                name="street_number"
                type="text"
                value={buyerInfo?.address?.street_number}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="city">City</label>
              <input
                onChange={handleChangeAddress}
                name="city"
                type="text"
                value={buyerInfo?.address?.city}
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="postal_code">Postal code</label>
              <input
                onChange={handleChangeAddress}
                name="postal_code"
                type="text"
                value={buyerInfo?.address?.postal_code}
              />
            </div>
          </li>
        </ul>
      </section>

      <button onClick={getUserInfo} className="blue-button" type="submit">
        Use saved contact and address
      </button>
      <button
        disabled={!buyerInfo}
        onClick={handleSubmit}
        className="yellow-button"
        type="submit"
      >
        Continue to payment
      </button>
    </form>
  );
}
export default OrderForm;
