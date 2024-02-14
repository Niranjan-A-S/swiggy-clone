import { RestaurantCard } from "./restaurant-card"

export const RestaurantContainer = ({ restaurantLists: restaurantList }) => {
    return <div className="res-container">
        {restaurantList.map(restaurantData => <RestaurantCard key={restaurantData?.info?.id} data={restaurantData?.info} />)}
    </div>
}
