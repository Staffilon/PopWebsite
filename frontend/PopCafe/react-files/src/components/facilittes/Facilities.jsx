import React from "react";

function Facilities() {
  return (
    <div className="h3-facilities mb-120" >
      <div className="container" >
        <div className="row justify-content-center mb-45">
          <div className="col-lg-8">
            <div className="section-title3 text-center">
              <span>
                {" "}
                <img
                  className="left-vec"
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt=""
                />{" "}
                I nostri servizi{" "}
                <img
                  className="right-vec"
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt=""
                />
              </span>
              <h2>Tutto ciò di cui hai bisogno!</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-lg-3 col-md-4 col-sm-6 col-10">
            <div className="h3-facilities-card text-center">
              <div className="icon">
                <img
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt="h3-sub-title-vec"
                />
              </div>
              <h3>BAR</h3>
              <div className="facilities-img">
                <img src="assets/images/bg/capacity.png" alt="capacity" />
              </div>
              <p>Una coccola al mattino, dal dolce al salato... </p>
              <div className="overlay">
                <div className="overlay-img">
                  <img
                    className="img-fluid"
                    src="assets/images/bg/capacity2.png"
                    alt=""
                  />
                </div>
              
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-10">
            <div className="h3-facilities-card text-center">
              <div className="icon">
                <img
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt="h3-sub-title-vec"
                />
              </div>
              <h3>Gelateria</h3>
              <div className="facilities-img">
                <img src="assets/images/bg/car-park2.png" alt="car-park2" />
              </div>
              <p>Per un'ottima merenda, direttamente dall'Oasi del Gusto di San Severino!</p>
              <div className="overlay">
                <div className="overlay-img">
                  <img
                    className="img-fluid"
                    src="assets/images/bg/car-park.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-10">
            <div className="h3-facilities-card text-center">
              <div className="icon">
                <img
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt="h3-sub-title-vec"
                />
              </div>
              <h3>Pranzo</h3>
              <div className="facilities-img">
                <img src="assets/images/bg/play-zone.png" alt="capacity" />
              </div>
              <p>Per una sana e gustosa pausa pranzo, con ottimi primi, piatti unici, panini gourmet, contorni e ricche insalate!</p>
              <div className="overlay">
                <div className="overlay-img">
                  <img
                    className="img-fluid"
                    src="assets/images/bg/play-zone2.png"
                    alt=""
                  />
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-10">
            <div className="h3-facilities-card text-center">
              <div className="icon">
                <img
                  src="assets/images/icon/h3-sub-title-vec.svg"
                  alt="h3-sub-title-vec"
                />
              </div>
              <h3>Aperitivi</h3>
              <div className="facilities-img">
                <img src="assets/images/bg/wifi.png" alt="capacity" />
              </div>
              <p>Drink e aperitivi da gustare in compagnia!</p>
              <div className="overlay">
                <div className="overlay-img">
                  <img
                    className="img-fluid"
                    src="assets/images/bg/wifi2.png"
                    alt=""
                  />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
