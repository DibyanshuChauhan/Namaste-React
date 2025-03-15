import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    return (
        <div className="header">
            <div className="header__logo">
                <img className="image" src={LOGO_URL} alt="Food App Logo" />
            </div>
            <div className="nav_items">
                <ul className="nav_items__list">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Menu</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <button className="btn1" onClick={() => {
                        btnName === "Login"
                            ? setbtnName("Logout")
                            : setbtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;