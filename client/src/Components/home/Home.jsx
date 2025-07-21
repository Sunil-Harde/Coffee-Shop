import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/Navbar';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://coffee-shop-api-sandy.vercel.app/api/v1/products")
      .then((rep) => {
        if (!rep.ok) {
          throw new Error("Network response was not ok");
        }
        return rep.json(); 
      })
      .then((data) => {
        setData(data); 
    })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  }, []); 

  return (
    <div className='bg-gray-900 '>
      <Navbar />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2">
        {data.map((item, id) => (
          <div key={id} className="card  bg-gray-700 shadow-md rounded-lg  m-4 hover:shadow-lg transition-shadow duration-300">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg mb-4 " />
            <h2 className="text-xl font-semibold mb-2 p-2 text-gray-300">{item.title}</h2>
            <p className="text-gray-400 mb-4 p-2">{item.description}</p>
            <p className="text-gray-400 mb-4 p-2">{item.rating.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
