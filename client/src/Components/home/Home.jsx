import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/Navbar";

function Home() {
  const [data, setData] = useState([]);

  const totalStars = 5;

  const left = () => {

    console.log("Left button clicked");
    

  }
  const right = () => {
    
  }

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

      <div className="w-full h-screen relative ">

        {

          data.map((item, key) => {
            return (
              <div key={key} className="w-100 h-screen absolute overflow-hidden" style={{ width: "100%" }}>

                <img
                  src={item.image}
                  alt="homeBackground"
                  className=" h-screen  top-0 left-0 object-cover"
                  style={{ width: "100%" }}
                />

                <button className=" bg-amber-700 absolute top-100  left-10" onClick={left}>hiidfd</button>
                <button className=" bg-amber-700 absolute top-100 right-10 " onClick={right}>hiidfd</button>

              </div>
            )
          })
        }





      </div>
      <h1 className=" bg-gray-500 p-5 mt-5 font-bold text-[41px] text-center">Our Coffee</h1>

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
            <p className="text-gray-400 mb-4 p-2"> <b>Price</b> : $ {item.price}</p>
          </div>
        ))}
      </div>
    </div >
  );
}

export default Home;
