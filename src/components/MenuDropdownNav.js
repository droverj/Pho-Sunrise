const MenuDropdownNav = ({ groupedItems, menuSectionsRef, sidenavHeight }) => {
  return (
    <div className="menu-dropdown-nav" style={{ height: sidenavHeight }}>
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
  );
}

export default MenuDropdownNav;
