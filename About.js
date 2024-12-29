import React from 'react'
import './About.css';
import { useNavigate } from 'react-router-dom';
const About = () => {
  
  return (
    <div className='about'>
        
       <h1 style={{textAlign:'center'}}>About us</h1>  
    
       <p>          The Accessible Travelers Tracker Device is a user-friendly application designed specifically to cater to the needs of physically challenged individuals.
       Our goal is to simplify the process of finding and booking accessible buses, ensuring a smooth and stress-free travel experience.
        We understand the challenges faced by many travelers with mobility concerns, and our platform provides reliable information about bus routes, seat availability, and real-time updates, making public transportation more inclusive for everyone. Our dedicated customer support ensures that help is always a phone call away for any queries or assistance.</p>

        <h2>Key Features</h2>
        <p><b>Stage Wise Info:</b> feature that shows users the journey from start to end while indicating the availability of direct services is there or not.</p>
        <p><b>Duration:</b> The app provides an estimate of the total travel time for your journey, from start to destination, taking into account the selected route.</p>
        <p><b>Nearby Locations:</b> Easily locate nearby accessible bus stops or pickup points with GPS-enabled features. This makes it convenient to find the closest station tailored to your specific needs.</p>
        <p><b>Time Delay Reason:</b> Get real-time updates about any delays in bus arrivals along with the reasons behind the delay. This feature helps you plan your journey better and reduces uncertainty when on the go.</p>
        <p><b>Accessible Seating:</b> The app provides details about the design and accessibility of the sitting chairs available on the bus. This includes information on whether the seats are wheelchair-friendly, equipped with harnesses for additional support, or designed for ease of transfer from wheelchairs to the bus seat.</p>
        <br></br>
        <center><b>"Empowering every journey with accessibility, convenience, and confidence—your trusted travel companion for an inclusive world."</b>
        <p>Thank you for choosing our Accessible travelers tracker device to meet your needs!!!</p></center>
    </div>
  )
}

export default About