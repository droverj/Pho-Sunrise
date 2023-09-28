import { Link } from 'react-router-dom';
import SteamingBowl from '../images/steaming-bowl.png'
import '../styles/Home.scss';

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
          <p>(519) 579 - 2016</p>
          <p>|</p>
          <p>1400 Ottawa Street South, Kitchener ON</p>
          <p>|</p>
          <p><a href="/contact">Hours</a></p>
        </div>

        <span>Offering Dine-in, Takeout and (
          <a
            href="https://www.skipthedishes.com/pho-sunrise-ottawa-street-south"
            target="_blank"
            rel="noopener noreferrer">
            SkipTheDishes</a>
          ) Delivery</span>
      </div>
      <Link to="/menu">
        <button className="place-order-button" >
          Order Takeout
        </button>
      </Link>
      <p style={{ fontSize: '.7rem' }}>Some dishes may contain traces of shellfish or peanuts.</p>
      <p style={{ fontSize: '.7rem' }}>Prices subject to change without notice.</p>
    </div>
  );
}

export default Home;