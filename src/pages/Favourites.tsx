import React from 'react'
import Favourite from '../components/Favourite'
import Navbar from '../components/Navbar'

const Favourites = () => {
//test items
    const favouriteItems = [
        {
          name: 'Item 1',
          price: 29.99,
          imageUrl: './src/assets/laptop.jpeg',
        },
        {
          name: 'Item 2',
          price: 19.99,
          imageUrl: './src/assets/laptop.jpeg',
        },
      ];

  return (
    <div className="">
        <Navbar></Navbar>
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favouriteItems.map((item, index) => (
          <Favourite
            key={index}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
</div>
</div>
  )
}

export default Favourites