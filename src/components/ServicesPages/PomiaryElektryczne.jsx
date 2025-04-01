// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import BackToTop from "../BackToTop.jsx";
import Footer from "../HomeMain/Footer.jsx";
import PageTitle from "../PageTitle.jsx";

import pomiaryImage from "../../assets/images/pomiary780.webp";
import Header from "../HomeMain/Header.jsx";

function PomiaryElektryczne(props) {
  const [showQues, setQues] = useState(1);
  const openQuestion = (value) => {
    setQues(value);
  };

  return (
    <>
      <Header />
      <PageTitle title="Pomiary Elektryczne" />
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="service-sidebar"></div>
            </div>
            <div className="col-lg-8">
              <div className="services-details__content">
                <img src={pomiaryImage} alt="Image" />
                <h3 className="mt-4">Pomiary elektryczne</h3>
                <p>
                  Pomiary elektryczne to kluczowy element zapewnienia
                  bezpieczeństwa użytkowania instalacji elektrycznej. Zarówno
                  nowe instalacje, jak i te już działające przez wiele lat,
                  powinny być regularnie sprawdzane pod kątem zgodności z
                  obowiązującymi normami. Nasza firma oferuje profesjonalne
                  pomiary elektryczne na terenie województwa łódzkiego i
                  śląskiego – wykonujemy zarówno pomiary odbiorcze przy nowych
                  instalacjach, jak i okresowe przeglądy wymagane np. co 5 lat.
                </p>
                <p>
                  W ramach pomiarów sprawdzamy m.in. skuteczność ochrony
                  przeciwporażeniowej, ciągłość przewodów ochronnych,
                  rezystancję izolacji, impedancję pętli zwarcia, czas i prąd
                  zadziałania zabezpieczeń różnicowoprądowych. Wszystko to
                  wykonujemy przy użyciu atestowanych, skalibrowanych urządzeń
                  pomiarowych. Po zakończonych pomiarach przygotowujemy pełną
                  dokumentację, którą można przedłożyć do nadzoru budowlanego,
                  BHP, czy ubezpieczyciela.
                </p>
                <p>
                  Współpracujemy zarówno z klientami indywidualnymi – wykonując
                  pomiary w domach jednorodzinnych, jak i z firmami,
                  instytucjami, szkołami czy zakładami produkcyjnymi.
                  Obsługujemy pomiary okresowe (np. co 5 lat zgodnie z
                  obowiązującym prawem) oraz odbiorcze – potrzebne przed
                  pierwszym uruchomieniem instalacji lub przed odbiorem budynku.
                </p>
                <p>
                  Pomagamy również w interpretacji wyników, doradzamy, co należy
                  poprawić w przypadku negatywnych wyników, oraz oferujemy
                  usługi naprawcze i modernizacyjne.
                </p>

                <div className="innerpage mt-25">
                  <ul className="accordion-box wow fadeInRight">
                    <li
                      onClick={() => openQuestion(1)}
                      className={`accordion block ${showQues === 1 ? "active-block" : ""}`}
                    >
                      <div
                        className={`acc-btn ${showQues === 1 ? "active" : ""}`}
                      >
                        Jakie pomiary elektryczne wykonujecie?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${showQues === 1 ? "current" : ""}`}
                      >
                        <div className="content">
                          <div className="text">
                            Wykonujemy pomiary odbiorcze (np. przed
                            uruchomieniem instalacji lub odbiorem budynku) oraz
                            okresowe – zgodnie z obowiązkiem wykonywania ich co
                            5 lat w budynkach użytkowanych.
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      onClick={() => openQuestion(2)}
                      className={`accordion block ${showQues === 2 ? "active-block" : ""}`}
                    >
                      <div
                        className={`acc-btn ${showQues === 2 ? "active" : ""}`}
                      >
                        Czy przygotowujecie dokumentację po pomiarach?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${showQues === 2 ? "current" : ""}`}
                      >
                        <div className="content">
                          <div className="text">
                            Tak, po zakończeniu pomiarów przekazujemy klientowi
                            protokół zawierający wszystkie wyniki wraz z oceną
                            stanu instalacji. Dokumenty są zgodne z wymaganiami
                            prawa budowlanego i BHP.
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      onClick={() => openQuestion(3)}
                      className={`accordion block ${showQues === 3 ? "active-block" : ""}`}
                    >
                      <div
                        className={`acc-btn ${showQues === 3 ? "active" : ""}`}
                      >
                        Dla kogo są przeznaczone okresowe pomiary elektryczne?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${showQues === 3 ? "current" : ""}`}
                      >
                        <div className="content">
                          <div className="text">
                            Obowiązek wykonywania pomiarów co 5 lat dotyczy
                            m.in. właścicieli domów jednorodzinnych, wspólnot
                            mieszkaniowych, firm, szkół, obiektów użyteczności
                            publicznej i zakładów przemysłowych.
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      onClick={() => openQuestion(4)}
                      className={`accordion block ${showQues === 4 ? "active-block" : ""}`}
                    >
                      <div
                        className={`acc-btn ${showQues === 4 ? "active" : ""}`}
                      >
                        Czy mogę zlecić Wam pomiar przed zakupem domu lub
                        mieszkania?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${showQues === 4 ? "current" : ""}`}
                      >
                        <div className="content">
                          <div className="text">
                            Oczywiście – wykonujemy również pomiary instalacji
                            przed zakupem nieruchomości, aby sprawdzić jej stan
                            techniczny i bezpieczeństwo użytkowania.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </>
  );
}

export default PomiaryElektryczne;
