import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/images/logo.png";
import Stickylogo from "../../assets/images/logo-2.png";
import Navigation from "../Navigation.jsx";
import MobileMenu from "../MobileMenu.jsx";

function Header({ className = "", scroll = false }) {
  const [menuState, setMenuState] = useState({
    isMobileMenuOpen: false,
    isSearchPopupOpen: false,
  });
  const isSticky = true;

  const toggleMenu = useCallback((menuType) => {
    setMenuState((prev) => ({
      ...prev,
      [menuType]: !prev[menuType],
    }));
  }, []);

  const closeMenu = useCallback((menuType) => {
    setMenuState((prev) => ({
      ...prev,
      [menuType]: false,
    }));
  }, []);

  return (
    <header className={`main-header header-style-four ${className || ""}`}>
      <div
        className={`mobile-menu ${menuState.isMobileMenuOpen ? "open" : ""}`}
      >
        <div
          className="menu-backdrop"
          onClick={() => closeMenu("isMobileMenuOpen")}
        />

        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link to="/">
                <img src={logo1} alt="" />
              </Link>
            </div>
            <div
              className="close-btn"
              onClick={() => closeMenu("isMobileMenuOpen")}
            >
              <i className="icon fa fa-times"></i>
            </div>
          </div>

          <ul className="navigation clearfix">
            <MobileMenu />
          </ul>
          <ul className="contact-list-one">
            <li>
              <div className="text">
                <i className="icon lnr-icon-phone-handset"></i>{" "}
                <a href="tel:+48509898316">+48 509 898 316</a>
              </div>
            </li>
            <li>
              <div className="text">
                <i className="icon lnr-icon-envelope1"></i>
                <a href="mailto:help@company.com">biuro@wirehome.pl</a>
              </div>
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <Link to="https://www.facebook.com/wirehomesmart/">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`search-popup ${
          menuState.isSearchPopupOpen ? "active" : ""
        }`}
      >
        <span
          className="search-back-drop"
          onClick={() => closeMenu("isSearchPopupOpen")}
        />
        <button
          className="close-search"
          onClick={() => closeMenu("isSearchPopupOpen")}
        >
          <span className="fa fa-times"></span>
        </button>

        <div className="search-inner">
          <form method="get" action="/">
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                placeholder="Search..."
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={`sticky-header ${
          isSticky ? "fixed-header" : ""
        } animated slideInDown' : ''}`}
      >
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link to="/">
                <img src={Stickylogo} alt="" />
              </Link>
            </div>
            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                    <Navigation />
                  </ul>
                </div>
              </nav>

              {/* <!--Mobile Navigation Toggler--> */}
              <div
                className="mobile-nav-toggler"
                onClick={() => toggleMenu("isMobileMenuOpen")}
              >
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
