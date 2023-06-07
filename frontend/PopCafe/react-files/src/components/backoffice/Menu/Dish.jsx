import React, { useState } from "react";

const Dish = ({ dish, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDish, setEditedDish] = useState({ ...dish });

    const handleDelete = () => {
        onDelete(dish._id);
    };

    const handleEdit = () => {
        if (isEditing) {
            onUpdate(editedDish);
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedDish((prevDish) => ({
            ...prevDish,
            [name]: value,
        }));
    };

    const handleTypeChange = (e) => {
        const { value } = e.target;
        setEditedDish((prevDish) => ({
            ...prevDish,
            type: value,
        }));
    };

    const handleIngredientChange = (index, value) => {
        setEditedDish((prevDish) => {
            const ingredients = [...prevDish.ingredients];
            ingredients[index] = value;
            return {
                ...prevDish,
                ingredients,
            };
        });
    };

    const handleAddIngredient = () => {
        setEditedDish((prevDish) => ({
            ...prevDish,
            ingredients: [...prevDish.ingredients, ""],
        }));
    };

    const handleRemoveIngredient = (index) => {
        setEditedDish((prevDish) => {
            const ingredients = [...prevDish.ingredients];
            ingredients.splice(index, 1);
            return {
                ...prevDish,
                ingredients,
            };
        });
    };

    const handleAllergensChange = () => {
        setEditedDish((prevDish) => ({
            ...prevDish,
            allergens: !prevDish.allergens,
        }));
    };

    const handleRefrigeratedChange = () => {
        setEditedDish((prevDish) => ({
            ...prevDish,
            refrigerated: !prevDish.refrigerated,
        }));
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <select
                        name="type"
                        value={editedDish.type}
                        onChange={handleTypeChange}
                    >
                        <option value="Colazione">Colazione</option>
                        <option value="Pranzo">Pranzo</option>
                        <option value="Piadine">Piadine</option>
                        <option value="Aperitivo">Aperitivo</option>
                        <option value="Bevande">Bevande</option>
                    </select>
                    <br />
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={editedDish.name}
                        onChange={handleInputChange}
                    />
                    <br />
                    <label>Ingredienti:</label>
                    <ul>
                        {editedDish.ingredients.map((ingredient, index) => (
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
                                <button
                                    onClick={() =>
                                        handleRemoveIngredient(index)
                                    }
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleAddIngredient}>
                        Aggiungi Ingrediente
                    </button>
                    <br />
                    <label htmlFor="allergens">Allergeni:</label>
                    <input
                        type="checkbox"
                        name="allergens"
                        checked={editedDish.allergens}
                        onChange={handleAllergensChange}
                    />
                    <br />
                    <label htmlFor="refrigerated">Prodotti Surgelati:</label>
                    <input
                        type="checkbox"
                        name="refrigerated"
                        checked={editedDish.refrigerated}
                        onChange={handleRefrigeratedChange}
                    />
                    <br />
                    <button onClick={handleEdit}>Salva</button>
                    <button onClick={() => setIsEditing(false)}>
                        Elimina Piatto
                    </button>
                </>
            ) : (
                <>
                    <p>Tipo: {dish.type}</p>
                    <p>Nome: {dish.name}</p>
                    <p>
                        Ingredienti:{" "}
                        {isEditing
                            ? editedDish.ingredients.join(", ")
                            : dish.ingredients.join(", ")}
                    </p>
                    <p>Allergeni: {dish.allergens ? "Si" : "No"}</p>
                    <p>Prodotti Surgelati: {dish.refrigerated ? "Si" : "No"}</p>
                    <button onClick={handleEdit}>Modifica</button>
                    <button onClick={handleDelete}>Elimina Piatto</button>
                </>
            )}
        </div>
    );
};

export default Dish;
