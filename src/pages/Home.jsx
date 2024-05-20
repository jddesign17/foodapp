import React from 'react'
import burger from '../assets/burger.png'
const Home = () => {
  return (
    <div className='  flex px-10 py-16 flex-col-reverse bg-gradient-to-r from-lightwhite  md:flex-row md:px-20'>
      <div className='  flex flex-col space-y-6 md:basis-1/2 md:space-y-5 md:flex  md:flex-col md:justify-center'>
        <div>
        <p className='text-4xl capitalize'><span className=' font-semibold text-main'>Savor</span> the essence of heart in <span className=' font-semibold text-main'>each meal we offer..</span></p>
        </div>
        <div>
          <p className='text-lg font-light capitalize'>Step into Savor Haven, where the aroma of fresh produce and the allure of global flavors beckon. Explore, taste, and savor the magic of food in our culinary oasis.</p>
        </div>
        <div>
          <button className='bg-main  w-full md:w-fit px-10 py-3 rounded-3xl text-white font-semibold hover:bg-lightwhite hover:border hover:border-main hover:text-dark transition-all duration-500'>Ordernow</button>
        </div>
      </div>
      <div className=' basis-1/2'>
          <img src={burger} className='max-w-full object-cover'/>
      </div>
    </div>
  )
}

export default Home