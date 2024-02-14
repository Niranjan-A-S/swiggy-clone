import { useEffect, useState } from "react";
import { RestaurantContainer } from "./restaurant/restaurant-container";
import { Filter } from "./toolbar/filter-button";
import { SWIGGY_API_URL } from "../../utils/constants";
import { Shimmer } from "./shimmer";

export const Body = () => {

    const [restaurants, setRestaurants] = useState([]);

    const filterTopRatedRestaurants = () => {
        setRestaurants(restaurants.filter(restaurant => restaurant.info.avgRating > 4.5));
    };

    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGY_API_URL);
            const { data: { cards } } = await response.json();
            const { restaurants: _restaurants } = cards[1]?.card?.card?.gridElements?.infoWithStyle;
            setRestaurants(_restaurants)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return !restaurants.length
        ? <Shimmer />
        : (
            <div className="body">
                <Filter onFilter={filterTopRatedRestaurants} />
                <RestaurantContainer restaurantLists={restaurants} />
            </div> 
        )
}
