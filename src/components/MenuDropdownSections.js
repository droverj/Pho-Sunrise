import React from 'react';
import '../styles/MenuDropdownNav.scss';

const MenuDropdownSections = ({ groupedItems, toggleSidenav, scrollToSection, sidenavHeight }) => {
  return (
    <div className="menu-dropdown-sections" style={{ height: sidenavHeight }}>
      <ul>
        {groupedItems.map((section) => (
          <li key={section.id}>
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id, 160);
                toggleSidenav();
              }}
            >
              {section.section}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDropdownSections;
