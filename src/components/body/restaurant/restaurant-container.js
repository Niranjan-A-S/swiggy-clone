import { RestaurantCard } from "./restaurant-card"

export const RestaurantContainer = () => {
    return <div className="res-container">
        <RestaurantCard
            resData={{
                resName: "Meghana Foods",
                cuisine: "Biriyani, North Indian, Asian",
                ratings: 4.5,
                deliveryTime: 48,
                imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"
            }}
        />
        <RestaurantCard
            resData={{
                resName: "Meghana Foods",
                cuisine: "Biriyani, North Indian, Asian",
                ratings: 4.5,
                deliveryTime: 48,
                imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"
            }}
        />
    </div>
}
