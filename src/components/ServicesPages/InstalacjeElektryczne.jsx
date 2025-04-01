// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import BackToTop from "../BackToTop.jsx";
import Footer from "../HomeMain/Footer.jsx";
import PageTitle from "../PageTitle.jsx";

import ServiceDetailsImage from "../../assets/images/room1780.webp";
import Header from "../HomeMain/Header.jsx";

function InstalacjeElektryczne() {
  const [showQues, setQues] = useState(1);
  const openQuestion = (value) => {
    setQues(value);
  };

  return (
    <>
      <Header />
      <PageTitle title="Instalacje Elektryczne" />
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="service-sidebar"></div>
            </div>
            <div className="col-lg-8">
              <div className="services-details__content">
                <img src={ServiceDetailsImage} alt="Image" />
                <h3 className="mt-4">Instalacje elektryczne</h3>
                <p>
                  Instalacje elektryczne to jeden z kluczowych elementów każdego
                  budynku – zarówno mieszkalnego, jak i komercyjnego. Dobrze
                  zaprojektowana i starannie wykonana instalacja zapewnia
                  bezpieczeństwo, niezawodność i komfort codziennego
                  użytkowania. W naszej firmie doskonale rozumiemy, jak ważne
                  jest połączenie solidnego wykonania z przemyślanym planem i
                  indywidualnym podejściem do każdego zlecenia.
                </p>

                <p>
                  Specjalizujemy się w kompleksowym wykonywaniu instalacji
                  elektrycznych – od podstawowych rozwiązań w domach
                  jednorodzinnych, po bardziej zaawansowane systemy w budynkach
                  usługowych, biurowych i przemysłowych. Każde zlecenie
                  rozpoczynamy od rozmowy z klientem, podczas której poznajemy
                  jego potrzeby, oczekiwania i specyfikę budynku. Na tej
                  podstawie doradzamy najlepsze rozwiązania techniczne – zarówno
                  pod względem funkcjonalności, jak i optymalizacji kosztów.
                  Zajmujemy się nie tylko montażem, ale również modernizacją
                  starych instalacji, wymianą rozdzielnic, montażem
                  zabezpieczeń, oświetlenia, gniazd oraz innych elementów.
                  Pracujemy na materiałach renomowanych marek, posiadających
                  niezbędne certyfikaty i atesty. Dzięki temu możemy
                  zagwarantować trwałość i bezpieczeństwo każdej realizacji.
                </p>

                <p>
                  Naszym atutem jest także fachowe doradztwo jeśli nie jesteś
                  pewien, jakie rozwiązania będą najlepsze w Twoim przypadku,
                  pomożemy Ci wybrać najbardziej efektywne opcje, zgodne z
                  obowiązującymi normami. Niezależnie od tego, czy planujesz
                  budowę nowego domu, generalny remont, czy adaptację
                  pomieszczeń do nowych funkcji – jesteśmy gotowi do działania.
                  Działamy głównie na terenie województwa łódzkiego i śląskiego,
                  ze szczególnym uwzględnieniem Wielunia, Sieradza, Częstochowy,
                  Pajęczna, Kłobucka i okolic. Do każdego zlecenia podchodzimy z
                  pełnym zaangażowaniem, dbając o jakość, terminowość i estetykę
                  wykonania. Jeśli szukasz rzetelnego wykonawcy instalacji
                  elektrycznej, który nie tylko wykona pracę, ale też doradzi,
                  wyjaśni i poprowadzi Cię przez cały proces – zapraszamy do
                  kontaktu. Chętnie przygotujemy indywidualną ofertę i odpowiemy
                  na wszystkie pytania.
                </p>
                <p>
                  Oprócz klasycznych instalacji elektrycznych, zajmujemy się
                  również wykonywaniem instalacji niskoprądowych, takich jak
                  sieci internetowe (LAN), systemy alarmowe, monitoring wizyjny
                  (CCTV) oraz instalacje domofonowe i wideodomofonowe. Dzięki
                  temu możemy kompleksowo wyposażyć Twój dom lub firmę w
                  nowoczesne i bezpieczne rozwiązania, które zwiększą komfort
                  oraz bezpieczeństwo użytkowników. Projektujemy i wykonujemy
                  całość – od okablowania, przez konfigurację urządzeń, aż po
                  uruchomienie i przeszkolenie z obsługi systemu.
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
                        Jak wygląda proces wykonania instalacji elektrycznej?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${showQues === 1 ? "current" : ""}`}
                      >
                        <div className="content">
                          <div className="text">
                            Najpierw umawiamy się na oględziny i ustalenie
                            zakresu prac. Następnie przygotowujemy wycenę i
                            projekt, a po akceptacji przystępujemy do wykonania
                            instalacji wraz z pomiarami końcowymi.
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
                        Czy wykonujecie instalacje w domach jednorodzinnych?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${showQues === 2 ? "current" : ""}`}
                      >
                        <div className="content">
                          <div className="text">
                            Tak, specjalizujemy się w instalacjach w domach
                            jednorodzinnych – zarówno w nowym budownictwie, jak
                            i podczas remontów.
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
                        Jakie materiały stosujecie przy montażu instalacji?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${showQues === 3 ? "current" : ""}`}
                      >
                        <div className="content">
                          <div className="text">
                            Korzystamy wyłącznie z materiałów renomowanych
                            marek, posiadających odpowiednie atesty i
                            certyfikaty. Dzięki temu instalacje są trwałe i
                            bezpieczne.
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
                        Na jakim obszarze działacie?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${showQues === 4 ? "current" : ""}`}
                      >
                        <div className="content">
                          <div className="text">
                            Wykonujemy instalacje elektryczne na terenie
                            województwa łódzkiego i śląskiego – najczęściej
                            pracujemy w okolicach Wielunia, Sieradza,
                            Częstochowy, Pajęczna i Kluczborka.
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

export default InstalacjeElektryczne;
