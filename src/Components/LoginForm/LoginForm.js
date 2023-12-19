import "./LoginForm.css";
import customFetch from "../../utils/customFetch";
import { useRef } from "react";

function LoginForm() {
  const formRef = useRef(null);

  async function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formRef.current);

    const formData = new FormData(formRef.current);

    const formDataObj = Object.fromEntries(formData);

    // const {
    //   password,

    //   email,
    // } = formDataObj;

    console.log(formDataObj);

    try {
      const response = await customFetch.post("/login", formDataObj);
      console.log(response);
    } catch (error) {
      const errData = error.response.data;
      console.log(error);
      console.log(errData);
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
              <label htmlFor="email">E-mail</label>
              <input
                name="email"
                type="text"
                defaultValue="kosturik.bohdan@gmail.com"
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="password">Password</label>
              <input name="password" type="text" defaultValue="12345" />
            </div>
          </li>
        </ul>
      </section>

      <button className="blue-button" type="submit">
        Log in
      </button>
    </form>
  );
}
export default LoginForm;
