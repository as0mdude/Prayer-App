import './Home.css';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return(
    <>
    
    
    <div class="maintext"><h1>PrayerApp</h1>
    <h3>Have a prayer request? Would you like to spare a moment to pray for someone else? On this app, users are able to send prayer requests out to the database, while also being able to fetch prayer request from fellow users.</h3></div>
    
    </>
    );
  };
  
  export default Home;
  /**<li>
            <Link to="/preq">Request a Prayer.</Link>
          </li>
          <li>
            <Link to="/pget">Pray for Somebody.</Link>
          </li>**/