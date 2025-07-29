import React from "react";
import BlackCoffee from "../../assets/black.png";
import BgImg from "../../assets/bg-slate.png";
import Navbar from "../NavBar/Navbar";
import { motion, scale } from "motion/react";

function Landing() {
    return (
        <div className="h-screen w-screen">
            <Navbar />
            <div className="grid  grid-cols-2">
                <div className="min-h-screen relative bg-gray-900 flex items-center justify-center">
                    <motion.h1
                        className="text-amber-50 text-5xl w-10 -mt-30 -ml-30 font-bold "
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 1,
                        }}
                    >
                        <span className="text-amber-500 ">Chocolate</span> Latte
                    </motion.h1>

                    <div className="w-40 h-40 bg-black absolute bottom-10 left-10 ">
                        <motion.h1
                            className="text-gray-500 w-60 ml-15 -mt-4 tracking-wide font-bold text-2xl "
                            initial={{ x: -200 }}
                            animate={{ x: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 1,
                            }}
                        >
                            <span className="text-amber-500 ">Coffee</span> Lovers
                        </motion.h1>
                        <motion.p
                            className="text-gray-500 w-60 ml-15 mt-2 tracking-wide"
                            initial={{ x: -220 }}
                            animate={{ x: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 1.2,
                            }}
                        >
                            Your daily cup of coffee gets even better in our Plant-Based..
                            Ditch the dairy with our Plant-Based Almond special, paired ..
                        </motion.p>
                    </div>
                </div>

                <div className=" relative min-h-full flex items-center justify-center bg-black">
                    <motion.h1
                        className="text-amber-50 text-5xl w-10 -mt-30 -ml-30 font-bold"
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 1,
                        }}
                    >
                        <span className="text-amber-500 ">Chocolate</span> Latte
                    </motion.h1>

                    <div className="w-40 h-40 bg-gray-900 absolute bottom-10 right-10 ">
                        <motion.h1
                            className="text-gray-500 w-60 absolute -top-5 -left-30 tracking-wide font-bold text-2xl "
                            initial={{ x: -200 }}
                            animate={{ x: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 1,
                            }}
                        >
                            <span className="text-amber-500 ">Coffee</span> Lovers
                        </motion.h1>
                        <motion.p
                            className="text-gray-500 w-60 absolute -left-30 top-5 tracking-wide"
                            initial={{ x: -220 }}
                            animate={{ x: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 1.2,
                            }}
                        >
                            Your daily cup of coffee gets even better in our Plant-Based..
                            Ditch the dairy with our Plant-Based Almond special, paired ..
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className="">
                <div
                    className=" flex justify-center items-center "
                    initial={{ scale: 7 }}
                    animate={{ scale: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                    }}
                >
                    <motion.img
                        src={BlackCoffee}
                        alt=""
                        className="h-80 w-50 top-50 absolute"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Landing;
