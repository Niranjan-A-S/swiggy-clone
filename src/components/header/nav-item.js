import { Link } from "react-router-dom";

export const NavItem = ({ label, to }) => <li className="hover:text-[#ffa700]"><Link to={to}>{label}</Link> </li>