import React, { useEffect, useState } from 'react'


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
    <div>Api fetch</div>
  )
}



export default Api