const MenuNavigation = ({ groupedItems, menuSectionsRef }) => {
  return (
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
  );
}

export default MenuNavigation;