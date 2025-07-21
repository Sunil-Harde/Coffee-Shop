import React, { useState } from 'react'
import { IoMdContact } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

function Navbar() {

    const [open, setOpen]=useState(true)

    const handelNavItems = () => {
        setOpen(!open)
    }
    return (
        <div className=''>
            <div className=' bg-gray-100 '>
                <nav className=' bg-gray-800 p-4 h-20'>
                    <div className='container mx-auto flex justify-between items-center'>

                        <div className='text-black text-2xl font-bold'>Coffee Shop</div>
                        <ul className={ `${open? 'hidden':'block'} space-x-4  fixed md:relative right-0 top-20 md:top-0 bg-gray-800 min-h-screen md:min-h-10 md:mr-10 md:h-10 w-40 md:w-0 text-center md:flex `}>
                            <li className='text-white hover:text-gray-400 cursor-pointer mt-20 md:mt-0'>Home</li>
                            <li className='text-white hover:text-gray-400 cursor-pointer mt-10 md:mt-0'>Menu</li>
                            <li className='text-white hover:text-gray-400 cursor-pointer mt-10 md:mt-0' >About</li>
                            <li className='text-white hover:text-gray-400 cursor-pointer mt-10 md:mt-0' >Contact</li>

                        </ul>
                        <div className='flex items-center space-x-4'>
                            <IoMdContact className="fas fa-home text-2xl text-white" />
                            <IoMenu className='md:hidden text-white' onClick={handelNavItems}  />
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar