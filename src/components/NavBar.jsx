import React, { useState } from 'react'
import logo from "../assets/logo.png";
import f from "../assets/f.png"
import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
    const menu=[{name:"Home",path:"#"},
        {name:"Menu",path:"#menu"},
        {name:"Services" ,path:"#services"},
        {name:"Offers",path:"#"},
    ]
  
  return (
    <div className='w-full flex sticky top-0 z-20 bg-[#FAFAFA] font-poppins justify-center'>
        <div className='max-w-[1300px] flex justify-between items-center w-full py-10 '>
            <div className='flex gap-2 items-center w-fit'> <div className='bg-[#39DB4A] h-10 w-8 rounded-xl flex justify-center items-center p-2'><img src={f} className=''/></div> <img src={logo} className=''/></div>
            <nav className="flex gap-10">
          {menu.map((item, index) => (
            <a key={index} href={item.path} 
            
            className={`text-gray-700   hover:text-[#39DB4A]`}
            
          >
            <p className='flex gap-4 items-center'>
                {item.name === "Menu" || item.name === "Services" ? (
                   <>
                {item.name} <IoIosArrowDown  className='text-[#39db4a]'/>
              </>
                ) : (
               item.name
                 )}
               </p>
            </a>
          ))}
        </nav>
        <div className='flex gap-8 items-center'>
            <Search/>
            <ShoppingBag/>
            <button className='py-3 px-5 text-white rounded-full flex gap-1 items-center bg-[#39DB4A]'><PhoneCall className='h-4'/>Contact</button>
        </div>
        </div>
    </div>
  )
}

export default NavBar