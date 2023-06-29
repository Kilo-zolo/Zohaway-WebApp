CREATE TABLE [dbo].[Categories] (
    [ID]      INT             NOT NULL,
    [CatName] NVARCHAR (1000) NULL,
    [IMG]     NVARCHAR (255)  NULL,
    CONSTRAINT [CategoryPK] PRIMARY KEY CLUSTERED ([ID] ASC)
);


CREATE TABLE [dbo].[Products] (
    [ID]         INT             NOT NULL,
    [CatID]      INT             NULL,
    [PROName]    NVARCHAR (1000) NULL,
    [IMG]        NVARCHAR (255)  NULL,
    [COST]       MONEY           NULL,
    [STOCK_Qnty] INT             NULL,
    CONSTRAINT [ProductPK] PRIMARY KEY CLUSTERED ([ID] ASC),
    FOREIGN KEY ([CatID]) REFERENCES [dbo].[Categories] ([ID])
);


CREATE TABLE [dbo].[Users] (
    [ID]         INT             IDENTITY (1, 1) NOT NULL,
    [FName]      NVARCHAR (1000) NULL,
    [LName]      NVARCHAR (1000) NULL,
    [PNumber]    INT             NULL,
    [Email]      NVARCHAR (320)  NULL,
    [Passwords]  NVARCHAR (1000) NULL,
    [Membership] BIT             NULL,
    CONSTRAINT [UserPK] PRIMARY KEY CLUSTERED ([ID] ASC)
);


CREATE TABLE [dbo].[Orders] (
    [ID]        BIGINT         NOT NULL,
    [UserID]    INT            NULL,
    [Price]     MONEY          NULL,
    [Date_Time] VARCHAR (1000) NULL,
    CONSTRAINT [OrderPK] PRIMARY KEY CLUSTERED ([ID] ASC),
    FOREIGN KEY ([UserID]) REFERENCES [dbo].[Users] ([ID])
);


CREATE TABLE [dbo].[Order_Items] (
    [ID]        INT    IDENTITY (1, 1) NOT NULL,
    [OrderID]   BIGINT NOT NULL,
    [ProductID] INT    NOT NULL,
    [Quantity]  INT    NOT NULL,
    CONSTRAINT [OrderItemPK] PRIMARY KEY CLUSTERED ([ID] ASC),
    FOREIGN KEY ([OrderID]) REFERENCES [dbo].[Orders] ([ID]),
    FOREIGN KEY ([ProductID]) REFERENCES [dbo].[Products] ([ID])
);


GO

CREATE TRIGGER email_membership_check 
ON Users
AFTER INSERT
AS
BEGIN
    IF EXISTS (
        SELECT 1 
        FROM inserted 
        WHERE ((Email IS NULL OR Email = '') AND Membership = 1) 
    )
    BEGIN
        RAISERROR ('Email must be provided if you want to be a member.', 16, 1);
        ROLLBACK TRANSACTION;
        RETURN;
    END;
END;







