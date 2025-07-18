import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom';
import Dashboard from '../List/Dashboard';

function home() {
  return (

    
<div className='flex flex-row border-2 border-black rounded-xl  max-w-screen min-h-full bg-white'> 
    <div className='  w-1/7  bg-black shadow-md hover:shadow-lg transition-shadow duration-300à'>
     <Sidebar/> 
    </div>
    <div className='   w-6/7 rounded-xl'>
      <Navbar/>
      <main className=' p-2 bg-white rounded-xl'>
      <Outlet/>
      </main>
      
     
   

              
</div>

  
</div>

  )
}

export default home