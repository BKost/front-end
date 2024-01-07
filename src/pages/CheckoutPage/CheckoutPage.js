import StripeCheckout from "../../StripeCheckout/StripeCheckout";
import "./CheckoutPage.css";

function CheckoutPage() {
  return (
    <section className="consistent-padding">
      <h2 className="text-align-center">Payment</h2>

      <StripeCheckout />
    </section>
  );
}
export default CheckoutPage;
