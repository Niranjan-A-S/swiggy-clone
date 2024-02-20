import { useParams } from 'react-router-dom';
import { RestaurantCategory } from '../components/restaurant/restaurant-category';
import { RestaurantBanner } from '../components/restaurant/restaurant-banner';
import { Shimmer } from '../components/shimmer';
import { useRestaurantData } from '../hooks/use-restaurant-data';
import { useState } from 'react';

const RestaurantPage = () => {
    const { resId } = useParams();
    const restaurantData = useRestaurantData(resId);
    const [visibleCategory, setVisibleCategory] = useState('');

    if (!restaurantData) return <Shimmer />


    const { name, cuisines, costForTwoMessage, cloudinaryImageId } = restaurantData?.cards[2]?.card?.card?.info;
    const foodCategories = restaurantData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    const renderRestaurantCategories = () => foodCategories?.map(category =>
        <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={visibleCategory === category?.card?.card?.title}
            onClick={() => visibleCategory === category?.card?.card?.title ? setVisibleCategory('') : setVisibleCategory(category?.card?.card?.title)}
        />
    );

    return (
        <div className='px-36'>
            <RestaurantBanner info={{ name, cuisines, costForTwoMessage, cloudinaryImageId }} />
            <ul className='mt-5'>
                {renderRestaurantCategories()}
            </ul>
        </div>
    )
}

export default RestaurantPage;
