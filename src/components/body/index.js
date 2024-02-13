import { useState } from "react";
import { restaurantMockData } from "../../utils/constants";
import { RestaurantContainer } from "./restaurant/restaurant-container"
import { Filter } from "./toolbar/filter-button";
import { getTopRatedRestaurants } from "../../utils/helper";

export const Body = () => {

    const [restaurants, setRestaurants] = useState(restaurantMockData);

    const filterTopRatedRestaurants = () => {
        setRestaurants(restaurants.filter(restaurant => restaurant.ratings > 4));
    }

    return <div className="body">
        <Filter onFilter={filterTopRatedRestaurants} />
        <RestaurantContainer restaurantLists={restaurants} />
    </div>
}
