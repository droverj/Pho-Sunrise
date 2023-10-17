import { Link } from 'react-router-dom';
import SteamingBowl from '../images/steaming-bowl.png';
import PhoSoup from '../images/pho-soup.jpg';
import Description from '../images/pho-sunrise-description.png';
import Hours from '../images/pho-sunrise-hours.png';
import ShrimpTopLeft from '../images/shrimp-tail-left-top.png';
import ShrimpBottomRight from '../images/shrimp-tail-bottom-right.png';
import Chef from '../images/chef-image.png';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">

      {/* <img src={PhoSoup} alt="pho soup" /> */}
      {/* <img src={ShrimpTopLeft} alt="shrimp tail" /> */}
      {/* <img src={ShrimpBottomRight} alt="shrimp tail" /> */}

      <div className='heading'>
        <div className='circle-container'>
          <img src={SteamingBowl} alt="steaming bowl icon" />
        </div>
        <div className='restaurant-name'>
          <h1>Phở Sunrise</h1>
          <h2>Viet-Thai Restaurant</h2>
        </div>
      </div>

      <div className="restaurant-details-container">
        <div className='restaurant-details'>
          <p className='phone-number'>(519) 579 - 2016</p>
          <span>|</span>
          <p className='address'>1400 Ottawa Street South, Kitchener ON</p>
        </div>
        <span>
          Offering Dine-in, Takeout and (
          <a
            href="https://www.skipthedishes.com/pho-sunrise-ottawa-street-south"
            target="_blank"
            rel="noopener noreferrer">
            SkipTheDishes</a>
          ) Delivery
        </span>
      </div>

      <div className='takeout-button-container'>
        <img src={ShrimpTopLeft} className='shrimp' alt="shrimp tail" />
        <Link to="/menu">
          <button className="place-order-button" >
            ORDER TAKEOUT
          </button>
        </Link>
        <img src={ShrimpBottomRight} className='shrimp' alt="shrimp tail" />
      </div>

      <img src={Hours} className='restaurant-hours' alt="restaurant-hours" />

      <div className='chefs-choice'>
        <img src={Chef} className='chef' alt="chef image" />
          <div className='choice'>
          <h2>Chef's Choice</h2>
            <span className='name'>Sunrise Special House Beef Noodle Soup</span>
            <span className='price'>$14.99</span>
          </div>
      </div>

    </div>
  );
}

export default Home;