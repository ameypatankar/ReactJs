import React from 'react';

import { CDN_URL } from '../utils/constant';

const Card = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData.info;
    return (
        <div className="card" style={{background: "#f0f0f0"}}>
            <img className="card-img" src={CDN_URL+cloudinaryImageId} alt="Food"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Ratings</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};

export default Card;