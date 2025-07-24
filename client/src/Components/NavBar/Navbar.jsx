import React, { useState } from 'react'
import { IoMdContact } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Login from '../Login/Login';

function Navbar() {
    const [openNav, setOpenNav] = useState(true)
    const [showLogin, setShowLogin] = useState(false)
    const [navColor, setNavColor] = useState(false)

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 60) {
            setNavColor(true)
        } else {
            setNavColor(false)
        }
    })

    const handelNavItems = () => {
        setOpenNav(!openNav)
    }

    const handelLoginPage = () => {
        setShowLogin(!showLogin)
    }


    return (
        <div className=' fixed z-10 w-full'>
            <div className='   '>
                <nav className={`${navColor ? "bg-gray-800 " : ""} ${openNav ? " " : "bg-gray-800"}  text-white h-15  transition-all duration-600 ease-in-out px-3`}>
                    <div className='container mx-auto flex justify-between items-center h-15 transition-all duration-900 ease-in-out'>

                        <div className=' text-2xl font-bold'>Coffee Shop</div>
                        <ul className={`${openNav ? " bg-amber-50 text-amber-30 -mt-400 " : ''} md:mt-0 block z-10 gap-10 md:gap-5 space-x-4 fixed md:relative right-0 top-15 md:top-2 bg-gray-800 min-h-screen md:min-h-10 md:mr-10 md:h-10 w-40 md:w-0 text-center md:flex transition-all duration-400 ease-in-out`}>
                            <li className=' hover:text-gray-400 cursor-pointer mt-10 md:mt-0'>Home</li>
                            <li className=' hover:text-gray-400 cursor-pointer mt-10 md:mt-0'  >Menu</li>
                            <li className=' hover:text-gray-400 cursor-pointer mt-10 md:mt-0' >About</li>
                            <li className=' hover:text-gray-400 cursor-pointer mt-10 md:mt-0' >Contact</li>
                        </ul>
                        <div className='flex items-center space-x-4 z-10'>
                            <IoMdContact className="fas fa-home text-2xl " onClick={handelLoginPage} />
                            <IoMenu className='md:hidden ' onClick={handelNavItems} />
                        </div>
                    </div>
                </nav>
            </div>
            {
                showLogin ? <Login /> : " "
            }
        </div>
    )
}

export default Navbar