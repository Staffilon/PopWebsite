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
        <table>
            <tbody>
                <tr>
                    <th>Tipo</th>
                    <th>Nome</th>
                    <th>Ingredienti</th>
                    <th>Allergeni</th>
                    <th>Prodotti Surgelati</th>
                    <th>Azioni</th>
                </tr>
                {isEditing ? (
                    <tr>
                        <td>
                            <div class="selectdish">
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
                            </div>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                value={editedDish.name}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <ul>
                                {editedDish.ingredients.map(
                                    (ingredient, index) => (
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
                                                    handleRemoveIngredient(
                                                        index
                                                    )
                                                }
                                            >
                                                Elimina
                                            </button>
                                        </li>
                                    )
                                )}
                            </ul>
                            <button
                                onClick={handleAddIngredient}
                                class="button-3"
                            >
                                Aggiungi Ingrediente
                            </button>
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                name="allergens"
                                checked={editedDish.allergens}
                                onChange={handleAllergensChange}
                            />
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                name="refrigerated"
                                checked={editedDish.refrigerated}
                                onChange={handleRefrigeratedChange}
                            />
                        </td>
                        <td>
                            <button onClick={handleEdit} class="button-3">
                                Salva
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                class="button-3"
                            >
                                Elimina Piatto
                            </button>
                        </td>
                    </tr>
                ) : (
                    <tr>
                        <td>{dish.type}</td>
                        <td>{dish.name}</td>
                        <td>{dish.ingredients.join(", ")}</td>
                        <td>{dish.allergens ? "Si" : "No"}</td>
                        <td>{dish.refrigerated ? "Si" : "No"}</td>
                        <td>
                            <button onClick={handleEdit} class="button-3">
                                Modifica
                            </button>
                            <br />
                            <br />
                            <button onClick={handleDelete} class="button-3">
                                Elimina Piatto
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Dish;
