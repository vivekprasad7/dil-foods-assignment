import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h1>This is Dashboard</h1>
        <p>Go to Products Page. <Link to="/products"> Products</Link></p>
    </div>
  )
}

export default Dashboard