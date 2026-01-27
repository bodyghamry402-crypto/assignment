/*//part 3
//1
CREATE TABLE Products (
  ProductID INT AUTO_INCREMENT PRIMARY KEY,
  ProductName Text(400) NOT NULL,
  Price DECIMAL(10,2) NOT NULL,
  StockQuantity INT NOT NULL,
  SupplierID INT,
  FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
);

//2
CREATE TABLE Suppliers (
  SupplierID INT AUTO_INCREMENT PRIMARY KEY,
  SupplierName TEXT,
  ContactNumber TEXT
);
 
//3
CREATE TABLE Sales (
  SaleID INT AUTO_INCREMENT PRIMARY KEY,
  ProductID INT,
  QuantitySold INT,
  SaleDate DATE,
  FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);


//part 4
const express = require("node:express")
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "retail_store",
  multipleStatements: true
});

//1
connection.query(`
CREATE DATABASE  RetailStore;
CREATE TABLE  Suppliers (
    SupplierID INT AUTO_INCREMENT PRIMARY KEY,
    SupplierName VARCHAR(100),
    ContactNumber VARCHAR(20)
);
CREATE TABLE  Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(100),
    Price DECIMAL(10,2),
    StockQuantity INT,
    SupplierID INT,
    FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
);
CREATE TABLE  Sales (
    SaleID INT AUTO_INCREMENT PRIMARY KEY,
    ProductID INT,
    QuantitySold INT,
    SaleDate DATE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
`, (err, results) => {
    if(err)
       console.log(err);
     else
      console.log(results);
});

//2
connection.query(`ALTER TABLE Products ADD COLUMN Category VARCHAR(50);`, (err)=>{
   if(err)
    console.log(err);
  });

//3
connection.query(`ALTER TABLE Products DROP COLUMN Category;`, (err)=>{
  if(err)
    console.log(err);
  });

//4
connection.query(`ALTER TABLE Suppliers MODIFY COLUMN ContactNumber VARCHAR(15);`, (err)=>{
  if(err)
    console.log(err);
  });

//5
connection.query(`ALTER TABLE Products MODIFY COLUMN ProductName VARCHAR(100) NOT NULL;`, (err)=>{
  if(err)
    console.log(err);
  });

//6a
connection.query(`INSERT INTO Suppliers (SupplierName, ContactNumber) VALUES ('FreshFoods', '01001234567');`, (err)=>{
  if(err)
    console.log(err);
  });

//6b
connection.query(`
INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID) VALUES
('Milk', 15.00, 50, (SELECT SupplierID FROM Suppliers WHERE SupplierName='FreshFoods')),
('Bread', 10.00, 30, (SELECT SupplierID FROM Suppliers WHERE SupplierName='FreshFoods')),
('Eggs', 20.00, 40, (SELECT SupplierID FROM Suppliers WHERE SupplierName='FreshFoods'));
`, (err)=>{
  if(err)
    console.log(err);
  });

//6c
connection.query(`
INSERT INTO Sales (ProductID, QuantitySold, SaleDate) VALUES
((SELECT ProductID FROM Products WHERE ProductName='Milk'), 2, '2025-05-20');
`, (err)=>{
  if(err)
    console.log(err);
  });

//7
connection.query(`UPDATE Products SET Price = 25.00 WHERE ProductName = 'Bread';`, (err)=>{
  if(err)
    console.log(err);
  });

//8
connection.query(`DELETE FROM Products WHERE ProductName = 'Eggs';`, (err)=>{
  if(err)
    console.log(err);
  });

//9
//10
//11
connection.query(`SELECT * FROM Suppliers WHERE SupplierName LIKE 'F%';`, (err, results)=>{
  if(err)
    console.log(err);
   else 
    console.log(results);
  });

//12
connection.query(`
SELECT p.ProductName
FROM Products p
LEFT JOIN Sales s ON p.ProductID = s.ProductID
WHERE s.ProductID IS NULL;
`, (err, results)=>{
  if(err)
    console.log(err); .
  else 
    console.log(results);
  });

//13
connection.query(`
SELECT s.SaleID, p.ProductName, s.QuantitySold, s.SaleDate
FROM Sales s
JOIN Products p ON s.ProductID = p.ProductID;
`, (err, results)=>{
  if(err)
    console.log(err); 
  else 
    console.log(results);
  });

//14
connection.query(`CREATE USER 'store_manager'@'localhost' IDENTIFIED BY 'StrongPassword123';`, (err)=>{
  if(err)
    console.log(err);
  });
//15
connection.query(`REVOKE UPDATE ON RetailStore.* FROM 'store_manager'@'localhost'; FLUSH PRIVILEGES;`, (err)=>{
  if(err)
    console.log(err);
  });

//16
connection.query(`GRANT DELETE ON RetailStore.Sales TO 'store_manager'@'localhost'; FLUSH PRIVILEGES;`, (err)=>{
  if(err)
    console.log(err);
  });

console.log("done!");


*/