import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {

    const [orderItems, setOrderItems] = useState([])

    const fetchData = async () => {
        try {
            const res = await axios.get("https://minizuba-fn.azurewebsites.net/api/orderlines?type_id=5&quantity=10")
        console.log("data", res.data.slice(0,20))
        setOrderItems(res.data.slice(0,20))
            
        } catch (error) {
            console.error("Error fetching data from database", error)
        }
        
    }
    useEffect(() => {
        fetchData()
    },[])

    return(
        <DataContext.Provider value={{ orderItems, setOrderItems}}>
            {children}
        </DataContext.Provider>
    )
}
    

export const useDataContext = () => useContext(DataContext)