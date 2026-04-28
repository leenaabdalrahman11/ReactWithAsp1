import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setVisible(currentScroll < lastScroll || currentScroll < 10);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [location.pathname]);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary w-full ${style.navbar} ${
        visible ? style.show : style.hide
      }`}
    >
      <div className={`${style.navbarContainer} w-full px-3 px-md-4 px-lg-5`}>
        <div className="w-full flex flex-col gap-3 py-3">
          {/* Top Row */}
          <div className="w-full flex items-center justify-between gap-3">
            {/* Left side */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/search"
                className="text-[#bc4c2a] text-base sm:text-lg hover:opacity-70 transition no-underline"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>

              {/* Burger Menu - mobile only */}
              <button
                className="d-lg-none border-0 bg-transparent text-[#bc4c2a] text-xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i
                  className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}
                ></i>
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <Link
                to="/"
                className={`${style.logo} text-[#bc4c2a] !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl italic no-underline text-center`}
              >
                DevHub.
              </Link>
            </div>

            {/* Right side */}
            <div className="flex items-center justify-end gap-3 sm:gap-5 md:gap-6 shrink-0">
              <Link
                to="/cart"
                className="text-[#bc4c2a] text-sm sm:text-base lg:text-lg hover:opacity-70 transition no-underline whitespace-nowrap"
              >
                Cart
              </Link>

              {token ? (
                <button
                  className="!text-[#bc4c2a] text-sm sm:text-base lg:text-lg hover:opacity-70 transition no-underline bg-transparent border-0 p-0 whitespace-nowrap"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              ) : (
                <Link
                  className="!text-[#bc4c2a] text-sm sm:text-base lg:text-lg hover:opacity-70 transition no-underline whitespace-nowrap"
                  to="/login"
                >
                  Log In
                </Link>
              )}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="d-none d-lg-block w-full">
            <ul className="navbar-nav w-full flex justify-center items-center gap-4 m-0">
              <li className="nav-item text-center">
                <Link className="nav-link px-2 px-md-3" to="/">
                  Shop All
                </Link>
              </li>

              <li className="nav-item text-center">
                <Link className="nav-link px-2 px-md-3" to="/ourStory">
                  Our Story
                </Link>
              </li>

              <li className="nav-item text-center">
                <Link className="nav-link px-2 px-md-3" to="/ourCraft">
                  Our Craft
                </Link>
              </li>

              <li className="nav-item text-center">
                <Link className="nav-link px-2 px-md-3" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className={`${isOpen ? "block" : "hidden"} d-lg-none w-full`}>
            <ul className="navbar-nav w-full flex flex-col justify-center items-center gap-2 m-0 pt-2">
              <li className="nav-item text-center w-full">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setIsOpen(false)}
                >
                  Shop All
                </Link>
              </li>

              <li className="nav-item text-center w-full">
                <Link
                  className="nav-link"
                  to="/ourStory"
                  onClick={() => setIsOpen(false)}
                >
                  Our Story
                </Link>
              </li>

              <li className="nav-item text-center w-full">
                <Link
                  className="nav-link"
                  to="/ourCraft"
                  onClick={() => setIsOpen(false)}
                >
                  Our Craft
                </Link>
              </li>

              <li className="nav-item text-center w-full">
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
