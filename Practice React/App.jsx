import ReactDOM from "react-dom/client";

// Getting the root element from HTML
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="image" src="https://marketplace.canva.com/EAFowsrK6x8/1/0/1600w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-rYbQJ_qtaz8.jpg" alt="Food App Logo" />
            </div>
            <input className="textarea" type="text" placeholder="Enter the Item to Search..." />
            <button className="btn">Search</button>
            <div className="nav_items">
                <ul className="nav_items__list">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Menu</li>
                    <li>Order</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

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

const Body = () => {
    return (
        <div className="body">
            <RestaurantCard />
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
root.render(<AppLayout />);