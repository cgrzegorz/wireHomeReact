// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Service1 from "../../assets/images/room1.webp";
import Service3 from "../../assets/images/resource/service1-3.webp";
import Service2 from "../../assets/images/smartCouple340.webp";

// eslint-disable-next-line react/prop-types
function Service({ className }) {
  return (
    <>
      <section id="services" className={`services-section ${className || ""}`}>
        <div className="icon-plane-2 bounce-y" />
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">CO OFERUJEMY</span>
            <h2>
              Nowoczesne i Niezawodne <br /> Usługi Elektryczne
            </h2>
          </div>
          <div className="row">
            <div className="service-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link to="/instalacje-elektryczne">
                      <img
                        src={Service1}
                        alt="Image"
                        style={{
                          width: "340px",
                          height: "202px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Link>
                  </figure>
                  <Link
                    to="/instalacje-elektryczne"
                    className="theme-btn read-more"
                  >
                    Więcej informacji <i className="fa fa-arrow-up"></i>
                  </Link>
                </div>
                <div className="content-box">
                  <div className="info-box">
                    {" "}
                    <i className="icon flaticon-028-pcb-board"></i>
                    <h4 className="title">
                      <Link to="/instalacje-elektryczne">
                        Instalacje Elektryczne
                      </Link>
                    </h4>
                  </div>
                  <div className="inner">
                    <div className="text">
                      We offer end-to-end logistics tailored for specific
                      markets. providing solution
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link to="/smart-dom">
                      <img
                        src={Service2}
                        alt="Image"
                        style={{
                          width: "340px",
                          height: "202px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Link>
                  </figure>
                  <Link to="/smart-dom" className="theme-btn read-more">
                    Więcej informacji <i className="fa fa-arrow-up"></i>
                  </Link>
                </div>
                <div className="content-box">
                  <div className="info-box">
                    {" "}
                    <i className="icon flaticon-029-electric-meter"></i>
                    <h4 className="title">
                      <Link to="/smart-dom">Systemy Smart Home</Link>
                    </h4>
                  </div>
                  <div className="inner">
                    <div className="text">
                      We offer end-to-end logistics tailored for specific
                      markets. providing solution
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link to="/pomiary-elektryczne">
                      <img
                        src={Service3}
                        alt="Image"
                        style={{
                          width: "340px",
                          height: "202px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Link>
                  </figure>
                  <Link
                    to="/pomiary-elektryczne"
                    className="theme-btn read-more"
                  >
                    Więcej informacji <i className="fa fa-arrow-up"></i>
                  </Link>
                </div>
                <div className="content-box">
                  <div className="info-box">
                    <i className="icon flaticon-050-protect"></i>
                    <h4 className="title">
                      <Link to="/pomiary-elektryczne">Pomiary Elektryczne</Link>
                    </h4>
                  </div>
                  <div className="inner">
                    <div className="text">
                      We offer end-to-end logistics tailored for specific
                      markets. providing solution
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
