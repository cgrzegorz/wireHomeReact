import React, { useState } from "react";

const Accordion = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: null,
  });

  const handleToggle = (key) => {
    setIsActive((prevState) => ({
      status: prevState.key !== key,
      key: prevState.key !== key ? key : null,
    }));
  };

  return (
    <ul className="accordion-box">
      {[1, 2, 3, 4, 5].map((key) => (
        <li
          key={key}
          className={
            isActive.key === key
              ? "accordion block active-block"
              : "accordion block"
          }
          onClick={() => handleToggle(key)}
        >
          <div className={isActive.key === key ? "acc-btn active" : "acc-btn"}>
            {key === 1 &&
              "Czy wykonujecie instalacje w domach jednorodzinnych i mieszkaniach?"}
            {key === 2 && "Czy oferujecie projekt instalacji elektrycznej?"}
            {key === 3 && "Czy zajmujecie się również pomiarami elektrycznymi?"}
            {key === 4 && "Czy możecie zainstalować system Smart Home?"}
            {key === 5 && "Ile kosztuje instalacja elektryczna?"}
            <i className="arrow fal fa-angle-right" />
          </div>
          <div
            className={
              isActive.key === key ? "acc-content current" : "acc-content"
            }
          >
            <div className="content">
              <div className="text">
                {key === 1 &&
                  "Tak, specjalizujemy się w instalacjach elektrycznych w budownictwie jednorodzinnym i wielorodzinnym – zarówno nowych inwestycjach, jak i modernizacjach."}
                {key === 2 &&
                  "Tak, wykonujemy projekty instalacji elektrycznych w oparciu o potrzeby inwestora oraz obowiązujące normy i przepisy."}
                {key === 3 &&
                  "Oczywiście. Wykonujemy pomiary odbiorcze, okresowe oraz po modernizacjach – z pełną dokumentacją dla nadzoru lub energetyki."}
                {key === 4 &&
                  "Tak! Oferujemy montaż i konfigurację systemów automatyki domowej (inteligentne oświetlenie, rolety, ogrzewanie itp.), w tym w technologii KNX."}
                {key === 5 &&
                  "Koszt instalacji zależy od metrażu budynku, zakresu prac i zastosowanych materiałów. Przygotowujemy darmową wycenę po wstępnej rozmowie lub oględzinach."}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
