import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_DISHES_URL } from "../../constants";

const Menu = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await axios.get(BASE_DISHES_URL, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "jwtToken"
                        )}`,
                    },
                });

                setDishes(response.data.dishes); // Update dishes state
            } catch (error) {
                console.error("Error fetching dishes:", error);
            }
        };

        fetchDishes();
    }, []);

    return (
        <div>
            <h2>Menu</h2>
            {dishes.map((dish) => (
                <div key={dish._id}>
                    <h3>{dish.name}</h3>
                    <p>Price: {dish.price}</p>
                    <p>
                        Ingredients:{" "}
                        {dish.ingredients
                            .map((ingredient) => ingredient.name)
                            .join(", ")}
                    </p>
                    {dish.ingredients.some(
                        (ingredient) => ingredient.allergens.length > 0
                    ) && (
                        <p>
                            Allergens:{" "}
                            {dish.ingredients
                                .filter(
                                    (ingredient) =>
                                        ingredient.allergens.length > 0
                                )
                                .flatMap((ingredient) =>
                                    ingredient.allergens.map(
                                        (allergen) => allergen.name
                                    )
                                )
                                .join(", ")}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Menu;
