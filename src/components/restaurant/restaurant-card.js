import { CDN_URL } from "../../utils/constants"

export const RestaurantCard = ({ data: { name, cuisines, avgRating, sla: { slaString }, cloudinaryImageId, costForTwo } }) => {
    return <div className="res-card">
        <img
            alt="res-logo"
            className="res-logo"
            src={CDN_URL + cloudinaryImageId}
            loading="lazy"
        />
        <h3>{name}</h3>
        <span>{cuisines?.join(', ')}</span>
        <span>{avgRating} stars</span>
        <span>{costForTwo}</span>
        <span>{slaString}</span>
    </div>
}

