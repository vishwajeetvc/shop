import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashBoard from "./pages/admin/AdminDashBoard.jsx";
import NewCustomer from "./pages/newCustomer/NewCustomer.jsx";
import { Order } from "./pages/order/Order.jsx";
import ShowOrder from "./pages/showOrder/ShowOrder.jsx";
import Login from "./pages/admin/auth/login.jsx";
import Home from "./pages/home/Home.jsx";
import ShowCustumerDetail from "./pages/showCustomerDetail/ShowCustomerDetail.jsx";
import MeasurementList from "./pages/measurementList/MeasurementList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: "/showorder",
        element: <ShowOrder/>,
      },
      {
        path: "/login",
        element:<Login />
      },
      {
        path: "/showCustumerDetail",
        element: <ShowCustumerDetail />,
      },
      {
        path: "/measurementlist",
        element: <MeasurementList />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
