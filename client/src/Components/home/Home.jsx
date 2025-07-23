<<<<<<< HEAD
import React, { useContext } from "react";
import Navbar from "../NavBar/Navbar";
import { dataApi } from "../../api/Api"
=======
import React, { useState, useEffect, useContext } from "react";
import Navbar from "../NavBar/Navbar";
import { ApiContext, useApiData } from "../../context/ApiContext";
import Scroll from "../SubComponents/Scroll";

>>>>>>> b951c0de00d8c33593b4cdbc88d36ad3c824a7ea
function Home() {

  const apiData = useApiData()

  const totalStars = 5;

  // console.log(clickImg);
<<<<<<< HEAD
  
  const data1  = useContext(dataApi);
  
=======

  const left = () => {

    console.log("Left button clicked");

  }
  const right = () => {

  }

>>>>>>> b951c0de00d8c33593b4cdbc88d36ad3c824a7ea
  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="w-full h-screen ">

<<<<<<< HEAD

=======
>>>>>>> b951c0de00d8c33593b4cdbc88d36ad3c824a7ea
        <div className="w-full h-screen flex justify-end items-end ">
            <Scroll  />
        </div>


        {/* <button className=" bg-amber-700 absolute top-100  left-10" onClick={left}>hiidfd</button>
        <button className=" bg-amber-700 absolute top-100 right-10 " onClick={right}>hiidfd</button> */}


      </div>
      <h1 className=" bg-gray-500 p-5 mt-5 font-bold text-[41px] text-center">Our Coffee</h1>

<<<<<<< HEAD
=======
      <div className=" grid grid-cols-1 py-10 px-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 ">
        {
           apiData?.data.map((item, id) => (
>>>>>>> b951c0de00d8c33593b4cdbc88d36ad3c824a7ea

      

        <div className=" grid grid-cols-1 py-10 px-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 ">
          {data1.data.map((item, id) => (

            <div
              key={id}
              className="card  bg-gray-700 shadow-md rounded-lg  m-2 hover:shadow-lg transition-shadow duration-300"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-screen h-50 object-cover rounded-t-lg mb-2 "
              />
              <h2 className="text-xl font-semibold mb-2 p-2 text-gray-300">
                {item.title}
              </h2>
              <p className="text-gray-400 mb-4 px-2"><b>Description</b> : {item.description}</p>
              <p className="text-gray-400 mb-4 px-2">
                <b>Rating</b> :
                {
                  Array.from({ length: totalStars }, (_, index) => (
                    <span key={index} className="text-yellow-500 text-xl ">
                      {index < Math.floor(item.rating.rate) ? "★" : "☆"}
                    </span>
                  ))
                }
                <span> {item.rating.rate}</span>
              </p>
              <p className="text-gray-400 mb-4 px-2"> <b>Price</b> : $ {item.price}</p>
            </div>
          ))}
        </div>

    </div >
  );
}

export default Home;
