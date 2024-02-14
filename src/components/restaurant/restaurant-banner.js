import { CDN_URL } from "../../utils/constants"

export const RestaurantBanner = ({ info: { name, cuisines, costForTwoMessage, cloudinaryImageId } }) => {
    return <div>
        <img
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
            loading="lazy"
            height={200}
        />
        <h1>{name}</h1>
        <span>{cuisines.join(',')} - </span>
        <span>{costForTwoMessage}</span>
    </div>
}