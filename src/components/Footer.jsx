import React from 'react'
import logo from "../assets/logo.png";
import f from "../assets/f.png"
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
const Footer = () => {
    const UseFulLink=[
        {name:"About us"},
        {name:"Events"},
        {name:"Blogs"},
        {name:"FAQ"},
    ]
    const MainMenu=[
        {name:"Home"},
        {name:"Offers"},
        {name:"Menus"},
        {name:"Reservation"},
    ]
  return (
    <>
    <div className='w-full h-fit flex font-inter bg-[#fafafa] justify-center'>
         <div className='max-w-[1300px] flex justify-between max-lg:flex-col max-lg:py-14 max-lg:gap-4 px-5 py-20 h-fit w-full'>
            <div className='w-2/12  max-lg:w-full flex flex-col max-lg:gap-5 gap-10 '>
  <div className='flex gap-2 items-center w-fit'> <div className='bg-[#39DB4A] h-10 w-8 rounded-xl flex justify-center items-center p-2'><img src={f} className=''/></div> <img src={logo} className=''/></div>
  <p className='text-lg text-[#555555] max-lg:text-sm '>Savor the artistry where every dish is a culinary masterpiece</p>
            </div>
            <div className='flex max-lg:gap-20 gap-42 max-lg:text-sm'>
            <div className=''>
              <h1 className='font-bold max-lg:font-semibold max-lg:text-[16px] text-xl'>Useful links</h1>
              <div className='flex flex-col gap-4 max-lg:gap-2 mt-5'>
              {UseFulLink.map((item,index)=>{
                return <a key={index} className='font-semibold text-[#555555]'>{item.name}</a>
              })}
              </div>
            </div>
            <div>
              <h1 className='font-bold text-xl max-lg:font-semibold max-lg:text-[16px] '>Main Menu</h1>
              <div className='flex flex-col gap-4 max-lg:gap-2 mt-5'>
              {MainMenu.map((item,index)=>{
                return <a key={index} className='font-semibold text-[#555555]'>{item.name}</a>
              })}
              </div>
            </div>
            </div>
            <div className='flex flex-col gap-5 max-lg:mt-5 max-lg:gap-3 text-[#555555] max-lg:text-sm font-semibold'>
            <h1 className='font-bold text-black text-xl max-lg:text-[16px]  '>Contact Us</h1> 
            <p>example@email.com</p>
            <p>+64 958 248 966</p>
            <p>Social media</p>
            </div>
         </div>
    </div>
    <div className='w-full h-fit flex font-inter bg-[#fafafa] justify-center'>
        <div className='max-w-[1300px] w-full max-lg:px-5 py-4 pb-8 items-center max-lg:flex-col max-lg:gap-5 flex justify-between'>
            <div className='flex gap-4'>
                <FiFacebook className='text-5xl max-lg:text-3xl max-lg:p-2 p-3 rounded-full bg-[#39DB4A] text-white'/>
                <FaInstagram className='text-5xl max-lg:text-3xl max-lg:p-2 p-3 rounded-full bg-[#EDFFEF] text-black'/>
                <LuTwitter className='text-5xl p-3  max-lg:text-3xl max-lg:p-2 rounded-full bg-[#EDFFEF] text-black'/>
                <AiOutlineYoutube className='text-5xl p-3 max-lg:text-4xl max-lg:p-2 rounded-full bg-[#EDFFEF] text-black'/>
            </div>
            <p className=' text-[#555555] max-lg:text-xs'>Copyright &copy; 2025 Dscode | All rights reserved</p>
            <div className='w-2/12 max-lg:hidden'></div>
        </div>
    </div>
    </>
  )
}

export default Footer