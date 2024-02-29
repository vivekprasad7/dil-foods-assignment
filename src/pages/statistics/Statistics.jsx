import React from 'react'
import TopPieCards from '../../components/dashboard/dashboard-top/TopPieCards'
import DashboardOrdersTable from '../../components/dashboard/dashboard-bottom/DashboardOrdersTable'

const Statistics = () => {


  return (
    <div className='flex flex-col gap-4 w-full py-3'>
        <h1 className='m-auto text-center'>Statistics Page</h1>
        <TopPieCards/>


        <div className='flex flex-col md:flex-row gap-4 w-full py-6'>
          <DashboardOrdersTable/>
        </div>

      
        
    </div>
  )
}

export default Statistics