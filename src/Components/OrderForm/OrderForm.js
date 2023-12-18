import "./OrderForm.css";

function OrderForm() {
  return (
    <form
      onClick={(e) => e.preventDefault()}
      className="container order-form "
      action="POST"
    >
      <section>
        <h3>Contact information</h3>

        <ul className="order-form-ul ">
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
      </section>
      <section>
        <h3>Address</h3>

        <ul className="order-form-ul ">
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
      </section>

      <button className="blue-button" type="submit">
        Continue to payment
      </button>
    </form>
  );
}
export default OrderForm;