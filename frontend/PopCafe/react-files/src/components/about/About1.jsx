import Link from "next/link";
import React from "react";

function About1() {
  return (
    <div className="introduction-area pt-120 mb-120">
      <div className="container">
        <div className="row align-items-end gy-5">
          <div className="col-lg-7">
            <div className="section-title3">
              <span>
               
                Chi siamo
               
              </span>
              <h2>Since 2014...</h2>
            </div>
            <div className="introduction-content">
              <p>
              Pop Cafè ha ufficialmente aperto le sue porte ai clienti nel maggio del 2014, ma la sua origine risale molto prima, nasce infatti dalle mie passioni e dai miei desideri, diventando un progetto realizzato a 360 gradi.

              Il nostro cafè è <b>accessibile a tutte le generazioni</b>, un punto di aggregazione in cui è possibile festeggiare con gli amici o brindare in intimità...

              Nella realtà universitaria di Camerino, la coesione è la chiave di forza e il Pop Cafè, con il suo staff giovane, professionale, attento e sempre disponibile, è un <b>testimone di incontri, piaceri e divertimento.</b>
<br></br>
              Offriamo una vasta gamma di servizi, che vanno dalle colazioni ai pranzi veloci e gustosi, dai ricchi aperitivi agli autentici gelati artigianali, dalle serate a tema alle mostre di fotografia e pittura.

              Il <i>Pop Cafè</i> è un locale confortevole in cui non rimarrete delusi!
              </p>
              <div className="about-features">
                <ul>
                  <li>
                    <i className="bi bi-chevron-double-right" />
                    Colazioni
                  </li>
                  <li>
                    <i className="bi bi-chevron-double-right" />
                    Pranzi
                  </li>
                  <li>
                    <i className="bi bi-chevron-double-right" />
                    Aperitivi
                  </li>
                </ul>
                <ul>
                  <li>
                    <i className="bi bi-chevron-double-right" />
                    Serate a tema
                  </li>
                  <li>
                    <i className="bi bi-chevron-double-right" />
                    Tabacchi
                  </li>
                  <li>
                    <i className="bi bi-chevron-double-right" />
                    E molto altro...
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="h3-into-img-big">
              <img
                className="img-fluid"
                src="assets/images/bg/about.png"
                alt="h3-intro-big"
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
