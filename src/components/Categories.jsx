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
    <div className='flex justify-center max-lg:h-fit max-xl:h-fit font-inter bg-[#FAFAFA] w-full'>
         <div className='max-w-[1300px]  max-lg:px-5 w-full  flex flex-col gap-5 py-20 items-center'>
              <h1 className='uppercase text-md tracking-widest text-[#FF6868] font-bold'>Customer Favorites</h1>
              <h1 className='text-5xl max-lg:text-4xl font-bold'>Popular Catagories</h1>
              <div className='w-full h-[300px] max-lg:h-fit max-lg:grid-cols-2 max-xl:grid-cols-3 mt-10  max-lg:gap-5 grid gap-10 grid-cols-4'>
                  {food.map((item,index)=>{
                    return <div key={index} className='h-full flex flex-col items-center gap-3 max-lg:py-5 bg-white justify-center w-[300px] max-lg:w-full  rounded-3xl shadow-xl cursor-pointer'>
                        <div className='w-36 h-36 max-lg:h-24 max-lg:w-24  flex justify-center items-center p-4 rounded-full bg-[#C1F1C6]'>
                            <img src={item.image}/>
                            </div>
                            <h1 className='text-lg max-lg:text-sm font-semibold'>{item.name}</h1>
                            <p className='text-[#555555] max-lg:text-xs font-semibold'>({item.item})</p>
                    </div>
                  })}
              </div>
         </div>
    </div>
  )
}

export default Categories