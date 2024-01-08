import "./RegisterForm.css";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useErrorMessage from "../../hooks/useErrorMessage";
import axios from "axios";

function RegisterForm() {
  const formRef = useRef(null);
  const navigate = useNavigate(null);

  const { setErrorMessage, ErrorMessageElement } = useErrorMessage();

  async function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formRef.current);

    const formData = new FormData(formRef.current);

    const formDataObj = Object.fromEntries(formData);

    const {
      user_name,
      first_name,
      last_name,
      phone,
      password,
      confirm_password,
      email,
      city,
      postal_code,
      street_name,
      street_number,
    } = formDataObj;

    const data = {
      user_name,
      last_name,
      first_name,
      phone,
      password,
      confirm_password,
      email,
      address: {
        city,
        postal_code,
        street_name,
        street_number,
      },
    };

    try {
      const response = await axios.post("/register", data);
      console.log(response);

      navigate("/login");
    } catch (error) {
      const { msg } = error.response.data;

      setErrorMessage(msg);

      console.log(msg);
    }
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      className="container register-form "
      action="post"
      id="register-form"
      ref={formRef}
    >
      <section>
        <h3>Your user name</h3>

        <ul className="register-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="user_name_register">User name *</label>
              <input
                // required
                name="user_name"
                type="text"
                defaultValue="Bohdan"
              />
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3>Contact information</h3>

        <ul className="register-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="first_name">First Name *</label>
              <input
                // required
                id="first_name"
                name="first_name"
                type="text"
                defaultValue="Bohdan"
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="last_name">Last Name *</label>
              <input
                // required
                name="last_name"
                type="text"
                defaultValue="Kosturik"
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="phone">Phone number *</label>
              <input
                // required
                name="phone"
                type="tel"
                defaultValue="0951670272"
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="email">E-mail *</label>
              <input
                // required
                name="email"
                type="text"
                defaultValue="kosturik.bohdan@gmail.com"
              />
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3>Password</h3>

        <ul className="register-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="password">Password *</label>
              <input
                // required
                name="password"
                type="text"
                defaultValue="12345"
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              <label htmlFor="confirm_password">Confirm password *</label>
              <input
                // required
                name="confirm_password"
                type="text"
                defaultValue="12345"
              />
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3>Address</h3>

        <ul className="register-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="street_name">Street name</label>
              <input name="street_name" type="text" />
            </div>
          </li>
          <li>
            <div className="input-container">
              <label htmlFor="street_number">Street number</label>
              <input name="street_number" type="text" />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="city">City</label>
              <input name="city" type="text" />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="postal_code">Postal code</label>
              <input name="postal_code" type="text" />
            </div>
          </li>
        </ul>
      </section>
      {/* {errorMessage && (
        <p className="error-message text-align-center">{errorMessage} !</p>
      )} */}
      {ErrorMessageElement}
      <button className="register-btn" type="submit">
        Create account
      </button>
    </form>
  );
}
export default RegisterForm;
