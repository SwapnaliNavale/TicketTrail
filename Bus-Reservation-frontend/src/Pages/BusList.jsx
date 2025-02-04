import React from 'react'
import { Link } from "react-router-dom";
import MyNavbar from '../Components/MyNavbar';
const BusList = () => {
  return (
    <>
    <MyNavbar/>
    <div className="container">
    <h1>Available Buses</h1>
    <Link to='/select-seat'>Book Now</Link>

    </div>
    
    </>
  )
}

export default BusList