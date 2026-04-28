import React from "react";
import Navbar from "../components/user/navbar/Navbar";
import Footer from "../components/user/footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}