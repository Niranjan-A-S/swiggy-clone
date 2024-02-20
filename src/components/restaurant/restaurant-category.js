import { useState } from "react";
import { ItemList } from "./item-list";

export const RestaurantCategory = (props) => {

    const { title, itemCards } = props?.data;

    return <div className="flex flex-col bg-gray-200 my-6 py-2 px-4 rounded-md shadow-xl">
        <header
            className="flex justify-between w-full"
            onClick={() => props.onClick(title)}
        >
            <span className="text-xl font-bold">{title} ({itemCards.length})</span>
            <span
                className={`cursor-pointer text-xl hover:transform hover:scale-125 transition duration-100 ease-in>`}
            >
                {!props.showItems ? "⬇" : "➡"}
            </span>
        </header>
        {props.showItems ? <ItemList items={itemCards} /> : null}
    </div>
}