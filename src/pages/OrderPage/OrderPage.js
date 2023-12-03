import OrderForm from "../../Components/OrderForm/OrderForm";
import OrderPayment from "../../OrderPayment/OrderPayment";
import "./OrderPage.css";

function OrderPage() {
  // form
  // first name, last name
  // Contact: address, phone, email
  // I agree field

  return (
    <section className="consistent-padding ">
      <h2 className="text-align-center">Order Page</h2>
      <OrderForm />
      <OrderPayment />
    </section>
  );
}
export default OrderPage;
