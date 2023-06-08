import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import { BASE_DISHES_URL } from "../constants";
import Layout from "../layout/Layout";
import { fetchLunchDishes } from "../services/lunchDishesService";

function Menu2() {
    const [menuItems, setMenuItems] = useState([]);
    const [lunchDishes, setLunchDishes] = useState([]);

    useEffect(() => {
        // Fetch the menu items from the backend
        fetch(BASE_DISHES_URL)
            .then((response) => response.json())
            .then((data) => {
                setMenuItems(data);
            })
            .catch((error) => console.log(error));

        // Fetch the lunch dishes from the backend
        fetchLunchDishes()
            .then((data) => {
                setLunchDishes(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const renderDishesByType = (type) => {
        if (!menuItems || !menuItems.dishes || menuItems.dishes.length === 0) {
            // Menu items data is still being fetched or not available
            return null;
        }

        const filteredDishes = menuItems.dishes.filter(
            (dish) => dish.type === type
        );

        return (
            <ul>
                {filteredDishes.map((dish) => (
                    <li key={dish._id}>
                        <div className="single-menu">
                            <div className="menu-name">
                                <h4>{dish.name}</h4>
                                {dish.ingredients &&
                                    dish.ingredients.length > 0 && (
                                        <div>
                                            <p>
                                                Ingredienti:{" "}
                                                {dish.ingredients
                                                    .map(
                                                        (ingredient) =>
                                                            ingredient
                                                    )
                                                    .join(", ")}
                                            </p>
                                            <p>
                                                {dish.allergens && "*"}
                                                {dish.allergens &&
                                                    dish.refrigerated &&
                                                    " "}
                                                {dish.refrigerated && "**"}
                                            </p>
                                        </div>
                                    )}
                            </div>
                            <div className="price">
                                <span>{"€" + dish.price}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <Layout>
            <Breadcrumb pageName="Menu List" pageTitle="Il nostro Menù" />
            <div className="menu2-area pt-120 mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="menu2-tab mb-70">
                                <ul
                                    className="nav nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                >
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link active"
                                            id="breakfast-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#breakfast"
                                            type="button"
                                            role="tab"
                                            aria-controls="breakfast"
                                            aria-selected="true"
                                        >
                                            Colazione
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link"
                                            id="lunch-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#lunch"
                                            type="button"
                                            role="tab"
                                            aria-controls="lunch"
                                            aria-selected="false"
                                        >
                                            Pranzo
                                        </button>
                                    </li>

                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link"
                                            id="starter-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#starter"
                                            type="button"
                                            role="tab"
                                            aria-controls="starter"
                                            aria-selected="false"
                                        >
                                            Piadine
                                        </button>
                                    </li>

                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link"
                                            id="dinner-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#dinner"
                                            type="button"
                                            role="tab"
                                            aria-controls="dinner"
                                            aria-selected="false"
                                        >
                                            Aperitivo
                                        </button>
                                    </li>

                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link"
                                            id="drink-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#drink"
                                            type="button"
                                            role="tab"
                                            aria-controls="drink"
                                            aria-selected="false"
                                        >
                                            Drink list
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link"
                                            id="brunch-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#brunch"
                                            type="button"
                                            role="tab"
                                            aria-controls="brunch"
                                            aria-selected="false"
                                        >
                                            Brunch
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade"
                                    id="breakfast"
                                    role="tabpanel"
                                    aria-labelledby="breakfast-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-wrap">
                                                <div className="menu-title">
                                                    <h2>Colazione</h2>
                                                </div>
                                                {renderDishesByType(
                                                    "Colazione"
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-left-img">
                                                <img
                                                    src="assets/images/bg/menu2-left-img-01.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="lunch"
                                    role="tabpanel"
                                    aria-labelledby="lunch-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-wrap">
                                                <div className="menu-title">
                                                    <h2>Pranzo</h2>
                                                </div>
                                                <ul>
                                                    {lunchDishes.map((dish) => (
                                                        <li key={dish._id}>
                                                            <div className="single-menu">
                                                                <div className="menu-name">
                                                                    <h4>
                                                                        {
                                                                            dish.name
                                                                        }
                                                                    </h4>
                                                                    {dish.ingredients &&
                                                                        dish
                                                                            .ingredients
                                                                            .length >
                                                                            0 && (
                                                                            <div>
                                                                                <p>
                                                                                    Ingredienti:{" "}
                                                                                    {dish.ingredients
                                                                                        .map(
                                                                                            (
                                                                                                ingredient
                                                                                            ) =>
                                                                                                ingredient
                                                                                        )
                                                                                        .join(
                                                                                            ", "
                                                                                        )}
                                                                                </p>
                                                                                <p>
                                                                                    {dish.allergens &&
                                                                                        "*"}
                                                                                    {dish.allergens &&
                                                                                        dish.refrigerated &&
                                                                                        " "}
                                                                                    {dish.refrigerated &&
                                                                                        "**"}
                                                                                </p>
                                                                            </div>
                                                                        )}
                                                                </div>
                                                                <div className="price">
                                                                    <span>
                                                                        {"€" +
                                                                            dish.price}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-left-img">
                                                <img
                                                    src="assets/images/bg/menu2-left-img-01.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="dinner"
                                    role="tabpanel"
                                    aria-labelledby="dinner-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-wrap">
                                                <div className="menu-title">
                                                    <h2>Aperitivo</h2>
                                                </div>
                                                {renderDishesByType(
                                                    "Aperitivo"
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-left-img">
                                                <img
                                                    src="assets/images/bg/menu2-left-img-01.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="drink"
                                    role="tabpanel"
                                    aria-labelledby="drink-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-wrap">
                                                <div className="menu-title">
                                                    <h2>Drink list</h2>
                                                </div>
                                                {renderDishesByType("Bevande")}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-left-img">
                                                <img
                                                    src="assets/images/bg/menu2-left-img-01.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="starter"
                                    role="tabpanel"
                                    aria-labelledby="starter-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-wrap">
                                                <div className="menu-title">
                                                    <h2>Piadine</h2>
                                                </div>
                                                {renderDishesByType("Piadine")}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-left-img">
                                                <img
                                                    src="assets/images/bg/menu2-left-img-01.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="brunch"
                                    role="tabpanel"
                                    aria-labelledby="brunch-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-wrap">
                                                <div className="menu-title">
                                                    <h2>Brunch</h2>
                                                </div>
                                                {renderDishesByType(
                                                    "Aperitivo"
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-left-img">
                                                <img
                                                    src="assets/images/bg/menu2-left-img-01.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Menu2;
