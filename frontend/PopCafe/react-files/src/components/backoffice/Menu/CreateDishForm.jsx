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
            <label htmlFor="type">Tipo:</label>
            <select
                name="type"
                value={dishData.type}
                onChange={handleInputChange}
            >
                <option value="">Seleziona</option>
                <option value="Colazione">Colazione</option>
                <option value="Pranzo">Pranzo</option>
                <option value="Piadine">Piadine</option>
                <option value="Aperitivo">Aperitivo</option>
                <option value="Bevande">Bevande</option>
            </select>
            <br />
            
            <hr></hr>
            <label htmlFor="name">Nome:</label>
            <input
                type="text"
                name="name"
                value={dishData.name}
                onChange={handleInputChange}
            />
            
            <br />
            <br />
            <label htmlFor="price">Prezzo:</label>
            
            <input
                type="number"
                name="price"
                value={dishData.price}
                onChange={handleInputChange}
            />
            <hr></hr>
            <br />
            <label>
                Ingredienti:
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
           
            <h6>Clicca qui per aggiungere</h6> <button onClick={handleAddIngredient}>Aggiungi ingredienti</button> 
          
            <br />
            <hr></hr>
            <label>
                Spunta per prodotti - allergeni:
                <input
                    type="checkbox"
                    name="allergens"
                    checked={dishData.allergens}
                    onChange={handleCheckboxChange}
                />
            </label>
            <br />
            <label>
                Spunta per prodotti surgelati:
                <input
                    type="checkbox"
                    name="refrigerated"
                    checked={dishData.refrigerated}
                    onChange={handleCheckboxChange}
                />
            </label>
            <br />
            <button onClick={handleCreateDish}>Inserisci</button>

            <br />
            <br />
        </div>
        
    );
};

export default CreateDishForm;
