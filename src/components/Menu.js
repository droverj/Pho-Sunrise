import React, { useState, useRef } from 'react';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import MenuSections from './MenuSections';
import MenuNavigation from './MenuNavigation';
import MenuDropdownNav from './MenuDropdownNav';
import { groupItemsBySectionAndName } from '../utilities/groupItemsBySectionAndName';
import '../styles/Menu.scss';

const Menu = ({ items }) => {
  const menuSectionsRef = useRef([]);
  const { addToCart, totalItems } = useCart();
  const [sidenavHeight, setSidenavHeight] = useState('0vh');
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSubnav = () => {
    if (isSidenavOpen) {
      setSidenavHeight('0vh');
    } else {
      setSidenavHeight('100vh');
    }
    setIsSidenavOpen(!isSidenavOpen);
  };

  // Group items by section and name
  const groupedItems = groupItemsBySectionAndName(items);

  return (
    <div className="menu">
      {totalItems > 0 && (
        <Link to="/cart">
          <button className="review-order">View Your Order</button>
        </Link>
      )}

      <div className="menu-sections">
        <MenuNavigation groupedItems={groupedItems} menuSectionsRef={menuSectionsRef} />

        <button className='subnav-toggle' onClick={toggleSubnav}>
          {isSidenavOpen ? 'Hide Menu Sections' : 'Show Menu Sections'}
        </button>

        <MenuDropdownNav groupedItems={groupedItems} menuSectionsRef={menuSectionsRef} sidenavHeight={sidenavHeight} />

        <MenuSections groupedItems={groupedItems} addToCart={addToCart} menuSectionsRef={menuSectionsRef} />
      </div>
    </div>
  );
};

export default Menu;
