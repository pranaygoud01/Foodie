import React from 'react'
import food3 from "../assets/food3.png"
import food4 from "../assets/food4.png"
import food5 from "../assets/food5.png"
import food6 from "../assets/food6.png"
const Categories = () => {
    const food=[
        {name:"Main Dish",image:food3,item:"86 dishes"},
        {name:"Break Fast",image:food4,item:"12 break fast"},
        {name:"Dessert",image:food5,item:"48 dessert"},
        {name:"Browse All",image:food6,item:"255 Items"}
    ]
  return (
    <div className='flex justify-center font-inter bg-[#FAFAFA] w-full'>
         <div className='max-w-[1300px] w-full flex flex-col gap-5 py-20 items-center'>
              <h1 className='uppercase text-md tracking-widest text-[#FF6868] font-bold'>Customer Favorites</h1>
              <h1 className='text-5xl font-bold'>Popular Catagories</h1>
              <div className='w-full h-[300px] mt-10  grid gap-10 grid-cols-4'>
                  {food.map((item,index)=>{
                    return <div key={index} className='h-full flex flex-col items-center gap-3  bg-white justify-center w-[300px] rounded-3xl shadow-xl cursor-pointer'>
                        <div className='w-36 h-36 flex justify-center items-center p-4 rounded-full bg-[#C1F1C6]'>
                            <img src={item.image}/>
                            </div>
                            <h1 className='text-lg font-semibold'>{item.name}</h1>
                            <p className='text-[#555555] font-semibold'>({item.item})</p>
                    </div>
                  })}
              </div>
         </div>
    </div>
  )
}

export default Categories