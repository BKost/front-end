import "./StripeCheckout.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "../Components/CheckoutForm/CheckoutForm";
import axios from "axios";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");

  const options = {
    // passing the client secret obtained from the server
    clientSecret,
  };

  useEffect(() => {
    fetchClientSecret();
  }, []);

  function fetchClientSecret() {
    axios
      .post("/api/payment", { cartItems: [1, 2, 3] })
      .then((response) => {
        const { secretKey } = response.data;
        setClientSecret(secretKey);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container order-payment  ">
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
export default StripeCheckout;
