CREATE DEFINER=`sarmah`@`localhost` TRIGGER `Customer_BEFORE_INSERT` BEFORE INSERT ON `Customer` FOR EACH ROW BEGIN
	INSERT INTO Cart VALUES(NEW.Curr_Cart_ID, 0);
END

CREATE DEFINER=`sarmah`@`localhost` TRIGGER `Cart_Items_AFTER_INSERT` AFTER INSERT ON `Cart_Items` FOR EACH ROW BEGIN
	UPDATE Cart
    SET Cart_Cost = Cart_Cost + NEW.Cost * NEW.Quantity
    WHERE Cart_ID = NEW.MyCart_ID;
    UPDATE Product P
    SET P.Stock = P.Stock - NEW.Quantity
    WHERE P.Product_ID = NEW.Product_ID;
END

CREATE DEFINER=`sarmah`@`localhost` TRIGGER `Payment_AFTER_INSERT` AFTER INSERT ON `Payment` FOR EACH ROW BEGIN
	UPDATE Cart
    SET Cart_Cost = 0
    WHERE Cart_ID = NEW.Cart_ID;
END