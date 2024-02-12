import ReactDOM from "react-dom/client";
import logoImage from "./public/assets/images/logo.png"

const Logo = () => {
    return <div className="logo-container">
        <img
            className="logo"
            src={logoImage}
            loading="lazy"
        />
    </div>
}

const NavItems = () => {
    return <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
}

const Header = () => {
    return <div className="header">
        <Logo />
        <NavItems />
    </div>
}

const Search = () => {
    return <div className="search">
        Search
    </div>
}

const RestaurantCard = ({ resData: { resName, cuisine, ratings, deliveryTime, imageUrl } }) => {
    return <div className="res-card">
        <img
            alt="res-logo"
            className="res-logo"
            src={imageUrl}
        />
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{ratings} stars</h4>
        <h4>{deliveryTime} minutes</h4>
    </div>
}

const RestaurantContainer = () => {
    return <div className="res-container">
        <RestaurantCard
            resData={{
                resName: "Meghana Foods",
                cuisine: "Biriyani, North Indian, Asian",
                ratings: 4.5,
                deliveryTime: 48,
                imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"
            }}
        />
        <RestaurantCard
            resData={{
                resName: "Meghana Foods",
                cuisine: "Biriyani, North Indian, Asian",
                ratings: 4.5,
                deliveryTime: 48,
                imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"
            }}
        />
    </div>
}

const Body = () => {
    return <div className="body">
        <Search />
        <RestaurantContainer />
    </div>
}

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
        {/* Footer */}
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);