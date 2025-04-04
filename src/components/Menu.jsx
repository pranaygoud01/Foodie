import React from 'react';
import { FaStar } from 'react-icons/fa';
import food7 from '../assets/food7.png';
import food8 from '../assets/food8.png';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import food9 from '../assets/food9.png';

import { FaRegHeart, FaHeart } from "react-icons/fa6";

const Menu = () => {
    const food = [
        { name: "Fattoush Salad", image: food7, rating: "4.6", price: "26.00" },
        { name: "Vegetable", image: food8, rating: "4.5", price: "28.00" },
        { name: "Egg Vegi Salad", image: food9, rating: "4.7", price: "25.00" },
       
    ];

    return (
        <div id="menu" className='flex justify-center bg-[#fafafa] font-inter w-full'>
            <div className='max-w-[1300px] w-full flex h-fit max-lg:px-5 flex-col max-lg:gap-4 gap-6 py-14'>
                <h1 className='tracking-widest text-[#FF6868] font-bold text-md uppercase'>Special Dishes</h1>
                <div className='flex justify-between  max-lg:items-start max-lg:flex-col items-end'>
                    <h1 className='text-5xl font-bold  w-full max-lg:text-4xl'>Standout Dishes<br /> From Our Menu</h1>
                    <div className='flex w-full justify-end gap-3'>
                        <GrFormPrevious
                            className={`text-6xl p-3 max-lg:text-4xl max-lg:p-1 cursor-pointer rounded-full bg-neutral-200  text-neutral-800`} 
                          
                        />
                        <MdOutlineNavigateNext 
                            className={`text-6xl p-3 max-lg:text-4xl max-lg:p-1  cursor-pointer rounded-full  bg-[#39DB4A] text-white`} 
                          
                        />
                    </div>
                </div>

                <div className='grid grid-cols-3 max-lg:grid-cols-2 mt-10 max-lg:gap-5 gap-10'>
                    {food.map((item, index) => (
                        <div key={index} className={`${index==2&&"max-lg:hidden"} w-full h-[450px] max-lg:h-fit relative max-lg:py-5 max-lg:rounded-xl cursor-pointer overflow-hidden shadow-2xl flex justify-center gap-5 items-center flex-col rounded-4xl bg-white`}>
                            <div className='h-full w-full flex justify-end absolute'>
                                <div className='h-20 w-20 max-lg:h-10 max-lg:rounded-bl-2xl max-lg:w-10 text-white flex justify-center items-center rounded-bl-[38px] bg-[#39DB4A]'>
                                    {index === 0 ? <FaHeart className='text-2xl max-lg:text-lg' /> : <FaRegHeart className='text-2xl max-lg:text-lg' />}
                                </div>
                            </div>
                            <img src={item.image} className='w-[250px] max-lg:w-26 max-lg:h-26 object-center object-cover h-[250px]' alt={item.name} />
                            <div className='w-full px-16 max-lg:px-5'>
                                <h1 className='font-bold text-2xl max-lg:text-lg'>{item.name}</h1>
                                <p className='text-[#555555] mt-2 max-lg:text-xs font-semibold'>Delicious and healthy choice</p>
                            </div>
                            <div className='flex justify-between w-full px-16 max-lg:px-5 items-center'>
                                <h1 className='font-bold max-lg:text-sm text-2xl'><span className='text-[#FF6868]'>$ </span>{item.price}</h1>
                                <p className='flex gap-2 text-lg max-lg:text-sm items-center text-neutral-700 font-semibold'>
                                    <FaStar className='text-amber-400 text-xl max-lg:text-sm' /><span>{item.rating}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
