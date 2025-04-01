// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import BackToTop from "../BackToTop.jsx";
import Footer from "../HomeMain/Footer.jsx";
import PageTitle from "../PageTitle.jsx";

import ServiceDetailsImage from "../../assets/images/smartCouple780.webp";
import Header from "../HomeMain/Header.jsx";

function PomiaryElektryczne() {
  const [showQues, setQues] = useState(1);
  const openQuestion = (value) => {
    setQues(value);
  };

  return (
    <>
      <Header />
      <PageTitle title="System smart dom" />
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="service-sidebar"></div>
            </div>
            <div className="col-lg-8">
              <div className="services-details__content">
                <img src={ServiceDetailsImage} alt="Image" />
                <h3 className="mt-4">
                  Inteligentny dom z systemem KNX – nowoczesne podejście do
                  codziennego życia
                </h3>

                <div className="smart-home-content">
                  <p>
                    Smart Dom to coś więcej niż nowoczesny gadżet – to
                    przemyślany system, który łączy wszystkie instalacje w
                    budynku w jeden spójny ekosystem. Jego zadaniem jest
                    ułatwiać codzienne życie, zwiększać komfort, bezpieczeństwo
                    i oszczędność energii. Dzięki technologii KNX, czyli
                    otwartemu i niezależnemu standardowi automatyki budynkowej,
                    możesz w inteligentny sposób zarządzać oświetleniem,
                    ogrzewaniem, wentylacją, klimatyzacją, roletami, alarmem i
                    wieloma innymi urządzeniami – wszystko z jednego miejsca.
                  </p>
                  <p>
                    System działa według zaprogramowanych scenariuszy, które
                    możesz dostosować do swojego trybu życia. Smart dom pamięta
                    za Ciebie, że wieczorem lubisz mieć przyciemnione światło,
                    że w łazience rano ma być ciepło, a rolety mają się
                    automatycznie opuścić, gdy wychodzisz z domu. To nie jest
                    przyszłość – to realne rozwiązania, które wdrażamy u naszych
                    klientów już dziś.
                  </p>

                  <h3>Co można zautomatyzować w inteligentnym domu?</h3>
                  <ul>
                    <li>
                      Oświetlenie – ściemnianie, zapalanie według harmonogramu
                      lub obecności.
                    </li>
                    <li>
                      Ogrzewanie – niezależna temperatura w każdym
                      pomieszczeniu.
                    </li>
                    <li>
                      Rolety i żaluzje – automatyczne sterowanie w zależności od
                      pory dnia, nasłonecznienia czy obecności.
                    </li>
                    <li>
                      System alarmowy i monitoring – powiadomienia, zdalny
                      podgląd, automatyczne uzbrajanie.
                    </li>
                    <li>
                      Sterowanie głosowe i z aplikacji – pełna kontrola z
                      telefonu, tabletu lub przez asystenta głosowego.
                    </li>
                    <li>
                      Scenariusze domowe – np. „poranek”, „wyjście z domu”,
                      „wieczór filmowy”, „wakacje”.
                    </li>
                  </ul>

                  <h3>Integracja z instalacjami wewnętrznymi</h3>
                  <p>
                    Smart dom to nie tylko wygoda, ale też optymalizacja
                    działania systemów w budynku. Dzięki integracji z
                    urządzeniami takimi jak:
                  </p>
                  <ul>
                    <li>
                      <strong>Pompa ciepła</strong> – automatyczna regulacja
                      temperatury w zależności od pory dnia i obecności
                      mieszkańców.
                    </li>
                    <li>
                      <strong>Rekuperacja</strong> – wentylacja dostosowuje się
                      do jakości powietrza, poziomu wilgotności lub obecności
                      osób.
                    </li>
                    <li>
                      <strong>Klimatyzacja</strong> – zintegrowana z czujnikami
                      i roletami, działa tylko wtedy, gdy trzeba.
                    </li>
                    <li>
                      <strong>Ogrzewanie podłogowe</strong> – strefowe
                      sterowanie temperaturą w każdym pomieszczeniu.
                    </li>
                    <li>
                      <strong>Fotowoltaika</strong> – system może zarządzać
                      zużyciem i magazynowaniem własnej energii.
                    </li>
                  </ul>

                  <h3>Dlaczego warto wybrać KNX?</h3>
                  <p>
                    Wybierając KNX, inwestujesz w niezależność i elastyczność.
                    To nie zamknięty system jednej firmy, ale międzynarodowy
                    standard wspierany przez setki producentów. Możesz dobierać
                    urządzenia według potrzeb i budżetu, mając pewność, że
                    wszystko będzie ze sobą współpracować. System KNX jest
                    niezawodny, skalowalny i gotowy do rozbudowy w przyszłości.
                  </p>

                  <p>
                    Jeśli chcesz, aby Twój dom działał z głową – oszczędzał
                    energię, dbał o Twój komfort i bezpieczeństwo – zapraszamy
                    do kontaktu. Działamy na terenie województwa łódzkiego i
                    śląskiego – głównie w Wieluniu, Częstochowie, Pajęcznie,
                    Sieradzu i Kluczborku.
                  </p>
                </div>

                <div className="innerpage mt-25">
                  <ul className="accordion-box wow fadeInRight">
                    <li
                      onClick={() => openQuestion(1)}
                      className={`accordion block ${showQues === 1 ? "active-block" : ""}`}
                    >
                      <div
                        className={`acc-btn ${showQues === 1 ? "active" : ""}`}
                      >
                        Czym różni się inteligentny dom od zwykłych rozwiązań
                        „smart”?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${showQues === 1 ? "current" : ""}`}
                      >
                        <div className="content">
                          <div className="text">
                            Typowy „smart home” to pojedyncze urządzenia (np.
                            żarówka Wi-Fi), które działają osobno. Inteligentny
                            dom z systemem KNX to kompleksowa automatyka –
                            wszystko jest zintegrowane i współpracuje ze sobą.
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
                        Czy smart dom działa tylko przez internet?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${showQues === 2 ? "current" : ""}`}
                      >
                        <div className="content">
                          <div className="text">
                            Nie. System KNX działa lokalnie – internet jest
                            potrzebny tylko do zdalnego sterowania, ale
                            wszystkie funkcje działają nawet bez dostępu do
                            sieci.
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
                        Jak wygląda proces wdrożenia?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${showQues === 3 ? "current" : ""}`}
                      >
                        <div className="content">
                          <div className="text">
                            Najpierw rozmawiamy o Twoich potrzebach, potem
                            przygotowujemy projekt, wykonujemy instalację i
                            konfigurujemy system. Oferujemy też pełne wsparcie i
                            serwis.
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
