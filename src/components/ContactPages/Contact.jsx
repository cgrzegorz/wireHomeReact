// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import BackToTop from "../BackToTop.jsx";
import Footer from "../HomeMain/Footer.jsx";
import PageTitle from "../PageTitle.jsx";
import Header from "../HomeMain/Header.jsx";
import contactBack from "../../assets/images/draw1830.webp";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <PageTitle title="Kontakt" />
      <section className="contact-details">
        <div className="container ">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="flex justify-center mb-10">
                <img
                  src={contactBack}
                  alt="imgu"
                  className="rounded-2xl shadow-lg max-w-full w-full md:w-3/4"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Potrzebujesz pomocy?</span>
                  <h2>Skontaktuj się z nami</h2>
                  <p className="text-lg max-w-3xl mx-auto mb-6">
                    Wybierając <strong>Wire Home</strong>, wybierasz pewność, że
                    Twoja instalacja działa bezpiecznie, nowocześnie i
                    bezawaryjnie. Zadbaj o to, co najważniejsze – spokojny dom,
                    niezawodna energia i komfort każdego dnia.
                  </p>
                  <div className="text">
                    Masz pytania dotyczące instalacji elektrycznej,
                    inteligentnego domu lub pomiarów? Chętnie doradzimy i
                    przygotujemy indywidualną ofertę dopasowaną do Twoich
                    potrzeb. Działamy na terenie województwa łódzkiego i
                    śląskiego – skontaktuj się z nami telefonicznie lub mailowo.
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li className="d-block d-sm-flex align-items-sm-center">
                    <div className="icon">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h6>Masz pytania?</h6>
                      <a href="tel:509898316">
                        <span>+48 509 898 316</span>
                      </a>
                    </div>
                  </li>
                  <li className="d-block d-sm-flex align-items-sm-center ">
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h6>Email</h6>
                      <a href="mailto:biuro@wirehome.pl">biuro@wirehome.pl</a>
                    </div>
                  </li>
                  <li className="d-block d-sm-flex align-items-sm-center ">
                    <div className="icon">
                      <span className="lnr-icon-home"></span>
                    </div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h6>Wieluń</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          className="map w-100"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d81996.24232744807!2d18.5684!3d51.2207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1711867770000!5m2!1spl!2spl"
        ></iframe>
      </section>
      <Footer />
      <BackToTop />
    </>
  );
}

export default Contact;
