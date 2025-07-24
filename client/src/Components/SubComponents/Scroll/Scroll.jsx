import React, {  } from 'react'
import { useApiData } from '../../../context/ApiContext';

function Scroll(props) {


    // use api data hook 
    const apiData = useApiData()

    return (
        <div className=''>
            <div className=" scrollBar w-full  sm:w-100 scroll-smooth flex overflow-x-auto space-x-5 px-2 sm:mr-10 sm:mb-10">
                {

                    apiData.data.map((item, key) => {
                        return (
                            <div key={key} className=" flex-shrink-0 h-25 sm:h-50  w-30 overflow-hidden md:rounded-2xl " >
                                <img
                                    src={item.image}
                                    alt="homeBackground"
                                    className="  h-full  w-30 sm:h-49 sm:w-35  cursor-pointer rounded md:rounded-2xl hover:scale-110 hover:opacity-90 transition-all duration-900"
                                    onClick={() => props.setClickImg(item.id)}
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