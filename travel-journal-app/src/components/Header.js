import React from "react";
import "./Header.css";
import globeIcon from "../icons/globe-icon.png";

const Header = () => {
    return (
        <div className="header">
            <img src={globeIcon} alt="Icon of globe" />
            <p>my travel journal</p>
        </div>
    );
};

export default Header;
