import Link from "next/link";
import React from "react";

function Banner3() {
  return (
    <div className="home3-banner">
      <div className="social-area">
        <ul>
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
        
          <li>
            <a href="https://wa.me/3334310883">
              <i className="bx bxl-whatsapp" />
            </a>
          </li>
        </ul>
      </div>
     

      <div className="video-wrap d-flex align-items-center justify-content-center">
        <video autoPlay loop="loop" muted preload="auto">
          <source src="assets/video/v2.mp4" type="video/mp4" />
        </video>
        <div className="banner-content text-center">
          <span>
           {" "}
         
          Benvenuti al Pop Cafè
           
           {" "}
          
          </span>
          <h1>BAR &amp; more.</h1>
          <Link legacyBehavior href="menu2">
            <a className="primary-btn7 btn-md2">
              <i className="bi bi-arrow-up-right-circle" /> Scopri il menù
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
