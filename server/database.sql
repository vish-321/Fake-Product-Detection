CREATE DATABASE FakeProductDetection ;
CREATE TABLE Product (Product_id SERIAL PRIMARY KEY ,
    description VARCHAR (255));
CREATE TABLE Scans (Scan_id SERIAL PRIMARY KEY ,
    User_Name VARCHAR (40), Scan_Time timestamp , Location VARCHAR (255) ,
     Product_id INTEGER, FOREIGN KEY (Product_id) REFERENCES product(product_id)
    );

INSERT INTO Product(description)
VALUES ('This product was manafactured on 3 December 2020 at PUMA Factory Outlet , Pathankot, Punjab ');

INSERT INTO Product(description)
VALUES ('This product was manafactured on 7 August 2019 at PUMA Factory Outlet , Gurugram, Haryana ·');

INSERT INTO Product(description)
VALUES ('This product was manafactured on 23 June 2018 at Puma Factory Outlet , Bengaluru, Karnataka ·');

INSERT INTO Product(description)
VALUES ('This product was manafactured on 18 January 2020 at PUMA Factory Outlet , Barrackpore, West Bengal ·');

INSERT INTO Product(description)
VALUES ('This product was manafactured on 13 March 2020 at PUMA Factory Outlet Puri, Odisha · 078738 52747');


