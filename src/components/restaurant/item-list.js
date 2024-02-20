import { FoodItem } from "./food-item"

export const ItemList = ({ items }) => {
    const renderItem = ({ card: { info } }) => <FoodItem key={info.id} data={info} />

    return (
        <div className="grid justify-self-start gap-4 py-1">
            {items.map(renderItem)}
        </div>
    )
} 