import React, { useState } from 'react'
import { useApiData } from '../../context/ApiContext';

function Scroll() {

    const [clickImg, setClickImg] = useState();
    console.log(clickImg);

    const apiData = useApiData()

    return (
        <div>
            <div className="w-95 scroll-smooth  flex  overflow-x-auto  space-x-5 ">
                {

                    apiData.data.map((item, key) => {
                        return (
                            <div key={key} className=" flex-shrink-0 space-x-1" >

                                <img
                                    src={item.image}
                                    alt="homeBackground"
                                    className=" h-35 w-22 rounded cursor-pointer "

                                    onClick={() => setClickImg(item.id)}
                                />



                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Scroll