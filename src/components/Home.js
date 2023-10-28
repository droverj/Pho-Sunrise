import { Link } from 'react-router-dom';
import VideoBanner from '../images/pho-sunrise-video-banner.mp4';
import Hours from '../images/pho-sunrise-hours-grey.png';
import ShrimpTopLeft from '../images/shrimp-tail-left-top-white.png';
import ShrimpBottomRight from '../images/shrimp-tail-bottom-right-white.png';
import Chef from '../images/chef-image-grey.png';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">

      <Link to="/menu">
        <button className="menu">
          Menu
        </button>
      </Link>

      <div className='serving-container'>
        <div className='serving'>
          <span>
            <b>SERVING</b> <br />
            Dine-in <br />
            Takeout <br /> <br></br>
            (
            <a
              href="https://www.skipthedishes.com/pho-sunrise-ottawa-street-south"
              target="_blank"
              rel="noopener noreferrer">
              SkipTheDishes</a>
            ) <br></br>Delivery
          </span>
        </div>
        <video className='pho-sunrise-video-banner' autoPlay>
          <source src={VideoBanner} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>

      <div className="restaurant-details-container">
        <div className='restaurant-details'>
          <p className='phone-number'>(519) 579 - 2016</p>
          <span>|</span>
          <p className='address'>1400 Ottawa Street South, Kitchener ON</p>
        </div>
      </div>

      <img src={Hours} className='restaurant-hours' alt="restaurant-hours" />

      <div className='takeout-button-container'>
        <img src={ShrimpTopLeft} className='shrimp' alt="shrimp tail" />
        <Link to="/menu">
          <button className="place-order-button" >
            ORDER TAKEOUT
          </button>
        </Link>
        <img src={ShrimpBottomRight} className='shrimp' alt="shrimp tail" />
      </div>

      <div className='chefs-choice'>
        <div className='chef'>
          <h2>Chef's Choice</h2>
          <img src={Chef} className='chef-image' alt="chef" />
        </div>
        <div className='choice'>
          <span className='name'> Sunrise Special Beef Noodle Soup</span>
          <span className='price'>$14.99</span>
        </div>
      </div>
    </div>
  );
}

export default Home;