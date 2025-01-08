import React from 'react';

import { CDN_URL } from '../utils/constant';

const Card = (props) => {
    const {resData} = props;
    const {cloudinaryID, name, cuisines, avgRating, costForTwo, deliveryTime} = resData.data;
    return (
        <div className="card" style={{background: "#f0f0f0"}}>
            <img className="card-img" src={CDN_URL+cloudinaryID} alt="Food"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Ratings</h4>
            <h4>₹{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
};

export default Card;