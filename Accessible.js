import React from 'react'
import './Accessible.css';
import { useNavigate } from 'react-router-dom';
const Accessible = () => {
   const navigate=useNavigate();
   const handle=()=>
   {
      navigate("/Signup");
   }

  return (
    <div className='accessible-container' >
        <center>
        <h1 onClick={handle}>Accessible Travelers Tracker Device</h1>

        </center>
    </div>
  )
}

export default Accessible