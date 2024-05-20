import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products'
import Footer from './Footer';
import { IoCartSharp } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import Copyright from './Copyright';
import DataContext from '../context/DataContext';
import { motion } from 'framer-motion';
const Navbar = () => {
  const location = useLocation();

  
  const {count}=useContext(DataContext)

  const [counter, setCounter] = useState(0);
  const [nav,setnav] = useState(false)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
 
   

  }, [location.hash, counter]); 
  const handleLinkClick = () => {
    setCounter(counter + 1); 
    setnav(!nav)
  };

  const handlenav = ()=>{
      setnav(!nav)
      
  }

  return (
    <div className=' w-full bg-white'>
    
    <div className='  w-full sticky top-0 z-30  lg:px-20 px-10 bg-white '>          
     <div className=' flex justify-between w-full items-center py-3 '>
     <div className='max-w-10 flex space-x-2 items-center '>
        <img src={logo} alt="Logo" />
        <p className='text-lg uppercase font-semibold text-dark'>Foo<span className='text-main'>Die</span></p>
      </div>

    <div className='flex space-x-10'>
    <div className='hidden md:flex md:space-x-8 '>
        <Link to='/#home' onClick={handleLinkClick}>Home</Link>
        <Link to='/#about' onClick={handleLinkClick}>About</Link>
        <Link to='/#product' onClick={handleLinkClick}>Receipe</Link>
      </div>
      

      <div className=' relative'>
      {
       count != '' && (
        <p className='absolute bg-main top-0 left-4 text-white p-2 text-xs w-3 h-3 flex justify-center items-center rounded-full'>
           {count}
        </p>
      )
      }

        <IoCartSharp  size={25}/>
        
        </div>
        <div className=' md:hidden block w-full bg-white' onClick={handlenav}>
        <CiMenuBurger  size={25}/>
        </div>
       
        
    </div>
    
     </div>
    
 
     <motion.div  transition={{duration:3,delay:2.5}}  initial={{opacity:0}} animate={{opacity:1}} className={` bg-white  w-full flex flex-col text-lg space-y-7  items-center py-5 md:hidden transition-all duration-200 ${nav?`block`:`hidden`} `}>
        <Link to='/#home' onClick={handleLinkClick}>Home</Link>
        <Link to='/#about' onClick={handleLinkClick}>About</Link>
        <Link to='/#product' onClick={handleLinkClick}>Product</Link>
    </motion.div>
    
    

    
    </div>

   
   

  
      <div id='home'>
        <Home />
      </div>
      <div id='about'>
        <About />
      </div>

      <div id='product'>
        <Products/>
      </div>
      <div>
          <Footer/>
        </div>

        <div>
          <Copyright/>
        </div>
    </div>
  );
}

export default Navbar;
