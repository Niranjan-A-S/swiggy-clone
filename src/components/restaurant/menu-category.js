import { MenuItem } from "./menu-item"

export const MenuCategory = ({ categoryInfo: { title, itemCards } }) => {

    const renderMenuItem = () =>
        itemCards?.map(({ card: { info: { name, id, price } } }) =>
            <MenuItem
                key={id}
                itemInfo={{ name, price }}
            />
        );

    return <details className="category">
        <summary className="category-header">{title}</summary>
        <div>
            {renderMenuItem()}
        </div>
    </details>
}