import { Link } from 'react-router-dom';
import '../styles/Home.scss';
import SteamingBowl from '../images/steaming-bowl.png'

const Home = () => {
  return (
    <div className="home">
      <div className="header-container">
        <div className="header">
          <img src={SteamingBowl} alt="steaming bowl icon" />
          <h1 className="title">Phở Sunrise</h1>
        </div>
        <h2>Viet-Thai Restaurant</h2>
        <div className='restaurant-details'>
          <h3>(519) 579 - 2016</h3>
          <p>|</p>
          <h3>1400 Ottawa Street South, Kitchener ON</h3>
          <p>|</p>
          <h3><a href="/contact">
            Hours
          </a></h3>
        </div>
      </div>
      <Link to="/menu">
        <button className="place-order-button" >
          Start Ordering
        </button>
      </Link>
      <p>Please inform us of any allergies prior to ordering. Thank you!</p>
      <p style={{ fontSize: '10px' }}>Some dishes may contain traces of shellfish or peanuts.</p>
      <p style={{ fontSize: '10px' }}>Prices subject to change without notice.</p>
    </div>
  );
}

export default Home;