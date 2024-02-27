import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <h1>THis is products page</h1>
        <p>Go to Dashboard Page. <Link to="/"> Dashboard</Link></p>

    </div>
  )
}

export default Products