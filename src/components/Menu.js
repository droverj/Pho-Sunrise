import React, { useState } from 'react';
import Appetizers from './menu-items/Appetizers';
import BrokenRicePlatters from './menu-items/BrokenRicePlatters';
import BubbleTea from './menu-items/BubbleTea';
import FriedRice from './menu-items/FriedRice';
import PartyTrays from './menu-items/PartyTrays';
import RiceNoodleSoup from './menu-items/RiceNoodleSoup';
import SoftDrinks from './menu-items/SoftDrinks';
import SpecialNoodleSoups from './menu-items/SpecialNoodleSoups';
import StirFriedNoodles from './menu-items/StirFriedNoodles';
import ThaiDishes from './menu-items/ThaiDishes';
import Vegetarian from './menu-items/Vegetarian';
import VermicelliBowls from './menu-items/VermicelliBowls';
import VermicelliPlatters from './menu-items/VermicelliPlatters';
import '../styles/Menu.scss';


const Menu = () => {
  const [activeSection, setActiveSection] = useState('Appetizers'); // Default active section

  // Function to switch the active menu section
  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);
  };

  // Render the active menu section component
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'Appetizers':
        return <Appetizers />;
      case 'BrokenRicePlatters':
        return <BrokenRicePlatters />;
      case 'BubbleTea':
        return <BubbleTea />;
      case 'FriedRice':
        return <FriedRice />;
      case 'PartyTrays':
        return <PartyTrays />;
      case 'RiceNoodleSoup':
        return <RiceNoodleSoup />;
      case 'SoftDrinks':
        return <SoftDrinks />;
      case 'SpecialeNoodleSoups':
        return <SpecialNoodleSoups />;
      case 'StirFriedNoodles':
        return <StirFriedNoodles />;
      case 'ThaiDishes':
        return <ThaiDishes />;
      case 'Vegetarian':
        return <Vegetarian />;
      case 'VermicelliBowls':
        return <VermicelliBowls />;
      case 'VermicelliPlatters':
        return <VermicelliPlatters />;
      default:
        return null;
    }
  };


  return (
    <div>
      <h1>{activeSection}</h1>
      <h1>Menu</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleSectionChange('Appetizers')}>
              Appetizers
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('RiceNoodleSoup')}>
              Phở - Rice Noodle Soup (Gluten Free)
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('BrokenRicePlatters')}>
              Cơm Đĩa - Vietnamese Broken Rice Platters
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('FriedRice')}>
              Cơm Chiên - Vietnamese Fried Rice
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('VermicelliBowls')}>
              Bún - Vermicelli Bowls
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('VermicelliPlatters')}>
              Bánh hỏi - Vermicelli Platters (Rice Vermicelli Woven)
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('NoodleSoups')}>
              Special Vietnamese Noodle Soups
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('StirFriedNoodles')}>
              The Wok - Stir Fried Noodles (Gluten Free)
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('ThaiDishes')}>
              Thai - Dishes (Spicy)
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('Vegetarian')}>
              Vegetarian
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('Desserts')}>
              Desserts
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('BubbleTea')}>
              Bubble Tea - Slushy or Milk Tea
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('SoftDrinks')}>
              Soft Drinks
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('Party Trays')}>
              Party Trays
            </button>
          </li>
        </ul>
      </nav>
      <div className="menu-content">{renderActiveSection}</div>
    </div>
  );
}

export default Menu;