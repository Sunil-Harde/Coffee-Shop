import { createContext, useContext, useEffect, useState } from "react";
import { getCofferDataFromApi } from "../api/";

export const ApiContext = createContext(null)

export const useApiData = () => {
    return useContext(ApiContext)
}

export const ApiContextProvider = (props) => {
    const [data, setData] = useState([])
    const getData = async () => {
        const response = await getCofferDataFromApi()
        setData(response)
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <ApiContext.Provider value={{ data, setData }}>
            {props.children}
        </ApiContext.Provider>
    )
}                   