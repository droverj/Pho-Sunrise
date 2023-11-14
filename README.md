# Phở Sunrise

![Project Logo](https://github.com/droverj/pho-sunrise/blob/main/src/images/screenshots/logo.png?raw=true)

Phở Sunrise is a dynamic restaurant web application designed to enhance the online experience for the Phở Sunrise Kitchener location.

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

Phở Sunrise's web application blends vibrant visuals, intuitive menu navigation, and interactive features for a convenient and visually appealing platform. It aims to attract and retain customers, contributing to the restaurant's growth. The application provides advanced functionalities such as secure payments via Stripe and authentication via Auth0, ensuring a familiar, safe, and user-focused experience.

---

## Screenshots

![navbar](https://github.com/droverj/pho-sunrise/blob/main/src/images/screenshots/navbar.png?raw=true)
![home-page](https://github.com/droverj/pho-sunrise/blob/main/src/images/screenshots/home-page.png?raw=true)
![hours-and-location](https://github.com/droverj/pho-sunrise/blob/main/src/images/screenshots/hours-and-location.png?raw=true)
![signed-out-reviews](https://github.com/droverj/pho-sunrise/blob/main/src/images/screenshots/signed-out-reviews.png?raw=true)
![location](https://github.com/droverj/pho-sunrise/blob/main/src/images/screenshots/location.png?raw=true)
![menu](https://github.com/droverj/pho-sunrise/blob/main/src/images/screenshots/menu.png?raw=true)
![responsive-menu](https://github.com/droverj/pho-sunrise/blob/main/src/images/screenshots/responsive-menu.png?raw=true)
![after-hours-cart](https://github.com/droverj/pho-sunrise/blob/main/src/images/screenshots/after-hours-cart.png?raw=true)
![cart](https://github.com/droverj/pho-sunrise/blob/main/src/images/screenshots/responsive-cart.png?raw=true)
![remove-items](https://github.com/droverj/pho-sunrise/blob/main/src/images/screenshots/remove-item.png?raw=true)

---

## Features

- Captivating User Interface: Eye-catching and intuitive user interface with vibrant visuals, animations and a responsive design.

- Efficient Menu Navigation: Users can swiftly navigate the menu with the ability to jump to their desired menu sections.

- Interactive Contact Page: The contact page is transformed into an attractive and user-friendly resource, offering essential information, an interactive Google map, and links to the restaurant's socials.

- Enhanced Home Page: A captivating and exciting hub for users, the home page provides a direct link to the SkipTheDishes delivery option, improving customer convenience.

- Two Versions: Both a static website and a database-driven web application are provided. The static version offers an appealing visual experience, while the database-driven version includes advanced features for online ordering.

  The repository for the static version can be found [here](https://github.com/droverj/static-pho-sunrise).

#### Database-Driven Features:

- Shopping Cart: Customers are provided with a convenient shopping cart to manage their orders.
- Secure Payments: Integration with the Stripe API ensures secure and hassle-free online payments.
- User Authentication: Secure logins with Auth0/Okta for a seamless and safe user experience.
- Order Status Updates: Customers receive a notification when their payment is processed and are provided with an estimated pickup time.
- Order Management: Users can easily modify their orders from within the cart.
- Order Hour Restrictions: Prevent orders outside of available ordering hours.
- Customer Reviews: Enable users to view, post and delete reviews, enhancing the restaurant's online reputation.
- Interactive Review Form: Engage users with interactive star-based rating.

---

## Technologies

- **Frontend:** HTML, CSS, JavaScript, React (including JSX), SASS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Other:** Canva (for graphic design assets), Mockaroo (for database seeding), ChatGPT (for content generation and guidance)

---

## Upcoming

- Email receipts will be provided to customers for successfully placed orders.
- Images will be added into the menu for the items.
- An image gallery will be added to display menu items.
- Real-time order tracking will be added.
- An admin CMS for managing menu items will be created.

---

## Acknowledgements

- **ChatGPT**: A thank you to ChatGPT for its invaluable contributions throughout the development process. It played a pivotal role in enhancing the overall functionality of this project through content generation and idea contribution.

---

## Installation

```bash
# Clone the repository
git clone git@github.com:droverj/pho-sunrise.git

# Install dependencies in the project's root directory
npm install

# Compile SASS
npm run compile-sass
```

#### Auth0 Api
Create an Auth0 account and application.

#### Environment Variables
Make a .env file using .env.example as a template. Fill in the required values.

#### Backend
Clone [this](https://github.com/droverj/pho-sunrise-api.git) repository and follow the set up instructions.

```bash
# Available Scripts
npm start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
