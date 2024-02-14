import { MenuItem } from "./menu-item"

export const MenuCategory = ({ categoryInfo: {
    title, itemCards
} }) => {
    return <details className="category">
        <summary className="category-header">{title}</summary>
        <div>
            {itemCards?.map(({ card: { info: { name, id, price } } }) => {
                return <MenuItem key={id} itemInfo={{ name, price }} />
            })}
        </div>
    </details>
}