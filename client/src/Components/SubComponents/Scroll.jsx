
import React from 'react'
import { dataApi } from '../../api/Api';

function Scroll() {
    const [clickImg, setClickImg] = useState();
    return (

        <div>
            <dataApi className="Consumer">

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
<p>ewrbwejrh</p>


                                </div>
                            )
                        })
                    }

                </div>
            </dataApi>
        </div>
    )
}

export default Scroll