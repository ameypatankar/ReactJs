import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

import {useParams} from 'react-router';
import {MENU_API} from '../utils/constant';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const {resId} = useParams();
    console.log(resId);

    const menuData = useRestaurantMenu(resId);

    if(menuData === null) return <Shimmer />;

    const {name, costForTwoMessage, cuisines} = menuData?.cards[2]?.card?.card?.info;
    const {itemCards} = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return  (    
        <div className="res-container">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key={item?.card?.info?.id}> {item?.card?.info?.name} - ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li> )}
            </ul>
        </div>
    );
}

export default RestaurantMenu;