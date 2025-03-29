
import React from 'react';



interface FavouriteProps {
    name: string;
    price: number;
    imageUrl: string;
  }

const Favourite: React.FC<FavouriteProps> = ({ name, price, imageUrl }) => {
    return(
        <div className="flex items-center p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-30">
        <img src={imageUrl} alt={name} className="w-24 h-24 object-cover rounded-md mr-4" />
        <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-lg text-gray-600">${price.toFixed(2)}</p>
      </div>
    </div>
    );
};
export default Favourite;