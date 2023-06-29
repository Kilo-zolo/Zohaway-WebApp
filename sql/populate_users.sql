INSERT INTO Users(FName, LName, PNumber, Email, Passwords, Membership) VALUES
('Dave', 'Gasfield', 0483814426, 'dave@gmail.com', 'pass22@w0rd', 0)

INSERT INTO Users(FName, LName, PNumber, Email, Passwords, Membership) VALUES
('Cole', 'Neetman', 0423824425, 'cole@gmail.com', 'pass23@w1rd', 1)

UPDATE Users
Set Membership = 1 WHERE ID = 1

Delete FROM Users WHERE FName = 'Krish'
Select * from Users
