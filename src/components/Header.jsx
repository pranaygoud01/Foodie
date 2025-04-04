import React from 'react'
import { FaPlay } from "react-icons/fa";
import girl from "../assets/girl.png"
import FoodCards from './FoodCards';
const Header = () => {
  return (
    <div className='w-full h-[80vh] flex justify-center bg-[#FAFAFA]'>
       <div className='max-w-[1300px] font-inter justify-between gap-10 h-full w-full flex '>
         <div className='w-[45%] py-20 h-full'>
            <h1 className='font-bold leading-20 text-6xl'>Dive into Delights<br/> Of Delectable <span className='text-[#39DB4A]'>Food</span></h1>
            <p className='mt-12 text-[#4A4A4A] font-semibold text-lg'>Where Each Plate Weaves a Story of Culinary <br/>
             Mastery and Passionate Craftsmanship</p>
             <div className='mt-10 flex gap-10 text-lg items-center'>
                <button className='bg-[#39DB4A] font-semibold shadow-xl shadow-[#8EFF9A80] cursor-pointer py-3 px-6 rounded-full text-white'>Order Now</button>
                <p className='text-[#4D4D4D] font-semibold'>Watch Now</p>
                <button className='rounded-full p-5 shadow-xl cursor-pointer bg-white'><FaPlay/></button>
             </div>
         </div>
         <div className='w-[55%] h-full items-center relative flex justify-center'>
            <div className='absolute font-bold h-full w-full flex mt-50 '>
            <button className='bg-white py-2 px-4 h-fit text-red-400 rounded-xl shadow-2xl'>Hot spicy Food 🌶️</button>
            </div>
            <div className='w-9/12 rounded-full h-[88%] bg-[#39DB4A]'>
               <img src={girl} className=' h-full w-full object-cover'/>
            </div>
            <FoodCards/>
         </div>
       </div>
    </div>
  )
}

export default Header