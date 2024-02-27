import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {  DataContextProvider } from './context/dataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <DataContextProvider>
    <App />
    </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
