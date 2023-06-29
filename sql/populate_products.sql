insert into Products(ID, CatID, PROName, IMG, COST, STOCK_Qnty) values
(101, 001, 'Asahi', '', $5, 25)

insert into Products(ID, CatID, PROName, IMG, COST, STOCK_Qnty) values
(102, 001, 'Byron Bay', 'https://zohawaystorage.blob.core.windows.net/zohaway/Byronbay.jpeg', $8, 25)

insert into Products(ID, CatID, PROName, IMG, COST, STOCK_Qnty) values
(103, 001, 'Sprite', 'https://zohawaystorage.blob.core.windows.net/zohaway/sprite.jpeg', $2.5, 125)

insert into Products(ID, CatID, PROName, IMG, COST, STOCK_Qnty) values
(104, 001, 'Yellow Tail Shiraz-Bottle', 'https://zohawaystorage.blob.core.windows.net/zohaway/shiraz.jpeg', $41, 10)

update Products 
set IMG = 'https://zohawaystorage.blob.core.windows.net/zohaway/asahi.png'
where ID = 101

insert into Products(ID, CatID, PROName, IMG, COST, STOCK_Qnty) values
(201, 002, 'Fries', 'https://zohawaystorage.blob.core.windows.net/zohaway/fries.jpeg', $12, 50)

insert into Products(ID, CatID, PROName, IMG, COST, STOCK_Qnty) values
(301, 003, 'Margharita Pizza', 'https://zohawaystorage.blob.core.windows.net/zohaway/pizza.jpeg', $22, 50)

insert into Products(ID, CatID, PROName, IMG, COST, STOCK_Qnty) values
(302, 003, 'Chicken Alfredo Pasta', 'https://zohawaystorage.blob.core.windows.net/zohaway/pasta.jpeg', $25, 50)

insert into Products(ID, CatID, PROName, IMG, COST, STOCK_Qnty) values
(401, 004, 'Tiramisu', 'https://zohawaystorage.blob.core.windows.net/zohaway/tiramasu.jpeg', $18, 50)

insert into Products(ID, CatID, PROName, IMG, COST, STOCK_Qnty) values
(402, 004, 'Chocolate Brownie', 'https://zohawaystorage.blob.core.windows.net/zohaway/brownie.jpeg', $12, 50)

insert into Products(ID, CatID, PROName, IMG, COST, STOCK_Qnty) values
(403, 004, 'New York Cheesecake', 'https://zohawaystorage.blob.core.windows.net/zohaway/cheesecake.jpeg', $21, 50)

Select * from Products
