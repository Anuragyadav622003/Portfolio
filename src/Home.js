import React from 'react'
import TypingAnimation from './Text'
import AboutMe from './AboutMe'
import Skill from './Skill'
import ContactMe from './ContactMe'
import LeatestProject from './LeatestProject'
import Footer from './Footer'

function Home() {
  return (
    <> 
    <div className="flex flex-col space-y-20">
        <div className='flex justify-center'>
        <div className='absolute'>
            <div><p className='font-bold text-2xl subpixel-antialiased   text-cyan-500 font-serif '><TypingAnimation text={"Welcome to My Portfolio !"}/></p></div>
        </div>
        </div>
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center mt-10 ">
  
    <div className="w-full sm:w-1/2 text-center px-10 mt-3">
    <span className='text-white font-serif text-xl'><p>Hello, It's Me</p>
    <p className='font-bold text-2xl'>Anurag yadav</p>
    <p className=''>And I'm a <span className=' text-cyan-600'><TypingAnimation text={"Full Stack Developer!"}/></span></p>
  </span>
    <span className='text-white'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
    </div>
    <div className="w-full sm:w-1/2 text-center flex justify-center ">
    <span className='border-4 rounded-full '>
    <img src="myImage.jpg" alt='' className='align-middle w-52 h-52 sm:w-72 sm:h-72  rounded-full border-8 border-l-cyan-300 border-r-cyan-300 border-t-violet-900  border-b-violet-900 '/>
    </span>
    </div>
  </div>
  <AboutMe/>
  <Skill/>
  <LeatestProject/>
  <ContactMe/>
  </div>
  </>
  )
}

export default Home