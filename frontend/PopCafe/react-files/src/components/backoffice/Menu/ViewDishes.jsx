import React, { useEffect, useState } from "react";
import {
    deleteDish,
    fetchDishes,
    updateDish,
} from "../../../services/dishesService";
import Dish from "./Dish";

const ViewDishes = () => {
    const [dishes, setDishes] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const getDishes = async () => {
            try {
                const data = await fetchDishes();
                setDishes(data);
            } catch (error) {
                console.error("Error fetching dishes:", error);
            }
        };

        getDishes();
    }, []);

    const handleUpdateDish = async (updatedDish) => {
        try {
            const response = await updateDish(updatedDish._id, updatedDish);
            setDishes((prevDishes) => {
                const updatedDishes = prevDishes.map((dish) => {
                    if (dish._id === updatedDish._id) {
                        return response;
                    }
                    return dish;
                });
                return updatedDishes;
            });
        } catch (error) {
            console.error("Error updating dish:", error);
        }
    };

    const handleDeleteDish = async (dishId) => {
        try {
            const confirmDelete = window.confirm(
                "Are you sure you want to delete this dish?"
            );
            if (confirmDelete) {
                await deleteDish(dishId);
                setDishes((prevDishes) =>
                    prevDishes.filter((dish) => dish._id !== dishId)
                );
            }
        } catch (error) {
            console.error("Error deleting dish:", error);
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredDishes = filter
        ? dishes.filter((dish) => dish.type === filter)
        : dishes;

    return (
        <div>
            <h2>Dishes</h2>
            <select value={filter} onChange={handleFilterChange}>
                <option value="">Tutti</option>
                <option value="Colazione">Colazione</option>
                <option value="Pranzo">Pranzo</option>
                <option value="Piadine">Piadine</option>
                <option value="Aperitivo">Aperitivo</option>
                <option value="Bevande">Bevande</option>
            </select>
            {filteredDishes.map((dish) => (
                <Dish
                    key={dish._id}
                    dish={dish}
                    onUpdate={handleUpdateDish}
                    onDelete={handleDeleteDish}
                />
            ))}
        </div>
    );
};

export default ViewDishes;
