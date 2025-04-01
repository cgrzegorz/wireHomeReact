// @ts-ignore
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../HomeMain/Footer.jsx";
import PageTitle from "../PageTitle.jsx";
import Header from "../HomeMain/Header.jsx";
import NewsDetailsImage from "../../assets/images/resource/news-details.jpg";

function NajczestszeBledy() {
  return (
    <>
      <Header />
      <PageTitle />
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  <img src={NewsDetailsImage} alt="Image" />
                  <div className="blog-details__date">
                    <span className="day">27</span>
                    <span className="month">Marzec</span>
                  </div>
                </div>
                <div className="blog-details__content">
                  <ul className="list-unstyled blog-details__meta">
                    <li>
                      <Link to="/news-details">
                        <i className="fas fa-user-circle"></i> Admin
                      </Link>{" "}
                    </li>
                  </ul>
                  <h3 className="blog-details__title">
                    Najczęstsze błędy popełniane podczas samodzielnej instalacji
                    elektrycznej – na co zwrócić uwagę?
                  </h3>
                  <p>
                    W dobie poradników internetowych i filmów na YouTube wiele
                    osób decyduje się na samodzielne wykonanie lub modyfikację
                    instalacji elektrycznej w domu. Choć drobne prace, takie jak
                    wymiana gniazdka czy włącznika, wydają się nieskomplikowane,
                    to warto pamiętać, że elektryka to nie tylko kwestia wygody
                    – to przede wszystkim <strong>bezpieczeństwo</strong>.
                  </p>

                  <p>
                    Nieprawidłowo wykonana instalacja może prowadzić do
                    poważnych awarii, porażenia prądem, pożaru, a nawet utraty
                    gwarancji czy problemów z odbiorem budynku. Poniżej
                    przedstawiamy najczęstsze błędy, które popełniają osoby bez
                    doświadczenia, oraz podpowiadamy, jak ich unikać.
                  </p>

                  <h3>1. Brak wiedzy o obowiązujących normach i przepisach</h3>
                  <p>
                    W Polsce instalacje elektryczne muszą spełniać określone
                    normy (np. PN-HD 60364), a ich wykonanie powinno być zgodne
                    z Prawem budowlanym. Osoby bez uprawnień często nie mają
                    świadomości, że pewne rozwiązania są po prostu{" "}
                    <strong>niedozwolone lub niebezpieczne</strong>, co może
                    skutkować koniecznością wykonania całej instalacji od nowa.
                  </p>

                  <h3>2. Nieprawidłowe zabezpieczenia</h3>
                  <p>
                    Często spotykanym błędem jest złe dobranie bezpieczników
                    (nadprądowych lub różnicowoprądowych), ich brak lub
                    niewłaściwe podłączenie. Zabezpieczenia chronią nie tylko
                    instalację, ale również{" "}
                    <strong>życie i zdrowie domowników</strong> – źle dobrane
                    mogą nie zadziałać w razie zwarcia czy przeciążenia.
                  </p>

                  <h3>3. Złe połączenia przewodów</h3>
                  <p>
                    Lutowanie, skręcanie przewodów bez stosowania złączek lub
                    stosowanie różnych przekrojów i materiałów (np. miedzi z
                    aluminium) to recepta na przegrzewanie się instalacji, a w
                    skrajnym przypadku – pożar. Profesjonaliści stosują
                    odpowiednie złączki, listwy, puszki i narzędzia, które
                    gwarantują trwałość i bezpieczeństwo połączeń.
                  </p>

                  <h3>4. Brak pomiarów i protokołu po wykonaniu prac</h3>
                  <p>
                    Nawet dobrze wyglądająca instalacja może nie działać
                    poprawnie. Pomiar rezystancji izolacji, skuteczności ochrony
                    przeciwporażeniowej czy impedancji pętli zwarcia to{" "}
                    <strong>absolutna podstawa</strong> po zakończeniu prac. Bez
                    tych pomiarów nie da się stwierdzić, czy instalacja jest
                    bezpieczna. Taki pomiar może wykonać tylko osoba z
                    odpowiednimi uprawnieniami SEP.
                  </p>

                  <h3>5. Przeciążone obwody</h3>
                  <p>
                    Często w jednym obwodzie umieszczanych jest zbyt wiele
                    urządzeń – np. kuchnia, łazienka i salon podłączone do
                    jednego bezpiecznika. Taka instalacja może działać na
                    początku, ale z czasem może dojść do wybijania zabezpieczeń,
                    przegrzewania przewodów lub nawet pożaru.
                  </p>

                  <h3>6. Nieestetyczne i chaotyczne prowadzenie kabli</h3>
                  <p>
                    Estetyka to nie wszystko – źle poprowadzone przewody mogą
                    utrudniać serwis, modernizację lub wprowadzać ryzyko
                    przypadkowego uszkodzenia. Brak oznaczeń, puszki bez opisów,
                    prowadzenie kabli "na oko" – to częste błędy, które pokazują
                    brak planu i doświadczenia.
                  </p>

                  <h3>Podsumowanie – kiedy lepiej skorzystać z fachowca?</h3>
                  <p>
                    Instalacja elektryczna to nie jest miejsce na eksperymenty.
                    Choć pewne rzeczy można wykonać samodzielnie, warto
                    zastanowić się, czy gra jest warta świeczki. Zatrudniając
                    profesjonalną firmę elektryczną:
                  </p>

                  <ul>
                    <li>
                      masz pewność, że wszystko będzie zgodne z normami i
                      przepisami,
                    </li>
                    <li>dostajesz dokumentację i protokół z pomiarów,</li>
                    <li>nie martwisz się o bezpieczeństwo domowników,</li>
                    <li>zyskujesz czas i spokój.</li>
                  </ul>

                  <p>
                    Jeśli planujesz nową instalację, modernizację lub masz
                    wątpliwości, co do stanu istniejącej –{" "}
                    <strong>skontaktuj się z nami</strong>. Doradzimy,
                    sprawdzimy i wykonamy wszystko jak należy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NajczestszeBledy;
