import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

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
        path: ":category",
        element: <CategoryPage />,
        children: [
          {
            path: ":productId",
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: "login",
        element: <h2 style={{ paddingTop: "5em" }}>Login</h2>,
      },
      {
        path: "register",
        element: <h2 style={{ paddingTop: "5em" }}>Register</h2>,
      },
      {
        path: "cart",
        element: <h2 style={{ paddingTop: "5em" }}>Cart</h2>,
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
