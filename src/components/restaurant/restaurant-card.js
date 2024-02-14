import { useNavigate } from "react-router-dom"
import { CDN_URL } from "../../utils/constants"

export const RestaurantCard = ({ data: { name, cuisines, avgRating, sla: { slaString }, cloudinaryImageId, costForTwo, id } }) => {

    const navigate = useNavigate();

    const navigateToMenu = () => {
        navigate(`/restaurant/${id}`)
    }

    return <div className="res-card" onClick={navigateToMenu}>
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

