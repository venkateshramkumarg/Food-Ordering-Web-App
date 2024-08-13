export const LOGO_URL="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg";

export const IMAGE_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

export const API_URL="https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"

export const restaurantData = [
    {
      resId:1,
      name: 'Barbeque Nation',
      cuisine: 'North Indian, Barbeque',
      rating: 3.9,
      promoted:true,
      deliveryTime: '20 minutes',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYWYSsswAMfc1xGX8JPHHit9zNFZFPl4BaQ&s'
    },
    {
      resId:2,
      name: 'Pizza Hut',
      cuisine: 'Pizza, Italian',
      rating: 4.2,
      promoted:false,
      deliveryTime: '30 minutes',
      imageUrl: 'https://play-lh.googleusercontent.com/aVcnk6c53Z3KKRTi0ivDYucToT1SEfPrOUaLr3b7HVeVC6nXtVDaPCqI3U7_d94IYjQ'
    },
    {
      resId:3,
      name: 'Subway',
      cuisine: 'Sandwich, Fast Food',
      rating:4.0,
      promoted:false,
      deliveryTime: '15 minutes',
      imageUrl: 'https://www.allrecipes.com/thmb/Sb7Xjv5oJJuovAoZCg1IO4Bt3vg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-subway-4x3-6e1f8bb7150647bbbc16a0605a394b86.jpg'
    },
    {
      resId:4,
      name: 'Domino\'s Pizza',
      cuisine: 'Pizza, Fast Food',
      rating: 4.1,
      promoted:true,
      deliveryTime: '25 minutes',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/640px-Dominos_pizza_logo.svg.png'
    },
    {
      resId:5,
      name: 'KFC',
      cuisine: 'Chicken, Fast Food',
      rating: 3.8,
      promoted:false,
      deliveryTime: '20 minutes',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/57/KFC_logo-image.svg'
    },
    {
      resId:6,
      name: 'Burger King',
      cuisine: 'Burgers, Fast Food',
      rating: 4,
      promoted:false,
      deliveryTime: '18 minutes',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eBpgSnypA18UiTSZ8VDBc6qlZCFb3yadzA&s'
    },
    {
      resId:7,
      name: 'Taco Bell',
      cuisine: 'Mexican, Fast Food',
      rating: 3.7,
      promoted:false,
      deliveryTime: '22 minutes',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2P3q3Sn5OGYW4GCkUiBVJAsbYi10MkoasZQ&s'
    },
    {
      resId:8,
      name: 'McDonald\'s',
      cuisine: 'Burgers, Fast Food',
      rating: 4.3,
      promoted:true,
      deliveryTime: '20 minutes',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/McDonald%27s_square_2020.svg/800px-McDonald%27s_square_2020.svg.png'
    },
    {
      resId:9,
      name: 'Starbucks',
      cuisine: 'Cafe, Beverages',
      rating: 3.5,
      promoted:false,
      deliveryTime: '15 minutes',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png'
    },
    {
      resId:10,
      name: 'Dunkin\' Donuts',
      cuisine: 'Donuts, Cafe',
      rating:4.2,
      promoted:false,
      deliveryTime: '12 minutes',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzI6mhT11_YXg8l5-Mej7saKuQhPvXUUopTQ&s'
    }
  ];

  export const resMenu = [
    {
      resId: 1,
      resName: 'Barbeque Nation',
      offers: '10% off on orders above ₹500',
      menu: {
        starters: [
          { itemName: 'Paneer Tikka', price: '₹499', description: 'Grilled paneer cubes marinated in spices' },
          { itemName: 'Chicken Tikka', price: '₹549', description: 'Grilled chicken cubes marinated in spices' }
        ],
        mains: [
          { itemName: 'Chicken Biryani', price: '₹599', description: 'Aromatic rice dish with spices and chicken' },
          { itemName: 'Mutton Biryani', price: '₹699', description: 'Aromatic rice dish with spices and mutton' }
        ],
        desserts: [
          { itemName: 'Gulab Jamun', price: '₹199', description: 'Soft fried dough balls soaked in sugar syrup' },
          { itemName: 'Rasmalai', price: '₹249', description: 'Cottage cheese dumplings in sweetened milk' }
        ]
      }
    },
    {
      resId: 2,
      resName: 'Pizza Hut',
      offers: 'Buy 1 Get 1 Free on Medium Pizzas',
      menu: {
        starters: [
          { itemName: 'Garlic Bread', price: '₹149', description: 'Bread topped with garlic and butter' },
          { itemName: 'Chicken Wings', price: '₹199', description: 'Spicy and crispy chicken wings' }
        ],
        mains: [
          { itemName: 'Margherita Pizza', price: '₹399', description: 'Classic cheese and tomato pizza' },
          { itemName: 'Pepperoni Pizza', price: '₹499', description: 'Pizza topped with pepperoni slices' }
        ],
        desserts: [
          { itemName: 'Chocolate Mousse', price: '₹149', description: 'Rich and creamy chocolate mousse' }
        ]
      }
    },
    {
      resId: 3,
      resName: 'Subway',
      offers: 'Free drink with any Sub purchase',
      menu: {
        starters: [
          { itemName: 'Nachos', price: '₹149', description: 'Crispy tortilla chips with cheese' }
        ],
        mains: [
          { itemName: 'Turkey Sub', price: '₹349', description: 'Turkey, lettuce, and tomato on a sub roll' },
          { itemName: 'Veggie Delite', price: '₹299', description: 'Fresh vegetables on a whole grain roll' },
          { itemName: 'Chicken Teriyaki', price: '₹399', description: 'Chicken with teriyaki sauce on a sub roll' }
        ],
        desserts: [
          { itemName: 'Cookie', price: '₹99', description: 'Freshly baked cookie' }
        ]
      }
    },
    {
      resId: 4,
      resName: 'Domino\'s Pizza',
      offers: '20% off on orders above ₹600',
      menu: {
        starters: [
          { itemName: 'Garlic Breadsticks', price: '₹149', description: 'Breadsticks with garlic seasoning' },
          { itemName: 'Chicken Wings', price: '₹349', description: 'Spicy and crispy chicken wings' }
        ],
        mains: [
          { itemName: 'Cheese Pizza', price: '₹449', description: 'Pizza with a generous amount of cheese' },
          { itemName: 'Pepperoni Pizza', price: '₹499', description: 'Pizza topped with pepperoni slices' }
        ],
        desserts: [
          { itemName: 'Chocolate Lava Cake', price: '₹199', description: 'Warm cake with a gooey chocolate center' }
        ]
      }
    },
    {
      resId: 5,
      resName: 'KFC',
      offers: 'Free fries with any bucket meal',
      menu: {
        starters: [
          { itemName: 'Popcorn Chicken', price: '₹199', description: 'Bite-sized fried chicken' }
        ],
        mains: [
          { itemName: 'Original Recipe Chicken', price: '₹299', description: 'KFC’s famous fried chicken' },
          { itemName: 'Zinger Burger', price: '₹249', description: 'Spicy fried chicken burger' }
        ],
        desserts: [
          { itemName: 'Chocolate Chip Cookie', price: '₹99', description: 'Soft cookie with chocolate chips' }
        ]
      }
    },
    {
      resId: 6,
      resName: 'Burger King',
      offers: 'Free Sundae on orders above ₹400',
      menu: {
        starters: [
          { itemName: 'Chicken Nuggets', price: '₹199', description: 'Crispy fried chicken nuggets' }
        ],
        mains: [
          { itemName: 'Whopper', price: '₹199', description: 'Flame-grilled beef patty with fresh vegetables' },
          { itemName: 'Chicken Fries', price: '₹149', description: 'Crispy fried chicken strips' }
        ],
        desserts: [
          { itemName: 'Sundae', price: '₹99', description: 'Ice cream topped with chocolate sauce' }
        ]
      }
    },
    {
      resId: 7,
      resName: 'Taco Bell',
      offers: '15% off on combos',
      menu: {
        starters: [
          { itemName: 'Nachos', price: '₹129', description: 'Crispy tortilla chips with cheese' }
        ],
        mains: [
          { itemName: 'Crunchwrap Supreme', price: '₹299', description: 'Wrap with beef, cheese, and lettuce' },
          { itemName: 'Beef Taco', price: '₹199', description: 'Taco with seasoned beef and toppings' }
        ],
        desserts: [
          { itemName: 'Churros', price: '₹99', description: 'Fried dough pastry with cinnamon sugar' }
        ]
      }
    },
    {
      resId: 8,
      resName: 'McDonald\'s',
      offers: 'Free McFlurry with orders above ₹500',
      menu: {
        starters: [
          { itemName: 'Chicken McNuggets', price: '₹199', description: 'Bite-sized fried chicken' }
        ],
        mains: [
          { itemName: 'Big Mac', price: '₹199', description: 'Double beef patty burger with special sauce' },
          { itemName: 'McChicken', price: '₹149', description: 'Fried chicken patty burger' }
        ],
        desserts: [
          { itemName: 'McFlurry', price: '₹149', description: 'Soft serve ice cream with mix-ins' }
        ]
      }
    },
    {
      resId: 9,
      resName: 'Starbucks',
      offers: '10% off on all beverages',
      menu: {
        starters: [
          { itemName: 'Blueberry Muffin', price: '₹149', description: 'Muffin with fresh blueberries' }
        ],
        mains: [
          { itemName: 'Turkey and Cheese Sandwich', price: '₹349', description: 'Sandwich with turkey and cheese' }
        ],
        desserts: [
          { itemName: 'Carrot Cake', price: '₹199', description: 'Spiced carrot cake with cream cheese frosting' }
        ]
      }
    },
    {
      resId: 10,
      resName: 'Dunkin\' Donuts',
      offers: 'Buy 1 Get 1 Free on any Donut',
      menu: {
        starters: [
          { itemName: 'Bagel with Cream Cheese', price: '₹149', description: 'Bagel served with cream cheese' }
        ],
        mains: [
          { itemName: 'Breakfast Sandwich', price: '₹199', description: 'Egg, cheese, and sausage on a bagel' }
        ],
        desserts: [
          { itemName: 'Glazed Donut', price: '₹49', description: 'Classic glazed donut' },
          { itemName: 'Chocolate Donut', price: '₹59', description: 'Donut with chocolate glaze' }
        ]
      }
    }
  ];
  
  
  