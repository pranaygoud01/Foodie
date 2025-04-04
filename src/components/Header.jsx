import React from 'react'
import { FaPlay } from "react-icons/fa";
import girl from "../assets/girl.png"
import FoodCards from './FoodCards';
const Header = () => {
  return (
    <div className='w-full h-[80vh] flex max-lg:h-fit max-xl:h-fit justify-center bg-[#FAFAFA]'>
       <div className='max-w-[1300px] font-inter max-lg:flex-col max-xl:flex-col justify-between gap-10 max-lg:gap-3 h-full w-full flex '>
         <div className='w-[45%] max-lg:w-full max-lg:px-5 py-20 max-lg:py-10 max-xl:px-10 max-xl:w-full h-full'>
            <h1 className='font-bold leading-20 max-lg:leading-12  text-6xl max-lg:text-4xl'>Dive into Delights<br/> Of Delectable <span className='text-[#39DB4A]'>Food</span></h1>
            <p className='mt-12 max-lg:mt-3 text-[#4A4A4A] font-semibold max-lg:text-sm text-lg'>Where Each Plate Weaves a Story of Culinary <br/>
             Mastery and Passionate Craftsmanship</p>
             <div className='mt-10 flex gap-10 max-lg:mt-5 text-lg items-center'>
                <button className='bg-[#39DB4A] font-semibold shadow-xl max-lg:text-xs shadow-[#8EFF9A80] cursor-pointer py-3 px-6 rounded-full text-white'>Order Now</button>
                <p className='text-[#4D4D4D] font-semibold max-lg:text-xs'>Watch Now</p>
                <button className='rounded-full p-5 shadow-xl  max-lg:text-xs cursor-pointer bg-white'><FaPlay/></button>
             </div>
         </div>
         <div className='w-[55%] max-lg:w-full  max-xl:w-full h-full items-center relative flex justify-center'>
            <div className='absolute font-bold h-full w-full max-lg:w-11/12 max-lg:mt-16 flex mt-50 '>
            <button className='bg-white py-2 max-lg:text-xs px-4 h-fit text-red-400 rounded-xl shadow-2xl'>Hot spicy Food 🌶️</button>
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