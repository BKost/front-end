import StripeCheckout from "../../StripeCheckout/StripeCheckout";
import "./CheckoutPage.css";

function CheckoutPage() {
  return (
    <section className="consistent-padding">
      <h2 className="text-align-center">Payment</h2>
      <p className="text-align-center">
        {" "}
        <a
          className="testing-card-link "
          target="_blank"
          href="https://stripe.com/docs/testing"
        >
          Find a testing cart
        </a>
      </p>

      <StripeCheckout />
    </section>
  );
}
export default CheckoutPage;
