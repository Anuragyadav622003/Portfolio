import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50 h-32 sm:h-16">
      <div className="container mx-auto text-center">
        <p className='fs-3 fw-bold'>&copy; 2023 Anurag Yadav</p>
        <div className='flex gap-5'>
        <Link to="https://www.facebook.com/profile.php?id=100073658021428"><div className='rounded-full border-cyan-500 border-2 sm:p-1 px-2 py-1 text-cyan-500 '><FacebookSharpIcon/></div></Link>
               <Link to="https://twitter.com/AnuragY7407529"> <div className='rounded-full border-cyan-500 border-2 sm:p-1  px-2 py-1  text-cyan-500'><TwitterIcon/></div></Link>
                <Link to="https://www.linkedin.com/in/anurag-yadav-3704b1239"> <div className='rounded-full border-cyan-500 border-2 sm:p-1  px-2 py-1 text-cyan-500 '><LinkedInIcon/></div>
                </Link>
                <div>
                    </div>
                    </div>
      </div>
    </footer>
  );
};

export default Footer;
