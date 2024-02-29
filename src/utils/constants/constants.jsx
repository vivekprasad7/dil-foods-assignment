import React from "react"

import {
    HiOutlineViewGrid,
	HiOutlineCube,
    HiOutlineUser,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from "react-icons/hi"


export const SIDEBAR_LINKS = [
    {
        key:'dashboard',
        label:'Dashboard',
        path:'/',
        icon:<HiOutlineViewGrid/>
    },
    {
        key:'products',
        label:'Products',
        path:'/products',
        icon:<HiOutlineCube/>
    },
    {
        key:'customers',
        label:'Customers',
        path:'/customers',
        icon:<HiOutlineUsers />
    },
    {
        key:'statistics',
        label:'Statistics',
        path:'/statistics',
        icon:<HiOutlineShoppingCart />
    },
]

export const SIDEBAR_BOTTOM_LINKS = [
    {
        key:'settings',
        label:'Settings',
        path:'/settings',
        icon:<HiOutlineCog />
    },
    {
        key:'support',
        label:'Help & Support',
        path:'/support',
        icon: <HiOutlineQuestionMarkCircle />
    },
]