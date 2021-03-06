## Table of Contents

* [Installation](#installation)
* [Application Structure](#application-structure)
* [General Requirements](#general-requirements)
* [About the Project](#about-the-project)
* [Website](#website)

## Installation

1. Clone the repo
```sh
git clone https://github.com/PPetkov2000/ngMobileStore
```
2. Install Angular Packages
```sh
npm install
```
3. Install Backend Packages
```sh
cd backend => npm install
```
4. Create .env file in the backend folder and add the following
```sh
PORT=5000
MONGO_URI=your_mongoDB_uri
JWT_SECRET=your_jwt_secret
```
5. Run Application
```sh
run frontend: ng serve
run backend: cd backend => npm run server
```
6. Go to
```sh
http://localhost:4200/
```

## Application Structure

### Public Part
Public part is visible for the guests without authentication. They have access to home page, product page, product details page, shopping cart page and user login and register forms.

### Private Part
Registered users have personal area in the web application accessible after successful login. They have access to user profile, shopping cart page, shipping page, payment method page, placeorder page, order page. 
In product details page authenticated users can add and remove favourite products, post a review about the product, they can also delete the reviews created by themselves.
Admin users can delete products and products reviews as well as create products, update products. They can even update and delete other users as well as promoting them to admin.

## General Requirements

- Angular for client-side
- Node.js
- Express framework 
- MongoDB Atlas for database

## About The Project

The project is an online store for mobile devices. Тhe home page shows all the products with basic information about them and a search form to find the product the user desires. Тhe product details page shows all product information. Users can register and log in, after which they have access to their profile page. Еach user has their own shopping cart and favorite products section located in their profile. In the profile page each user is also able to edit his profile information.


## Website

![ngMobileStore](https://github.com/PPetkov2000/ngMobileStore/blob/main/app-view.PNG)
