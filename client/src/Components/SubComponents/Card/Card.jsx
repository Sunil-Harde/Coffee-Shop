import React from 'react'
import { useApiData } from "../../../context/ApiContext";


function Card() {

    const apiData = useApiData()

    const totalStars = 5;


    return (
        <div className=" grid font-mono grid-cols-1 py-10 px-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 ">
            {
                apiData?.data.map((item, id) => (

                    <div
                        key={id}
                        className="card  bg-gray-700 shadow-md rounded-lg  m-2 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                        <div className='w-100 h-50 overflow-hidden'>

                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-screen h-50 object-cover rounded-t-lg mb-2  hover:scale-110 hover:opacity-90 transition-all duration-900 "
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2 p-2 text-gray-300">
                            {item.title}
                        </h2>
                        <p className="text-gray-400 mb-4 px-2 h-30 overflow-hidden"><b>Description</b> : {item.description}</p>
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
    )
}

export default Card