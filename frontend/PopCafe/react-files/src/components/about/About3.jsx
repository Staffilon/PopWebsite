import Link from "next/link";
import React from "react";

function About3() {
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
             <i> "Nasce dalle mie passioni e dai miei desideri, fino a diventare un progetto realizzato a 360 gradi."</i><br></br>
          
              Un cafè alla <b>portata di tutti</b>, per tutte le generazioni, un <b>punto di aggregazione</b>, un luogo dove festeggiare con amici o brindare in intimità con lo sfondo della città ducale dal 2014.
              <br></br>
              In questa realtà Universitaria della cittadina di Camerino il punto di unione e forza é proprio la <b>coesione</b>, e il Pop Cafè con il suo staff giovane, professionale, attento e sempre disponibile é testimone di <b>incontri, piaceri e divertimento.</b>

              Venite a trovarci, vi aspettiamo!
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
              
              <div className="discover-btn">
                <Link legacyBehavior href="/about">
                  <a className="primary-btn7 btn-md2">
                    <i className="bi bi-arrow-up-right-circle" />
                    Scopri di più!
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="h3-into-img-big">
              <img
                className="img-fluid"
                src="assets/images/bg/h3-intro-big.png"
                alt="h3-intro-big"
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About3;
