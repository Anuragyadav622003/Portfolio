import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  const [dis,setDis] = useState('hidden')
  const[bar,setBar] = useState(true);
  return (
    <div className=' px-10 sticky h-14'>
        <nav className='flex py-2 text-white text-xl font-serif'>
        <div className='w-1/2'><span>Portfolio...</span></div>
        <div className='w-1/2 '>
        <div className='flex justify-end gap-10 navbar'>
            <NavLink to="/"><div className='hover:text-cyan-600'><span>Home</span></div></NavLink>
            <NavLink to="/aboutme"><div className='hover:text-cyan-600' ><span>AboutMe</span></div></NavLink>
            <NavLink to="/skills"><div className='hover:text-cyan-600'><span>Skills</span></div></NavLink>
            <NavLink to="/leatestproject"><div className='hover:text-cyan-600'><span>Projects</span></div></NavLink>
            <NavLink to='/contactme'><div className='hover:text-cyan-600'><span>ContactMe</span></div></NavLink>
            </div>
        </div>
        <div className=''>
       {bar?<div className='sidebar' onClick={()=>{setDis('flex');setBar(false)}}><i class="fa-solid fa-bars"></i></div>:<div className='sidebar text-cyan-700 flex justify-end ' onClick={()=>{setBar(true);setDis('hidden')}}><i class="fa-solid fa-square-xmark"></i></div>}

<div className='sidebar '>
  <div className={dis}>
<div className=' justify-end gap-10 mt-2 border-2 p-3 bg-blue-800'>
            <NavLink to="/"><div className='hover:text-cyan-600'><span>Home</span></div></NavLink>
            <NavLink to="/aboutme"><div className='hover:text-cyan-600' ><span>AboutMe</span></div></NavLink>
            <NavLink to="/skills"><div className='hover:text-cyan-600'><span>Skills</span></div></NavLink>
            <NavLink to="/leatestproject"><div className='hover:text-cyan-600'><span>Projects</span></div></NavLink>
            <NavLink to='/contactme'><div className='hover:text-cyan-600'><span>ContactMe</span></div></NavLink>
            </div>
            </div>
            </div>
</div>
        </nav>
    </div>
  )
}

export default Navbar