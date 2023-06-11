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
        const pranzoDishes = allDishes.filter((dish) => dish.type === "Pranzo");
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
    <div className="dish-table">
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
                  onChange={() => handleCheckboxChange(dish._id)}
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
        <button class="button-3" onClick={handleConfirm}>Conferma</button> 
        <br></br> <br></br>
        <button class="button-3"  onClick={handleClear}>Cancella piatto</button>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default PranzoDishes;
