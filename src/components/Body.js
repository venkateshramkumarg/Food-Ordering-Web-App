import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_URL, restaurantData } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import {PromotedLabel} from "./RestaurantCard";

const Body = () => {
  const [resData, setResData] = useState(restaurantData);
  const [filterData, setFilterData] = useState(restaurantData);
  const [searchData, setSearchData] = useState("");
  const Promoted=PromotedLabel(RestaurantCard)
  const handleSearch = (value) => {
    setSearchData(value);
    const filteredData = resData.filter((val) =>
      val.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setFilterData(filteredData);
  };

  const handleAll = () => {
    setFilterData(restaurantData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1 className="text-center text-red-500 font-bold p-4">
        Oops!! No Internet Connection
      </h1>
    );
  }

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <div className="search w-full max-w-sm">
          <input
            type="text"
            value={searchData}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search Restaurants..."
          />
        </div>
        <div className="filter-btn flex space-x-2">
          <button
            onClick={() => {
              const filteredData = resData.filter((res) => res.rating > 4);
              setFilterData(filteredData);
            }}
            className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Top Rated Restaurants
          </button>
          <button
            onClick={handleAll}
            className="px-4 py-2 rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
          >
            All Restaurants
          </button>
        </div>
      </div>

      <div className="res_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterData.map((restaurant) => (
          <Link
            key={restaurant.resId}
            to={`/restaurant/${restaurant.resId}`}
            className="hover:shadow-sm"
          >
            {restaurant.promoted?<Promoted resData={restaurant}/>:<RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
