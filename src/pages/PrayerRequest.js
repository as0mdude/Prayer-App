import { useState } from "react";
import './prayerreq.css';

const PrayerRequest = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [body, setBody] = useState('');
  
  const HandleSubmit = (e)=>{
    e.preventDefault();
    const post = {name, location, body};

    console.log(post)

  }

  return (
    <div className="create">
      <h2>Request a Prayer.</h2>
      <form onSubmit={HandleSubmit}>
        <label>Name</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Location</label>
        <input 
        type="text" 
        required 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />

        <label>Prayer Request</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        
        <button>Send Request</button>
        
      </form>
    </div>
  );
}
  
  export default PrayerRequest;
  

/**<p>{name}</p>
<p>{location}</p>
<p>{body}</p>**/