import React from 'react';

const MenuSideNav = ({ groupedItems, scrollToSection }) => {
  return (
    <div className="menu-index">
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

