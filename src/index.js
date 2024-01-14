import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import OrderPage from "./pages/OrderPage/OrderPage";
import UserPage from "./pages/UserPage/UserPage";
import MyListings from "./pages/MyListings/MyListings";
import MyPostDetail from "./pages/MyPostDetail/MyPostDetail";
import { CartProvider } from "./context/CartContext";
import UserProvider from "./context/UserContext";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },

      {
        path: "categories/:category",
        element: <CategoryPage />,
      },

      {
        path: "categories/:category/:productId",
        element: <ProductDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "user-page",
        element: <UserPage />,
      },
      {
        path: "my-listings",
        element: <MyListings />,
      },
      {
        path: "my-listings/:myPostId",
        element: <MyPostDetail />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "cart/order",
        element: <OrderPage />,
      },
      {
        path: "cart/order/payment",
        element: <CheckoutPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
