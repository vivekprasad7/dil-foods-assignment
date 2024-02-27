import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className='flex w-[100%] '>
        <div><Sidebar/></div>
        <div className='bg-slate-50 flex flex-col flex-1 overflow-y-scroll'>

        <div>Header</div>
        <div className='flex-1 p-4 min-h-0 overflow-auto'>{<Outlet/>}</div>
        </div>
    </div>
  )
}

export default Layout