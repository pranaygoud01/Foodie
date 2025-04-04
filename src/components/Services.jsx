import React from 'react'
import { PiBowlFood } from "react-icons/pi";
import { BiTimer } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";

const Services = () => {
    const service=[{
        name:"Catering",
        des:"Delight your guests with our flavors and  presentation",icon:<PiBowlFood/>
    },
    {
        name:"Fast delivery",
        des:"We deliver your order promptly to your door",icon:<BiTimer/>
    },
    {
        name:"Online Ordering",
        des:"Explore menu & order with using our Online Ordering ",icon:<BsCartCheck/>
    },
    {
        name:"Gift Cards",
        des:"Give the gift of exceptional dining with Foodi Gift Cards",icon:<IoGiftOutline/>
    },]
  return (
    <div id="services" className='w-full justify-center font-inter flex h-fit bg-[#fafafa]'>
        <div className='max-w-[1200px] grid grid-cols-2 h-full  w-full'>
            <div className='flex flex-col gap-10 py-36'>
            <h1 className='tracking-widest text-[#FF6868] font-bold text-md uppercase'>Our Story & Services</h1>
            <h1 className='font-bold text-5xl'>Our Culinary Journey<br/> And Services</h1>
            <p className='text-lg text-neutral-500'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
            <button className='bg-[#39DB4A] w-fit font-semibold shadow-xl shadow-[#8EFF9A80] cursor-pointer py-3 px-8 rounded-full text-white'>Explore</button>
            </div>
            <div className='grid grid-cols-2 py-16 px-20 gap-10'>
            {service.map((item,index)=>{
                return <div key={index} className='w-full flex  flex-col justify-center items-center gap-4 h-full shadow-2xl bg-white rounded-3xl'>
                    <span className='text-6xl text-[#5FE26C]'>{item.icon}</span>
                    <h1 className='font-semibold uppercase text-[#5FE26C]'>{item.name}</h1>
                    <p className='px-5 text-sm text-center font-semibold text-[#90BD95]'>{item.des}</p>
                </div>
            })}
            </div>
        </div>
    </div>
  )
}

export default Services