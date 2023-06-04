import React from "react";

function Facilities() {
  return (
    <div className="h3-facilities mb-120" id="servizi" >
      <div className="container" >
        <div className="row justify-content-center mb-45">
          <div className="col-lg-8">
            <div className="section-title3 text-center">
              <span>
                {" "}
                
                I nostri servizi{" "}
               
              </span>
              <h2>Tutto ciò di cui hai bisogno!</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-lg-3 col-md-4 col-sm-6 col-10">
            <div className="h3-facilities-card text-center">
              <div className="icon">
              
              </div>
              <h3>BAR</h3>
              <div className="facilities-img">
                <img src="assets/images/bg/capacity.png" alt="capacity" />
              </div>
              <p>Una coccola al mattino, dal dolce al salato per iniziare al meglio la tua giornata!</p>
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
            
              <h3>Pranzo</h3>
              <div className="facilities-img">
                <img src="assets/images/bg/play-zone.png" alt="capacity" />
              </div>
              <p>Per una sana e gustosa pausa pranzo, con ottimi primi, piatti unici, panini e molto altro!</p>
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
            
              <h3>Aperitivi</h3>
              <div className="facilities-img">
                <img src="assets/images/bg/wifi.png" alt="capacity" />
              </div>
              <p>Drink e aperitivi da gustare in compagnia, per iniziare al meglio le vostre serate!</p>
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
