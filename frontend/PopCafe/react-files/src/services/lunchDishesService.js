import axios from "axios";
import { BASE_LUNCH_DISHES_URL } from "../constants";

const fetchLunchDishes = async () => {
    try {
        const response = await axios.get(BASE_LUNCH_DISHES_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching dishes:", error);
        throw error;
    }
};

const createLunchDishes = async (requestBody) => {
    try {
        const response = await axios.post(BASE_LUNCH_DISHES_URL, requestBody, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating dishes:", error);
        throw error;
    }
};

export { fetchLunchDishes, createLunchDishes };
