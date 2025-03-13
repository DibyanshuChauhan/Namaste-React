import { RESTAURANT_IMAGE_URL } from "../utils/constant";
// To import a named export we always use the same name as the exported variable within the curly braces {}.

const RestaurantCard = ({ restaurant }) => {
    // console.log(restaurant);
    // console.log(restaurant.info.cloudinaryImageId);
    return (
        <div className="restaurant_card">
            <div className="restaurant__image">
                <img className="image" src={RESTAURANT_IMAGE_URL + restaurant?.info?.cloudinaryImageId} alt="Restaurant" />
            </div>
            <div className="restaurant__details">
                <h1>{restaurant?.info?.name}</h1>
                <p className="cuisines">{restaurant?.info?.cuisines.join(", ")}</p>
                <p>Area: {restaurant?.info?.areaName}</p>
                <p>Rating: {restaurant?.info?.avgRating || restaurant?.info?.avgRatingString}</p>
                <p className="delivery">{restaurant?.info?.sla?.slaString}</p>
                <p>{restaurant?.info?.costForTwo}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;