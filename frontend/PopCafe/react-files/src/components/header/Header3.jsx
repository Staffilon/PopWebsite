import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";
const initialState = {
  activeMenu: "",
  mobileMenuState: false,
  navState: false,
  scrollY: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "homeOne":
      return { ...state, activeMenu: "homeOne" };
    case "suits":
      return { ...state, activeMenu: "suits" };
    case "blog":
      return { ...state, activeMenu: "blog" };
    case "menu":
      return { ...state, activeMenu: "menu" };
    case "gallary":
      return { ...state, activeMenu: "gallary" };
    case "shop":
      return { ...state, activeMenu: "shop" };
    case "chef":
      return { ...state, activeMenu: "chef" };
    case "pages":
      return { ...state, activeMenu: "pages" };
    case "mobileMenu":
      return { ...state, mobileMenuState: action.isMobileMenu };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      throw new Error();
  }
}
function Header3() {
  const currentRoute = useRouter().pathname;
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);

  // handle header sticky
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={
          state.scrollY > 10
            ? "sticky header-area style-3"
            : "header-area style-3"
        }
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="header-logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  alt="image"
                  className="img-fluid"
                  src="assets/images/header2-logo.svg"
                />
              </a>
            </Link>
          </div>
          <div
            className={
              state.mobileMenuState == true
                ? "main-menu show-menu"
                : "main-menu"
            }
          >
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link href="/" legacyBehavior>
                  <a>
                    <img alt="image" src="assets/images/header2-logo.svg" />
                  </a>
                </Link>
              </div>
              <div
                className="menu-close-btn"
                onClick={() =>
                  dispatch({ type: "mobileMenu", isMobileMenu: false })
                }
              >
                <i className="bi bi-x-lg" />
              </div>
            </div>
            <ul className="menu-list">
            <li>
                <Link
                  href="/index"
                  className={currentRoute === "/index" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={currentRoute === "/shop-details" ? "active" : ""}
                >
                  Servizi
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={currentRoute === "/about" ? "active" : ""}
                >
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link
                  href="/menu2"
                  className={currentRoute === "/menu2" ? "active" : ""}
                >
                  Menu
                </Link>
              </li>
             
            <li>
                <Link
                  href="/contact"
                  className={currentRoute === "/contact" ? "active" : "disable"}
                >
                  Contatti
                </Link>
              </li>
            </ul>
          
            <div className="reservation-btn d-lg-none d-flex">
              <Link href="/reservation" className="primary-btn4 btn-md">
                Prenota qui!
              </Link>
            </div>
          </div>
          <div className="nav-right d-flex jsutify-content-end align-items-center">
            
            <Link href="/reservation" legacyBehavior>
              <a className="primary-btn6 btn-md">Prenota qui!</a>
            </Link>
            <div
              className="sidebar-button mobile-menu-btn "
              onClick={() =>
                dispatch({ type: "mobileMenu", isMobileMenu: true })
              }
            >
              <i className="bi bi-list" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header3;
