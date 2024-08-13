import React, { useState } from "react";

const RestaurantCategory = ({ categoryName, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantities, setQuantities] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.itemName]: 0 }), {})
  );

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const increaseQuantity = (itemName) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: prevQuantities[itemName] + 1,
    }));
  };

  const decreaseQuantity = (itemName) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: Math.max(prevQuantities[itemName] - 1, 0),
    }));
  };

  return (
    <div key={categoryName} className="mb-4">
      <div
        className="accordion-header cursor-pointer flex justify-between items-center p-4 bg-gray-200 rounded-md"
        onClick={toggleAccordion}
      >
        <h3 className="text-2xl font-semibold capitalize">{categoryName}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <ul className="menu-items list-none p-0 mt-2">
          {items.map((item) => (
            <li key={item.itemName} className="menu-item flex p-4 mb-2 border border-gray-200 rounded-md hover:bg-gray-100">
              <div className="item-image w-24 h-24 rounded-md mr-4 bg-gray-300 flex items-center justify-center">
                {/* Add an icon or placeholder text here */}
              </div>
              <div className="item-details flex flex-col justify-between">
                <h4 className="font-medium">{item.itemName}</h4>
                <p className="item-description text-sm text-gray-500">{item.description}</p>
                <p className="item-price text-lg font-bold">{item.price}</p>
                <div className="item-quantity flex items-center mt-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-md"
                    onClick={() => decreaseQuantity(item.itemName)}
                  >
                    -
                  </button>
                  <span className="mx-2">{quantities[item.itemName]}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-md"
                    onClick={() => increaseQuantity(item.itemName)}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
