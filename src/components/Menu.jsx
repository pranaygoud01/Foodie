import React, { useState } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import { FaStar } from 'react-icons/fa';
import food7 from '../assets/food7.png';
import food8 from '../assets/food8.png';
import food9 from '../assets/food9.png';
import food10 from '../assets/food7.png';
import food11 from '../assets/food8.png';
import food12 from '../assets/food9.png';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";


const Menu = () => {
    const food = [
        { name: "Fattoush Salad", image: food7, rating: "4.6", price: "26.00" },
        { name: "Vegetable Salad", image: food8, rating: "4.5", price: "28.00" },
        { name: "Egg Vegi Salad", image: food9, rating: "4.7", price: "25.00" },
        { name: "Greek Salad", image: food10, rating: "4.8", price: "30.00" },
        { name: "Caesar Salad", image: food11, rating: "4.3", price: "24.00" },
        { name: "Caprese Salad", image: food12, rating: "4.9", price: "32.00" }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 3;

    const handleNext = () => {
        if (startIndex + itemsPerPage < food.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div id="menu" className='flex justify-center bg-[#fafafa] font-inter w-full'>
            <div className='max-w-[1300px] w-full flex h-fit flex-col gap-6 py-14'>
                <h1 className='tracking-widest text-[#FF6868] font-bold text-md uppercase'>Special Dishes</h1>
                <div className='flex justify-between items-end'>
                    <h1 className='text-5xl font-bold'>Standout Dishes<br /> From Our Menu</h1>
                    <div className='flex gap-3'>
                        <GrFormPrevious 
                            className={`text-6xl p-3 cursor-pointer rounded-full ${startIndex === 0 ? 'bg-gray-300' : 'bg-[#EFEFEF]'} text-neutral-800`} 
                            onClick={handlePrevious} 
                        />
                        <MdOutlineNavigateNext 
                            className={`text-6xl p-3 cursor-pointer rounded-full ${startIndex + itemsPerPage >= food.length ? 'bg-gray-300' : 'bg-[#39DB4A]'} text-white`} 
                            onClick={handleNext} 
                        />
                    </div>
                </div>

                <div className='grid grid-cols-3 mt-10 gap-10'>
                    {food.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
                        <div key={index} className='w-full h-[450px] relative cursor-pointer overflow-hidden shadow-2xl flex justify-center gap-5 items-center flex-col rounded-4xl bg-white'>
                            <div className='h-full w-full flex justify-end absolute'>
                                <div className='h-20 w-20 text-white flex justify-center items-center rounded-bl-[38px] bg-[#39DB4A] '
                                >
                                 {index===0?<FaHeart className='text-2xl'/>:<FaRegHeart className={`text-2xl`}/>} 
                                  
                                </div>
                            </div>
                            <img src={item.image} className='w-[250px] object-center object-cover h-[250px]' alt={item.name} />
                            <div className='w-full px-16'>
                                <h1 className='font-bold text-2xl'>{item.name}</h1>
                                <p className='text-[#555555] mt-2 font-semibold'>Delicious and healthy choice</p>
                            </div>
                            <div className='flex justify-between w-full px-16 items-center'>
                                <h1 className='font-bold text-2xl'><span className='text-[#FF6868]'>$ </span>{item.price}</h1>
                                <p className='flex gap-2 text-lg items-center text-neutral-700 font-semibold'>
                                    <FaStar className='text-amber-400 text-xl' /><span>{item.rating}</span>
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
