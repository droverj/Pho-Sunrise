import '../styles/Contact.scss';
import SteamingBowl from '../images/steaming-bowl.png'

const Contact = () => {
  return (
    <div className="contact">
      <div className="header-container">
        <div className="header">
          <img src={SteamingBowl} alt="steaming bowl icon" />
          <h1 className="title">Phở Sunrise</h1>
        </div>

        <h2>Viet-Thai Restaurant</h2>

        <p>Facebook Instagram</p>
        </div>

        <div className='contact-container'>
          <div className='restaurant-details'>
            <p className='contact-subtitle'>Contact</p>
            <div className='contact-details-container'>
              <ul className='contact-details-label'>
                <li>Phone Number:</li>
                <li>Address:</li>
              </ul>
              <ul className='contact-details-info'>
                <li>(519) 579 - 2016</li>
                <li>
                  1400 Ottawa Street South - Unit B22 <br />
                  Kitchener, ON, Canada <br />
                  N2E 4E2
                </li>
              </ul>
            </div>
            <p className='contact-subtitle'>Hours</p>
            <div className='hours-container'>
              <ul className='days'>
                <li>Sunday:</li>
                <li>Monday:</li>
                <li>Tuesday:</li>
                <li>Wednesday:</li>
                <li>Thursday:</li>
                <li>Friday:</li>
                <li>Saturday:</li>
              </ul>
              <ul className='times'>
                <li>11:00AM - 8:00PM</li>
                <li>CLOSED</li>
                <li>11:00AM - 8:00PM</li>
                <li>11:00AM - 8:00PM</li>
                <li>11:00AM - 8:00PM</li>
                <li>11:00AM - 9:00PM</li>
                <li>11:00AM - 9:00PM</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;