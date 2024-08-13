const RestaurantCard = ({ resData }) => {
  return (
    <div className="rescard bg-white rounded-md shadow-md p-4 grid grid-cols-1">
      <img
        className="res_image object-cover h-48 rounded-t-md" // Set fixed height
        src={resData.imageUrl}
        alt={resData.name}
      />
      <div className="flex justify-between items-center py-2">
        <h4>{resData.name}</h4>
        <span className="text-yellow-500 font-bold">{resData.rating}</span>
      </div>
      <div className="flex flex-col space-y-1">
        <p className="text-sm text-gray-500">{resData.cuisine}</p>
        <p className="text-sm text-gray-500">{resData.deliveryTime} mins</p>
      </div>
    </div>
  );
};


export const PromotedLabel=(RestaurantCard)=>{
  return((props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg" >Promoted</label>
        <RestaurantCard {...props}/>
      </div>

    )
  })
}

export default RestaurantCard