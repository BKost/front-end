import "./LoginForm.css";

function LoginForm() {
  return (
    <form
      onClick={(e) => e.preventDefault()}
      className="container login-form "
      action="POST"
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
                value="kosturik.bohdan@gmail.com"
              />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="password">Password</label>
              <input name="password" type="text" value="12345" />
            </div>
          </li>
        </ul>
      </section>

      <button type="submit">Log in</button>
    </form>
  );
}
export default LoginForm;
