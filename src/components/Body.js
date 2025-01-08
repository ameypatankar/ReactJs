import React, {useState} from "react";
import Card from './Card';
import resDataList from '../utils/mockData';

const Body = () => {

    const [resList, setResDataList] = useState(resDataList);

    return (
        <div className="body-container">
            <div className="filter"
                onClick={() => {
                    let filteredList = resDataList.filter(res=> res.data.avgRating > 4);
                    console.log(filteredList);
                    setResDataList(filteredList);
                    }
                }
            >
                Top Rated Restaurants
            </div>
            <div className="card-container">
                {
                    resList.map(restaurant=> <Card key={restaurant.data.id} resData={restaurant} />)
                } 
            </div>
        </div>
    )
};

export default Body;