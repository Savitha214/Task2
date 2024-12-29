// import React, { useState } from 'react';
// import './Timedelay.css';

// const Timedelay = () => {
//   const [selectedReason, setSelectedReason] = useState(null);
  
//   const reasons = [
//     { reason: "Traffic congestion", details: "Heavy traffic due to rush hour and roadworks." },
//     { reason: "Weather conditions", details: "Rain and fog have slowed down vehicle speeds." },
//     { reason: "Technical issues", details: "Vehicle breakdowns or malfunctioning traffic lights." },
//     { reason: "Road construction", details: "Construction work causing lane closures and detours." },
//     { reason: "Accidents", details: "Accidents on the road leading to blockages." },
//     { reason: "Unexpected stops", details: "Frequent stops due to passengers or delays." }
//   ];

//   const handleReasonClick = (reason) => {
//     setSelectedReason(reason); // Set the selected reason
//   };

//   const handleConfirm = () => {
//     alert(`You selected: ${selectedReason.reason}\nDetails: ${selectedReason.details}`);
//     setSelectedReason(null); // Reset the selected reason
//   };

//   const handleRefresh = () => {
//     console.log("Reasons refreshed!");
//   };

//   return (
//     <div className='timedelay-container'>
//       <h2 style={{textAlign:'center'}}>Time Delays</h2>
   
    
//         <h3 style={{textAlign:'center'}}>Reasons</h3>
        
//         <ul className='reason-list'>
//         {reasons.map((item, index) => (
//           <li key={index} onClick={() => handleReasonClick(item)} className='reason-item'>
//             {item.reason}
//           </li>
//         ))}
//       </ul>
//       {selectedReason && (
//         <div className='popup'>
//           <p>You selected: <strong>{selectedReason.reason}</strong></p>
//           <button className='confirm-button' onClick={handleConfirm}>Confirm</button>
//         </div>
//       )}
     
//     </div>
//   );
// };

// export default Timedelay;

import React, { useState } from 'react';
import './Timedelay.css';

const Timedelay = () => {
  const [selectedReason, setSelectedReason] = useState(null);
  
  const reasons = [
    { reason: "Traffic congestion", details: "Heavy traffic due to rush hour and roadworks." },
    { reason: "Weather conditions", details: "Rain and fog have slowed down vehicle speeds." },
    { reason: "Technical issues", details: "Vehicle breakdowns or malfunctioning traffic lights." },
    { reason: "Road construction", details: "Construction work causing lane closures and detours." },
    { reason: "Accidents", details: "Accidents on the road leading to blockages." },
    { reason: "Unexpected stops", details: "Frequent stops due to passengers or delays." }
  ];

  const handleReasonClick = (reason) => {
    setSelectedReason(reason);
  };

  return (
    <div className='timedelay-container'>
      <center>
      <h2>Time Delays</h2>
      <h3>Reasons</h3>
        
      <ul className='reason-list'>
        {reasons.map((item, index) => (
          <li key={index} onClick={() => handleReasonClick(item)} className='reason-item'>
            {item.reason}
          </li>
        ))}
      </ul>
      
      {selectedReason && (
        <div className='details-box'>
          <h4>Selected Reason:</h4>
          <p><strong>{selectedReason.reason}</strong></p>
          <p>{selectedReason.details}</p>
          <button className='confirm-button' onClick={() => setSelectedReason(null)}>Clear</button>
        </div>
      )}
      </center>
    </div>
  );
};

export default Timedelay;
