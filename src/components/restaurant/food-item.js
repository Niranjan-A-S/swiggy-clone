import { CDN_URL } from "../../utils/constants"

export const FoodItem = ({ data: { name, price, description, defaultPrice, imageId } }) => {
    return <div className="flex  border-gray-300 border-b-2 py-2 gap-4 justify-between">
        <div className="flex flex-col mt-2">
            <span className="text-md font-semibold">{name} - Rs. {(price || defaultPrice) / 100}</span>
            <p className="text-xs">{description}</p>
        </div>
        <div className="grid justify-items-center">
            <img
                src={CDN_URL + imageId}
                className="w-20 h-20 rounded-full"
            >
            </img>
            <div className="flex gap-2 bottom-0 text-slate-500 font-bold">
                <button className="font-bold" >-</button>
                Add
                <button className="font-bold">+</button>
            </div>
        </div>  
    </div >
}