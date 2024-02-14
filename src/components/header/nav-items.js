import { Link } from "react-router-dom";

export const NavItems = () => {
    return <div className="nav-items">
        <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='about'>About Us</Link></li>
            <li><Link to='contact'>Contact Us</Link></li>
            <li>Cart</li>
        </ul>
    </div>
}
