import React from "react";
import { Link } from "react-router-dom";
import processImage from "../../assets/images/resource/process1-1.png";
import processBgImage from "../../assets/images/background/12.jpg";

function Process({ className }) {
  return (
    <>
      <section className={`process-section ${className || ""}`}>
        <div
          className="bg bg-image"
          style={{ backgroundImage: `url(${processBgImage})` }}
        />
        <div className="float-image">
          <img src={processImage} alt="Image" />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center light">
            <span className="sub-title">JAK DZIAŁAMY</span>
            <h2>
              3 Kroki do Bezpiecznej <br /> i Nowoczesnej Instalacji
            </h2>
          </div>
          <div className="row">
            <div className="process-block col-lg-4 col-sm-6 wow fadeInUp">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-035-voltmeter"></i>
                </div>
                <div className="content">
                  <h4 className="title">Wizyta i Inwentaryzacja</h4>
                  <div className="text">
                    Oględziny budynku, analiza potrzeb oraz wstępne doradztwo
                    techniczne – wszystko po to, by zaprojektować optymalne
                    rozwiązanie.
                  </div>
                  <h4 className="count">01</h4>
                  <div className="icon-shapes"></div>
                </div>
              </div>
            </div>
            <div
              className="process-block col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-034-hammer"></i>
                </div>
                <div className="content">
                  <h4 className="title">Projekt i Realizacja</h4>
                  <div className="text">
                    Przygotowujemy projekt instalacji i przystępujemy do prac
                    montażowych – solidnie, zgodnie z przepisami i terminowo.
                  </div>
                  <h4 className="count">02</h4>
                  <div className="icon-shapes"></div>
                </div>
              </div>
            </div>
            <div
              className="process-block col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-033-cutter"></i>
                </div>
                <div className="content">
                  <h4 className="title">Pomiary i Uruchomienie</h4>
                  <div className="text">
                    Wykonujemy pomiary końcowe, testy oraz konfigurację systemów
                    (również smart home), a Ty możesz cieszyć się
                    bezpieczeństwem i wygodą.
                  </div>
                  <h4 className="count">03</h4>
                  <div className="icon-shapes"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;
