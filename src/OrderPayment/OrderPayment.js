import "./OrderPayment.css";

// import StripeLogo from "../images/StripeLogo.svg";
import { PaymentElement } from "@stripe/react-stripe-js";

function OrderPayment() {
  return (
    <form className="container order-payment  ">
      <h3>Payment</h3>
      <PaymentElement />
      <button>Submit payment</button>
    </form>
  );
}
export default OrderPayment;
