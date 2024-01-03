# Thai Basil

![Project Logo](https://github.com/droverj/thai-basil/blob/main/src/images/screenshots/thai-basil-logo.png?raw=true)

# About Thai Basil Web App

Thai Basil Web App is a dynamic showcase of my ability in delivering a responsive, user-friendly and visually appealing web environment. The application boasts:

- **Authentication:** Secure user accounts for personalized interactions.
- **Stripe Payments:** Familiar design for test transactions.
- **Menu with Images:** Engaging visuals, intuitive scroll features, and easy readability.
- **Interactive Cart:** Easily modify items, view quantities and costs.
- **Mobile Responsiveness:** Enjoy a seamless experience across various devices.

This project is hosted on Netlify and uses Supabase for backend services.

You can explore the Thai Basil Web App by [clicking here](https://thai-basil.netlify.app/).

## Login

Only authenticated users are able to leave reviews. If you wish to explore this feature, feel free to use the following credentials:

- **Email:** abc@123.com
- **Password:** Password123!

Alternatively, you can create your own credentials for testing purposes.

## Important Information Regarding Payments

**Attention:** Please be aware that while the Thai Basil app is live, payment processing capabilities are limited to testing mode only.

If you wish to explore the full functionality of payment processing, you may do so by running the project locally on your machine.

Utilize the following Canadian test card number provided by Stripe for successful payments:
   - Test Card Number: `4000001240000000` (Failed Payment Test Card: `4000 0000 0000 0341`)
   - Use a valid future date, such as 12/34.
   - Use any three-digit CVC.
   - Use any value you like for other form fields.

For detailed information on testing cards with Stripe, refer to their [documentation](https://stripe.com/docs/testing).

Feel free to reach out if you have any questions or feedback.

Thank you!

---

## Table of Contents

- [About](#about)
- [Screenshots](#screenshots)
- [Features](#features)
- [Technologies](#technologies)
- [Upcoming](#upcoming)
- [Acknowledgements](#acknowledgements)
- [Installation](#installation)

---

## About

Thai Basil's web application combines playful visual elements, an intuitively designed menu navigation system and interactive features. The application offers advanced functionalities, including secure payment processing through Stripe and authentication powered by Auth0. The app was designed with the hopes of being visually appealing and user-friendly while providing users with a sense of familiarity.

---

## Screenshots

![Home Page](https://github.com/droverj/thai-basil/blob/main/src/images/screenshots/home.png?raw=true)
![Boba Drinks](https://github.com/droverj/thai-basil/blob/main/src/images/screenshots/boba-drinks.png?raw=true)
![Location](https://github.com/droverj/thai-basil/blob/main/src/images/screenshots/location.png?raw=true)
![Signed-out Reviews](https://github.com/droverj/thai-basil/blob/main/src/images/screenshots/signed-out-reviews.png?raw=true)
![Contact](https://github.com/droverj/thai-basil/blob/main/src/images/screenshots/contact.png?raw=true)
![Menu](https://github.com/droverj/thai-basil/blob/main/src/images/screenshots/menu.png?raw=true)
![Responsive Menu](https://github.com/droverj/thai-basil/blob/main/src/images/screenshots/responsive-menu.png?raw=true)
![Cart](https://github.com/droverj/thai-basil/blob/main/src/images/screenshots/responsive-cart.png?raw=true)
![Remove Items](https://github.com/droverj/thai-basil/blob/main/src/images/screenshots/remove-item.png?raw=true)

---

## Features

- Captivating User Interface: Eye-catching and intuitive user interface with vibrant visuals, animations and a responsive design.

- Efficient Menu Navigation: Users can swiftly navigate the menu with the ability to jump to their desired menu sections.

- Interactive Contact Page: The contact page is transformed into an attractive and user-friendly resource, offering essential information, an interactive Google map, and links to the restaurant's socials.

- Enhanced Home Page: A captivating and exciting hub for users, the home page provides a direct link to the SkipTheDishes delivery option, improving customer convenience.

- Shopping Cart: Customers are provided with a convenient shopping cart to manage their orders.
  
- Secure Payments: Integration with the Stripe API ensures secure and hassle-free online payments.
  
- User Authentication: Secure logins with Auth0/Okta for a seamless and safe user experience.
  
- Order Status Updates: Customers receive a notification when their payment is processed and are provided with an estimated pickup time.
  
- Order Management: Users can easily modify their orders from within the cart.
  
- Customer Reviews: Enable users to view, post and delete reviews, enhancing the restaurant's online reputation.
  
- Interactive Review Form: Engage users with interactive star-based rating.

---

## Technologies

- **Frontend:** HTML, CSS, JavaScript, React (including JSX), SASS
- **Backend:** Supabase
- **Database:** PostgreSQL
- **Other:** Canva (for graphic design assets), Mockaroo (for database seeding), ChatGPT (for content generation and guidance)

---

## Upcoming

- Email receipts will be provided to customers for successfully placed orders.
- Images will be added into the menu for the items.

---

## Installation

```bash
# Clone the repository
git clone git@github.com:droverj/thai-basil.git

# Install dependencies in the project's root directory
npm install

#### Auth0 Api
Create an Auth0 account and application.

#### Environment Variables
Make a .env file using .env.example as a template. Fill in the required values.

#### Backend
Clone [this](https://github.com/droverj/thai-basil-api.git) repository and follow the set up instructions.

```bash
# Available Scripts
npm start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
