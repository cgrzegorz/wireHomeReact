import React from "react";
import { Link } from "react-router-dom";
import CtaImg from "../../assets/images/logo.png";
import CtaBgImg from "../../assets/images/pattern/shape-30.png";

function Cta({ className }) {
  return (
    <>
      <section className={`call-to-action ${className || ""}`}>
        <div
          className="cat-shape-image"
          style={{ backgroundImage: `url(${CtaBgImg})` }}
        />
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="image-column col-xl-5 col-lg-4">
              <figure className="image mb-0" style={{ maxWidth: "97px" }}>
                <img src={CtaImg} alt="" />
              </figure>
            </div>
            <div className="col-xl-7 col-lg-8">
              <div className="outer-box">
                <div className="title-box">
                  <h3 className="title">
                    Bezpłatna konsultacja Twojej instalacji elektrycznej
                  </h3>
                </div>
                <div className="btn-box">
                  <Link
                    to="/page-contact"
                    className="theme-btn btn-style-one hvr-light"
                  >
                    <span className="btn-title">Umów konsultację</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
