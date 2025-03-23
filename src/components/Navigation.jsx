import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav className="nav main-menu">
            <ul className="navigation">
              <li className="current dropdown"><Link to="/">Home</Link>
                <ul>
                  <li><Link to="/">Home page 01</Link></li>
                  <li><Link to="/index-2">Home page 02</Link></li>
                  <li><Link to="/index-3">Home page 03</Link></li>
                  <li><Link to="/index-4">Home page 04</Link></li>
                  <li><Link to="/index-5">Home page 05</Link></li>
                </ul>
              </li>
        <li className="dropdown">
          <Link to="#">Pages</Link>
          <ul>
            <li><Link to="/page-about">About</Link></li>
            <li className="dropdown">
              <Link to="#">Team</Link>
              <ul>
                <li><Link to="/page-team">Team List</Link></li>
                <li><Link to="/page-team-details">Team Details</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="#">Shop</Link>
              <ul>
                <li><Link to="/shop-products">Products</Link></li>
                <li><Link to="/shop-products-sidebar">Products with Sidebar</Link></li>
                <li><Link to="/shop-product-details">Product Details</Link></li>
                <li><Link to="/shop-cart">Cart</Link></li>
                <li><Link to="/shop-checkout">Checkout</Link></li>
              </ul>
            </li>
            <li><Link to="/page-testimonial">Testimonial</Link></li>
            <li><Link to="/page-pricing">Pricing</Link></li>
            <li><Link to="/page-faq">FAQ</Link></li>
            <li><Link to="/page-404">Page 404</Link></li>
          </ul>
        </li>
              <li className="dropdown"><Link to="#">Services</Link>
                <ul>
                  <li><Link to="/page-services">Services</Link></li>
                  <li><Link to="/page-service-details">Services Details</Link></li>
                </ul>
              </li>
              <li className="dropdown"><Link to="#">Projects</Link>
                <ul>
                  <li><Link to="/page-projects">Projects List</Link></li>
                  <li><Link to="/page-project-details">Project Details</Link></li>
                </ul>
              </li>
              <li className="dropdown"><Link to="#">Blog</Link>
                  <ul>
                    <li><Link to="/news-grid">News Grid</Link></li>
                    <li><Link to="/news-details">News Details</Link></li>
                  </ul>
                <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div></li>
              <li><Link to="/page-contact">Contact</Link></li>
            </ul>
      </nav>
    );
}

export default Navigation;
