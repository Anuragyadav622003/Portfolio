import React from 'react';
import './AboutMe.css'
function AboutMe() {
  return (
    <div>
         <div className="flex flex-col sm:flex-row items-center justify-center h-screen mt-52 sm:mt-10">
         <div className="w-full sm:w-1/2 text-center flex justify-center">
    <span className='border-4 rounded-full '>
    <img src="myImage.jpg" alt='' className='align-middle w-52 h-52 sm:w-72 sm:h-72 rounded-full border-8 border-l-cyan-300 border-r-cyan-300 border-t-violet-900  border-b-violet-900 '/>
    </span>
    </div>
            <div className="w-full sm:w-1/2 px-10 text-center sm:text-left py-2  text-white font-serif">
             
            <div className=''><span className=' font-serif font-bold text-3xl'>
            <span>About </span><span className="text-cyan-400">Me</span>
            </span>
            </div>
          <div><span>Full Stack Developer!</span></div> 
          <div className='my-2'>
            <span>
            As a **pre-final year student** with a passion for web development, I specialize in creating user-friendly websites using HTML, CSS, JavaScript, and Python. I have a medium level understanding of Data Structures and Algorithms (DSA), which aids me in writing efficient code. My problem-solving skills are continually being honed, making me effective at debugging and optimizing website performance. As I approach my final year, I am excited to continue growing as a web developer and problem solver.
            </span>
            <div className='mt-2'><button class=" box p-2 border "><a href="/AnuragYadav.pdf" download="AnuragYadav.pdf">Dowload CV</a></button></div>
          </div>
            </div>
         </div>
    </div>
  )
}

export default AboutMe