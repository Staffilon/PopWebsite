import Link from "next/link";
import React, { useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function ShopDetails() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const relatedproduceSlider = {
    slidesPerView: "auto",
    spaceBetween: 25,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".next-btn-4",
      prevEl: ".prev-btn-4",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <Layout>
      <Breadcrumb pageName="Servizi" pageTitle="Servizi" />
      <div className="shop-details pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-5 gy-5">
            <div className="col-lg-6">
              <div className="tab-content tab-content1" id="v-pills-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="v-pills-img1"
                  role="tabpanel"
                  aria-labelledby="v-pills-img1-tab"
                >
                  <div className="gallery-big-image">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/card-big-01.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img2"
                  role="tabpanel"
                  aria-labelledby="v-pills-img2-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/card-big-02.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img3"
                  role="tabpanel"
                  aria-labelledby="v-pills-img3-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/card-big-03.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img4"
                  role="tabpanel"
                  aria-labelledby="v-pills-img4-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/card-big-04.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="nav nav1 nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-img1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img1"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img1"
                  aria-selected="true"
                >
                  <img src="assets/images/bg/card-sm-01.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img2"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img2"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/card-sm-02.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img3"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img3"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/card-sm-03.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img4-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img4"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img4"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/card-sm-04.png" alt="" />
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="prod-details-content">
                
              <h2>Colazioni</h2>
                <p>
                Da noi troverete un'ampia selezione di prelibatezze per iniziare la giornata nel migliore dei modi. I nostri chef esperti preparano colazioni fresche e abbondanti, utilizzando ingredienti di alta qualità per garantire un'esperienza culinaria indimenticabile.
                Scegliete tra una varietà di opzioni golose, come croissant appena sfornati, pancake soffici e fragranti. Per chi ama i sapori più salutari, proponiamo anche yogurt con frutta fresca, cereali croccanti e smoothie nutrienti.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    <hr> </hr>
      <div className="shop-details pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-5 gy-5">
            <div className="col-lg-6">
              <div className="tab-content tab-content1" id="v-pills-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="v-pills-img1"
                  role="tabpanel"
                  aria-labelledby="v-pills-img1-tab"
                >
                  <div className="gallery-big-image">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/card-big-01.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img2"
                  role="tabpanel"
                  aria-labelledby="v-pills-img2-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/card-big-02.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img3"
                  role="tabpanel"
                  aria-labelledby="v-pills-img3-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/card-big-03.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img4"
                  role="tabpanel"
                  aria-labelledby="v-pills-img4-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/card-big-04.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="nav nav1 nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-img1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img1"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img1"
                  aria-selected="true"
                >
                  <img src="assets/images/bg/card-sm-01.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img2"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img2"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/card-sm-02.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img3"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img3"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/card-sm-03.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img4-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img4"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img4"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/card-sm-04.png" alt="" />
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="prod-details-content">
                
              <h2>Gelateria</h2>
                <p>
                Da sempre al Pop Cafè trovi il GELATO ARTIGIANALE della Gelateria VITTORINI di San Severino Marche che da quest’anno oltre allo storico gelato amplia la sua offerta con torte gelato e semifreddi disponibili e su prenotazione, per festeggiare i vostri momenti da ricordare.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    <hr> </hr>
      <div className="shop-details pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-5 gy-5">
            <div className="col-lg-6">
              <div className="tab-content tab-content1" id="v-pills-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="v-pills-img1"
                  role="tabpanel"
                  aria-labelledby="v-pills-img1-tab"
                >
                  <div className="gallery-big-image">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/card-big-01.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img2"
                  role="tabpanel"
                  aria-labelledby="v-pills-img2-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/card-big-02.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img3"
                  role="tabpanel"
                  aria-labelledby="v-pills-img3-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/card-big-03.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img4"
                  role="tabpanel"
                  aria-labelledby="v-pills-img4-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/card-big-04.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="nav nav1 nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-img1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img1"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img1"
                  aria-selected="true"
                >
                  <img src="assets/images/bg/card-sm-01.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img2"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img2"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/card-sm-02.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img3"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img3"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/card-sm-03.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img4-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img4"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img4"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/card-sm-04.png" alt="" />
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="prod-details-content">
                
              <h2>Pranzi</h2>
                <p>
                Pop cafè ha creato uno spazio esclusivo dove immergersi in un’atmosfera calda e familiare come a casa ma gustoso e genuino come un’osteria locale.
Ogni giorno trovi
- primi piatti veloci ma curati con la ricerca di prodotti locali e stagionali
- ricchi piatti unici
- panini gourmet
- contorni e insalate ricche per seguire un regime alimentare sano ed equilibrato anche fuori casa.
Puoi approfittare anche di formule più adatte a te e alla tua giornata scegliendo tra MENU EASY( primo piatto+contorno a scelta+acqua+caffè) a 11 euro oppure il MENU EASY&GO ( panino a scelta+acqua+caffè) a 7,50 euro.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    <hr> </hr>
      <div className="shop-details pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-5 gy-5">
            <div className="col-lg-6">
              <div className="tab-content tab-content1" id="v-pills-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="v-pills-img1"
                  role="tabpanel"
                  aria-labelledby="v-pills-img1-tab"
                >
                  <div className="gallery-big-image">
                    <img
                      className="img-fluid"
                      src="assets/images/bg/card-big-01.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img2"
                  role="tabpanel"
                  aria-labelledby="v-pills-img2-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/card-big-02.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img3"
                  role="tabpanel"
                  aria-labelledby="v-pills-img3-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/card-big-03.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img4"
                  role="tabpanel"
                  aria-labelledby="v-pills-img4-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/bg/card-big-04.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="nav nav1 nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-img1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img1"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img1"
                  aria-selected="true"
                >
                  <img src="assets/images/bg/card-sm-01.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img2"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img2"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/card-sm-02.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img3"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img3"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/card-sm-03.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img4-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img4"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img4"
                  aria-selected="false"
                >
                  <img src="assets/images/bg/card-sm-04.png" alt="" />
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="prod-details-content">
                
              <h2>Aperitivi</h2>
                <p>
                Pop Café celebra il rito dell’aperitivo come un momento di convivialità. 

Per rilassarsi al  termine di una giornata lavorativa, prima di un pranzo di lavoro, per celebrare occasioni o solo per godere della compagnia di amici e persone care proponiamo interessanti finger food da abbinare a una lista di cocktails e vini in una piacevole atmosfera.
Troverete una ricca selezione di vini e bollicine, una vasta scelta di birre artigianali,
dai classici miscelati o più estrosi e stravaganti cocktail proposti dal nostro Staff.
Con la compagnia giusta, nel posto giusto hai solo l’imbarazzo della scelta!
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr> </hr>
      <div className="related-items-area mb-120">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12">
              <h2 className="item-details-tt">Eventi</h2>
            </div>
          </div>
          <div className="row">
            <Swiper
              {...relatedproduceSlider}
              className="swiper related-item-sliders"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="food-items2-wrap">
                    <div className="food-img">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/h2-food-item-8.png"
                        alt="h2-food-item-1"
                      />
                      <div className="cart-icon">
                        <Link legacyBehavior href="/cart">
                          <a>
                            <i className="bi bi-cart-plus" />
                          </a>
                        </Link>
                      </div>
                      <div className="pric-tag">
                        <span>$17</span>
                      </div>
                    </div>
                    <div className="food-content">
                      <ul className="d-flex align-items-center justify-content-center p-0 gap-1">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                      <h3>
                        <Link legacyBehavior href="/shop-details">
                          <a>Mutton with Shrimps</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="food-items2-wrap">
                    <div className="food-img">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/h2-food-item-5.png"
                        alt="h2-food-item-1"
                      />
                      <div className="cart-icon">
                        <Link legacyBehavior href="/cart">
                          <a>
                            <i className="bi bi-cart-plus" />
                          </a>
                        </Link>
                      </div>
                      <div className="pric-tag">
                        <span>$41</span>
                      </div>
                    </div>
                    <div className="food-content">
                      <ul className="d-flex align-items-center justify-content-center p-0 gap-1">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                      <h3>
                        <Link href="/shop-details" legacyBehavior>
                          <a>Mutton Kabab</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="food-items2-wrap">
                    <div className="food-img">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/h2-food-item-6.png"
                        alt="h2-food-item-1"
                      />
                      <div className="cart-icon">
                        <Link href="/cart" legacyBehavior>
                          <a>
                            <i className="bi bi-cart-plus" />
                          </a>
                        </Link>
                      </div>
                      <div className="pric-tag">
                        <span>$15</span>
                      </div>
                    </div>
                    <div className="food-content">
                      <ul className="d-flex align-items-center justify-content-center p-0 gap-1">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                      <h3>
                        <Link href="/shop-details" legacyBehavior>
                          <a>Burger with Drinks</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="food-items2-wrap">
                    <div className="food-img">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/h2-food-item-7.png"
                        alt="h2-food-item-1"
                      />
                      <div className="cart-icon">
                        <Link legacyBehavior href="/cart">
                          <a>
                            <i className="bi bi-cart-plus" />
                          </a>
                        </Link>
                      </div>
                      <div className="pric-tag">
                        <span>$09</span>
                      </div>
                    </div>
                    <div className="food-content">
                      <ul className="d-flex align-items-center justify-content-center p-0 gap-1">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                      <h3>
                        <Link href="/shop-details" legacyBehavior>
                          <a>Shrimps with Role</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ShopDetails;
