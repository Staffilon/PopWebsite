import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-top ">
        <div className="container">
          <div className="row justify-content-center align-items-center gy-5">
            <div className="col-lg-4 col-md-6  order-md-1 order-2">
              <div className="footer-widget one">
                <div className="widget-title">
                  <h3>I nostri servizi</h3>
                </div>
                <div className="menu-container">
                  <ul>
                    <li>
                      <Link legacyBehavior href="#servizi">
                        Bar
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="#servizi">
                        Gelateria
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="#menu">
                        Pranzo
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="#servizi">
                        Aperitivi
                      </Link>
                    </li>
    
                  </ul>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-md-2 order-1">
              <div className="footer-widgetfooter-widget social-area">
                <div className="footer-logo text-center">
                  <Link legacyBehavior href="/">
                    <img src="assets/images/header1-logo.svg" alt="logo pop cafe" width={"50%"}/>
                  </Link>
                 
                </div>
                <div className="footer-social">
                  <ul className="social-link d-flex align-items-center justify-content-center">
                    <li>
                      <a href="https://www.facebook.com/popcafesoloacamerino">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/pop.cafe/">
                        <i className="bx bxl-instagram-alt" />
                      </a>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-3">
              <div className="footer-widget one">
                <div className="widget-title">
                  <h3>Contatti</h3>
                </div>
                <div className="contact-info">
                  <div className="single-contact">
                    <span className="title">Numero di telefono:</span>
                    <span className="content">
                      <a href="tel:+39 333 431 0883">+39 333 431 0883</a>
                    </span>
                  </div>
                 
                 
                  <div className="single-contact">
                    <span className="title">Location:</span>
                    <span className="content">
                      <a href="https://goo.gl/maps/JpqfFkyUJkasSkSS8">
                        Via le Mosse 22/D
                        <br />
                       Camerino, (MC)
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm">
        <div className="container">
          <div className="row border-ttop g-2">
            <div className="col-md-8 justify-content-md-start justify-content-center">
              <div className="copyright-area">
                <p>
                  @Copyright by{" "}
                  <Link legacyBehavior href="https://www.popcafecamerino.it/about">
                    Pop Cafè  
                  </Link>
                  -2023, All Right Reserved.
                </p>
              </div> 
            </div>
            <div className="col-md-4 d-flex justify-content-md-end justify-content-center">
              <div className="privacy-policy">
                <p>
                  <Link legacyBehavior href="https://www.iubenda.com/privacy-policy/93217328">
                    Privacy &amp; Policy
                  </Link>{" "}
                  | <a href="https://www.iubenda.com/termini-e-condizioni/93217328">Terms and Conditions </a>
                  | <a href="https://www.iubenda.com/privacy-policy/93217328/cookie-policy">Cookie Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
