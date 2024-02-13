export const RestaurantCard = ({ resData: { resName, cuisine, ratings, deliveryTime, imageUrl } }) => {
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

