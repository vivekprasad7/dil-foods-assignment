import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className='flex w-[100%]'>
        <div><Sidebar/></div>
        <div className='bg-slate-50 w-full'>

        <div>Header</div>
        <div>{<Outlet/>}</div>
        </div>
    </div>
  )
}

export default Layout