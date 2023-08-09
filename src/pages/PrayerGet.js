import { useEffect, useState } from "react";
import PrayerGetComponent from "./PrayerGetComponent";



const PrayerGet = () => {
  const [requests, setPosts] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/requests')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPosts(data);
      })
  }, [])

  return (
    <div className="home">
      {requests && <PrayerGetComponent requests={requests} />}
    </div>
  );
  };
  
  export default PrayerGet;
  