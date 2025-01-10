import React, {useState, useEffect} from "react";
import Card from './Card';
import Shimmer from './Shimmer';

import { NavLink } from 'react-router';

import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

    const [resList, setResDataList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        console.log("useEffect called");
        fetchData();

        //Just for practice
        postData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();

        //optional chaining
        const resDataList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResDataList(resDataList);
        setFilteredList(resDataList);
    }

    //Post method of fetch just for practice
    const postData = async () => {
        const postRes = await fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: 'Hello From React JS',
                userId: 5,
            })
        })
        .then(res => res.json())
        console.log(postRes);
    }

    //Custom hook to check internet connection
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return (
            <h1>
                Looks like you're offline! Please check your internet connection. 
            </h1>
        )
    }


    //conditional rendering
    return resList.length === 0 ? <Shimmer /> : (
        <div className="body-container">
            <div className="filter">
                <div className="search">
                    <input type="text"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button onClick={() => {
                        console.log(searchText);
                        const filteredRestaurant = resList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredList(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        let filterList = filteredList.filter(res=> res.info.avgRating > 4);
                        console.log(filterList);
                        setFilteredList(filterList);
                        }
                    }
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="card-container">
                {
                    filteredList.map(restaurant=> (
                        <NavLink to={'/restaurant/'+restaurant.info.id} key={restaurant.info.id} >
                            <Card resData={restaurant} />
                        </NavLink>
                    ))
                } 
            </div>
        </div>
    )
};

export default Body;