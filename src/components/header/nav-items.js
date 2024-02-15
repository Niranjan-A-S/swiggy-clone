import { navItemsMetaData } from "../../utils/constants";
import { NavItem } from "./nav-item";

export const NavItems = () => { 

    const renderNavItem = ({ label, to }) => < NavItem key={label} label={label} to={to} />

    return <ul className="flex gap-8 ">
        {navItemsMetaData.map(renderNavItem)}
    </ul>
}
