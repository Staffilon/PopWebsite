import React, { useState } from "react";
import { createDish } from "../../../services/dishesService";

const CreateDishForm = ({}) => {
    const [dishData, setDishData] = useState({
        type: "",
        name: "",
        price: "",
        ingredients: [],
        allergens: false,
        refrigerated: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDishData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddIngredient = () => {
        setDishData((prevData) => ({
            ...prevData,
            ingredients: [...prevData.ingredients, ""],
        }));
    };

    const handleIngredientChange = (index, value) => {
        setDishData((prevData) => {
            const ingredients = [...prevData.ingredients];
            ingredients[index] = value;
            return {
                ...prevData,
                ingredients,
            };
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setDishData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    const handleCreateDish = async () => {
        try {
            const createdDish = await createDish(dishData);
            // Show success message using a popup or toast notification
            alert("Dish created successfully!");

            // Clear out the form fields
            setDishData({
                type: "",
                name: "",
                price: "",
                ingredients: [],
                allergens: false,
                refrigerated: false,
            });
        } catch (error) {
            console.error("Error creating dish:", error);
        }
    };

    return (
        <div>
            <h2>Create Dish</h2>
            <label htmlFor="type">Type:</label>
            <select
                name="type"
                value={dishData.type}
                onChange={handleInputChange}
            >
                <option value="">Select Type</option>
                <option value="Colazione">Colazione</option>
                <option value="Pranzo">Pranzo</option>
                <option value="Piadine">Piadine</option>
                <option value="Aperitivo">Aperitivo</option>
                <option value="Bevande">Bevande</option>
            </select>
            <br />
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                value={dishData.name}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="price">Price:</label>
            <input
                type="number"
                name="price"
                value={dishData.price}
                onChange={handleInputChange}
            />
            <br />
            <label>
                Ingredients:
                <ul>
                    {dishData.ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <input
                                type="text"
                                value={ingredient}
                                onChange={(e) =>
                                    handleIngredientChange(
                                        index,
                                        e.target.value
                                    )
                                }
                            />
                        </li>
                    ))}
                </ul>
            </label>
            <button onClick={handleAddIngredient}>Add Ingredient</button>
            <br />
            <label>
                Allergens:
                <input
                    type="checkbox"
                    name="allergens"
                    checked={dishData.allergens}
                    onChange={handleCheckboxChange}
                />
            </label>
            <br />
            <label>
                Refrigerated:
                <input
                    type="checkbox"
                    name="refrigerated"
                    checked={dishData.refrigerated}
                    onChange={handleCheckboxChange}
                />
            </label>
            <br />
            <button onClick={handleCreateDish}>Create</button>
        </div>
    );
};

export default CreateDishForm;
