DELIMITER $$
CREATE DEFINER=`sarmah`@`localhost` PROCEDURE `Show_From_Brand`(brand_id int)
BEGIN
	SELECT P.Product_Name AS "Product Name"
    FROM Product P
    WHERE P.Brand_ID = brand_id;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`sarmah`@`localhost` PROCEDURE `Sort_In_Catalog`(catalog_id int, ord int)
BEGIN
	IF (ord = 1) THEN 
		SELECT P.Product_Name AS "Product Name", P.Price
		FROM Product P
		WHERE P.ToCatalog_ID = catalog_id
        ORDER BY P.Price ASC;
	ELSE 
		SELECT P.Product_Name AS "Product Name", P.Price
		FROM Product P
		WHERE P.ToCatalog_ID = catalog_id
		ORDER BY P.Price DESC;
	END IF;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`sarmah`@`localhost` PROCEDURE `Show_From_Brand_In_Catalog`(bid int, catalog_id int)
BEGIN
	SELECT P.Product_Name "Product Name", P.Price
    FROM Product P
    WHERE P.Brand_ID = bid AND P.ToCatalog_ID = catalog_id;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`sarmah`@`localhost` PROCEDURE `Sort_By_Reviews`(catalog_ID int)
BEGIN
	SELECT P.Product_Name AS "Product Name", AVG(R.Rating) AS "Average Rating"
    FROM Reviews R, Product P
    WHERE R.RevProd_ID = P.Product_ID AND P.ToCatalog_ID = catalog_id
    GROUP BY R.RevProd_ID
    ORDER BY AVG(R.Rating) DESC;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`sarmah`@`localhost` PROCEDURE `Trending_Products`()
BEGIN
	SELECT P.Product_Name AS "Product Name", COUNT(*)
    FROM Search_History S, Product P
    WHERE P.Product_ID = S.What_ID
    GROUP BY S.What_ID
    HAVING COUNT(S.What_ID) >= 5;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`sarmah`@`localhost` PROCEDURE `Pay_History`(ccid int)
BEGIN
	SELECT Payment_ID AS "Transaction ID"
    FROM Payment
    WHERE Customer_ID = ccid;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`sarmah`@`localhost` PROCEDURE `Show_Brands`()
BEGIN
	SELECT B.Brand_Name AS "Brand Name"
    FROM Brand B;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`sarmah`@`localhost` PROCEDURE `Show_Catalog`()
BEGIN
	SELECT C.Catalog_Name AS "Catalog Name"
    FROM Product_Catalog C;
END$$
DELIMITER ;