import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Dataprovider } from './context/DataContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
 <Dataprovider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </BrowserRouter>
 </Dataprovider>
)
