import React, { useState } from "react";
import CreateDishForm from "./CreateDishForm";
import PranzoDishes from "./PranzoDishes";
import ViewDishes from "./ViewDishes";

const Menu = () => {
    const [displayedComponent, setDisplayedComponent] = useState("viewDishes");

    const handleShowDishes = () => {
        setDisplayedComponent("viewDishes");
    };

    const handleShowCreateDishForm = () => {
        setDisplayedComponent("createDish");
    };

    const handleShowPranzoDishes = () => {
        setDisplayedComponent("pranzoDishes");
    };

    return (
        <div>
            <h2>Menu</h2>
            <div>
                <button onClick={handleShowDishes}>Display Dishes</button>
                <button onClick={handleShowCreateDishForm}>Create Dish</button>
                <button onClick={handleShowPranzoDishes}>Pranzo Dishes</button>
            </div>
            {displayedComponent === "viewDishes" && (
                <>
                    <h3>View Dishes</h3>
                    <ViewDishes />
                </>
            )}
            {displayedComponent === "createDish" && (
                <>
                    <h3>Create Dish</h3>
                    <CreateDishForm />
                </>
            )}
            {displayedComponent === "pranzoDishes" && (
                <>
                    <h3>Pranzo Dishes</h3>
                    <PranzoDishes />
                </>
            )}
        </div>
    );
};

export default Menu;
