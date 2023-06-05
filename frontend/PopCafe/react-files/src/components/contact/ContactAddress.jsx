import React from "react";

function ContactAddress() {
  return (
    <div className="contact-page pt-120">
      <div className="container-fluid">
        <div className="row justify-content-center g-4">
          <div className="col-xxl-6 col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div className="contact-wrap">
              <div className="contact-img">
                <img
                  src="assets/images/bg/contact-img-01.png"
                  alt="contact-img-01"
                />
              </div>
              <div className="contact-content">
                <h3>Per informazioni, lauree ed eventi</h3>
                <ul>
                 
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/phone.svg" alt="phone" />
                    </div>
                    <div className="content">
                      <a href="#">+39 333 431 0883</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/envlope.svg" alt="envlope" />
                    </div>
                    <div className="content">
                      <a href="#">info@example.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div className="contact-wrap">
              <div className="contact-img">
                <img
                  src="assets/images/bg/contact-img-02.png"
                  alt="contact-img-02"
                />
              </div>
              <div className="contact-content">
                <h3>Seguici sui social per restare aggiornato!</h3>
                <ul>
                  
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/phone.svg" alt="phone" />
                    </div>
                    <div className="content">
                      <a href="https://www.facebook.com/popcafesoloacamerino">Pop Cafè on facebook</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/envlope.svg" alt="envlope" />
                    </div>
                    <div className="content">
                      <a href="https://www.instagram.com/pop.cafe/">Pop Cafè on instagram</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAddress;
