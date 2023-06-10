import React, { useEffect, useState } from "react";
import { fetchDishes } from "../../../services/dishesService";
import { createLunchDishes } from "../../../services/lunchDishesService";

const PranzoDishes = () => {
    const [dishes, setDishes] = useState([]);
    const [selectedDishes, setSelectedDishes] = useState([]);

    useEffect(() => {
        const getPranzoDishes = async () => {
            try {
                const allDishes = await fetchDishes();
                const pranzoDishes = allDishes.filter(
                    (dish) => dish.type === "Pranzo"
                );
                setDishes(pranzoDishes);
            } catch (error) {
                console.error("Error fetching dishes:", error);
            }
        };

        getPranzoDishes();
    }, []);

    const handleCheckboxChange = (dishId) => {
        setSelectedDishes((prevSelectedDishes) => {
            if (prevSelectedDishes.includes(dishId)) {
                // Dish already selected, remove it
                return prevSelectedDishes.filter((id) => id !== dishId);
            } else {
                // Dish not selected, add it
                return [...prevSelectedDishes, dishId];
            }
        });
    };

    const handleConfirm = async () => {
        try {
            const selectedDishObjects = selectedDishes.map((dishId) => {
                const dish = dishes.find((dish) => dish._id === dishId);
                // Exclude 'type' and '_id' from the dish object
                const { type, _id, ...dishObject } = dish;
                return dishObject;
            });

            const requestBody = {
                lunchDishes: selectedDishObjects,
            };

            // Call the createLunchDishes function to save selected dishes
            await createLunchDishes(requestBody);
            console.log("Selected dishes saved successfully!");
        } catch (error) {
            console.error("Error saving selected dishes:", error);
        }
    };

    const handleClear = () => {
        // Clear the selected dishes
        setSelectedDishes([]);
    };

    return (
        <div>
            <h2>Piatti del pranzo</h2>
            <ul>
                {dishes.map((dish) => (
                    <li key={dish._id}>
                        <div className="single-dish">
                            <input
                                type="checkbox"
                                checked={selectedDishes.includes(dish._id)}
                                onChange={() => handleCheckboxChange(dish._id)}
                            />
                            <h4>{dish.name}</h4>
                            <p>Prezzi: €{dish.price}</p>
                            <p>Ingredienti: {dish.ingredients.join(", ")}</p>
                            <p>Allergeni: {dish.allergens ? "Si" : "No"}</p>
                            <p>
                                Prodotti Surgelati:{" "}
                                {dish.refrigerated ? "Si" : "No"}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={handleConfirm}>Conferma</button>
            <br/>
            <br />
            <button onClick={handleClear}>Cancella piatto</button>
            <br />
            <br />
        </div>
    );
};

export default PranzoDishes;
