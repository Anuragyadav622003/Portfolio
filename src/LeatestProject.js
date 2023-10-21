
import React from 'react';
import CardItems from './CardItems';
import { Link } from 'react-router-dom';
function LeatestProject() {
  return (
    <div className='ml-5 sm:ml-0 '>
         <div className='text-center py-10  text-white'><span className=' font-serif font-bold text-2xl'>
             <span>Leatest </span><span className="text-cyan-400">Project</span>
             </span>
          </div>
            <div className='flex  flex-col sm:flex-row items-center justify-around gap-16 ml-3'>
              <div className=''><Link to="https://wordandcharectercounter.netlify.app"><CardItems src = {'wordCounter.jpg'} project={"WordCounter"}/></Link></div>
              <div className=''><Link to="#"><CardItems src = {'OIP.jpg'} project={"Ecommerce"}/></Link></div>
              <div><Link to="https://hotel-booking-beryl.vercel.app/"><CardItems src = {'hotel.jpg'} project={"Hotel Booking"}/></Link></div>
          
            </div>
          </div>
  
  )
}

export default LeatestProject