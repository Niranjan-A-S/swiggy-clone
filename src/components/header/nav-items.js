import { useSelector } from "react-redux";
import { navItemsMetaData } from "../../utils/constants";
import { NavItem } from "./nav-item";

export const NavItems = () => { 

    const cartCount = useSelector(({ cart: { items } }) => items.length)

    const renderNavItem = ({ label, to }) => < NavItem key={label} label={label} to={to} cartCount={label === 'Cart' ? cartCount : undefined} />

    return <ul className="flex gap-8 ">
        {navItemsMetaData.map(renderNavItem)}
    </ul>
}
