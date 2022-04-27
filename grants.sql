GRANT SELECT ON Product TO 'shopcust'@'localhost;
GRANT INSERT ON Cart_Items TO 'shopcust'@'localhost;
GRANT INSERT ON Wishlist TO 'shopcust'@'localhost;
GRANT INSERT ON Reviews TO 'shopcust'@'localhost;
GRANT SELECT ON Brand TO 'shopcust'@'localhost;
GRANT SELECT ON Product_Catalog TO 'shopcust'@'localhost;
GRANT SELECT ON Reviews TO 'shopcust'@'localhost;


GRANT ALL ON Brand TO 'owner'@'localhost;
GRANT ALL ON Cart TO 'owner'@'localhost;
GRANT ALL ON Cart_Items TO 'owner'@'localhost;
GRANT ALL ON Customer TO 'owner'@'localhost;
GRANT ALL ON Payment TO 'owner'@'localhost;
GRANT ALL ON Product TO 'owner'@'localhost;
GRANT ALL ON Product_Catalog TO 'owner'@'localhost;
GRANT ALL ON Reviews TO 'owner'@'localhost;
GRANT ALL ON Search_History TO 'owner'@'localhost;
GRANT ALL ON Wishlist TO 'owner'@'localhost;