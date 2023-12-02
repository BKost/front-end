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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <h2 className="text-align-center" style={{ paddingTop: "5em" }}>
            Home
          </h2>
        ),
      },

      {
        path: "categories/:category",
        element: <CategoryPage />,
        // children: [
        //   {
        //     path: ":productId",
        //     element: <ProductDetail />,
        //   },
        // ],
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
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "cart/order",
        element: <OrderPage />,
      },
    ],
  },
  // {
  //   path: "/electronics",
  //   element: <CategoryPage />,
  // },
  // {
  //   path: "/register",
  //   element: <h1 style={{ paddingTop: "5em" }}>Register</h1>,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
