import React from 'react'

function Navbar() {
    return (
        <div>
            <div className='bg-gray-100 '>

                <nav className='bg-gray-800 p-4 h-20'>
                    <div className='container mx-auto flex justify-between items-center'>
                        <div className='text-white text-2xl font-bold'>Coffee Shop</div>
                        <ul className='flex space-x-4'>
                            <li className='text-white hover:text-gray-400 cursor-pointer'>Home</li>
                            <li className='text-white hover:text-gray-400 cursor-pointer'>Menu</li>
                            <li className='text-white hover:text-gray-400 cursor-pointer'>About Us</li>
                            <li className='text-white hover:text-gray-400 cursor-pointer'>Contact</li>
                        </ul>

                        <div className='flex items-center space-x-4'>
                            <button className='bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer'>Login</button>
                            <button className='bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer'>Sign Up</button>
                        </div>
                    </div>


                </nav>


            </div>
        </div>
    )
}

export default Navbar