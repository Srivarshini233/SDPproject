 import React from 'react'
import { Outlet } from 'react-router-dom'
const Userlayout = () => {
    return (
        <div className='h-screen flex flex-col p-0 m-0'>
          <Outlet />
        </div>
    )
}

export default Userlayout