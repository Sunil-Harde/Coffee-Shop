import React from 'react'
  const [clickImg, setClickImg] = useState();

function Scroll() {
    return (
        <div>
            <div className="w-95 scroll-smooth  flex  overflow-x-auto  space-x-5 ">
                {

                    data.map((item, key) => {
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