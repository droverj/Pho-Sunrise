import React from 'react';
import '../styles/MenuDropdownNav.scss';

const MenuDropdownNav = ({ groupedItems, toggleSidenav, scrollToSection, dropdownNavHeight }) => {
  return (
    <div className="menu-dropdown-sections" style={{ height: dropdownNavHeight }}>
      <ul>
        {groupedItems.map((section) => (
          <li key={section.id}>
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id, 140);
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

export default MenuDropdownNav;
