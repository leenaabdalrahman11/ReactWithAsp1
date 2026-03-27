import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/user/home/Home";
import Layout from "../layouts/Layout";
import Products from "../components/user/products/Products";
import Collection from "../pages/user/collection/Collection";
import ProductDetails from "../pages/productDetails/ProductDetails";
import OurStory from "../pages/user/Our/OurStory";
import OurCraft from "../pages/user/Our/OurCraft";



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
                path:"/ourStory",
                element:<OurStory />,
            },
            {
                path:"/ourCraft",
                element:<OurCraft />
            }
        ],
    }
]);