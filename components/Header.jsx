import { LOGO_URL } from "./utils/constant";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="image" src={LOGO_URL} alt="Food App Logo" />
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

export default Header;