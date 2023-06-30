INSERT INTO Users(FName, LName, PNumber, Email, Passwords, Membership) VALUES
('Dave', 'Gasfield', 0483814426, '', 'pass22@w0rd', 1)

INSERT INTO Users(FName, LName, PNumber, Email, Passwords, Membership) VALUES
('Cole', 'Neetman', 0423824425, 'cole@gmail.com', 'pass23@w1rd', 1)

UPDATE Users
Set Membership = 1 WHERE ID = 1

Delete FROM Users WHERE ID = 23
Select * from Users

select IDENT_CURRENT('Users') as ID
