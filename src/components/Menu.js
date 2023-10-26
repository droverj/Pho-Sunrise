import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import MenuSections from './MenuSections';
import MenuSideNav from './MenuSideNav';
import MenuDropdownSections from './MenuDropdownSections';
import { groupItemsBySection } from '../utilities/groupItemsBySection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/Menu.scss';
import '../styles/MenuDropdownNav.scss';

const Menu = ({ items }) => {
  const { totalItems } = useCart();
  const [sidenavHeight, setSidenavHeight] = useState('0vh');
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const groupedItems = groupItemsBySection(items);

  const toggleSidenav = () => {
    if (isSidenavOpen) {
      setSidenavHeight('0vh');
    } else {
      setSidenavHeight('100vh');
    }
    setIsSidenavOpen(!isSidenavOpen);
  };

  function scrollToSection(sectionId, offsetValue) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = offsetValue; // adjustment for main navbar
      window.scrollTo({
        top: element.offsetTop - offsetValue,
        behavior: 'smooth',
      });
    }
  }

  function createSectionScrollButton(label, sectionId, offsetValue) {
    return (
      <button
        className='scroll-button'
        onClick={() => scrollToSection(sectionId, offsetValue)}
      >
        {label}
      </button>
    );
  }

  return (
    <div className="menu">
      {totalItems > 0 && (
        <Link to="/cart">
          <button className="review-order">View Your Order</button>
        </Link>
      )}
      <MenuSideNav groupedItems={groupedItems} scrollToSection={scrollToSection} />
      <MenuSections groupedItems={groupedItems} />
      <div className='menu-dropdown-nav'>
        <button className='subnav-toggle' onClick={toggleSidenav}>
          {isSidenavOpen ? (
            <>
              <FontAwesomeIcon icon={faCaretUp} className="caret-icon" style={{ color: '#3c4755' }} size="2x" />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faCaretDown} className="caret-icon" style={{ color: '#3c4755' }} size="2x" />
              See All
            </>
          )}
        </button>

        {createSectionScrollButton('Gluten Free', 1, 140)}
        {createSectionScrollButton('Vegetarian', 2, 140)}
        <MenuDropdownSections groupedItems={groupedItems} scrollToSection={scrollToSection} sidenavHeight={sidenavHeight} />
      </div>
    </div>
  );
};

export default Menu;
