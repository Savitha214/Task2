
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
  
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const handleSearch=()=>
  {
    navigate("/Search");
  }
  const handleAbout=()=>
  {
    navigate("/About");
  }
  const handleContact=()=>
  {
    navigate("/Contact")
  }
  const locations = [
    "100 FEET ROAD JN.",
    "230 K.V.TOWER",
    "AAR COLONY",
    "AAYA KOLATHUR",
    "AAYURVEDA ASHRAMAM",
    "ABIRAMI MADAM",
    "ACS HOSPITAL",
    "ADAMBAKKAM P.S",
  ];

  const directRoutes = [
    { from: "100 FEET ROAD JN.", to: "AAYURVEDA ASHRAMAM" },
    { from: "230 K.V.TOWER", to: "ABIRAMI MADAM" },
  ];

  const handleSubmit = () => {
    if (origin && destination) {
      if (origin === destination) {
        setMessage("Origin and Destination cannot be the same.");
      } else {
        const hasDirectService = directRoutes.some(
          (route) => route.from === origin && route.to === destination
        );
        setMessage(hasDirectService ? <b style={{color:'red'}}>"The Search Result: Direct service is available."</b> : "The Search Result: No direct service.");
      }
    } else {
      setMessage("Please select both origin and destination.");
    }
  };

  const closePopup = () => setMessage("");

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className='home-container'>
      <h1 className='h1'>Accessible Travelers Tracker Device 🚍</h1>

      <nav className="navbar">
        <ul>
          <li><Link to="/Home">🏠 Home</Link></li>
          
          <li><Link to='/Search' onClick={handleSearch}>Search</Link></li>
          
          <li><Link to="/About" onClick={handleAbout}>About Us</Link></li>
          <li><Link to="/Contact" onClick={handleContact}>Contact Us</Link></li>
        </ul>
      </nav>

      <nav className="tol">
        <ul>
          <li>📱  Customer Care No.: +91-9445030516</li>
          <li>☎️  Toll Free: 153</li>
        </ul>
      </nav>
      <div>
      <div className="home-form-container">
        <h2>Stage Wise Info</h2>
        <div className="form-group">
          <label>Starting From:</label>
          <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
            <option value="">--Select Origin--</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>End To:</label>
          <select value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="">--Select Destination--</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <br></br>
        <submit type="button" className="home-button" onClick={handleSubmit}>Submit</submit>
        {message && (
          <div className="popup">
            <p>{message}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        )}
      </div>
      
        <br></br>
       
      </div>
      
      <h3>Found Timings:</h3>
      <p>Timings are in 24-hour format</p>
        
      </div>
    
  );
};
export default Home;

