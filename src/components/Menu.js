import React, { useState } from 'react';
import MenuSection from './MenuSection';

const Menu = ({ addToCart, removeFromCart }) => {
  const [sections] = useState([
    {
      title: 'Món Khai Vị - Appetizers',
      items: [
        { name: 'Appetizer 1', description: 'Description 1', price: 5.99 },
        { name: 'Appetizer 2', description: 'Description 2', price: 6.99 },
        { name: 'Appetizer 3', description: 'Description 3', price: 7.99 },
      ],
    },
    {
      title: 'Phở - Rice Noodle Soup (Gluten Free)',
      items: [
        { name: 'Phở 1', description: 'Description 1', price: 10.99 },
        { name: 'Phở 2', description: 'Description 2', price: 12.99 },
        { name: 'Phở 3', description: 'Description 3', price: 13.99 },
      ],
    },
    {
      title: 'Cơm Đĩa - Vietnamese Broken Rice Platters',
      items: [
        { name: 'Platter 1', description: 'Description 1', price: 9.99 },
        { name: 'Platter 2', description: 'Description 2', price: 11.99 },
        { name: 'Platter 3', description: 'Description 3', price: 12.99 },
      ],
    },
    {
      title: 'Cơm Chiên - Vietnamese Fried Rice',
      items: [
        { name: 'Fried Rice 1', description: 'Description 1', price: 8.99 },
        { name: 'Fried Rice 2', description: 'Description 2', price: 10.99 },
        { name: 'Fried Rice 3', description: 'Description 3', price: 11.99 },
      ],
    },
    {
      title: 'Bún - Vermicelli Bowls',
      items: [
        { name: 'Bún 1', description: 'Description 1', price: 7.99 },
        { name: 'Bún 2', description: 'Description 2', price: 9.99 },
        { name: 'Bún 3', description: 'Description 3', price: 10.99 },
      ],
    },
    {
      title: 'Bánh hỏi - Vermicelli Platters (Rice Vermicelli Woven)',
      items: [
        { name: 'Vermicelli Platter 1', description: 'Description 1', price: 11.99 },
        { name: 'Vermicelli Platter 2', description: 'Description 2', price: 13.99 },
        { name: 'Vermicelli Platter 3', description: 'Description 3', price: 14.99 },
      ],
    },
    {
      title: 'Special Vietnamese Noodle Soups',
      items: [
        { name: 'Noodle Soup 1', description: 'Description 1', price: 9.99 },
        { name: 'Noodle Soup 2', description: 'Description 2', price: 11.99 },
        { name: 'Noodle Soup 3', description: 'Description 3', price: 12.99 },
      ],
    },
    {
      title: 'The Wok - Stir Fried Noodles (Gluten Free)',
      items: [
        { name: 'Stir Fried Noodles 1', description: 'Description 1', price: 12.99 },
        { name: 'Stir Fried Noodles 2', description: 'Description 2', price: 14.99 },
        { name: 'Stir Fried Noodles 3', description: 'Description 3', price: 15.99 },
      ],
    },
    {
      title: 'Thai - Dishes (Spicy)',
      items: [
        { name: 'Thai Dish 1', description: 'Description 1', price: 10.99 },
        { name: 'Thai Dish 2', description: 'Description 2', price: 12.99 },
        { name: 'Thai Dish 3', description: 'Description 3', price: 13.99 },
      ],
    },
    {
      title: 'Vegetarian',
      items: [
        { name: 'Vegetarian Dish 1', description: 'Description 1', price: 8.99 },
        { name: 'Vegetarian Dish 2', description: 'Description 2', price: 10.99 },
        { name: 'Vegetarian Dish 3', description: 'Description 3', price: 11.99 },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Dessert 1', description: 'Description 1', price: 5.99 },
        { name: 'Dessert 2', description: 'Description 2', price: 6.99 },
        { name: 'Dessert 3', description: 'Description 3', price: 7.99 },
      ],
    },
    {
      title: 'Bubble Tea - Slushy or Milk Tea',
      items: [
        { name: 'Bubble Tea 1', description: 'Description 1', price: 4.99 },
        { name: 'Bubble Tea 2', description: 'Description 2', price: 5.99 },
        { name: 'Bubble Tea 3', description: 'Description 3', price: 6.99 },
      ],
    },
    {
      title: 'Soft Drinks',
      items: [
        { name: 'Soft Drink 1', description: 'Description 1', price: 2.49 },
        { name: 'Soft Drink 2', description: 'Description 2', price: 2.99 },
        { name: 'Soft Drink 3', description: 'Description 3', price: 3.49 },
      ],
    },
    {
      title: 'Party Trays',
      items: [
        { name: 'Party Tray 1', description: 'Description 1', price: 24.99 },
        { name: 'Party Tray 2', description: 'Description 2', price: 29.99 },
        { name: 'Party Tray 3', description: 'Description 3', price: 34.99 },
      ],
    },
  ]);

  return (
    <div className="menu">
      <div className="menu-sections">
        {sections.map((section, index) => (
          <MenuSection
            key={index}
            section={section}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;



// import React, { useState } from 'react';
// import Appetizers from './menu-items/Appetizers';
// import BrokenRicePlatters from './menu-items/BrokenRicePlatters';
// import BubbleTea from './menu-items/BubbleTea';
// import FriedRice from './menu-items/FriedRice';
// import PartyTrays from './menu-items/PartyTrays';
// import RiceNoodleSoup from './menu-items/RiceNoodleSoup';
// import SoftDrinks from './menu-items/SoftDrinks';
// import SpecialNoodleSoups from './menu-items/SpecialNoodleSoups';
// import StirFriedNoodles from './menu-items/StirFriedNoodles';
// import ThaiDishes from './menu-items/ThaiDishes';
// import Vegetarian from './menu-items/Vegetarian';
// import VermicelliBowls from './menu-items/VermicelliBowls';
// import VermicelliPlatters from './menu-items/VermicelliPlatters';
// import '../styles/Menu.scss';


// const Menu = () => {
//   const [activeSection, setActiveSection] = useState('Appetizers'); // Default active section

//   // Function to switch the active menu section
//   const handleSectionChange = (sectionName) => {
//     setActiveSection(sectionName);
//   };

//   // Render the active menu section component
//   const renderActiveSection = () => {
//     switch (activeSection) {
//       case 'Appetizers':
//         return <Appetizers />;
//       case 'BrokenRicePlatters':
//         return <BrokenRicePlatters />;
//       case 'BubbleTea':
//         return <BubbleTea />;
//       case 'FriedRice':
//         return <FriedRice />;
//       case 'PartyTrays':
//         return <PartyTrays />;
//       case 'RiceNoodleSoup':
//         return <RiceNoodleSoup />;
//       case 'SoftDrinks':
//         return <SoftDrinks />;
//       case 'SpecialeNoodleSoups':
//         return <SpecialNoodleSoups />;
//       case 'StirFriedNoodles':
//         return <StirFriedNoodles />;
//       case 'ThaiDishes':
//         return <ThaiDishes />;
//       case 'Vegetarian':
//         return <Vegetarian />;
//       case 'VermicelliBowls':
//         return <VermicelliBowls />;
//       case 'VermicelliPlatters':
//         return <VermicelliPlatters />;
//       default:
//         return null;
//     }
//   };


//   return (
//     <div className="menu">
//       <h1>Phở Sunrise</h1>
//       <div className="menu-sections">
//         <ul>
//           <li>
//             <button onClick={() => handleSectionChange('Appetizers')}>
//               Appetizers
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('RiceNoodleSoup')}>
//               Phở - Rice Noodle Soup (Gluten Free)
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('BrokenRicePlatters')}>
//               Cơm Đĩa - Vietnamese Broken Rice Platters
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('FriedRice')}>
//               Cơm Chiên - Vietnamese Fried Rice
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('VermicelliBowls')}>
//               Bún - Vermicelli Bowls
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('VermicelliPlatters')}>
//               Bánh hỏi - Vermicelli Platters (Rice Vermicelli Woven)
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('NoodleSoups')}>
//               Special Vietnamese Noodle Soups
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('StirFriedNoodles')}>
//               The Wok - Stir Fried Noodles (Gluten Free)
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('ThaiDishes')}>
//               Thai - Dishes (Spicy)
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('Vegetarian')}>
//               Vegetarian
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('Desserts')}>
//               Desserts
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('BubbleTea')}>
//               Bubble Tea - Slushy or Milk Tea
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('SoftDrinks')}>
//               Soft Drinks
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleSectionChange('Party Trays')}>
//               Party Trays
//             </button>
//           </li>
//         </ul>
//         <div className="menu-content">{renderActiveSection}</div>
//       </div>
//     </div>
//   );
// }

// export default Menu;