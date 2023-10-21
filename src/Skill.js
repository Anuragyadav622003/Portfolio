import React from 'react'
import CircularSkill from './CircularSkill'
import GitHubIcon from '@mui/icons-material/GitHub';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import { Link } from 'react-router-dom'
function Skill() {
  return (
    <div>
    <div className=' bg-gray-900 py-5 sm:h-screen pt-10 sm:py-18'> 
         <div className='text-center text-white font-serif text-2xl font-bold '>
         <span>My </span><span className="text-cyan-400">Skills</span>
        </div>

     <div className="flex flex-col sm:flex-row items-center justify-cente my-5 gap-8 ">

     <div className="w-full sm:w-1/2 text-center">
      
      <div className=''><span className='text-white underline text-xl text-bold font-serif'>Technical Skills</span></div>
  
     <div className=' w-3/4 mx-auto  text-left text-white '>

      <div className='flex mt-5'><div className='w-3/4'>React</div><span className='bg-black p-1 rounded'>75%</span></div>
      <div className='mx-auto border-2 rounded-full'>
        <div className='border-1 rounded-full w-4/5 h-2 bg-cyan-600' ></div>
        </div>
        <div className='flex mt-5'><div className='w-3/5 my-2'>Node js</div><span className='bg-black p-1 rounded'>60%</span></div>
    <div className='mx-auto border-2 rounded-full'>
        <div className='border-1 rounded-full w-3/5 h-2 bg-cyan-600' ></div>
        </div>
        <div className='flex mt-5'><div className=' w-4/5 '>Express js</div><span className='bg-black p-1 rounded'><span className='bg-black p-1 rounded'>80%</span></span></div>
    <div className='mx-auto border-2 rounded-full'>
        <div className='border-1 rounded-full w-4/5 h-2 bg-cyan-600' ></div>
        </div>
        <div className='flex mt-5'><div className='w-3/4 '>MongoDB</div><span className='bg-black p-1 rounded'>75%</span></div>
    <div className='mx-auto border-2 rounded-full'>
        <div className='border-1 rounded-full w-3/4 h-2 bg-cyan-600' ></div>
        </div>
        <div className='flex mt-5'><div className='w-1/2 '>MySQL</div><span className='bg-black p-1 rounded'>50%</span></div>
    <div className='mx-auto border-2 rounded-full'>
        <div className='border-1 rounded-full w-1/2 h-2 bg-cyan-600' ></div>
        </div>
        <div className='flex mt-5'><div className='w-3/5 '>JavaScript</div><span className='bg-black p-1 rounded'>60%</span></div>
    <div className='mx-auto border-2 rounded-full'>
        <div className='border-1 rounded-full w-3/5 h-2 bg-cyan-600' ></div>
        </div>
        <div className='flex mt-5'><div className=' w-3/4'>C++</div><span className='bg-black p-1 rounded'>75%</span></div>
    <div className='mx-auto border-2 rounded-full'>
        <div className='border-1 rounded-full w-3/4 h-2 bg-cyan-600' ></div>
        </div>
     </div>
</div>
     

     <div className="w-full sm:w-1/2 text-center pb-16">
      
     <div><span className='text-white underline text-xl font-serif text-bold '>Professional Skills</span></div>
     <div className='flex-col'>
     <div className="flex justify-center gap-28 sm:gap-44 mt-10 sm:mt-14">
        <div><CircularSkill percentage={85} skill={"Creativity"}/></div>
        <div><CircularSkill percentage={65} skill={"Communication"}/></div>
     </div>
     <div className="flex justify-center gap-28 sm:gap-44 mt-20">
        <div><CircularSkill percentage={80} skill={"Problem Solving"}/></div>
        <div><CircularSkill percentage={65} skill={"Team work"}/></div>
     </div>
        </div>
       </div>
    </div>
    <div className='flex  mt-14 justify-center'>
    <Link to="https://www.codechef.com/users/anuragyadav622" className='mx-5'> <div className='rounded-full border-cyan-500 border-4  pl-2 pb-1 w-12 h-12 sm:pt-1 hover:border-cyan-800 text-cyan-500 '><ClosedCaptionIcon/></div>
                </Link>
                <Link to="https://github.com/Anuragyadav622003" className='mx-5'> <div className='rounded-full border-cyan-500 border-4 pl-2 pb-1 sm:pt-1  w-12 h-12 text-cyan-500  hover:border-cyan-800 '><GitHubIcon/></div>
                </Link>
                <Link to="https://leetcode.com/anuragyadav622003/" className='mx-5'> <div className='rounded-full w-12 border-cyan-500 border-4 p-2  text-cyan-500  hover:border-cyan-800'><img src='leetcode.png' alt='#' className='' /></div>
                </Link>
                <Link to="https://auth.geeksforgeeks.org/user/anuragyadf2iy/practice/" className='mx-5'> <div className='rounded-full w-12 h-12 border-cyan-500 border-4 p-2 py-4  text-cyan-500  hover:border-cyan-800'><img src='gfg.png' alt='#' className='' /></div>
                </Link>
                <div></div>
                </div>
    </div>
                
  </div>
  )
}

export default Skill