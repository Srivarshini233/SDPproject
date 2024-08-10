
import Navbar from '@/components/web/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
    return (
        <div className='h-screen flex flex-col p-0 m-0'>
            <Navbar />
            <Outlet />
            
        </div>
    )
}

export default Weblayout