import React from "react";
import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    // Whenever the State variable updates, react triggers a reconciliation process to update the UI or re-render the component.
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");

    const fetchRestaurantData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.05605&lng=78.2367565&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const result = await data.json();
        console.log(result);
        setlistOfRestaurant(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    return listOfRestaurant.length === 0 ?
        <Shimmer /> :
        (
            <div className="body">

                <input className="textarea" type="text"
                    placeholder="Enter the Item to Search..."
                    value={searchText}
                    onChange={(e) => setsearchText(e.target.value)}
                />
                <button onClick={() => {
                    const FilteredRestaurant = listOfRestaurant.filter(
                        (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(FilteredRestaurant);
                }} className="btn">Search</button>

                <button onClick={() => {
                    const filteredList = FilteredRestaurant.filter(
                        (restaurant) => restaurant.info.avgRating > 4);
                    setlistOfRestaurant(filteredList
                    )
                }} className="btn">Top Rated Restaurants...</button>


                {
                    FilteredRestaurant && FilteredRestaurant.map((restaurant) => (
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