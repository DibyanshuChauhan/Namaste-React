import { RESTAURANT_IMAGE_URL } from "./utils/constant";
// To import a named export we always use the same name as the exported variable within the curly braces {}.

const RestaurantCard = () => {
    return (
        <div className="restaurant_card">
            <div className="restaurant__image">
                <img className="image" src={RESTAURANT_IMAGE_URL} alt="Restaurant" />
            </div>
            <div className="restaurant__details">
                <h1>Restaurant Name</h1>
                <p className="cuisines">Cuisines</p>
                <p>Address: 123, ABC Street, XYZ City</p>
                <p>Rating: 4.5</p>
                <p className="delivery">Delivery Time</p>
                <p>Reviews: 1000</p>
            </div>
        </div>
    );
};

export default RestaurantCard;