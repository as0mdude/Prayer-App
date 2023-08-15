import './Home.css';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return(
    <>
    
    <h1>Home</h1>
    
      <p>Have a prayer request? Are you burdered to pray for someone else?</p>
      <nav>
        <ul>
          
          <li>
            <Link to="/preq">Request a Prayer</Link>
          </li>
          <li>
            <Link to="/pget">Pray for Somebody</Link>
          </li>
        </ul>
      </nav>
    </>
    );
  };
  
  export default Home;
  