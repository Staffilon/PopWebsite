import React, { useEffect, useState } from "react";
import { BASE_DISHES_URL } from "../../constants";
import { fetchDishes } from "../../services/dishesService";
import { fetchLunchDishes } from "../../services/lunchDishesService";

function MenuList3() {
    var dataCorrente = new Date();
    var giorno = dataCorrente.getDate();
    var mese = dataCorrente.getMonth() + 1;
    var anno = dataCorrente.getFullYear();
    var dataFormattata = giorno + "/" + mese + "/" + anno;

    const [lunchDishes, setLunchDishes] = useState([]);
    const [piadineDishes, setPiadineDishes] = useState([]);

    useEffect(() => {
        const fetchLunchDishesData = async () => {
            try {
                // Fetch the lunch dishes from the backend
                const data = await fetchLunchDishes();
                setLunchDishes(data);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchPiadineDishesData = async () => {
            try {
                // Fetch the Piadine dishes from the backend
                const data = await fetchDishes();
                const piadine = data.filter((dish) => dish.type === "Piadine");
                setPiadineDishes(piadine);
            } catch (error) {
                console.log(error);
            }
        };

        fetchLunchDishesData();
        fetchPiadineDishesData();
    }, []);

    return (
        <div className="h3-menu-area mb-240" id="menu">
            <div className="container">
                <div className="row justify-content-center mb-45">
                    <div className="col-lg-8">
                        <div className="section-title3 text-center">
                            <span> Il nostro menù </span>
                            <h2>Scopri il menù del Pop Cafè</h2>
                        </div>
                    </div>
                </div>
                <div>
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
                                <h2>Pranzo </h2>{" "}
                                <div className="current-date">
                                    {" "}
                                    {dataFormattata}
                                </div>
                            </div>
                            <ul>
                                {lunchDishes.map((dish) => (
                                    <li key={dish._id}>
                                        <div className="item-name">
                                            <div className="content">
                                                <h3>{dish.name}</h3>
                                                {dish.ingredients &&
                                                    dish.ingredients.length >
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
                                                                    .join(", ")}
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
                                        </div>
                                        <div className="price">
                                            <span>{"€" + dish.price}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="menu-title text-center">
                                <h2>Piadine </h2>{" "}
                            </div>
                            <ul>
                                {piadineDishes.map((dish) => (
                                    <li key={dish._id}>
                                        {/* Display Piadine dish information */}
                                        <div className="item-name">
                                            <div className="content">
                                                <h3>{dish.name}</h3>
                                                {dish.ingredients &&
                                                    dish.ingredients.length >
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
                                                                    .join(", ")}
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
                                        </div>
                                        <div className="price">
                                            <span>{"€" + dish.price}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuList3;
