import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setVisible(currentScroll < lastScroll);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary ${style.navbar} ${visible ? style.show : style.hide}`}
      >
        <div
          className={`container flex justify-between items-center ${style.navbarContainer}`}
        >
          <div
            className={` w-[100%]  flex items-center  ${isOpen ? " flex-row justify-between " : "flex-row  justify-between"}  `}
          >
            <div className={` w-[100%] flex justify-content-center ${style.logo} `}>
              <Link className={`${style.logo}`} to="/">
                DevHub.
              </Link>
            </div>

            <button
              className="navbar-toggler h-[40%] !border-0"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="navbar-toggler-icon !border-0"></span>
            </button>
          </div>

          <div className={`${isOpen ? "d-block" : "d-none"} w-[100%] d-lg-flex `}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  w-[100%] flex justify-center ">
              <li className="nav-item">
                <Link className="nav-link active  text-center" to="/">
                  Shop All
                </Link>
              </li>

              <li className="nav-item text-center">
                <Link className="nav-link" to="/story">
                  Our Story
                </Link>
              </li>

              <li className="nav-item text-center">
                <Link className="nav-link" to="/gift">
                  Gift Card
                </Link>
              </li>

              <li className="nav-item text-center">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
