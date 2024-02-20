import { Link } from "react-router-dom";

const isNullOrUndefined = (value) => value === null || value === undefined

export const NavItem = ({ label, to, cartCount }) =>
    <li className="hover:text-[#ffa700]">
        <Link to={to}>
            {label}
            {isNullOrUndefined(cartCount) ? null : `(${cartCount})`}
        </Link>
    </li>