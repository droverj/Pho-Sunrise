import MenuSection from './MenuSection';

const MenuSections = ({ groupedItems, addToCart, menuSectionsRef }) => {
  return Object.entries(groupedItems).map(([section, sectionData], sectionIndex) => (
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
  ));
}

export default MenuSections;