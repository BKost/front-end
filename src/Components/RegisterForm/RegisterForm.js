import "./RegisterForm.css";

// import { Form } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { useRef } from "react";

// export const action = async ({ request }) => {
//   console.log(request);

//   try {
//   } catch (error) {}

//   return null;
// };

function RegisterForm() {
  const formRef = useRef(null);

  async function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formRef.current);

    const formData = new FormData(formRef.current);

    const formDataObj = Object.fromEntries(formData);

    // Create object with address:{} property
    // Send to register

    console.log(formDataObj);
  }
  return (
    <form
      onClick={handleFormSubmit}
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
              <label htmlFor="user_name_register">User name</label>
              <input
                // id="user_name_register"
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
              <label htmlFor="first_name">First Name</label>
              <input
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
              <label htmlFor="last_name">Last Name</label>
              <input name="last_name" type="text" defaultValue="Kosturik" />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="phone">Phone number</label>
              <input name="phone" type="tel" defaultValue="0951670272" />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="email">E-mail</label>
              <input
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
              <label htmlFor="password">Password</label>
              <input name="password" type="text" defaultValue="12345 " />
            </div>
          </li>
          <li>
            <div className="input-container">
              <label htmlFor="confirm_password">Confirm password</label>
              <input name="confirm_password" type="text" defaultValue="12345" />
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
              <input name="street_name" type="text" defaultValue="Armegatan " />
            </div>
          </li>
          <li>
            <div className="input-container">
              <label htmlFor="street_number">Street number</label>
              <input name="street_number" type="text" defaultValue="32" />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="city">City</label>
              <input name="city" type="text" defaultValue="Stockholm" />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="postal_code">Postal code</label>
              <input name="postal_code" type="text" defaultValue="171 71" />
            </div>
          </li>
        </ul>
      </section>

      <button className="register-btn" type="submit">
        Create account
      </button>
    </form>
  );
}
export default RegisterForm;
