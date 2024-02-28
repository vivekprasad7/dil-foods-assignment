import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../../context/dataContext'
import { FaSort } from "react-icons/fa";

const DashboardOrdersTable = () => {

    const { dataState, dataDispatch } = useDataContext()

    const { orderItems} = dataState

    // console.log("order items", orderItems)


    const [quantityFilter, setQuantityFilter] = useState("")
    const [packageTypeID, setPackageTypeID] = useState("")

    // Pagination Logic
    const itemsPerPage = 10
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)



    function handlePageChange(newPage) {

        setCurrentPage(newPage)
    }

    function handleNextClick() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    function handlePrevClick() {

        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const disablePrevClick = currentPage === 1
    const disableNextClick = currentPage === totalPages

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const itemsToDisplay = orderItems.slice(startIndex, endIndex)

    ///


    function handleFilterByQuantity(){
        dataDispatch({type:"FILTER_BY_QUANTITY", payload: quantityFilter})
        setQuantityFilter("")
    }

    function handleFetchByPackageID(){
        console.log("fetchByID")
        dataDispatch({type:"FETCH_BY_PACKAGE_TYPEID", payload: packageTypeID})
        setPackageTypeID("")
    }

    const colorClasses = {
        1: 'bg-blue-200',
        2: 'bg-green-200',
        3: 'bg-yellow-200',
        4: 'bg-red-200',
        5: 'bg-purple-200',
        6: 'bg-indigo-200',
        7: 'bg-pink-200',
        8: 'bg-gray-200',
        9: 'bg-orange-200',
        10: 'bg-teal-200',
        11: 'bg-cyan-200',
        12: 'bg-rose-200',
        13: 'bg-lime-200',
        14: 'bg-emerald-200',
    };
    


    useEffect(() => {
        if (orderItems && orderItems.length > 0) {
            setTotalPages(Math.ceil(orderItems.length / 10))
        }
    }, [orderItems])


    return (
        <div className='bg-white px-4 pt-3 pb-4 rounded-lg border border-gray-200 flex-1 shadow-lg'>
            <h1 className="font-medium text-gray-700 text-center">Products Page - Recent Orders</h1>

        <div className='flex justify-around py-5'>
            <div className='border border-solid-gray-200 p-2 w-120'>
                <input 
                className='p-2 m-1'
                type="text" 
                name="quantityFilter"
                placeholder='Enter Quantity...'
                value={quantityFilter}
                onChange={(e) => setQuantityFilter(e.target.value)}
                />
                <button
                className='bg-slate-500 text-white p-2 rounded-lg'
                 onClick={handleFilterByQuantity}>Filter By Quantity</button>
            </div>

            <div className='border border-solid-gray-200 p-2 w-120'>
                <input 
                className='p-2 m-1'
                type="text" 
                name="packageTypeID"
                placeholder='Enter Package Type ID...'
                value={packageTypeID}
                onChange={(e) => setPackageTypeID(e.target.value)}
                />
                <button
                className='bg-slate-500 text-white p-2 rounded-lg'
                 onClick={handleFetchByPackageID}>Fetch Items By PackageType {packageTypeID}</button>
            </div>

        </div>

            <div className='mt-3 border-x border-slate-200 rounded-lg'>
                <table className='w-full text-gray-700'>
                    <thead>
                        <tr>
                            <th>
                                
                                <div className='flex items-centers'>
                                OrderLineID
                                <FaSort
                                        onClick={() => dataDispatch({ type: "SORT_BY_FIELD", payload: 'OrderID' })}
                                        className='cursor-pointer'
                                        fontSize={18}
                                    />
                                </div>
                               </th>
                            <th
                            >
                                <div className='flex items-center'>

                                    OrderID
                                    <FaSort
                                        onClick={() => dataDispatch({ type: "SORT_BY_FIELD", payload: 'OrderID' })}
                                        className='cursor-pointer'
                                        fontSize={18}
                                    />
                                </div>

                            </th>
                            <th
                                
                            >
                                <div className='flex justify-center items-center'>

                                    Description
                                    <FaSort
                                        onClick={() => dataDispatch({ type: "SORT_BY_FIELD", payload: 'Description' })}
                                        className='cursor-pointer'
                                        fontSize={18}
                                    />
                                </div>
                            </th>
                            <th
                               
                            >
                                <div  className='flex items-center'>

                                StockItemID
                                <FaSort
                                    onClick={() => dataDispatch({ type: "SORT_BY_FIELD", payload: 'StockItemID' })}
                                    className='cursor-pointer'
                                    fontSize={18}
                                />
                                </div>
                            </th>
                            <th>

                                <div className='flex items-center'>

                                    Quantity
                                    <FaSort
                                        onClick={() => dataDispatch({ type: "SORT_BY_FIELD", payload: 'Quantity' })}
                                        className='cursor-pointer'
                                        fontSize={18}
                                    />
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center'>

                                    Price
                                    <FaSort
                                        onClick={() => dataDispatch({ type: "SORT_BY_FIELD", payload: 'UnitPrice' })}
                                        className='cursor-pointer'
                                        fontSize={18}
                                    />
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center'>

                                    PackageTypeID
                                    <FaSort
                                        onClick={() => dataDispatch({ type: "SORT_BY_FIELD", payload: 'PackageTypeID' })}
                                        className='cursor-pointer'
                                        fontSize={18}
                                    />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemsToDisplay && itemsToDisplay.length > 0 ? itemsToDisplay.map((item) => {
                                const { OrderLineID, OrderID, Description, StockItemID, Quantity, UnitPrice, PackageTypeID } = item
                                return (
                                    <tr key={OrderID}>
                                        <td>{OrderLineID}</td>
                                        <td>{OrderID}</td>
                                        <td>{Description}</td>
                                        <td>{StockItemID}</td>
                                        <td>{Quantity}</td>
                                        <td>{UnitPrice}</td>
                                        <td className={colorClasses[item.PackageTypeID]}>{PackageTypeID}</td>
                                    </tr>
                                )
                            }) : ''
                        }
                    </tbody>



                </table>
                <div className='flex justify-evenly p-2 w-full'>

                    <div>

                        <button
                            className='border border-gray-500 p-2 mx-2 cursor-pointer rounded-lg  focus:bg-slate-100'
                            onClick={handlePrevClick}
                            disabled={disablePrevClick}
                        >Prev
                        </button>
                    </div>


                    <div className='max-w-60 overflow-hidden max-h-14'>
                        {
                            Array.from({ length: totalPages }, (_, index) => {
                                return (
                                    <button
                                        className='border border-gray-200 p-3 mx-1 rounded-full focus:bg-slate-100'
                                        onClick={() => handlePageChange(index + 1)}
                                        key={index}
                                        disabled={index + 1 === currentPage}
                                    >
                                        {index + 1}
                                    </button>
                                )
                            })
                        }
                    </div>

                    <div>

                        <button
                            className='border p-2 mx-2 cursor-pointer rounded-lg  focus:bg-slate-100'
                            onClick={handleNextClick}
                            disabled={disableNextClick}
                        >Next
                        </button>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default DashboardOrdersTable