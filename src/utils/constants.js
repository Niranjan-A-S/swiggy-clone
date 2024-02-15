export const CDN_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

export const SWIGGY_API_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

export const getRestaurantMenuAPIUrl = (resId) => `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

export const navItemsMetaData = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About Us',
        to: 'about'
    },
    {
        label: 'Contact Us',
        to: 'contact'
    },
    {
        label: 'Cart',
    }
]