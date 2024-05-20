import React from 'react'
import about from '../assets/about.jpg'
const About = () => {
  return (
    <div className='bg-white flex flex-col-reverse px-10  items-center md:flex-row md:px-20 md:space-x-16 md:justify-center   py-20'>
        <div className=' -rotate-3   basis-1/2 max-w-96'>
          <img src={about}  className='   mt-9   lg:mt-0  rounded-xl'/>
        </div>
        <div className=' basis-1/2 flex flex-col space-y-5' >
          <p className='text-3xl font-bold border-b-4 border-main w-fit py-2 '>About us</p>
          <p className='text-lg font-light capitalize'>

        Savor Haven, established in 2019, is your haven for culinary exploration. We're dedicated to sourcing the finest ingredients from local producers, ensuring quality and sustainability. More than a shop, we're a community hub where food enthusiasts gather to share their passion. From cooking classes to special events, we offer opportunities to elevate your culinary skills. Our mission is to inspire and empower food lovers of all levels to explore and savor the world of flavors. Thank you for choosing Savor Haven as your culinary partner.we look forward to serving you!</p>
        </div>
    </div>
  )
}

export default About