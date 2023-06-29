SELECT Products.PROName, Products.IMG, Products.COST, Categories.CatName
FROM Products
INNER JOIN Categories ON Products.CatID=Categories.ID
WHERE Categories.CatName = 'Mains'