import '../styles/Home.scss';
import SteamingBowl from '../images/steaming-bowl.png'

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <h1 className="title">Phở Sunrise</h1>
        <h2>Viet-Thai Restaurant</h2>
        <h3>(519) 579 - 2016</h3>
        <img src={SteamingBowl} alt="steaming bowl icon" />
        <p>Please inform us of any allergies prior to ordering. Thanks!</p>
        <p>Some dishes may contain traces of shellfish and/or peanuts.</p>
        <p>Prices subject to change without notice.</p>
      </div>
      <div className="home-container">
        Hello Home
      </div>
    </div>
  );
}

export default Home;