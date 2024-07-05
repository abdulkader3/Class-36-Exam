import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <>
    <div className="w-full pt-14 flex">
        <Outlet/>
        <Navbar/>
    </div>
      
    </>
  )
}

export default Layout
