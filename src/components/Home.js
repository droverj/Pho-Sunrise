import { Link } from 'react-router-dom';
import { canPlaceOrder } from '../utilities/canPlaceOrder';
import Hours from '../images/thai-basil-hours.png';
import ShrimpTopLeft from '../images/shrimp-tail-left-top-white.png';
import ShrimpBottomRight from '../images/shrimp-tail-bottom-right-white.png';
import GlutenFree from '../images/gluten-free.png';
import DairyFree from '../images/dairy-free.png';
import Vegetarian from '../images/vegetarian.png';
import Pescatarian from '../images/pescatarian.png';
import BobaDrinks from '../images/boba-drinks.png';
import Chef from '../images/chef.png';
import '../styles/Home.scss';

const Home = () => {
  const orderingAvailable = canPlaceOrder();

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
              href="https://www.skipthedishes.com"
              target="_blank"
              rel="noopener noreferrer">
              SkipTheDishes</a>
            ) <br></br>Delivery
          </span>
        </div>

        {orderingAvailable ? (
          <div className='takeout-button-container'>
            <img src={ShrimpTopLeft} className='shrimp' alt="shrimp tail" />
            <Link to="/menu">
              <button className="place-order-button" >
                ORDER TAKEOUT
              </button>
            </Link>
            <img src={ShrimpBottomRight} className='shrimp' alt="shrimp tail" />
          </div>
        ) : (
          <p className='ordering-availability-notice'>Ordering is unavailable until 11:30AM.</p>
        )}

        <div className='banner'>Thai Basil</div>

      </div>

      <div className='hours-and-location-container'>
        <div className='contact-details-container'>
          <p className='located'>Located in the Sunrise Shopping Centre</p>
          <p className='phone-number'>(519) 579 - 2016</p>
          <p className='address'>1400 Ottawa Street S<br /> Kitchener, ON</p>
        </div>
        <img src={Hours} className='restaurant-hours' alt="restaurant hours" />
      </div>

      <div className='boba-drinks-container'>
        <div className='boba-drinks-sign'>
          <h4>Boba Tea</h4>
          <p className='drink-options'>Milk or Slushy</p>
          <p className='boba-tea-price'>$5.95</p>
        </div>
        <Link to="/menu" className='drinks-link'>
          <img src={BobaDrinks} className='boba-drinks' alt="boba drinks" />
        </Link>
      </div>

      <h4 className='menu-options-header'>offering a wide variety of menu options</h4>
      <div className='menu-options-container'>
        <div className='icon-container'>
          <img src={GlutenFree} className='icon' alt="gluten free icon" />
          <p>Gluten Free</p>
        </div>
        <div className='icon-container'>
          <img src={DairyFree} className='icon' alt="dairy free icon" />
          <p>Dairy Free</p>
        </div>
        <div className='icon-container'>
          <img src={Vegetarian} className='icon' alt="vegetarian icon" />
          <p>Vegetarian</p>
        </div>
        <div className='icon-container'>
          <img src={Pescatarian} className='icon' alt="pescatarian icon" />
          <p>Pescatarian</p>
        </div>
      </div>

      <div className='chefs-choice'>
        <div className='chef'>
          <h2>Chef's Choice</h2>
          <img src={Chef} className='chef-image' alt="chef" />
        </div>
        <div className='choice'>
          <span className='name'> Sunrise Special House Beef Noodle Soup</span>
          <span className='price'>$10.95</span>
        </div>
      </div>

    </div>
  );
}

export default Home;