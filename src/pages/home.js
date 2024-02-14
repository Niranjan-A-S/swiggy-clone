import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from ".././utils/constants";
import { RestaurantContainer } from "../components/restaurant/restaurant-container";
import { Shimmer } from "../components/shimmer";
import { FilterButton } from "../components/toolbar/filter-button";
import { SearchBar } from "../components/toolbar/search";

export const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [query, setQuery] = useState('');

    const onQueryChange = (event) => {
        setQuery(event.target.value);
    }

    const onSearch = () => {
        const temp = restaurants?.filter(restaurant => restaurant.info.name.toLowerCase().includes(query.toLowerCase()));
        setFilteredRestaurants(temp);
    }

    const filterTopRatedRestaurants = () => {
        const temp = restaurants?.filter(restaurant => restaurant.info.avgRating > 4.5);
        setFilteredRestaurants(temp);
    };

    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGY_API_URL);
            const { data: { cards } } = await response.json();
            const { restaurants: _restaurants } = cards[1]?.card?.card?.gridElements?.infoWithStyle;
            setRestaurants(_restaurants);
            setFilteredRestaurants(_restaurants);
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
                <div className="toolbar">
                    <FilterButton onFilter={filterTopRatedRestaurants} />
                    <SearchBar
                        query={query}
                        onSearch={onSearch}
                        onChange={onQueryChange} />
                </div>
                <RestaurantContainer restaurantLists={filteredRestaurants} />
            </div>
        )
}
