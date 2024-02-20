import { useParams } from 'react-router-dom';
import { MenuCategory } from '../components/restaurant/menu-category';
import { RestaurantBanner } from '../components/restaurant/restaurant-banner';
import { Shimmer } from '../components/shimmer';
import { useRestaurantData } from '../hooks/use-restaurant-data';

const RestaurantPage = () => {
    const { resId } = useParams();
    const restaurantData = useRestaurantData(resId);

    if (!restaurantData) return <Shimmer />

    const { name, cuisines, costForTwoMessage, cloudinaryImageId } = restaurantData?.cards[2]?.card?.card?.info;

    const menuCategories = restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1, 5);

    const renderMenuCategories = () => menuCategories?.map(({ card: { card: { title, itemCards } } }) =>
        <MenuCategory
            key={title}
            categoryInfo={{ title, itemCards }}
        />
    );

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

export default RestaurantPage;
