import React, { useEffect, useState } from 'react';
import './NearbyLocation.css';

const originCoords = { lat: 28.6139, lng: 77.2090 }; // Example: New Delhi coordinates
const destinationCoords = { lat: 28.5500, lng: 77.2000 }; // Example: AAYURVEDA ASHRAMAM coordinates

const NearbyLocation = () => {
  const [currentLocation, setCurrentLocation] = useState(originCoords);
  const [destination] = useState("AAYURVEDA ASHRAMAM");
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation(prev => {
        return {
          lat: prev.lat + (destinationCoords.lat - prev.lat) * 0.1,
          lng: prev.lng + (destinationCoords.lng - prev.lng) * 0.1,
        };
      });

      const now = new Date();
      setCurrentTime(now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='nearby-location'>
      <div className='nearby-location-container'>
        <h2>Live GPS Tracking</h2>
        <p>Current Location: {currentLocation ? `Lat: ${currentLocation.lat.toFixed(4)}, Lng: ${currentLocation.lng.toFixed(4)}` : "Loading..."}</p>
        
      
        <p>Current Time (IST): {currentTime}</p>
        {currentLocation && (
          <div className="map-simulation">
            <p>🔴 Current Position: Lat: {currentLocation.lat.toFixed(4)}, Lng: {currentLocation.lng.toFixed(4)}</p>
            <p>🔵 Destination: {destination}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NearbyLocation;

// import React, { useEffect, useState } from 'react';
// import './NearbyLocation.css';

// const NearbyLocation = () => {
//   const [destination] = useState("AAYURVEDA ASHRAMAM");
//   const [currentTime, setCurrentTime] = useState('');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       setCurrentTime(now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='nearby-location'>
//       <div className='nearby-location-container'>
//         <h2>Live GPS Tracking</h2>
//         <p>🔵 Destination: {destination}</p>
//         <p>🔴 Current Time (IST): {currentTime}</p>
//       </div>
//     </div>
//   );
// };

// export default NearbyLocation;
