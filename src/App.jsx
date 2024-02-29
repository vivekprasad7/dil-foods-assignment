
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/shared/Layout'
import Dashboard from './pages/dashboard/Dashboard'
import Products from './pages/products/Products'
import Customers from './pages/customers/Customers'
import Statistics from './pages/statistics/Statistics'

function App() {

  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="products" element={<Products/>}/>
              <Route path="customers" element={<Customers/>}/>
              <Route path="statistics" element={<Statistics/>}/>
          </Route>
        </Routes>
      </div>
  
    
  )
}

export default App
