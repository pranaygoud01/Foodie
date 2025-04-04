import React, { useState } from 'react';
import logo from "../assets/logo.png";
import f from "../assets/f.png";
import { Search, ShoppingBag, PhoneCall } from 'lucide-react';
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from 'framer-motion';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", path: "#" },
    { name: "Menu", path: "#menu" },
    { name: "Services", path: "#services" },
    { name: "Offers", path: "#" },
  ];

  return (
    <>
      <div className='w-full flex sticky top-0 z-20 bg-[#FAFAFA] font-poppins justify-center'>
        <div className='max-w-[1300px] max-lg:px-5 max-lg:py-4 flex max-xl:px-5 justify-between items-center w-full py-10 '>
          <div className='flex gap-2 items-center w-fit'>
            <div className='bg-[#39DB4A] h-10 w-8 rounded-xl flex justify-center items-center p-2'>
              <img src={f} className='' alt="f logo"/>
            </div>
            <img src={logo} className='' alt="main logo"/>
          </div>

          <nav className="flex gap-10 max-lg:hidden">
            {menu.map((item, index) => (
              <a key={index} href={item.path} className={`text-gray-700 hover:text-[#39DB4A]`}>
                <p className='flex gap-4 items-center'>
                  {(item.name === "Menu" || item.name === "Services") ? (
                    <>
                      {item.name} <IoIosArrowDown className='text-[#39db4a]' />
                    </>
                  ) : item.name}
                </p>
              </a>
            ))}
          </nav>

          <div className='flex gap-8 items-center'>
            <Search />
            <ShoppingBag />
            <button className='lg:hidden' onClick={() => setOpen(true)}>
              <RiMenu3Fill className='text-3xl' />
            </button>
            <button className='py-3 max-lg:hidden px-5 text-white rounded-full flex gap-1 items-center bg-[#39DB4A]'>
              <PhoneCall className='h-4' />Contact
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='lg:hidden fixed w-full h-full flex flex-col font-inter font-semibold items-center py-10 px-10 bg-white z-50 top-0 '
          >
            <button onClick={() => setOpen(false)} className='w-full flex justify-end'>
              <IoClose className='text-4xl' />
            </button>
            <div className='flex flex-col gap-8 mt-10 items-center'>
              {menu.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className='text-3xl hover:text-[#39DB4A] transition-colors duration-200'
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className='h-full flex flex-col items-center justify-center gap-6'>
              <div className='flex gap-2 items-center w-fit'>
                <div className='bg-[#39DB4A] h-10 w-8 rounded-xl flex justify-center items-center p-2'>
                  <img src={f} className='' alt="f logo"/>
                </div>
                <img src={logo} className='' alt="main logo"/>
              </div>
              <p className='text-[#555555] max-lg:text-xs'>
                Copyright &copy; 2025 Dscode | All rights reserved
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
