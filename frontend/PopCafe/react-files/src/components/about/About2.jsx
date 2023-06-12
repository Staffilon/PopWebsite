import Link from "next/link";
import React from "react";

function About2() {
  return (
    <div className="h2-about-area pb-120">
      <div className="about-left2">
        <img
          className="img-fluid"
          src="assets/images/bg/mobileversione.png"
          alt="h2-about-img-full"
        />
      </div>
      <div className="about-left">
        <img
          className="img-fluid h2-about-img1"
          src="assets/images/bg/365365.png"
          alt="h2-about-img1"
        />
        <img
          className="img-fluid h2-about-img3"
          src="assets/images/bg/2402402.png"
          alt="h2-about-img3"
        />
        <img
          className="img-fluid h2-about-img2"
          src="assets/images/bg/240240.png"
          alt="h2-about-img2"
        />
        <img
          className="img-fluid h2-about-img4"
          src="assets/images/bg/286286.png"
          alt="h2-about-img4"
        />
      </div>
      <div className="about-right">
        <div className="section-title">
         
          <h2>Perchè rinnovare?</h2>
          <p>
          Noi del Pop Cafè crediamo nel rinnovamento costante per offrire un'esperienza migliore ai nostri clienti. Abbiamo creato un'atmosfera accogliente, curando gli arredi e l'aspetto visivo. Il nostro obiettivo è garantire comfort e stile, rimanendo al passo con le tendenze attuali, offrendo un'esperienza coinvolgente e memorabile a chi ci sceglie!
          </p>
        </div>
      </div>
    </div>     
  );
}

export default About2;
