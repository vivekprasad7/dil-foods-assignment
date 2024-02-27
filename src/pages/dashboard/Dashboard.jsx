import React from 'react'
import TopPieCards from '../../components/dashboard/dashboard-top/TopPieCards'
import MidBarChart from '../../components/dashboard/dashboard-mid/MidBarChart'
import MidPieChart from '../../components/dashboard/dashboard-mid/MidPieChart'
import DashboardOrdersTable from '../../components/dashboard/dashboard-bottom/DashboardOrdersTable'

const Dashboard = () => {


  return (
    <div className='flex flex-col gap-4 w-full py-3'>
        <TopPieCards/>

        <div className='flex flex-col md:flex-row gap-4 w-full py-6'>
            <MidBarChart/>
            <MidPieChart/>
        </div>

        <div className='flex flex-col md:flex-row gap-4 w-full py-6'>
          <DashboardOrdersTable/>
        </div>
        
    </div>
  )
}

export default Dashboard