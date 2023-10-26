import React from 'react';
import '../styles/MenuDropdownNav.scss';

const MenuDropdownNav = ({ groupedItems, scrollToSection, sidenavHeight }) => {
  return (
    <div className="menu-dropdown-nav" style={{ height: sidenavHeight }}>
      <ul>
        {groupedItems.map((section) => (
          <li key={section.id}>
            <a
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id, 140);
              }}
            >
              {section.section}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDropdownNav;
