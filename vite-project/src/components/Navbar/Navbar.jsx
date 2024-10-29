import React from 'react'
import logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart,FaCaretDown } from "react-icons/fa";
import DarkMode from './DarkMode';
const Navbar = ({handlerPopup}) => {
    const Menu = [
        {
          id: 1,
          name: "Home",
          link: "/#",
        },
        {
          id: 2,
          name: "Top Rated",
          link: "/#services",
        },
        {
          id: 3,
          name: "Kids Wear",
          link: "/#",
        },
        {
          id: 3,
          name: "Mens Wear",
          link: "/#",
        },
        {
          id: 3,
          name: "Electronics",
          link: "/#",
        },
      ];

    const DropdownLinks = [
        {
          id: 1,
          name: "Trending Products",
          link: "/#",
        },
        {
          id: 2,
          name: "Best Selling",
          link: "/#",
        },
        {
          id: 3,
          name: "Top Rated",
          link: "/#",
        },
      ];  

  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white relative z-40 duration-200'>

      <div className='bg-orange-400/40 py-2 '>
         <div className='container flex justify-between items-center'>
            
            <div>
                <a href="#" className='flex gap-2 font-bold text-2xl sm:text-3xl'>
                    <img src={logo} alt='Logo' className='w-10'></img>Gocart
                </a>
            </div>

            <div className='flex gap-4 items-center justify-between '>
                 <div className='group relative hidden sm:block '>
                    <input type='text' placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full  px-2 py-1 outline-none border border-1 border-primary dark:border-gray-500 dark:bg-gray-800'>
                    </input>
                    <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                 </div>

                 <button className='bg-gradient-to-r from-primary to bg-secondary transition-all duration-200 text-white py-1 px-4 rounded-full group flex items-center gap-3 ' onClick={()=>handlerPopup()}>
                <span className='group-hover:block hidden transition-all duration-200'>
                    Order
                </span>
                <FaShoppingCart className='text-xl text-white cursor-pointer drop-shadow-sm'/>
              </button>
              <div>
                <DarkMode/>
              </div>
            </div>
              
         </div>
      </div>

      <div className='flex justify-center'>
         <ul className='sm:flex hidden items-center justify-between container gap-4'>
            {
                Menu.map((data)=>(
                    <li key={data.id} >
                        <a className='inline-block hover:text-primary duration-200 px-4' href={data.link}>{data.name}</a>
                    </li>
                ))
            }

            <li className='relative group cursor-pointer'> 
                <a href='#' className='flex items-center gap-[2px] py-2 hover:text-primary duration-200'>
                 Trending Products
                 <span>
                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                 </span>
                </a>

                <div className='absolute z-[9999] hidden text-black p-2 bg-white rounded-md w-[150px] group-hover:block shadow-md'>
                    <ul>
                        {DropdownLinks.map((data)=>(
                            <li key={data.id}>
                              <a className='inline-block w-full py-2  hover:bg-primary/20 rounded-md hover:text-primary duration-200 ' href={data.link}>{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </li>

         </ul>
      </div>

    </div>
  )
}

export default Navbar
