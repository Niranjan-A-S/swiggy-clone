import { CDN_URL } from "../../utils/constants"
import { resolveToString } from "../../utils/helper"

export const RestaurantBanner = ({ info: { name, cuisines, costForTwoMessage, cloudinaryImageId } }) => <div>
    <img
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        loading="lazy"
        height={200}
    />
    <h1>{name}</h1>
    <h4 >{resolveToString(cuisines)}</h4>
    <h4>{costForTwoMessage}</h4>
</div>
