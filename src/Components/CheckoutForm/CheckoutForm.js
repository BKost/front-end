// import "./CheckoutForm.css";

import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const clientSecret = props.clientSecretKey;

  useEffect(() => {
    if (!stripe) {
      console.log("Stripe hasnt loaded yet");

      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      console.log("Client secret hasnt loaded yet");

      return;
    }

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      })
      .catch((err) => console.log(err, "Retrieve payment error"));
  }, [stripe]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe || elements hasnt loaded yet");
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/cart/order",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);

      console.log(error.message, "card or validation err");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <h3>{message}</h3>
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
    </form>
  );
}

export default CheckoutForm;
