import React, { useState, useEffect } from 'react';
import { useCart } from '../providers/CartContext';
import { useSupabase } from '../providers/SupabaseContext';
import { Link } from 'react-router-dom';
import { groupItemsBySection } from '../utilities/groupItemsBySection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import MenuSections from './MenuSections';
import MenuSideNav from './MenuSideNav';
import MenuDropdownNav from './MenuDropdownNav';
import '../styles/Menu.scss';
import '../styles/MenuDropdownNav.scss';


const Menu = () => {
  const supabase = useSupabase();
  const { totalItems } = useCart();

  const [dropdownNavHeight, setdropdownNavHeight] = useState('0vh');
  const [menuDropped, setMenuDropped] = useState(false);
  const [items, setItems] = useState([]);
  
  const groupedItems = groupItemsBySection(items);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const { data: menuItems } = await supabase.from('items').select('*');
        setItems(menuItems);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  const toggleSidenav = () => {
    if (menuDropped) {
      setdropdownNavHeight('0vh');
    } else {
      setdropdownNavHeight('100vh');
    }
    setMenuDropped(!menuDropped);
  };

  function scrollToSection(sectionId, offsetValue) {
    const element = document.getElementById(`S_${sectionId}`);
    if (element) {
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
      <MenuSideNav
        groupedItems={groupedItems}
        scrollToSection={scrollToSection}
      />
      <MenuSections
        groupedItems={groupedItems}
      />
      <div className='menu-dropdown-nav'>
        <button className='subnav-toggle' onClick={toggleSidenav}>
          {menuDropped ? (
            <>
      <div className='menu-overlay'></div>
              <FontAwesomeIcon icon={faCaretUp} className="caret-icon" style={{ color: '#3c4755' }} size="2x" />
              Hide
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faCaretDown} className="caret-icon" style={{ color: '#3c4755' }} size="2x" />
              See All
            </>
          )}
        </button>
        {createSectionScrollButton('Vegetarian', 10, 140)}
        {createSectionScrollButton('Drinks & Desserts', 11, 140)}
        {createSectionScrollButton('Add Ons', 13, 140)}
        <MenuDropdownNav
          groupedItems={groupedItems}
          scrollToSection={scrollToSection}
          dropdownNavHeight={dropdownNavHeight}
          toggleSidenav={toggleSidenav}
        />
      </div>
    </div>
  );
};

export default Menu;
