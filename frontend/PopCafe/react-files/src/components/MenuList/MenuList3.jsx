import React from "react";
function MenuList3() {
    
  var dataCorrente = new Date();
  var giorno = dataCorrente.getDate();
  var mese = dataCorrente.getMonth() + 1; 
  var anno = dataCorrente.getFullYear();
  var dataFormattata = giorno + '/' + mese + '/' + anno;
  
  return (
  
    <div className="h3-menu-area mb-240">
      <div className="container">
        <div className="row justify-content-center mb-45">
          <div className="col-lg-8">
            <div className="section-title3 text-center">
              <span>
                {" "}
                Il nostro menù
                {" "}
              </span>
              <h2>Scopri il menù del Pop Cafè</h2>
            </div>
          </div>
        </div>
        <div >
          <div className="col-lg1">
            <div className="home3-menu-wrap">
              <div className="left-vector">
                <img
                  src="assets/images/icon/h3-menu-vec-left.svg"
                  alt="h3-menu-vec-left"
                />
              </div>
              <div className="right-vector">
                <img
                  src="assets/images/icon/h3-menu-vec-right.svg"
                  alt="h3-menu-vec-right"
                />
              </div>
              <div className="menu-title text-center">
                <h2>Pranzo </h2>  <div className="current-date"> {dataFormattata}</div>
                
              </div>
              <ul>
              <li>
                  <div className="item-name">
                  <div className="content">
                    <h2 class="menu-titoli">Primi Piatti</h2>
                  </div>
                  </div>
                </li>
                <li>
                  <div className="item-name">
                    <div className="content">
                      <h3>Breakfast Bar</h3>
                      <p>Special Breakfast to make for our customer.</p>
                    </div>
                  </div>
                
                  <div className="price">
                    <span>$45</span>
                  </div>
                </li>

                <li>
                  <div className="item-name">
                    <div className="content">
                      <h3>Frittata Muffins</h3>
                      <p>Special Breakfast to make for our customer.</p>
                    </div>
                  </div>
               
                  <div className="price">
                    <span>$45</span>
                  </div>
                </li>
                <li>
                  <div className="item-name">
                  <div className="content">
                    <h2 class="menu-titoli">Piatti Unici</h2>
                  </div>
                  </div>
                </li>
                <li>
                  <div className="item-name">
                  <div className="content">
                    <h3>Muffins</h3>
                    <p>Special Breakfast to make for our customer.</p>
                  </div>
                  </div>
                  <div className="price">
                    <span>$45</span>
                  </div>
                </li>
                <li>
                  <div className="item-name">
                    <div className="content">
                      <h3>Smoothies</h3>
                      <p>Special Breakfast to make for our customer.</p>
                    </div>
                  </div>
                  <div className="price">
                    <span>$45</span>
                  </div>
                </li>
                <li>
                  <div className="item-name">
                  <div className="content">
                    <h2 class="menu-titoli">Panini</h2>
                  </div>
                  </div>
                </li>
                <li>
                  <div className="item-name">
                  <div className="content">
                    <h3>Muffins</h3>
                    <p>Special Breakfast to make for our customer.</p>
                  </div>
                  </div>
                  <div className="price">
                    <span>$45</span>
                  </div>
                </li>
                <li>
                  <div className="item-name">
                    <div className="content">
                      <h3>Smoothies</h3>
                      <p>Special Breakfast to make for our customer.</p>
                    </div>
                  </div>
                  <div className="price">
                    <span>$45</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuList3;
