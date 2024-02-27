import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className='flex'>
        <div><Sidebar/></div>
        <div>

        <div>Header</div>
        <div>{<Outlet/>}</div>
        </div>
    </div>
  )
}

export default Layout