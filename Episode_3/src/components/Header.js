import { useState } from "react";

const Header = () => {
    const [buttonLoginLogout, setButtonLoginLogout] = useState("Login");

    return (
        <div className="main_header">
            <div className="logo">
                <h5 className="">LOGO</h5>
            </div>
            <div className="menu_item">
                <ul>
                    <li className="menu_item_list">Home</li>
                    <li className="menu_item_list">About</li>
                    <li className="menu_item_list">Menu</li>
                    <li className="menu_item_list">Contact Us</li>
                    <li className="menu_item_list">Cart</li>
                    <button className="btn" onClick={() => { setButtonLoginLogout("Logout") }} >{buttonLoginLogout}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;