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
                            <div className="prod-details-content">
                                <h2>Colazioni</h2>
                                <p>
                                    Ogni mattina, ti accogliamo con una selezione irresistibile di prodotti freschi e preparati con cura.

Dalle classiche cornetti appena sfornati alle fragranti brioches farcite, dalle crostate artigianali alle golose torte fatte in casa, avrai l'imbarazzo della scelta per soddisfare i tuoi desideri golosi. Accompagna tutto con una tazza di caffè aromatizzato o un succo di frutta fresco per completare l'esperienza.

Se invece preferisci una colazione salata, non preoccuparti! Abbiamo una varietà di opzioni per soddisfare anche i palati più esigenti. Dai croissant salati ai toast gourmet, potrai iniziare la giornata con una colazione salutare e gustosa.
                                </p>
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
                                    <img
                                        src="assets/images/bg/colazion1p.png"
                                        alt=""
                                    />
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
                                    <img
                                        src="assets/images/bg/colazion2p.png"
                                        alt=""
                                    />
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
                                    <img
                                        src="assets/images/bg/colazion4p.png"
                                        alt=""
                                    />
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
                                    <img
                                        src="assets/images/bg/colazion5p.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="tab-content tab-content1"
                                id="v-pills-tabContent"
                            >
                                <div
                                    className="tab-pane fade active show"
                                    id="v-pills-img1"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-img1-tab"
                                >
                                    <div className="gallery-big-image">
                                        <img
                                            className="img-fluid"
                                            src="assets/images/bg/colazion1.png"
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
                                        src="assets/images/bg/colazion2.png"
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
                                        src="assets/images/bg/colazion4.png"
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
                                        src="assets/images/bg/colazion5.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
            <hr />
        
            <div className="shop-details pt-120 mb-120">
                <div className="container">
                    <div className="row g-lg-5 gy-5">
                        <div className="col-lg-6">
                            <div
                                className="tab-content tab-content1"
                                id="v-pills-tabContent"
                            >
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
                            
                        </div>
                        <div className="col-lg-6">
                            <div className="prod-details-content">
                                <h2>Pranzi</h2>
                                <p>
                                Al Pop Café, immergiti in un'atmosfera familiare e gustosa. Offriamo primi piatti veloci e curati con prodotti locali e stagionali. I nostri piatti unici sono autentici e ricchi di sapori. Scegli tra panini gourmet, contorni e insalate per un pasto sano. Opta per il MENU EASY a 11 euro o MENU EASY&GO a 7,50 euro, con acqua e caffè inclusi.</p>
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
                                    <img
                                        src="assets/images/bg/card-sm-01.png"
                                        alt=""
                                    />
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
                                    <img
                                        src="assets/images/bg/card-sm-02.png"
                                        alt=""
                                    />
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
                                    <img
                                        src="assets/images/bg/card-sm-03.png"
                                        alt=""
                                    />
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
                                    <img
                                        src="assets/images/bg/card-sm-04.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="shop-details pt-120 mb-120">
                <div className="container">
                    <div className="row g-lg-5 gy-5">
                    <div className="col-lg-6">
                            <div className="prod-details-content">
                                <h2>Gelateria</h2>
                                <p>
                               
Al Pop Cafè, troverai il gelato artigianale della Gelateria Oasi del Gusto di San Severino Marche. Oltre ai gusti classici, offriamo anche torte gelato e semifreddi su prenotazione, per rendere i tuoi momenti speciali ancora più memorabili. La Gelateria Oasi del Gusto è rinomata per la qualità dei suoi ingredienti e le ricette tradizionali, garantendo un'esperienza gustativa straordinaria. Scegli tra la nostra selezione di torte gelato e semifreddi per festeggiare o semplicemente deliziarti con una dolcezza unica. Prenota il tuo dessert personalizzato e il nostro team si occuperà di realizzare qualcosa di speciale per te.</p>
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
                                    <img
                                        src="assets/images/bg/card-sm-01.png"
                                        alt=""
                                    />
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
                                    <img
                                        src="assets/images/bg/card-sm-02.png"
                                        alt=""
                                    />
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
                                    <img
                                        src="assets/images/bg/card-sm-03.png"
                                        alt=""
                                    />
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
                                    <img
                                        src="assets/images/bg/card-sm-04.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="tab-content tab-content1"
                                id="v-pills-tabContent"
                            >
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
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            < hr />
            <div className="shop-details pt-120 mb-120">
                <div className="container">
                    <div className="row g-lg-5 gy-5">
                        <div className="col-lg-6">
                            <div
                                className="tab-content tab-content1"
                                id="v-pills-tabContent"
                            >
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
                           
                        </div>
                        <div className="col-lg-6">
                            <div className="prod-details-content">
                                <h2>Aperitivi</h2>
                                <p>
                             
Al Pop Café, l'aperitivo è un momento conviviale e rilassante. Offriamo finger food deliziosi da abbinare a una selezione di cocktail, vini e birre artigianali. Il nostro staff esperto ti guiderà nella scelta del drink perfetto per accompagnare il tuo momento di relax. Vieni a goderti un'atmosfera piacevole e accogliente, mentre assapori i sapori unici dei nostri cocktails e bevande. </p>
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
                                    <img
                                        src="assets/images/bg/card-sm-01.png"
                                        alt=""
                                    />
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
                                    <img
                                        src="assets/images/bg/card-sm-02.png"
                                        alt=""
                                    />
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
                                    <img
                                        src="assets/images/bg/card-sm-03.png"
                                        alt=""
                                    />
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
                                    <img
                                        src="assets/images/bg/card-sm-04.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
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
                                                <Link
                                                    legacyBehavior
                                                    href="/cart"
                                                >
                                                    <a>
                                                        <i className="bi bi-cart-plus" />
                                                    </a>
                                                </Link>
                                            </div>
                                           
                                        </div>
                                        <div className="food-content">
                                            
                                            <h3>
                                                <Link
                                                    legacyBehavior
                                                    href="/shop-details"
                                                >
                                                    <a>Candle Jazz Night</a>
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
                                                <Link
                                                    legacyBehavior
                                                    href="/cart"
                                                >
                                                    <a>
                                                        <i className="bi bi-cart-plus" />
                                                    </a>
                                                </Link>
                                            </div>
                                            
                                        </div>
                                        <div className="food-content">
                                           
                                            <h3>
                                                <Link
                                                    href="/shop-details"
                                                    legacyBehavior
                                                >
                                                    <a>AperiPasqua</a>
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
                                                <Link
                                                    href="/cart"
                                                    legacyBehavior
                                                >
                                                    <a>
                                                        <i className="bi bi-cart-plus" />
                                                    </a>
                                                </Link>
                                            </div>
                                           
                                        </div>
                                        <div className="food-content">
                                            
                                            <h3>
                                                <Link
                                                    href="/shop-details"
                                                    legacyBehavior
                                                >
                                                    <a>AroundMoricone</a>
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
                                                <Link
                                                    legacyBehavior
                                                    href="/cart"
                                                >
                                                    <a>
                                                        <i className="bi bi-cart-plus" />
                                                    </a>
                                                </Link>
                                            </div>
                                            
                                        </div>
                                        <div className="food-content">
                                          
                                            <h3>
                                                <Link
                                                    href="/shop-details"
                                                    legacyBehavior
                                                >
                                                    <a>Brunch</a>
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
