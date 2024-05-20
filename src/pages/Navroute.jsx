import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'

const Navroute = () => {
  return (
    <Routes>
        <Route path='/' Component={Home}/>
    </Routes>
  )
}

export default Navroute