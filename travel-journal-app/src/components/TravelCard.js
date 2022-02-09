import React from "react";
import "./TravelCard.css";
import locationIcon from "../icons/location.png";

const TravelCard = (props) => {
    const data = props.data;
    const img = require(`../images/${data.image}`);
    return (
        <div>
            <div className="travel-card">
                <img src={img} className="location-image" alt="" />
                <div className="travel-card__details">
                    <div className="locations">
                        <img
                            src={locationIcon}
                            className="location-icon"
                            alt=""
                        />
                        <p>{data.location}</p>
                        <a href={data.mapLink}>View on Google Maps</a>
                    </div>
                    <h1>{data.title}</h1>
                    <h5>{`${data.startDate} - ${data.endDate}`}</h5>
                    <p>{data.description}</p>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default TravelCard;
