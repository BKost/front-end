import "./CheckoutForm.css";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { setCartItems } = useContext(CartContext);

  function sendOrderConfirmationEmail(amount) {
    const buyerInfo = JSON.parse(localStorage.getItem("buyer"));

    console.log(buyerInfo);

    const orderData = { buyerInfo, amount: amount };

    axios
      .post("/api/payment/email", orderData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  function deleteCartDB() {
    axios
      .delete("/api/shopping-cart/delete-cart")
      .then((response) => {
        console.log(response);
        resetStorage();
      })
      .catch((err) => console.log(err));
  }

  function resetStorage() {
    localStorage.removeItem("cart");
    localStorage.removeItem("buyer");
    localStorage.removeItem("total");
    setCartItems([]);
  }

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
            deleteCartDB();
            sendOrderConfirmationEmail(paymentIntent.amount);
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
        return_url:
          // "https://secret-brushlands-05503-5bd21a253d4c.herokuapp.com/cart/order/payment",
          "http://localhost:3000/cart/order/payment",
      },
    });

    if (error) {
      console.log(error);
      return setMessage("An unexpected error occurred.");
    }

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);

      console.log(error.message, "card or validation err");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  }

  return (
    <form className="payment-form" id="payment-form" onSubmit={handleSubmit}>
      <h3 className="text-align-center">{message}</h3>

      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}

export default CheckoutForm;
