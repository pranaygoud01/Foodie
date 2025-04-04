import React from 'react'
import girl2 from "../assets/girl2.png"
import { Star } from 'lucide-react'
import reactangle from "../assets/reactangle.png"
const Testimonials = () => {
  return (
    <div className='flex justify-center w-full font-inter bg-[#fafafa]'>
<div className='max-w-[1300px] w-full flex gap-10 py-7'>
   <div className='w-[50%] h-[600px] relative flex justify-center items-end'>
        <div className='h-[50%] w-7/12 rounded-b-xl bg-[#53EC62]'
        style={{borderRadius:"60% 40% 89% 11% / 45% 100% 0% 55% "}}>
        </div>
        <img src={girl2} className='absolute h-[500px] w-9/12 object-contain'/>
      <span className='absolute h-full w-6/12 text-3xl flex items-center justify-start'>😋</span>
        <span className='absolute h-full w-6/12 text-3xl flex items-center justify-end '>🍕</span>
        <div className='h-full w-full flex items-end justify-end absolute'><img src={reactangle} className='h-[50px]   w-[250px] object-contain'></img>
        <h1 className='absolute font-bold pr-18 pb-3'>Our Best Chef 😁</h1></div>
   </div>
   <div className='w-[50%] flex flex-col gap-10 h-full p-10 py-36'>
   <h1 className='tracking-widest text-[#FF6868] font-bold text-md uppercase'>Testimonials</h1>
   <h1 className='text-5xl font-bold'>What Our Customers<br/> Say About Us</h1>
   <p className='text-lg w-9/12 text-[#555555]'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
   <div className="flex items-center gap-6 mt-6">
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-15 h-15 rounded-full border-2 border-white object-cover"
              alt="User 1"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-15 h-15 rounded-full border-2 border-white object-cover"
              alt="User 2"
            />
            <img
              src="https://images.unsplash.com/photo-1595784279873-62b38b5e7cd6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-15 h-15 rounded-full border-2 border-white object-cover"
              alt="User 3"
            />
          </div>
          <div>
            <h3 className="font-semibold text-xl text-gray-800">Customer Feedback</h3>
            <div className="flex items-center gap-1 text-lg text-yellow-500 font-medium">
              <Star size={16} fill="currentColor" />
              4.9 <span className="text-gray-500">(18.6k Reviews)</span>
            </div>
          </div>
        </div>
   </div>
</div>
    </div>
  )
}

export default Testimonials