import { useEffect, useState } from "react";
import PrayerGetComponent from "./PrayerGetComponent";



const PrayerGet = () => {
  const [requests, setPosts] = useState(null)

  useEffect(() => {
    try {
      fetch('http://localhost:8000/requests')
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(data => {
          setPosts(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          // You can add additional error handling logic here if needed.
        });
    } catch (error) {
      console.error('An error occurred:', error);
      // You can add additional error handling logic here if needed.
    }
  }, []);

  return (
    <div className="home">
      {requests && <PrayerGetComponent requests={requests} />}
      
    </div>
  );
  };
  
  export default PrayerGet;
  