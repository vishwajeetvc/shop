import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashBoard from "./pages/admin/AdminDashBoard.jsx";
import NewDialog from "./pages/NewDialog.jsx";
import NewCustomer from "./pages/newCustumer/NewCustomer.jsx";
import { Order } from "./pages/order/Order.jsx";
import ShowOrder from "./pages/showOrder/ShowOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: "/account",
        element: <div>Account</div>,
      },
      {
        path: "/dashboard",
        element: <AdminDashBoard />,
      },
      {
        path: "/newcustomer",
        element: <NewCustomer />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/newdialog",
        element: <NewDialog />,
      },
      {
        path: "/showorder",
        element: <ShowOrder/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
