import React, { useState } from 'react'
import { IoMdContact } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Login from '../Login/Login';
import { motion } from 'motion/react';




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

                        <motion.div className=' text-2xl font-bold font-mono' initial={{ y: -40 }} animate={{ y: 0 }} transition={{ delay: .3, duration: 1 }}><span className='text-amber-500'>Coffee</span> Shop</motion.div>
                        <ul className={`${openNav ? " bg-amber-50 text-amber-30 -mt-400 " : ''} md:mt-0 block z-10 gap-10 md:gap-5 space-x-4 fixed md:relative right-0 top-15 md:top-2 bg-gray-800 min-h-screen md:min-h-10 md:mr-10 md:h-10 w-40 md:w-0 text-center md:flex transition-all duration-400 ease-in-out`}>
                            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className=' hover:text-gray-400 cursor-pointer mt-10 md:mt-0' initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: .3, duration: 1.2 }}>Home</motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className=' hover:text-gray-400 cursor-pointer mt-10 md:mt-0' initial={{ y: -53 }} animate={{ y: 0 }} transition={{ delay: .3, duration: 1.4 }}>Menu</motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className=' hover:text-gray-400 cursor-pointer mt-10 md:mt-0' initial={{ y: -56 }} animate={{ y: 0 }} transition={{ delay: .3, duration: 1.6 }}>About</motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className=' hover:text-gray-400 cursor-pointer mt-10 md:mt-0' initial={{ y: -59 }} animate={{ y: 0 }} transition={{ delay: .3, duration: 1.8 }}>Contact</motion.li>
                        </ul>
                        <motion.div className='flex items-center space-x-4 z-10' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ y: -62 }} animate={{ y: 0 }} transition={{ delay: .3, duration: 2 }}>
                            <IoMdContact className="fas fa-home text-2xl " onClick={handelLoginPage} />
                            <IoMenu className='md:hidden ' onClick={handelNavItems} />
                        </motion.div>
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