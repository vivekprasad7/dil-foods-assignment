import React from 'react'
import TopPieCards from '../../components/dashboard/dashboard-top/TopPieCards'
import MidBarCharts from '../../components/dashboard/dashboard-mid/MidBarCharts'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center '>
        <TopPieCards/>

        <div className='flex flex-row gap-4 w-full'>
            <MidBarCharts/>

        </div>
        
    </div>
  )
}

export default Dashboard