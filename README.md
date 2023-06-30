## Zohaway Take Away Service Web Application ##
# High-Level Architecture #
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

WebApp folder: Contains source for react typescript frontend 
- Work in Progress
