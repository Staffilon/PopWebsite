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
                            <div className="prod-details-content">
                                <h2>Pranzi</h2>
                                <p>
                                Pop Café ha creato uno spazio esclusivo dove immergersi in un'atmosfera calda e familiare, che ti fa sentire come a casa. Qui, potrai gustare piatti genuini e deliziosi, ispirati alle tradizioni culinarie locali.

Ogni giorno, ti offriamo primi piatti veloci ma curati, utilizzando prodotti locali e stagionali per garantirti freschezza e qualità. I nostri ricchi piatti unici sono un'esplosione di sapori autentici, pensati per soddisfare anche i palati più esigenti.

Se preferisci una soluzione più veloce ma altrettanto gustosa, puoi scegliere tra i nostri panini gourmet, preparati con ingredienti selezionati per garantirti una vera esperienza culinaria. Accompagna il tuo pasto con contorni e insalate ricche, pensati per seguirti anche in un regime alimentare sano ed equilibrato anche fuori casa.

Abbiamo pensato anche a formule convenienti per adattarci alle tue esigenze e al ritmo della tua giornata. Potrai optare per il <b>MENU EASY</b>, che include un primo piatto (o un secondo), un contorno a scelta, acqua e caffè, il tutto a soli 11 euro. Oppure, se preferisci un pasto più veloce, puoi scegliere il <b>MENU EASY&GO</b>, che comprende un panino a scelta, acqua e caffè, al prezzo di 7,50 euro.
                                </p>
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
                                Da sempre al Pop Cafè troverai il gelato artigianale della Gelateria Oasi del Gusto di San Severino Marche. Siamo entusiasti di ampliare la nostra offerta includendo anche torte gelato e semifreddi, disponibili su prenotazione, per rendere i tuoi momenti speciali ancora più memorabili.

La Gelateria Oasi del Gusto è rinomata per la sua maestria nell'arte della creazione del gelato artigianale. Utilizzando ingredienti di alta qualità e seguendo ricette tradizionali, ci impegniamo a offrire un'esperienza gustativa straordinaria a ogni boccone.

Oltre ai classici gusti di gelato, troverai una selezione variegata di torte gelato e semifreddi, perfetti per festeggiare occasioni speciali o semplicemente per deliziare il tuo palato con una dolcezza unica.

Se desideri festeggiare un momento importante o semplicemente regalarti un dolce trattamento, ti invitiamo a prenotare una delle nostre torte gelato o semifreddi. Il nostro team sarà lieto di personalizzare la tua scelta e creare un dessert su misura per te.
                                </p>
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
                            <div className="prod-details-content">
                                <h2>Aperitivi</h2>
                                <p>
                                Pop Café celebra l'aperitivo come un momento di convivialità e relax. Che tu voglia distenderti dopo una giornata lavorativa, fare un pranzo di lavoro, celebrare un'occasione speciale o semplicemente goderti la compagnia di amici e persone care, siamo pronti a offrirti un'esperienza indimenticabile.

La nostra proposta comprende interessanti finger food, perfetti da abbinare a una lista di cocktails e vini, il tutto immerso in un'atmosfera piacevole e accogliente. Abbiamo selezionato per te una ricca varietà di vini e bollicine, per soddisfare anche i palati più esigenti. Inoltre, offriamo una vasta scelta di birre artigianali, garantendo un'esperienza di gusto unica.

Il nostro staff esperto è pronto a deliziarti con cocktail classici, miscelati con maestria, e proposte più estrose e stravaganti. Ti guideremo nella scelta del cocktail perfetto per accompagnare i tuoi momenti di relax e convivialità.
                                </p>
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
