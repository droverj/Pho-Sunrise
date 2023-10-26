import React from 'react';
import '../styles/MenuSideNav.scss';

const MenuSideNav = ({ groupedItems, scrollToSection }) => {
  return (
    <div className="menu-side-nav">
      <ul>
        {groupedItems.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id, 90)}
            >
              {section.section}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSideNav;

