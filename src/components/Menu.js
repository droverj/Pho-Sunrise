import React, { useState, useRef } from 'react';
import MenuSection from './MenuSection';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Menu.scss';

const Menu = ({ items }) => {
  const menuSectionsRef = useRef([]);
  const { addToCart, totalItems } = useCart();
  const [width, setWidth] = useState('0%');

  const openSidenav = () => {
    setWidth('35%');
  };

  const closeSidenav = () => {
    setWidth('0%');
  };

  // Group items by section and name
  const groupedItems = {};
  items.forEach((item) => {
    if (!groupedItems[item.section]) {
      groupedItems[item.section] = {
        section_vietnamese: item.section_vietnamese,
        items: {},
      };
    }
    if (!groupedItems[item.section].items[item.name]) {
      groupedItems[item.section].items[item.name] = {
        options: [],
        name_vietnamese: item.name_vietnamese,
      };
    }
    groupedItems[item.section].items[item.name].options.push(item);
  });

  return (
    <div className="menu">
      {totalItems > 0 && (
        <Link to="/cart">
          <button className="review-order">View Your Order</button>
        </Link>
      )}

      <div className="menu-sections">
        {/* Menu navigation bar */}
        <div className="menu-index">
          <ul>
            {Object.entries(groupedItems).map(([section], sectionIndex) => (
              <li key={sectionIndex}>
                <a
                  href={`#section-${sectionIndex}`}
                  onClick={(e) => {
                    e.preventDefault();
                    menuSectionsRef.current[sectionIndex].scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button className='show' onClick={openSidenav}>Menu Sections</button>

        <div className="menu-sidenav" style={{ width }}>
          <button className='hide' onClick={closeSidenav}>X</button>
            <ul>
              {Object.entries(groupedItems).map(([section], sectionIndex) => (
                <li key={sectionIndex}>
                  <a
                    href={`#section-${sectionIndex}`}
                    onClick={(e) => {
                      e.preventDefault();
                      menuSectionsRef.current[sectionIndex].scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
        </div>

        {Object.entries(groupedItems).map(([section, sectionData], sectionIndex) => (
          <div key={sectionIndex} ref={(ref) => (menuSectionsRef.current[sectionIndex] = ref)}>
            <h2 id={`section-${sectionIndex}`}>
              {section} - {sectionData.section_vietnamese}
            </h2>
            {Object.entries(sectionData.items).map(([itemName, itemData], index) => (
              <MenuSection
                key={index}
                itemName={itemName}
                itemOptions={itemData.options}
                vietnameseName={itemData.name_vietnamese}
                addToCart={addToCart}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

