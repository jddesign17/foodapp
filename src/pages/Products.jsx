import React, { useContext, useEffect, useState } from 'react'
import pizza from '../assets/pizza.jpg'
import chips from '../assets/chips.jpg'
import fry from '../assets/chickenfry.jpeg'
import burger from '../assets/burger.jpg'
import Navbar from './Navbar'
import DataContext from '../context/DataContext'

const Products = () => {
  const [data,setData] = useState([])
  const {count,setcount} = useContext(DataContext)
  const Productsdetails = [
    {

        id:'1',
        name:'Spicy Diablo Pizza',
        image:pizza,
        Price:'₹200'

    },
    {
        id:'2',
        name:'Black Bean Burger',
        image:burger,
        Price:'₹180'

    },
    {
        id:'3',
        name:'Crispy Southern Fried Chicken',
        image:fry,
        Price:'₹250'
    },
    {
        id:'4',
        name:'Crispy Golden Fries',
        image:chips,
        Price:'₹120'
    }

]

  
  function handledata(id)
  {
     
      const product = Productsdetails.find((item)=>item.id===id)
      if(product)
      {
          const duplicate = data.find(item=>item.id===product.id)

          if(duplicate)
          {
            alert("Product Already Added")
          }
          else
          {
            const updatedata = [...data,product]
            setData(updatedata)
            setcount(updatedata.length)
          }       
      }

     
  }

  return (
    <div>
        <div className='flex justify-center pb-10 '>
        <p className='text-3xl font-bold border-b-4 border-main w-fit py-2 '>Receipe</p>
        </div>
        <div className='grid justify-items-center grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2  gap-10 md:px-20'>
  {Productsdetails.map(({name, id, image, Price}) => (
    <div className='md:aspect-square border  space-y-5 px-5 pt-5 pb-2 border-light rounded-3xl flex flex-col justify-center items-center max-w-64' key={id}>
      <div>
        <img src={image} className='max-w-52 rounded-2xl' alt={name} />
      </div>
      <div className='flex flex-col space-y-3 pb-4    w-full'>
        <p className='text-md text-dark'>{name}</p>
        <div className='flex justify-between space-x-6'>
          <p className='text-md text-dark font-semibold'>{Price}</p>
          <button className='text-sm text-white bg-main px-2 py-1 rounded-l-3xl hover:bg-light' onClick={()=>handledata(id)}>Add to Cart</button>
    
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default Products