import React, { useEffect, useState } from "react";
import Scroll from "../SubComponents/Scroll/Scroll";
import Card from "../SubComponents/Card/Card";
import { useApiData } from "../../context/ApiContext";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "motion/react"
import Loading from "../SubComponents/Loading/Loading";


function Home() {
  const apiData = useApiData()


  const [clickImg, setClickImg] = useState(2);

  const left = () => {

    let leftSlide = clickImg - 1

    if (leftSlide == 0) {
      leftSlide = apiData.data.length
    }
    setClickImg(leftSlide)

  }


  const right = () => {

    let leftSlide = clickImg + 1
    if (leftSlide == apiData.data.length + 1) {
      leftSlide = 1
    }
    setClickImg(leftSlide)

  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const total = apiData?.data?.length || 0;

      if (clickImg >= total) {
        setClickImg(1); // restart at 1
        console.log(clickImg)
      } else {
        setClickImg(clickImg + 1); // go to next image
        console.log(clickImg)
      }
    }, 5000);
    return () => clearTimeout(timer); // 🧼 cleanup

  }, [clickImg, apiData?.data]);


  return (
    <div className="bg-gray-900">
      <div className="w-full font-mono sm:h-screen relative">

        {

          apiData.data.length > 0 ? (

            apiData.data.map((item, id) => {
              return (
                item.id === clickImg && (
                  <motion.div key={id} whileTap={{ scale: 0.9 }} className="h-full w-full relative" >
                    <img src={item.image} alt={item.name} className="object-cover h-[70vh] rounded-b-2xl  sm:h-full w-full " />

                    <div className=" w-75 absolute bottom-15 left-20">

                    </div>
                  </motion.div>
                )
              )
            })
           ) :(

            <div className="h-screen flex justify-center items-center">
              <Loading/>
            </div>

           )
        }

        <div className="sm:absolute overflow-x-auto mt-2 sm:right-0 sm:bottom-0 transition-all duration-700">
          <Scroll setClickImg={setClickImg} />
        </div>

        <motion.button whileTap={{ scale: 0.8 }} className=" slider-button absolute top-50 left-2 md:top-70  md:left-10  px-2  py-5 rounded cursor-pointer" onClick={left}><FaAngleLeft /></motion.button>
        <motion.button whileTap={{ scale: 0.8 }} className=" slider-button absolute top-50 right-2 md:top-70 md:right-10 px-2  py-5 rounded cursor-pointer" onClick={right}><FaAngleRight /></motion.button>

      </div>


      <h1 className=" bg-gray-500 p-5 mt-5 font-bold text-[41px] text-center">Our Coffee</h1>


      <Card />

    </div >
  );
}

export default Home;