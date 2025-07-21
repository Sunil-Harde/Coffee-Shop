import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/Navbar";

function Home() {
  const [data, setData] = useState([]);

  const totalStars = 5;


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
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return (
    <div className="bg-gray-900">
      <Navbar />
      <div>
        <img
          src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="homeBackground"
          className="w-screen h-screen object-cover"
        />
      </div>
      <h1 className="bg-gray-500 p-5 mt-5 font-bold text-[41px] text-center">Our Coffee</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2">
        {data.map((item, id) => (
          <div
            key={id}
            className="card  bg-gray-700 shadow-md rounded-lg  m-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg mb-4 "
            />
            <h2 className="text-xl font-semibold mb-2 p-2 text-gray-300">
              {item.title}
            </h2>
            <p className="text-gray-400 mb-4 p-2"><b>Description</b> : {item.description}</p>
            <p className="text-gray-400 mb-4 p-2">
              <b>Rateing</b> :
              {
                Array.from({ length: totalStars }, (_, index) => (
                  <span key={index} className="text-yellow-500 text-xl">
                    {index < Math.floor(item.rating.rate) ? "★" : "☆"}
                  </span>
                ))  
              }
              <span> {item.rating.rate}</span>
            </p>
            <p className="text-gray-400 mb-4 p-2"> <b>Price</b> : $ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
