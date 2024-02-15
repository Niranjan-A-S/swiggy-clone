import { useEffect, useState } from "react";
import { getRestaurantMenuAPIUrl } from "../utils/constants";

export const useRestaurantData = (resId) => {
    const [restaurantData, setRestaurantData] = useState(null)

    const fetchRestaurantData = async () => {
        try {
            const response = await fetch(getRestaurantMenuAPIUrl(resId));
            const { data } = await response.json();
            setRestaurantData(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    return restaurantData;
}