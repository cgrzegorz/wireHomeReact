import React from "react";
import { Link } from "react-router-dom";
import ProjectThumb1 from "../../assets/images/resource/project-thumb-1.jpg";
import ProjectThumb2 from "../../assets/images/resource/project-thumb-2.jpg";
import ProjectThumb3 from "../../assets/images/resource/project-thumb-3.jpg";
import ProjectThumb4 from "../../assets/images/resource/project-thumb-4.jpg";
import ProjectThumb5 from "../../assets/images/resource/project-thumb-5.jpg";
import ProjectThumb6 from "../../assets/images/resource/project-thumb-6.jpg";

function Footer({ className }) {
  return (
    <>
      <footer className={`main-footer ${className || ""}`}>
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              <div className="footer-column col-lg-3 col-sm-6">
                <div className="footer-widget about-widget">
                  <h5 className="about-title">O nas</h5>
                  <div className="text">
                    Desires to obtain pain of itself, because it is pain, but
                    occasionally circumstances.
                  </div>
                  <ul className="social-icon-two">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-column col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h5 className="widget-title">Przeglądaj</h5>
                  <ul className="user-links">
                    <li>
                      <Link to="#">Blog</Link>
                    </li>
                    <li>
                      <Link to="#">Kontakt</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-column col-lg-3 col-sm-6">
                <div className="footer-widget contact-widget">
                  <h5 className="widget-title">Kontakt</h5>
                  <div className="widget-content">
                    <div className="text">
                      66 Road Broklyn Street, 600 New <br /> York, USA
                    </div>
                    <ul className="contact-info">
                      <li>
                        <i className="fa fa-envelope"></i>{" "}
                        <Link to="mailto:biuro@wirehome.pl">
                          biuro@wirehome.pl
                        </Link>
                        <br />
                      </li>
                      <li>
                        <i className="fa fa-phone-square"></i>{" "}
                        <Link to="tel:+001112223333">+48 509 898 316</Link>
                        <br />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
