import React from 'react'
import { useDataContext } from '../../../context/dataContext'
import {DataTable} from "primereact/datatable"
import {Column} from "primereact/column"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"

import { useState } from 'react'
import { FilterMatchMode } from 'primereact/api'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'

const PrimeReactTable = () => {

    const { orderItems,dataState} = useDataContext()

    const [filters, setFilters] = useState({
        global:{value: null, matchMode: FilterMatchMode.CONTAINS},
    })

    console.log("comp data state", dataState)

  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-lg border border-gray-200 flex-1 '>
                <h1 className="font-bold text-gray-700 text-center">Recent Orders</h1>

        <div className='flex justify-center items-center py-2'>
    <label className='font-medium text-slate-500'>Search: </label>
            <InputText 
            className='border border-slate-200 p-2 m-2'
             onInput={(e) => setFilters({
                global:{value: e.target.value, matchMode: FilterMatchMode.CONTAINS},
            })}/>
        </div>
        <DataTable 
        className='pt-4'
        value={dataState?.orderItems} 
        sortMode='multiple' 
        filters={filters}
        paginator
        rows={10}
        rowsPerPageOptions={[5,10,20]}
        totalRecords={dataState?.orderItems?.length}
        >
            <Column field='OrderID' header='OrderID' sortable/>
            <Column field='Description' header='Description' sortable/>
            <Column field='StockItemID' header='StockItemID' sortable/>
            <Column field='Quantity' header='Quantity' sortable/>
            <Column field='UnitPrice' header='Price' sortable/>
        </DataTable>


        {/* <div className='mt-3 border-x border-slate-200 rounded-lg'>
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
                        dataState?.orderItems.map((item) => {
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

        </div> */}



    </div>
  )
}

export default PrimeReactTable