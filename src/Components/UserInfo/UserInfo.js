import "./UserInfo.css";

function UserInfo() {
  return (
    <form
      onClick={(e) => e.preventDefault()}
      className="container user-info-form"
      action="POST"
    >
      <section>
        <h3>User profile</h3>
        <ul className="user-info-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="first_name">User name</label>
              <input name="first_name" type="text" defaultValue="User123" />
            </div>
          </li>
        </ul>
        <button className="user-info-edit-btn blue-button" type="submit">
          Edit
        </button>
      </section>
      <section>
        <h3>Contact information</h3>

        <ul className="user-info-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="first_name">First Name</label>
              <input name="first_name" type="text" defaultValue="Bohdan" />
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
              <label htmlFor="last_name">Phone number</label>
              <input name="last_name" type="tel" defaultValue="0951670272" />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="last_name">E-mail</label>
              <input
                name="last_name"
                type="text"
                defaultValue="kosturik.bohdan@gmail.com"
              />
            </div>
          </li>
        </ul>
        <button className="user-info-edit-btn blue-button" type="submit">
          Edit
        </button>
      </section>
      <section>
        <h3>Password</h3>

        <ul className="user-info-form-ul ">
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
        <button className="user-info-edit-btn blue-button" type="submit">
          Edit
        </button>
      </section>
      <section>
        <h3>Address</h3>

        <ul className="user-info-form-ul ">
          <li>
            <div className="input-container">
              <label htmlFor="first_name">Street name</label>
              <input name="first_name" type="text" defaultValue="Armegatan " />
            </div>
          </li>
          <li>
            <div className="input-container">
              <label htmlFor="first_name">Street number</label>
              <input name="first_name" type="text" defaultValue="32" />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="last_name">City</label>
              <input name="last_name" type="text" defaultValue="Stockholm" />
            </div>
          </li>
          <li>
            <div className="input-container">
              {" "}
              <label htmlFor="last_name">Postal code</label>
              <input name="last_name" type="text" defaultValue="171 71" />
            </div>
          </li>
        </ul>
        <button className="user-info-edit-btn blue-button" type="submit">
          Edit
        </button>
      </section>

      {/* <button type="submit">Edit</button> */}
    </form>
  );
}
export default UserInfo;
