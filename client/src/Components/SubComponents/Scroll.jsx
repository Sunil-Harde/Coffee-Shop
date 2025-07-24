import React, { useState } from 'react'
import { useApiData } from '../../context/ApiContext';

function Scroll() {

    const [clickImg, setClickImg] = useState();
    console.log(clickImg);

    // use api data hook 
    const apiData = useApiData()

    return (
        <div className=''>
            <div className="scroleBar w-100  he scroll-smooth  flex  overflow-x-auto space-x-5 mr-15 mb-15">
                {
                    apiData.data.map((item, key) => {
                        return (
                            <div key={key} className=" flex-shrink-0 space-x-1" >
                                <img
                                    src={item.image}
                                    alt="homeBackground"
                                    className="p-2 h-49 w-40  cursor-pointer rounded-3xl "
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