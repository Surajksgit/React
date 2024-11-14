import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

function Navbar() {
  return (
    <>
    <Link to='/'>Home</Link><hr/> 
    <Link to='/main'>Main</Link><hr/>
    <Link to='/name'>Name</Link><hr/>
    <Link to='/login'>Login</Link><hr/>
    </>
  )
}

export default Navbar