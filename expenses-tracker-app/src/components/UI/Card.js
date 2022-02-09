import "./Card.css";
import React from "react";

const Card = (props) => {
    const allClasses = "card " + props.className;
    return <div className={allClasses}>{props.children}</div>;
};

export default Card;
