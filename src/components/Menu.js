import React, { useState } from 'react';
import MenuSection from './MenuSection';
import { useCart } from '../components/CartContext';

const Menu = () => {
  const { addToCart, removeFromCart } = useCart();
  const [sections] = useState([
    {
      title: 'Món Khai Vị - Appetizers',
      images: ['https://natashaskitchen.com/wp-content/uploads/2020/10/Egg-Rolls-4.jpg','https://natashaskitchen.com/wp-content/uploads/2020/10/Egg-Rolls-4.jpg'],
      items: [
        { name: 'Appetizer 1', description: 'Description 1', price: 5.99 },
        { name: 'Appetizer 2', description: 'Description 2', price: 6.99 },
        { name: 'Appetizer 3', description: 'Description 3', price: 7.99 },
      ],
    },
    {
      title: 'Phở - Rice Noodle Soup (Gluten Free)',
      images: [],
      items: [
        { name: 'Phở 1', description: 'Description 1', price: 10.99 },
        { name: 'Phở 2', description: 'Description 2', price: 12.99 },
        { name: 'Phở 3', description: 'Description 3', price: 13.99 },
      ],
    },
    {
      title: 'Cơm Đĩa - Vietnamese Broken Rice Platters',
      images: [],
      items: [
        { name: 'Platter 1', description: 'Description 1', price: 9.99 },
        { name: 'Platter 2', description: 'Description 2', price: 11.99 },
        { name: 'Platter 3', description: 'Description 3', price: 12.99 },
      ],
    },
    {
      title: 'Cơm Chiên - Vietnamese Fried Rice',
      images: [],
      items: [
        { name: 'Fried Rice 1', description: 'Description 1', price: 8.99 },
        { name: 'Fried Rice 2', description: 'Description 2', price: 10.99 },
        { name: 'Fried Rice 3', description: 'Description 3', price: 11.99 },
      ],
    },
    {
      title: 'Bún - Vermicelli Bowls',
      images: [],
      items: [
        { name: 'Bún 1', description: 'Description 1', price: 7.99 },
        { name: 'Bún 2', description: 'Description 2', price: 9.99 },
        { name: 'Bún 3', description: 'Description 3', price: 10.99 },
      ],
    },
    {
      title: 'Bánh hỏi - Vermicelli Platters (Rice Vermicelli Woven)',
      images: [],
      items: [
        { name: 'Vermicelli Platter 1', description: 'Description 1', price: 11.99 },
        { name: 'Vermicelli Platter 2', description: 'Description 2', price: 13.99 },
        { name: 'Vermicelli Platter 3', description: 'Description 3', price: 14.99 },
      ],
    },
    {
      title: 'Special Vietnamese Noodle Soups',
      images: [],
      items: [
        { name: 'Noodle Soup 1', description: 'Description 1', price: 9.99 },
        { name: 'Noodle Soup 2', description: 'Description 2', price: 11.99 },
        { name: 'Noodle Soup 3', description: 'Description 3', price: 12.99 },
      ],
    },
    {
      title: 'The Wok - Stir Fried Noodles (Gluten Free)',
      images: [],
      items: [
        { name: 'Stir Fried Noodles 1', description: 'Description 1', price: 12.99 },
        { name: 'Stir Fried Noodles 2', description: 'Description 2', price: 14.99 },
        { name: 'Stir Fried Noodles 3', description: 'Description 3', price: 15.99 },
      ],
    },
    {
      title: 'Thai - Dishes (Spicy)',
      images: [],
      items: [
        { name: 'Thai Dish 1', description: 'Description 1', price: 10.99 },
        { name: 'Thai Dish 2', description: 'Description 2', price: 12.99 },
        { name: 'Thai Dish 3', description: 'Description 3', price: 13.99 },
      ],
    },
    {
      title: 'Vegetarian',
      images: [],
      items: [
        { name: 'Vegetarian Dish 1', description: 'Description 1', price: 8.99 },
        { name: 'Vegetarian Dish 2', description: 'Description 2', price: 10.99 },
        { name: 'Vegetarian Dish 3', description: 'Description 3', price: 11.99 },
      ],
    },
    {
      title: 'Desserts',
      images: [],
      items: [
        { name: 'Dessert 1', description: 'Description 1', price: 5.99 },
        { name: 'Dessert 2', description: 'Description 2', price: 6.99 },
        { name: 'Dessert 3', description: 'Description 3', price: 7.99 },
      ],
    },
    {
      title: 'Bubble Tea - Slushy or Milk Tea',
      images: [],
      items: [
        { name: 'Bubble Tea 1', description: 'Description 1', price: 4.99 },
        { name: 'Bubble Tea 2', description: 'Description 2', price: 5.99 },
        { name: 'Bubble Tea 3', description: 'Description 3', price: 6.99 },
      ],
    },
    {
      title: 'Soft Drinks',
      images: [],
      items: [
        { name: 'Soft Drink 1', description: 'Description 1', price: 2.49 },
        { name: 'Soft Drink 2', description: 'Description 2', price: 2.99 },
        { name: 'Soft Drink 3', description: 'Description 3', price: 3.49 },
      ],
    },
    {
      title: 'Party Trays',
      images: [],
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