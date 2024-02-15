import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from ".././utils/constants";
import { RestaurantList } from "../components/restaurant/restaurant-list";
import { Shimmer } from "../components/shimmer";
import { FilterButton } from "../components/toolbar/filter-button";
import { SearchBar } from "../components/toolbar/search";

const HomePage = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [query, setQuery] = useState('');

    const onQueryChange = (event) => {
        setQuery(event.target.value);
        setFilteredRestaurants(restaurantList?.filter(restaurant => restaurant.info.name.toLowerCase().includes(query.toLowerCase())));
    }

    const filterTopRatedRestaurants = () => {
        setFilteredRestaurants(restaurantList?.filter(restaurant => restaurant.info.avgRating > 4.5));
    };

    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGY_API_URL);
            const { data: { cards } } = await response.json();
            const { restaurants } = cards[1]?.card?.card?.gridElements?.infoWithStyle;
            setRestaurantList(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!restaurantList.length) return <Shimmer />;

    return <div className="px-24 grid gap-6">
        <div className="flex gap-4">
            <FilterButton onFilter={filterTopRatedRestaurants} />
            <SearchBar
                query={query}
                onChange={onQueryChange} />
        </div>
        <RestaurantList restaurantList={filteredRestaurants} />
    </div>
}

export default HomePage;