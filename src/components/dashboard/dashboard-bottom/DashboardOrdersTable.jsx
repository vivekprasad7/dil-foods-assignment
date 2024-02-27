import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DashboardOrdersTable = () => {

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
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-lg border border-gray-200 flex-1 '>
        <h1 className="font-medium text-gray-700 text-center">Recent Orders</h1>
        <div className='mt-3 border-x border-slate-200 rounded-lg'>
            <table className='w-full text-gray-700'>
                <thead>
                    <tr>
                        <th>OrderID</th>
                        <th>Description</th>
                        <th>StockItemID</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderItems.map((item) => {
                                const {OrderID, Description, StockItemID, Quantity, UnitPrice} = item
                            return(
                                <tr key={OrderID}>
                                    <td>{OrderID}</td>
                                    <td>{Description}</td>
                                    <td>{StockItemID}</td>
                                    <td>{Quantity}</td>
                                    <td>{UnitPrice}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </div>



    </div>
  )
}

export default DashboardOrdersTable