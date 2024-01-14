import "./StripeCheckout.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "../Components/CheckoutForm/CheckoutForm";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import useErrorMessage from "../hooks/useErrorMessage";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");

  const options = {
    clientSecret,
  };

  const { ErrorMessageElement, setErrorMessage } = useErrorMessage();
  const [isData, setIsData] = useState(false);

  const cart = JSON.parse(localStorage.getItem("cart"));
  const buyer = JSON.parse(localStorage.getItem("buyer"));

  useEffect(() => {
    if (cart && buyer && cart.length > 0) {
      fetchClientSecret();
      setIsData(true);
    } else {
      setErrorMessage("No items in the cart or buyer information provided");
    }

    return () => {
      localStorage.removeItem("buyer");
    };
  }, []);

  function fetchClientSecret() {
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
      ) : isData ? (
        <CircularProgress style={{ backgroundColor: "none" }} />
      ) : (
        ErrorMessageElement
      )}
    </div>
  );
}
export default StripeCheckout;
