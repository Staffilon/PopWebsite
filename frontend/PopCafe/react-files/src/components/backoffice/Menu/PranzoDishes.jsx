import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchDishes } from "../../../services/dishesService";
import { createLunchDishes } from "../../../services/lunchDishesService";

const PranzoDishes = () => {
    const [dishes, setDishes] = useState([]);
    const [selectedDishes, setSelectedDishes] = useState([]);
    const router = useRouter();

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
            toast.success("Piatti caricati con successo!");
        } catch (error) {
            console.error("Error saving selected dishes:", error);
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

    const handleClear = () => {
        // Clear the selected dishes
        setSelectedDishes([]);
    };

    return (
        <div className="dish-table">
            <ToastContainer />
            <h2>Piatti del pranzo</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Prezzi</th>
                        <th>Ingredienti</th>
                        <th>Allergeni</th>
                        <th>Prodotti Surgelati</th>
                    </tr>
                </thead>
                <tbody>
                    {dishes.map((dish) => (
                        <tr key={dish._id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedDishes.includes(dish._id)}
                                    onChange={() =>
                                        handleCheckboxChange(dish._id)
                                    }
                                />
                            </td>
                            <td>{dish.name}</td>
                            <td>€{dish.price}</td>
                            <td>{dish.ingredients.join(", ")}</td>
                            <td>{dish.allergens ? "Si" : "No"}</td>
                            <td>{dish.refrigerated ? "Si" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="buttons-container">
                <button class="button-3" onClick={handleConfirm}>
                    Conferma
                </button>
                <br></br> <br></br>
                <button class="button-3" onClick={handleClear}>
                    Cancella piatto
                </button>
                <br></br>
                <br></br>
            </div>
        </div>
    );
};

export default PranzoDishes;
