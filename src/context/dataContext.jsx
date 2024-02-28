import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { dataReducer, initialData } from "../reducer/dataReducer";

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {

    const [orderItems, setOrderItems] = useState([])

    const [dataState, dataDispatch] = useReducer(dataReducer, initialData)

    console.log("data state packageID", dataState.packageTypeID)
    const fetchData = async () => {
        try {
            const res = await axios.get(`https://minizuba-fn.azurewebsites.net/api/orderlines?type_id=${dataState?.packageTypeID}`)
        // console.log("data", res.data.slice(0,20))
        const data = res.data.slice(0,30)
        dataDispatch({type:"FETCH_ORDER_ITEMS", payload: data})
        setOrderItems(res.data.slice(0,50))

        // console.log("initialData", dataState)
            
        } catch (error) {
            console.error("Error fetching data from database", error)
        }
        
    }


    useEffect(() => {
        fetchData()
    },[dataState?.packageTypeID])

    return(
        <DataContext.Provider value={{ orderItems, setOrderItems, dataState, dataDispatch}}>
            {children}
        </DataContext.Provider>
    )
}
    

export const useDataContext = () => useContext(DataContext)