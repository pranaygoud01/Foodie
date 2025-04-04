import React from 'react'
import food1 from "../assets/food1.png"
import food2 from "../assets/food2.png"

import { FaStar } from "react-icons/fa";

const FoodCards = () => {
  const items = [{ name: "Spicy noodles", price: "18.00", star: 3, image: food1 },
  { name: "Vegetarian", price: "23.00", star: 4, image: food2 }
  ]
  return (
    <div className='absolute flex h-full max-lg:w-11/12 max-lg:gap-3 items-end w-full justify-center mb-20  max-lg:ml-0 max-lg:mb-5 gap-16 ml-16'>
      {items.map((item, index) => {
        return <div key={index} className='bg-white p-2 cursor-pointer w-54 shadow-xl h-20 max-lg:h-fit flex gap-3 rounded-2xl'>
          <img src={item.image} className='rounded-xl h-16 w-16 object-cover' />
          <div className='py-1'>
            <h1 className='font-semibold text-sm max-lg:text-xs'>{item.name}</h1>
            <div className='flex text-xs gap-1 mt-1'>
              <FaStar className='text-amber-400'/> <FaStar className='text-amber-400'/> <FaStar className='text-amber-400'/> <FaStar className='text-amber-400'/> <FaStar/>
            </div>
            <h1 className='text-sm mt-1 font-semibold'><span className='text-red-600'>$ </span>{item.price}</h1>
          </div>
        </div>
      })}
    </div>
  )
}

export default FoodCards