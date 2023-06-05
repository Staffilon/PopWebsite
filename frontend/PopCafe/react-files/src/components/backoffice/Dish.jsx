import React, { useState } from "react";
import { deleteDish, updateDish } from "../../services/dishesService";

const Dish = ({ dish, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDish, setEditedDish] = useState({ ...dish });

    const handleDelete = async () => {
        try {
            // Show confirmation dialog or any other UI element here if needed
            const confirmDelete = window.confirm(
                "Are you sure you want to delete this dish?"
            );

            if (confirmDelete) {
                // Send the request to delete the dish
                await deleteDish(dish._id);

                // Call the onDelete callback to update the state in the parent component
                onDelete(dish._id);
            }
        } catch (error) {
            console.error("Error deleting dish:", error);
        }
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

    return (
        <div className="dish">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="name"
                        value={editedDish.name}
                        onChange={handleInputChange}
                    />
                    {/* Add more input fields for other dish details */}

                    <button onClick={handleEdit}>Save</button>
                </div>
            ) : (
                <div>
                    <p>Name: {dish.name}</p>
                    {/* Render other dish details */}

                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
            <hr />
        </div>
    );
};

export default Dish;
