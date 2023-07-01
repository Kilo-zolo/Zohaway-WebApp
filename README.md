## Zohaway Take Away Service Web Application ##
# To Start on Local Machine #
1. Clone the Repository on your local machine
```
Git clone https://github.com/Kilo-zolo/Zohaway-WebApp.git
```

2. cd into root folder

3. Install dependencies 

```
npm install
```

4. Start webapp on local machine

```
npm start
or
npm run dev
```

# High-Level Architecture #
![Zohtek-WebApp (2)](https://github.com/Kilo-zolo/Zohaway-WebApp/assets/49636909/9016fae5-e7c6-4c18-8650-633420536b72)

- Azure WebApp with React framework as frontend
- Azure functions as middle tier
- MS SQL as Backend Database

# Folder Structure #
Functions folder: Contains source for azure functions 
 - GetCategories
 - GetProductsperCategory
 - GetProducts
 - PlaceOrder
 - UserLogin
 - UserRegister

SQL folder: 
- Contains scripts for creating zohaway db and populating tables with products and categories
 - create_tables.sql: Primary SQL script used to create the DB structure and includes tables, constraints and triggers  

WebApp folder: Contains source for React Typescript frontend 
- React and Typescript based frontend
- E-commerce application with menu, product choice and checkout functionality



