import React, { useRef } from 'react';
import MenuSection from './MenuSection';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import MenuBanner from '../images/pho-sunrise-menu-banner.png';
import '../styles/Menu.scss';

const Menu = ({ items }) => {
  const { addToCart, totalItems } = useCart();
  const menuSectionsRef = useRef([]);

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
      {/* <img src={MenuBanner} className='pho-sunrise-menu-banner' alt="pho sunrise menu banner" /> */}

      {totalItems > 0 && (
        <Link to="/cart">
          <button className="review-order">
            View Your Order
          </button>
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

