import React from "react";
import { resMenu } from "./utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = resMenu.find((res) => res.resId === Number(id));
  const menu = restaurant ? restaurant.menu : {};

  return (
    <div className="menu container mx-auto px-4 py-8">
      {restaurant ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{restaurant.resName}</h1>
          <h2 className="mb-6">{restaurant.offers}</h2>

          {Object.entries(menu).map(([categoryName, items]) => (
            <RestaurantCategory key={categoryName} categoryName={categoryName} items={items} />
          ))}

        </>
      ) : (
        <p className="text-center text-red-500 font-bold">
          Restaurant not found
        </p>
      )}
    </div>
  );
};

export default RestaurantMenu;
