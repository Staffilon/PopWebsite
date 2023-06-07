import axios from "axios";
import { BASE_DISHES_URL } from "../constants";

const fetchDishes = async () => {
    try {
        const response = await axios.get(BASE_DISHES_URL);
        return response.data.dishes;
    } catch (error) {
        console.error("Error fetching dishes:", error);
        throw error;
    }
};

const deleteDish = async (dishId) => {
    try {
        const response = await axios.delete(`${BASE_DISHES_URL}/${dishId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting dish:", error);
        throw error;
    }
};

const updateDish = async (dishId, updatedDish) => {
    try {
        const response = await axios.put(
            `${BASE_DISHES_URL}/${dishId}`,
            updatedDish,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error updating dish:", error);
        throw error;
    }
};

const createDish = async (dishData) => {
    try {
        const response = await axios.post(BASE_DISHES_URL, dishData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating dish:", error);
        throw error;
    }
};

export { fetchDishes, deleteDish, updateDish, createDish };
