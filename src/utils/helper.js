export const getTopRatedRestaurants = (restaurants) => {
    return restaurants.sort((a, b) => b.ratings - a.ratings).shift();
}