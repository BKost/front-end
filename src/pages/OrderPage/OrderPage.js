import "./OrderPage.css";

function OrderPage() {
  // form
  // first name, last name
  // Contact: address, phone, email
  // I agree field

  return (
    <section className="consistent-padding ">
      <h2 className="text-align-center">Order Page</h2>
      <form className="container order-form " action="POST">
        <section>
          <h3>Contact information</h3>

          <ul className="form-ul ">
            <li>
              <div className="input-container">
                <label htmlFor="first_name">First Name</label>
                <input name="first_name" type="text" value="Bohdan" />
              </div>
            </li>
            <li>
              <div className="input-container">
                {" "}
                <label htmlFor="last_name">Last Name</label>
                <input name="last_name" type="text" value="Kosturik" />
              </div>
            </li>
            <li>
              <div className="input-container">
                {" "}
                <label htmlFor="last_name">Phone number</label>
                <input name="last_name" type="tel" value="0951670272" />
              </div>
            </li>
            <li>
              <div className="input-container">
                {" "}
                <label htmlFor="last_name">E-mail</label>
                <input
                  name="last_name"
                  type="text"
                  value="kosturik.bohdan@gmail.com"
                />
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h3>Address</h3>

          <ul className="form-ul ">
            <li>
              <div className="input-container">
                <label htmlFor="first_name">Street name</label>
                <input name="first_name" type="text" value="Armegatan " />
              </div>
            </li>
            <li>
              <div className="input-container">
                <label htmlFor="first_name">Street number</label>
                <input name="first_name" type="text" value="32" />
              </div>
            </li>
            <li>
              <div className="input-container">
                {" "}
                <label htmlFor="last_name">City</label>
                <input name="last_name" type="text" value="Stockholm" />
              </div>
            </li>
            <li>
              <div className="input-container">
                {" "}
                <label htmlFor="last_name">Postal code</label>
                <input name="last_name" type="text" value="171 71" />
              </div>
            </li>
          </ul>
        </section>
      </form>
    </section>
  );
}
export default OrderPage;
