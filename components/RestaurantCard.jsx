const RestaurantCard = () => {
    return (
        <div className="restaurant_card">
            <div className="restaurant__image">
                <img className="image" src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Restaurant" />
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