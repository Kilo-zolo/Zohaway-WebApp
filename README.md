## Zohaway Take Away Service Web Application ##
# High-Level Architecture #
![Zohtek-WebApp (1)](https://github.com/Kilo-zolo/Zohaway-WebApp/assets/49636909/2259e316-65c1-4843-952f-0059f077273d)

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



