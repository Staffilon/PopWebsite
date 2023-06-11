import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    deleteDish,
    fetchDishes,
    updateDish,
} from "../../../services/dishesService";
import Dish from "./Dish";

const ViewDishes = () => {
    const [dishes, setDishes] = useState([]);
    const [filter, setFilter] = useState("");
    const router = useRouter();

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
            if (error.response && error.response.status === 401) {
                toast.error(
                    "Sessione scaduta oppure accesso non autorizzato, verrai inoltrato/a in pochi secondi al login."
                );
                setTimeout(() => {
                    router.push("/login");
                }, 3000); // Delay of 2 seconds before redirecting
            } else {
                toast.error("E' accaduto un errore, riprova.");
            }
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
            if (error.response && error.response.status === 401) {
                toast.error(
                    "Sessione scaduta oppure accesso non autorizzato, verrai inoltrato/a in pochi secondi al login."
                );
                setTimeout(() => {
                    router.push("/login");
                }, 3000); // Delay of 2 seconds before redirecting
            } else {
                toast.error("E' accaduto un errore, riprova.");
            }
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
            <ToastContainer />
            <select value={filter} onChange={handleFilterChange}>
                <option value="">Tutti</option>
                <option value="Colazione">Colazione</option>
                <option value="Pranzo">Pranzo</option>
                <option value="Piadine">Piadine</option>
                <option value="Aperitivo">Aperitivo</option>
                <option value="Bevande">Bevande</option>
                <option value="Brunch">Brunch</option>
            </select>
            <hr></hr>
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
