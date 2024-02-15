import { RestaurantCard } from "./restaurant-card"

export const RestaurantList = ({ restaurantList }) => {
    const renderRestaurantCards = () =>
        restaurantList?.map(({ info }) =>
            <RestaurantCard
                key={info?.id}
                data={info}
            />
        )

    return <div className="flex flex-wrap gap-6">
        {renderRestaurantCards()}
    </div>
}
