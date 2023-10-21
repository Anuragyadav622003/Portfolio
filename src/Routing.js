import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Skill from './Skill'
import LeatestProject from './LeatestProject'
import ContactMe from './ContactMe'
import Navbar from './Navbar'

function Routing() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/skills" element={<Skill/>}/>
            <Route path="/leatestproject" element={<LeatestProject/>}/>
            <Route path="/contactme" element={<ContactMe/>}/>
        </Routes>
    </div>
  )
}

export default Routing