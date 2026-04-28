import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/user/home/Home";
import Layout from "../layouts/Layout";
import Products from "../components/user/products/Products";
import Collection from "../pages/user/collection/Collection";
import ProductDetails from "../pages/productDetails/ProductDetails";
import OurStory from "../pages/user/Our/OurStory";
import OurCraft from "../pages/user/Our/OurCraft";
import Contact from "../pages/user/contact/Contact";
import Search from "../components/user/search/Search";
import Register from "../pages/user/register/Register";
import Login from "../pages/user/login/Login";
import Cart from "../pages/user/cart/Cart";
import CheckOut from "../pages/user/checkout/CheckOut";
import ResetPassword from "../pages/user/login/ResetPassword";
import PaymentSuccess from "../pages/user/checkout/PaymentSuccess";
import PaymentCancel from "../pages/user/checkout/PaymentCancel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Collection />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/ourStory",
        element: <OurStory />,
      },
      {
        path: "/ourCraft",
        element: <OurCraft />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/register",
        element:<Register />
      },
      {
        path:"/login",
        element:<Login />
      },{
        path:"/cart",
        element:<Cart />
      },{
        path:"/checkout",
        element:<CheckOut />
      },{
        path:"/reset-password",
        element:<ResetPassword />
      },{
        path:"/payment-success",
        element:<PaymentSuccess />
      },{
        path:"/payment-cancel",
        element:<PaymentCancel />
      }
    ],
  },
]);
