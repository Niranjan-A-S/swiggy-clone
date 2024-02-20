import { withOpenLabel } from "../../hoc/with-open-label"
import { RestaurantCard } from "./restaurant-card"

export const RestaurantList = ({ restaurantList }) => {

    const RestaurantCardWithLabel = withOpenLabel(RestaurantCard);
    const renderRestaurantCards = () =>
        restaurantList?.map(({ info }) =>
            info.isOpen
                ? <RestaurantCardWithLabel
                    key={info?.id}
                    data={info}
                />
                : <RestaurantCard
                key={info?.id}
                data={info}
            />
        )

    return <div className="flex flex-wrap gap-6">
        {renderRestaurantCards()}
    </div>
}
