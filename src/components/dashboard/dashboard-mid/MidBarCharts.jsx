import React from 'react'
import MidBarChart from './MidBarChart'
import MidPieChart from './MidPieChart'

const MidBarCharts = () => {
  return (
    <section className='flex gap-5 w-[100%] h-full'>

      <div class="w-3/4">
        <MidBarChart />

      </div>
      <div class="w-1/4">

        <MidPieChart />
      </div>

    </section>
  )
}

export default MidBarCharts