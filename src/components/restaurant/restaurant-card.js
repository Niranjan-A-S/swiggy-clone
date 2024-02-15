import { useNavigate } from "react-router-dom"
import { CDN_URL } from "../../utils/constants"
import { resolveToString } from "../../utils/helper";

export const RestaurantCard = ({ data: { name, cuisines, avgRating, sla: { slaString }, cloudinaryImageId, costForTwo, id } }) => {

    const navigate = useNavigate();
    const navigateToMenu = () => {
        navigate(`/restaurant/${id}`)
    }

    return <div className="w-[250px] max-h-[300px] flex flex-col gap-1 cursor-pointer hover:scale-105 transition duration-100 ease-in" onClick={navigateToMenu}>
        <img
            alt="res-logo"
            className="w-full h-[170px] rounded-xl"
            src={CDN_URL + cloudinaryImageId}
            loading="lazy"
        />
        <span className="text-lg font-semibold">{name}</span>
        <span className="text-md font-semibold text-ellipsis overflow-hidden">⭐{" "}{avgRating}{" "}{slaString}</span>
        <span className="text-sm text-ellipsis text-gray-500 overflow-hidden">{resolveToString(cuisines)}</span>
    </div>
}

