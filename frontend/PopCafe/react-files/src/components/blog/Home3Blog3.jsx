import Link from "next/link";
import React from "react";

function Home3Blog3() {
  return (
    <div className="home3-blog-area mb-120">
      <div className="container">
        <div className="row justify-content-center mb-45">
          <div className="col-lg-8">
            <div className="section-title3 text-center">
              <span>
                Pop Cafè Events
              </span>
              <h2>I nostri eventi</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-6 col-xl-5 col-lg-9">
            <div className="h3-blog-wrap-1">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/h3-blog-1.png"
                  alt=""
                />
                <div className="batch">
                    <a>26 Aprile 2023</a>
                </div>
              </div>
              <div className="blog-content">
                <h3>
                    <a>Il BRUNCH</a>
                </h3>
                <p>
                  Il ritorno del Brunch della domenica, seconda edizione.
                  Appuntamento unico da non perdere!
                  Vi aspettiamo domenica 12 febbraio dalle 11:00!
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-7 col-lg-12">
            <div className="row">
              <div className="col-xxl-12 col-xl-6 col-lg-6 col-sm-6 ">
                <div className="blog-card-alfa one">
                  <div className="blog-content">
                  <div className="batch">
                       <a>27 Gennaio 2023</a>
                     </div>
                    <h3>
                        <a>Candle Jazz Night</a>
                    </h3>
                    <p>PopCafe non smette mai di sorprendere
                      Candle jazz night
                      Apericena a lume di candela, a partire dalle 20.30 & live concert by Jazz quartet</p>
                  </div>
                  <div className="blog-img">
                    <img
                      src="assets/images/blog/h3-blog-2.png"
                      alt="h3-blog-2"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-6 col-lg-6 col-sm-6 ">
                <div className="blog-card-alfa">
                  <div className="blog-img">
                    <img
                      src="assets/images/blog/h3-blog-3.png"
                      alt="h3-blog-3"
                    />
                  </div>
                  <div className="blog-content">
                  <div className="batch">
                       <a>10 Marzo 2023</a>
                     </div>
                    <h3>
                        <a>Around Morricone</a>
                    </h3>
                    <p>APERICENA di pesce e in accompagnamento Jazz quarter. Stefano Conforti Jazz Quartet presenta il concerto “Around Morricone”.</p>
              
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Blog3;
