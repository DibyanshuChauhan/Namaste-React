import React from "react";
import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurant, setlistOfRestaurant] = useState([]);

    const fetchRestaurantData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.05605&lng=78.2367565&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const result = await data.json();
        console.log(result);
        setlistOfRestaurant(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurant);
    };

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    return listOfRestaurant.length === 0 ?
        <Shimmer /> :
        (
            <div className="body">
                {
                    listOfRestaurant && listOfRestaurant.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.info.id}
                            restaurant={restaurant}
                        />
                    ))
                }
            </div>
        );
};

export default Body;