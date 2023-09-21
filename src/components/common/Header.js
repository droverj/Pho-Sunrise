import Profile from './Profile';
import '../../styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="profile-container">
        <Profile className="profile" />
      </div>
      <div className="header-container">
        <h1 className="title">Phở Sunrise</h1>
        <h2>(519) 579-2016</h2>
      </div>
    </div>
  );
};

export default Header;
