import { CDN_URL } from "../../utils/constants"
import { resolveToString } from "../../utils/helper"

export const RestaurantBanner = ({ info: { name, cuisines, costForTwoMessage, cloudinaryImageId } }) => <div className="flex flex-col">
    <img
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        loading="lazy"
        className="w-[200px] h-[170px] rounded-xl"
    />
    <h1 className="text-3xl font-bold">{name}</h1>
    <h4 className="text-xl" >{resolveToString(cuisines)}</h4>
    <h4 className="text-sm text-slate-600">{costForTwoMessage}</h4>
</div>