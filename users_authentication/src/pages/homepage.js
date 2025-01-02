import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>Welcome Please Login


    <Link to='/register'> <button>Register</button></Link>
    <Link to='/login'><button>Login</button></Link>
    </div>
  )
}

export default Homepage