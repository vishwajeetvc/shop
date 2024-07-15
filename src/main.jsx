import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashBoard from "./components/pages/AdminDashBoard.jsx";
import NewDialog from "./components/pages/NewDialog.jsx";
import NewCustomer from "./components/pages/NewCustomer.jsx";

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
        element: <AdminDashBoard/>,
      },
      {
        path: "/newcustomer",
        element: <NewCustomer/>
      },
      {
        path: "/order",
        element: <div>Order</div>,
      },
      {
        path: "/newdialog",
        element: <NewDialog/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
