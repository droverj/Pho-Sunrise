import { Link } from 'react-router-dom';
import SteamingBowl from '../images/steaming-bowl.png'
import Poster from '../images/pho-sunrise-poster.png'
import RightArrow from '../images/right-arrow.jpg'
import LeftArrow from '../images/left-arrow.jpg'
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">

      <div className='heading'>
        <div className='circle-container'>
          <img src={SteamingBowl} alt="steaming bowl icon" />
        </div>
        <div className='restaurant-name'>
          <h1>Phở Sunrise</h1>
          <h2>Viet-Thai Restaurant</h2>
        </div>
      </div>

      <div className='home-body'>
          <div className='description-container'>
            <div className='restaurant-description'>Indulge your senses in an exquisite fusion of Vietnamese and Thai flavors at our restaurant.
              Discover a world of culinary artistry where vibrant spices, fragrant herbs, and fresh ingredients
              unite to create an unforgettable dining experience. From savory Pho to zesty Pad Thai, each dish is a
              harmonious blend of traditions, brought to life by our passionate chefs. Join us and savor the best of
              both worlds, where every bite is a journey through the heart of Southeast Asia.
            </div>
          </div>
        <div className='poster'>
          <img src={Poster} alt="pho sunrise poster" />
        </div>
      </div>

      <div className="restaurant-details-container">
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

      <div className='takeout-button-container'>
        <img src={RightArrow} className='arrow' alt="right arrow" />
        <Link to="/menu">
          <button className="place-order-button" >
            ORDER TAKEOUT
          </button>
        </Link>
        <img src={LeftArrow} className='arrow' alt="left arrow" />
      </div>

    </div>
  );
}

export default Home;