import React from "react";
import instagramIcon from "../icons/instagram-icon.png";
import twitterIcon from "../icons/twitter-icon.png";
import githubIcon from "../icons/github-icon.png";
import facebookIcon from "../icons/facebook-icon.png";
import "./Footer.css";

const Footer = (props) => {
    return (
        <div className="footer">
            <a href="https://twitter.com/" target="_blank">
                <img src={twitterIcon} />
            </a>
            <a
                href="https://www.facebook.com/profile.php?id=100004878122297"
                target="_blank"
            >
                <img src={facebookIcon} />
            </a>
            <a href="https://www.instagram.com/__raj_sahu/" target="_blank">
                <img src={instagramIcon} />
            </a>
            <a href="https://github.com/rajsahu213" target="_blank">
                <img src={githubIcon} />
            </a>
        </div>
    );
};

export default Footer;
