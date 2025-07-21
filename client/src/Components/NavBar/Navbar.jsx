import React from 'react'

function Navbar() {
    return (
        <div>
            <div className='bg-gray-100 '>

                <nav className='bg-gray-800 p-4 h-20'>
                    <div className='container mx-auto flex justify-between items-center'>
                        <div className='text-black text-2xl font-bold'>Coffee Shop</div>
                        <ul className=' space-x-4 block fixed md:relative right-0 top-20 md:top-0 bg-gray-800 min-h-screen md:min-h-10 md:mr-10 md:h-10 w-40 md:w-0 text-center md:flex '>
                            <li className='text-white hover:text-gray-400 cursor-pointer mt-20 md:mt-0'>Home</li>
                            <li className='text-white hover:text-gray-400 cursor-pointer mt-10 md:mt-0'>Menu</li>
                            <li className='text-white hover:text-gray-400 cursor-pointer mt-10 md:mt-0' >About</li>
                            <li className='text-white hover:text-gray-400 cursor-pointer mt-10 md:mt-0' >Contact</li>
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