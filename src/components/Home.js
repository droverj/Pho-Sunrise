import { Link } from 'react-router-dom';
import SteamingBowl from '../images/steaming-bowl.png'
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="header-container">
        <img src={SteamingBowl} alt="steaming bowl icon" />
        <h1>Phở Sunrise</h1>
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
          ORDER TAKEOUT
        </button>
      </Link>
    </div>
  );
}

export default Home;