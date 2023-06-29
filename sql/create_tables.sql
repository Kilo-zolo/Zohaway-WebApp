CREATE TABLE Categories (
    ID int, 
    CatName nvarchar(1000),
    IMG nvarchar(255),
    CONSTRAINT CategoryPK PRIMARY KEY (ID)
)

CREATE TABLE Products (
    ID int, 
    CatID int FOREIGN KEY REFERENCES Categories(ID), 
    PROName nvarchar(1000), 
    IMG nvarchar(255),
    COST int, 
    STOCK_Qnty int,
    CONSTRAINT ProductPK PRIMARY KEY(ID)
)

CREATE TABLE Users (
    ID int, 
    FName nvarchar(1000),
    LName nvarchar(1000),
    PNumber int, 
    Email nvarchar(320), 
    Passwords nvarchar(1000),
    Membership bit,
    CONSTRAINT UserPK PRIMARY KEY(ID)
)

CREATE TABLE Orders (
    ID int, 
    UserID int FOREIGN KEY REFERENCES Users(ID), 
    Price int, 
    Date_Time varchar(1000), 
    CONSTRAINT OrderPK PRIMARY KEY(ID)
)

CREATE TABLE Order_Items (
    ID int, 
    OrderID int FOREIGN KEY REFERENCES Orders(ID),
    ProductID int FOREIGN KEY REFERENCES Products(ID), 
    Quantity int,
    CONSTRAINT OrderItemPK PRIMARY KEY(ID)
)