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
            <div >
                <ul >
                    <li><button class= "menu-lista hover-effetto " onClick={handleShowDishes}>Mostra Piatti</button> </li><br></br>
                    <li><button class= "menu-lista hover-effetto " onClick={handleShowCreateDishForm}>Crea Piatto</button> </li><br></br>
                    <li><button class= "menu-lista hover-effetto " onClick={handleShowPranzoDishes}>Seleziona Piatti Pranzo</button></li>
                </ul>
            </div>
            <hr></hr>
            {displayedComponent === "viewDishes" && (
                <>
                <div id="mostra">
                    <h3>Mostra piatti</h3>
                    <ViewDishes />
                    </div>
                </>
            )}
           
            {displayedComponent === "createDish" && (
                <>
                 <div id="mostra">
                 <h3>Aggiungi Piatto</h3>
                 <CreateDishForm />
                    </div>
                </>
            )}
       
            {displayedComponent === "pranzoDishes" && (
                <>
                    <h3>Piatti del pranzo</h3>
                    <PranzoDishes />
                </>
            )}
            
       
        </div>
    );
};

export default Menu;
