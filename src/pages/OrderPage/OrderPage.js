import OrderForm from "../../Components/OrderForm/OrderForm";
import "./OrderPage.css";

import useErrorMessage from "../../hooks/useErrorMessage";
import { useEffect, useState } from "react";

function OrderPage() {
  const { ErrorMessageElement, setErrorMessage } = useErrorMessage();

  const [isCart, setIsCart] = useState(false);

  const cart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    if (!cart || cart.length < 1) {
      setErrorMessage("You have no items in shopping cart");
    } else {
      setIsCart(true);
    }
  }, []);

  return (
    <section className="consistent-padding ">
      <h2 className="text-align-center">Order Page</h2>
      {isCart ? <OrderForm /> : ErrorMessageElement}
    </section>
  );
}
export default OrderPage;
