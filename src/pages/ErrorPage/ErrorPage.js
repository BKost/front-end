import "./ErrorPage.css";

import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage(props) {
  const error = useRouteError();

  return (
    <section className="error-page">
      <div className="error-container">
        <h2 className="text-align-center">Something went wrong !</h2>
        <h3 className="error-message text-align-center ">
          {props.message || error.statusText || error.message}
        </h3>
        <ul className="error-ul ">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Log in</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default ErrorPage;
