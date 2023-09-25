import Header from './Header';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Header className="header" />
      <div className="home-container">
      Hello Home
      </div>
    </div>
  );
}

export default Home;