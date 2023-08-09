import React, { useState } from 'react';
import './pgetcomp.css';

const PrayerGetComponent = ({ requests }) => {
  const [randomRequest, setRandomRequest] = useState(null);

  const displayRandomRequest = () => {
    const randomIndex = Math.floor(Math.random() * requests.length);
    setRandomRequest(requests[randomIndex]);
  };

  const handleDelete=()=>{
    fetch('http://localhost:8000/requests/' + randomRequest.id,{
    method: 'DELETE'}).then(displayRandomRequest)
  };

  return (
    <div className="currentrequest">
      
      {randomRequest && (
        <div className="blog-preview" key={randomRequest.id}>
          <h2>Prayer request of "{randomRequest.name}" from "{randomRequest.location}"</h2>
          <h4>"{randomRequest.body}"</h4>
          <button onClick={handleDelete}>Complete and Remove Request</button>
        </div>
      )}
      
      <button onClick={displayRandomRequest}>Display Random Prayer Request</button>
    </div>
  );
};

export default PrayerGetComponent;