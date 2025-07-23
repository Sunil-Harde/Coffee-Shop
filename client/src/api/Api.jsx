import React, { createContext, useEffect, useState } from 'react'
import Home from '../Components/home/Home';


 export const dataApi = createContext()

function Api() {

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
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });

  }, []);

   


  return (
    <div>

      <dataApi.provider value={{data}}>
        <Home/>
      </dataApi.provider>

    </div>
  )
}

<<<<<<< HEAD
export default Api
=======


export default Api
>>>>>>> b951c0de00d8c33593b4cdbc88d36ad3c824a7ea
