import React from 'react'
import { IoMdContact } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

function Navbar() {
    const handelNavItems = () => {
        console.log("hello")
    }
    return (
        <div className=''>
            <div className=' bg-gray-100 '>
                <nav className=' bg-gray-800 p-4 h-20'>
                    <div className='container mx-auto flex justify-between items-center'>
                        <div className='text-white text-2xl font-bold'>Coffee Shop</div>
                        <ul className='  space-x-4 gap-20 md:flex hidden'>
                            <li className='text-white hover:text-gray-400 cursor-pointer'>Home</li>
                            <li className='text-white hover:text-gray-400 cursor-pointer'>Menu</li>
                            <li className='text-white hover:text-gray-400 cursor-pointer'>About Us</li>
                            <li className='text-white hover:text-gray-400 cursor-pointer'>Contact</li>
                        </ul>
                        <div className='flex items-center space-x-4'>
                            <IoMdContact className="fas fa-home text-2xl text-white" />
                            <IoMenu className='md:hidden' onClick={handelNavItems} />
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar