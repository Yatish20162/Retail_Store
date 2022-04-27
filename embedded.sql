USE Shop;

SELECT P.Product_Name AS "Product Name", COUNT(*) AS "Frequency"
FROM Wishlist W, Product P
WHERE W.Item_ID = P.Product_ID
GROUP BY W.Item_ID
ORDER BY COUNT(W.Item_ID) DESC
LIMIT 1;


SELECT MAX(CC.Cart_Cost) AS "Max Spent"
FROM Cart CC;

SELECT SUM(Cart_Cost) AS "Spent"
FROM Cart;

SELECT AVG(Cart_Cost) AS "Spent"
FROM Cart;