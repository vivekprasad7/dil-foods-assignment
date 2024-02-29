import React, { useState } from 'react'
import { FcLike } from "react-icons/fc";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SIDEBAR_BOTTOM_LINKS, SIDEBAR_LINKS } from '../../utils/constants/constants';
import { NavLink, useLocation } from 'react-router-dom';

const navStyles = ({isActive}) => ({
    backgroundColor: isActive ? "rgb(254 242 242 )" : "",
    borderRadius: isActive ? "10px" : "",
  })

const Sidebar = () => {

    const [showSidebar, setShowSidebar] = useState(false)


  return (
    <div className={`hidden transition-all duration-200 ${showSidebar ? "w-60" : "w-20"} md:flex md:flex-col  p-2 py-3 shadow-lg h-full`}>
        <div className='flex justify-between items-center px-3'>
            <div className={` transition-all duration-200 ${showSidebar ? "flex justify-between items-center" :"w-0"}`}>
        <FcLike className={` transition-all duration-200 ${ showSidebar ? "" : "w-0"}`} fontSize={36} />
        <h1 className={`overflow-hidden transition-all ${ showSidebar ? "px-2 text-2xl w-32" : "w-0"}`}>Foods</h1>
            </div>
            <button onClick={() => setShowSidebar(!showSidebar)} className='bg-slate-100 p-3 rounded-lg  cursor-pointer'>
                {showSidebar ?  <FaChevronLeft /> : <FaChevronRight />  }
            </button>
        </div>

        <nav className='flex-1 px-3 pt-6 '>
            {
                SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} showSidebar={showSidebar}/>
                ))
            }

        </nav>

        <div className='border-t flex flex-col p-3'>
            {
                SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} showSidebar={showSidebar}/>
                ))
            }

        </div>


    </div>
  )
}

export default Sidebar



function SidebarLink({ link, showSidebar}) {
    return (
      <NavLink
        to={link.path}
        style={navStyles}
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer hover:bg-red-50
       `}
      >
        <span className='text-xl'>{link.icon}</span>
        <span className={` transition-all duration-200 ${showSidebar ? "w-40" : "hidden"}  w-52 ml-3`}>{link.label}</span>
      </NavLink>
    );
  }
  
//   `${showSidebar ? "w-40" : "hidden"} pl-2 `