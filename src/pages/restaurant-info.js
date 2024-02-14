import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantMenuAPIUrl } from '../utils/constants';
import { Shimmer } from '../components/shimmer';
import { RestaurantBanner } from '../components/restaurant/restaurant-banner';
import { MenuCategory } from '../components/restaurant/menu-category';

export const RestaurantInfo = () => {

    const { resId } = useParams();

    const [restaurantData, setRestaurantData] = useState(null)

    const fetchRestaurantMenu = async () => {
        try {
            const response = await fetch(getRestaurantMenuAPIUrl(resId));
            const { data } = await response.json();
            setRestaurantData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchRestaurantMenu();
    }, []);

    if (!restaurantData) return <Shimmer />

    const { name, cuisines, costForTwoMessage, cloudinaryImageId } = restaurantData?.cards[0]?.card?.card?.info;

    const menuCategories = restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1, 5);

    const renderMenuCategories = () => {
        if (!menuCategories) return;
        return menuCategories.map(({ card: { card: { title, itemCards } } }) => {
            return <MenuCategory key={title} categoryInfo={{ title, itemCards }} />
        })
    }


    return (
        <div className='menu'>
            <RestaurantBanner info={{ name, cuisines, costForTwoMessage, cloudinaryImageId }} />
            <h2>Menu</h2>
            <ul>
                {renderMenuCategories()}
            </ul>
        </div>
    )
}
