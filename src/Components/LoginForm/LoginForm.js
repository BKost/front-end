import "./LoginForm.css";
import customFetch from "../../utils/customFetch";
import { useRef } from "react";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import useErrorMessage from "../../hooks/useErrorMessage";

function LoginForm() {
  const { setIsLoggedIn, isLoggedIn } = useUserContext();
  const formRef = useRef(null);

  const navigate = useNavigate();

  const { setErrorMessage, ErrorMessageElement } = useErrorMessage();

  async function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formRef.current);

    const formData = new FormData(formRef.current);

    const formDataObj = Object.fromEntries(formData);

    try {
      const response = await axios.post("/api/login", formDataObj);
      // const { user_name } = response.data;
      setIsLoggedIn(true);
      // localStorage.setItem("userName", JSON.stringify({ user_name }));
      navigate("/");
      // console.log(response);
    } catch (error) {
      const { msg } = error.response.data;
      setErrorMessage(msg);
      // console.log(errData);
    }

    // Create object with address:{} property
    // Send to register

    // console.log(formDataObj);
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="container login-form "
      action="POST"
      ref={formRef}
    >
      <section>
        <h3>Provide credentials</h3>

        <ul className="login-form-ul ">
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="email">E-mail *</label>
              <input
                required
                name="email"
                type="text"
                defaultValue="kosturik.bohdan@gmail.com"
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="password">Password *</label>
              <input
                required
                name="password"
                type="text"
                defaultValue="12345"
              />
            </div>
          </li>
        </ul>
      </section>

      {ErrorMessageElement}

      <button className="blue-button" type="submit">
        Log in
      </button>
    </form>
  );
}
export default LoginForm;
