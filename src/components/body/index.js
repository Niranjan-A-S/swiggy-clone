import { RestaurantContainer } from "./restaurant/restaurant-container"
import { Search } from "./search"

export const Body = () => {
    return <div className="body">
        <Search />
        <RestaurantContainer />
    </div>
}
