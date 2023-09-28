import '../styles/Contact.scss';
import SteamingBowl from '../images/steaming-bowl.png';
import PhoSunrisePlates from '../images/Pho-Sunrise-Plates.jpeg';
import InstagramIcon from '../images/Instagram_Glyph_Gradient.png';
import FacebookIcon from '../images/Facebook_Logo_Primary.png';

const Contact = () => {
  return (
    <div className="contact">
      <div className='main-container'>

        <div className='details-container'>
          <p className='contact-subheading'>Contact</p>
          <div className='details-subcontainer'>
            <ul className='details-label'>
              <li>Phone Number:</li>
              <li>Address:</li>
            </ul>
            <ul className='details'>
              <li>(519) 579 - 2016</li>
              <li>
                1400 Ottawa Street South - Unit B22 <br />
                Kitchener, ON, Canada <br />
                N2E 4E2
              </li>
            </ul>
          </div>
          <p className='contact-subheading'>Hours</p>
          <div className='details-subcontainer'>
            <ul className='details-label'>
              <li>Sunday:</li>
              <li>Monday:</li>
              <li>Tuesday:</li>
              <li>Wednesday:</li>
              <li>Thursday:</li>
              <li>Friday:</li>
              <li>Saturday:</li>
            </ul>
            <ul className='details'>
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

        <div className='right-side-contact-body'>
          <p>Call to book your reservation</p>
          <img src={PhoSunrisePlates} className='plates-img' alt="Pho Sunrise Plates" />
          <div className="socials-container">
            <p className='website-url'>phosunrise.ca</p>
            <p>Connect With Us</p>
            <div className='social-icons'>
              <a href="https://www.instagram.com/explore/locations/268429957/pho-sunrise-vietnamese-cuisine/?hl=en" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram Icon" />
              </a>
              <a href="https://www.facebook.com/phosunrise.ca/" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook Icon" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;