import React from 'react'
import BlackCoffee from '../../assets/black.png'
import BgImg from '../../assets/bg-slate.png'
import  ColdCoffee from '../../assets/coffee/coffee1.png'
import HotCoffee from '../../assets/coffee/coffee3.png'
import Navbar from '../NavBar/Navbar'
import { motion  } from 'motion/react'

function Landing() {


   
return (
        <>
            <div className='h-screen  bg-red-600'>
                <Navbar />
                <div className='grid  grid-cols-2'>

                    <div className='h-screen relative bg-gray-900 flex items-center justify-center '>

                        <motion.h1 className='text-amber-50 text-4xl md:text-5xl w-10 -mt-30 sm:-ml-50 font-bold hidden sm:block ' initial={{ x: -200 }} animate={{ x: 0 }} transition={{ delay: .3, duration: 1 }}>
                            <span className='text-amber-500 '>Chocolate</span> Latte
                        </motion.h1>

                        <motion.div className='w-40 h-40 bg-black absolute bottom-10 left-10  hidden sm:block ' animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0, opacity: 0 }} transition={{ duration: 1 }}>
                            <motion.h1 className='text-gray-500 w-60 ml-15 -mt-4 tracking-wide font-bold text-2xl ' initial={{ x: -200 }} animate={{ x: 0 }} transition={{ delay: .3, duration: 1 }}><span className='text-amber-500 '>Coffee</span> Lovers</motion.h1>
                            <motion.p className='text-gray-500 w-60 ml-15 mt-2 tracking-wide' initial={{ x: -220 }} animate={{ x: 0 }} transition={{ delay: .3, duration: 1.2 }}>Your daily cup of coffee gets even better in our Plant-Based..  Ditch the dairy with our Plant-Based Almond special, paired ..</motion.p>
                        </motion.div>
                    </div>


                    <div className=' relative min-h-full flex items-center justify-center bg-black overflow-x-hidden'>

                        <motion.h1 className='text-amber-50 text-4xl md:text-5xl w-10 -mt-30 -ml-30 font-bold hidden sm:block' initial={{ x: 200 }} animate={{ x: 0 }} transition={{ delay: .3, duration: 1 }}>
                            <span className='text-amber-500 '>Chocolate</span> Latte
                        </motion.h1>


                        <motion.div className='w-40 h-40 bg-gray-900 absolute sm:bottom-10 sm:right-10 sm:block hidden ' animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0, opacity: 0 }} transition={{ duration: 1 }} >
                            <motion.h1 className='text-gray-500 w-60 absolute -top-5 -left-20 md:-left-25 tracking-wide font-bold text-2xl ' initial={{ x: 200 }} animate={{ x: 0 }} transition={{ delay: .3, duration: 1 }}><span className='text-amber-500 '>Coffee</span> Lovers</motion.h1>
                            <motion.p className='text-gray-500 w-60 absolute -left-20 md:-left-25 top-5 tracking-wide' initial={{ x: 220 }} animate={{ x: 0 }} transition={{ delay: .3, duration: 1.2 }}>Your daily cup of coffee gets even better in our Plant-Based..  Ditch the dairy with our Plant-Based Almond special, paired ..</motion.p>
                        </motion.div>

                    </div>

                </div>

                <div className=''>
                    <div className=' flex justify-center items-center ' >
                        <motion.div className="circle top-37 md:top-50 ml-15 md:ml-20 lg:ml-33 absolute" animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0, opacity: 0 }} transition={{ duration: 1 }}>
                            <div className="w-30 md:w-35 lg:w-40 h-30 md:h-35 lg:h-40 border-10 border-amber-500 rounded-full"></div>
                        </motion.div>
                        <motion.img src={BlackCoffee} alt="" style={{ transition: 'transform 0.1s ease' }} className=' h-60 md:h-80 lg:h-95  w-35 md:w-50 top-35 md:top-45 absolute' whileHover={{ scale: 1.1, transition: { delay: 0, duration: .1 } }} whileTap={{ scale: 1, transition: { delay: 0, duration: .1 } }} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }} />
                    </div>
                </div>

                <div>
                    <div className=' flex justify-center items-center sm:hidden '>

                        <motion.h1 className='absolute text-amber-50 z-100 text-2xl font-bold top-20' initial={{ y: -60, opacity: 0, scale: 1 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ delay: .3, duration: 1 }}>
                            <span className='text-amber-500 '>Chocolate</span> Latte
                        </motion.h1>

                        <div className='z-100 -mt-20 absolute bottom-5 flex justify-center items-center flex-col ' >
                            <motion.h1 className='text-gray-500 w-60 ml-15 -mt-4 tracking-wide font-bold text-2xl ' initial={{ y: 60, opacity: 0, scale: 1 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ delay: .3, duration: 1 }}><span className='text-amber-500 '>Coffee</span> Lovers</motion.h1>
                            <motion.p className='text-gray-500 w-60 ml-15 mt-2 tracking-wide' initial={{ y: 60, opacity: 0, scale: 1 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ delay: .3, duration: 1 }}>Your daily cup of coffee gets even better in our Plant-Based..  Ditch the dairy with our Plant-Based Almond special, paired ..</motion.p>
                        </div>
                    </div>
                </div>
            </div>

            <section className='h-screen '>
                <div className=''>
                    <div className='flex justify-center items-center flex-col mt-10'>
                        <h1 className='font-bold text-3xl mb-2'>Fresh and <span className='text-amber-500'>Tasty Fruits</span></h1>
                        <p className='w-100 text-center'>consequatur maxime beatae harum pariatur tempora, totam, illum ipsam porro?</p>
                    </div>
                    <div className='flex justify-center items-center flex-col mt-10'>

                        <div className='grid grid-cols-3 gap-50 mt-10'>
                            <motion.div className=" h-40 w-50  cursor-pointer" >
                                <motion.img src={HotCoffee} alt="" className=" h-60 w-50 mb-8  " whileHover={{scale:1.1, transition:{ delay:0, duration:0.2}}} initial={{y:200, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0, duration:.8}} viewport={{once:true, amount:0.5}} />
                                <h1 className='text-center text-2xl font-bold text-amber-600'>Hot Coffee</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </motion.div>
                            <div className=" h-40 w-50 cursor-pointer ">
                                <motion.img src={BlackCoffee} alt="" className=" h-60 w-40 ml-4 mb-8  " whileHover={{scale:1.1, transition:{ delay:0, duration:0.2}}} initial={{y:200, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2, duration:1.1}} viewport={{once:true, amount:0.5}} />
                                <h1 className='text-center text-2xl font-bold text-amber-600'>Black Coffee</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className=" h-40 w-50 cursor-pointer ">
                                <motion.img src={ColdCoffee} alt="" className=" h-60 w-50 mb-8  " whileHover={{scale:1.1, transition:{ delay:0, duration:0.2}}} initial={{y:200, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.4, duration:1.3}} viewport={{once:true, amount:0.5}} />
                                <h1 className='text-center text-2xl font-bold text-amber-600'>Cold Coffee</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Landing