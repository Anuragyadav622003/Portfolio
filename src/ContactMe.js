import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import WifiCalling3SharpIcon from '@mui/icons-material/WifiCalling3Sharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
function ContactMe() {
  return (
    <div className=' h-screen items-center sm:pt-44 pt-10'>
         <div className="flex flex-col sm:flex-row  justify-center">
         <div className="w-full sm:w-1/2 text-center sm:text-left text-white font-serif px-10">
             <div className=''><span className=' font-serif font-bold text-3xl'>
             <span>Contact </span><span className="text-cyan-400">Me</span>
             </span>
             </div>
           <div><span>Let's Work Together!</span></div> 
           <div className='my-2'>
             <span>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </span>
             <div className='my-4 text-left'>
          <div><span className=' text-cyan-300 '><SendIcon/>&nbsp; </span><span>anuragyadav622003@gmail.com</span>
          </div>
          <div> <span className=' text-cyan-300 '><WifiCalling3SharpIcon/>&nbsp; </span><span>9115392172</span>
             </div>
             <div className='flex gap-5 mt-10'>
                <Link to="https://www.facebook.com/profile.php?id=100073658021428"><div className='rounded-full border-cyan-500 border-2 p-1  text-cyan-500 '><FacebookSharpIcon/></div></Link>
               <Link to="https://twitter.com/AnuragY7407529"> <div className='rounded-full border-cyan-500 border-2 p-1  text-cyan-500'><TwitterIcon/></div></Link>
                <Link to="https://www.linkedin.com/in/anurag-yadav-3704b1239"> <div className='rounded-full border-cyan-500 border-2 p-1  text-cyan-500 '><LinkedInIcon/></div>
                </Link>
                <div></div>
             </div>
             </div>
            
           </div>
             </div>
         <div className="w-full sm:w-1/2 text-center flex justify-center">
            <div className="flex-col">
            <div className='my-2.5'><input type='text' className='rounded font-serif text-xl py-1 px-2' placeholder='Enter Your Name'/></div>
        <div className='my-2.5'><input type='email' className=' rounded py-1 px-2 font-serif text-xl'placeholder='Enter Your Email'/></div>
        <div className='my-2.5'><input type='email' className=' rounded py-1 px-2 font-serif text-xl'placeholder='Enter Your Subject'/></div>
        <div className='my-2.5'><textarea type='email' className='max-h-24 sm:max-h-60 rounded py-1 px-2 font-serif text-xl'placeholder='Enter Your Message'/></div>
        <button type='submit' className='max-h-24 w-full sm:max-h-60 rounded-full py-1 px-2 font-serif text-xl bg-cyan-500 hover:bg-sky-700 mb-24  '>Submit</button>
        
            </div>
        </div>
           </div>
    </div>
  )
}

export default ContactMe