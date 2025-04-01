// eslint-disable-next-line no-unused-vars
import React from "react";
import Accordion from "../../lib/Accordion";
import FaqImage from "../../assets/images/rozdzielnia720.webp";

function Faq({ className }) {
  return (
    <>
      <section className={`pt-5 mt-1 offer-section ${className || ""}`}>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12">
              <div className="inner-column">
                <div className="info-box">
                  <div className="inner">
                    <i className="icon flaticon-business-030-settings"></i>
                    <h3>
                      Najczęściej zadawane pytania <br />
                      elektryka bez tajemnic
                    </h3>
                  </div>
                </div>
                <Accordion />
              </div>
            </div>
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src={FaqImage} alt="Faq Img" />
                  </figure>
                  <div className="video-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
