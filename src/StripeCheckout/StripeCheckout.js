import "./StripeCheckout.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "../Components/CheckoutForm/CheckoutForm";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");

  const appearence = {
    theme: "stripe",
    variables: {
      colorPrimary: "#e19b05",
      colorText: "#545454",
    },
  };

  const options = {
    clientSecret,
    appearence,
  };

  useEffect(() => {
    fetchClientSecret();
  }, []);

  function fetchClientSecret() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const buyer = JSON.parse(localStorage.getItem("buyer"));

    axios
      .post("/api/payment", { cartItems: cart, buyer })
      .then((response) => {
        const { secretKey } = response.data;

        setClientSecret(secretKey);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container order-payment  ">
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      ) : (
        <CircularProgress style={{ backgroundColor: "none" }} />
      )}
    </div>
  );
}
export default StripeCheckout;
