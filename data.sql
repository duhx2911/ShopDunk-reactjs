-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: shopdunk
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `AccountID` smallint unsigned NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) DEFAULT NULL,
  `Username` varchar(50) NOT NULL,
  `FullName` varchar(50) DEFAULT NULL,
  `AvatarImageName` varchar(50) DEFAULT NULL,
  `Mobile` varchar(50) DEFAULT NULL,
  `Address` varchar(50) DEFAULT NULL,
  `CreateDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `Password` varchar(100) NOT NULL,
  `Status` tinyint unsigned DEFAULT '0',
  `RefreshToken` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`AccountID`),
  UNIQUE KEY `Username` (`Username`),
  UNIQUE KEY `Email` (`Email`),
  UNIQUE KEY `Mobile` (`Mobile`),
  UNIQUE KEY `Address` (`Address`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'admin@gmail.com','admin','admin','admin.jpg','0336030999','Nam Từ Liêm - Hà Nội','2022-05-19 00:00:00','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',1,'xdtlUWd9kuRRJIU6vMVcMFUAJxPKe9XBujKPSuxYFcKsAYKm5PJO9KqEP0ZTeP7Iepfd4SyzYkTuVenTMfQop9qsVAcy3Wani1BG'),(2,'Email1@gmail.com','Username1','Fullname1','Avatar1.jpg','0336984888','Bắc Từ Liêm - Hà Nội','2021-03-05 00:00:00','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',1,NULL),(3,'Email2@gmail.com','Username2','Fullname2','Avatar2.jpg','0988888888','Cầu Giấy - Hà Nội','2020-06-05 00:00:00','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',1,NULL),(4,'Email3@gmail.com','Username3','Fullname3','Avatar3.jpg','0945555666','Nam Trực - Nam Định','2019-06-07 00:00:00','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',0,NULL),(5,'Email4@gmail.com','Username4','Fullname4','Avatar4.jpg','0922222222','Quận 1 - TP.HCM','2018-03-04 00:00:00','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',0,NULL),(6,'Email5@gmail.com','Username5','Fullname5','Avatar5.jpg','0943456789','Quảng Nam - Đà Nẵng','2020-02-10 00:00:00','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',0,NULL),(7,'Email6@gmail.com','Username6','Fullname6','Avatar6.jpg','0988818188','Quy Nhơn - Bình Định','2017-02-11 00:00:00','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',0,NULL),(14,'nxd2911@gmail.com','duhx2911','Nguyễn Xuân Đức','avatar1.jpg',NULL,NULL,'2023-08-15 11:36:04','$2b$10$VgIqqzKJt/1Tm5Y.agUy5euaWeSLxFj7SbE1O/YvDmSxnXmivNbAC',0,'mxYb6liGPxZhHqDJ5Bf8gsTOSNz86Tw9f5XkYRMzMljiGO0jWDDPKCjZsydKhC31vbm0SN0NwhzLbEDtmvHsU2EdWyl3KMKQdoi9');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `cate_id` int unsigned NOT NULL AUTO_INCREMENT,
  `cate_name` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `slug` varchar(200) DEFAULT NULL,
  `folder` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`cate_id`),
  UNIQUE KEY `cate_name` (`cate_name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Iphone','iphone','Iphone'),(2,'iPad','ipad','iPad'),(3,'Mac','mac','Mac'),(4,'Watch','watch','Watch'),(5,'Âm thanh','am-thanh','sound'),(6,'Phụ kiện','phu-kien','accessories');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_product`
--

DROP TABLE IF EXISTS `image_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_product` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int unsigned NOT NULL,
  `imgDetail` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `image_product_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_product`
--

LOCK TABLES `image_product` WRITE;
/*!40000 ALTER TABLE `image_product` DISABLE KEYS */;
INSERT INTO `image_product` VALUES (1,1,'ip-14-promax-preview.jpeg'),(2,1,'0018665_deep-purple_550.jpeg'),(3,1,'0018666_deep-purple_550.jpeg'),(4,1,'0018667_deep-purple_550.jpeg'),(5,1,'0018668_deep-purple_550.jpeg'),(6,1,'0018669_deep-purple_550.jpeg'),(7,1,'0018670_deep-purple_550.jpeg'),(8,1,'0018671_deep-purple_550.jpeg'),(9,1,'0018672_deep-purple_550.jpeg'),(10,1,'0018664_deep-purple_550.jpeg'),(19,2,'0008735_iphone-14-pro-128gb_550.png'),(20,2,'0008736_iphone-14-pro-128gb_550.webp'),(21,2,'0008737_iphone-14-pro-128gb_550.webp'),(22,2,'0008738_iphone-14-pro-128gb_550.webp'),(23,2,'0008739_iphone-14-pro-128gb_550.webp'),(24,2,'0008740_iphone-14-pro-128gb_550.webp'),(25,2,'0008741_iphone-14-pro-128gb_550.webp'),(26,2,'0008742_iphone-14-pro-128gb_550.webp'),(27,2,'0008743_iphone-14-pro-128gb_550.webp'),(28,5,'0006300_silver_550.webp'),(29,5,'0006301_silver_550.webp'),(30,5,'0006302_silver_550.webp'),(31,5,'0006303_silver_550.webp'),(32,5,'0006304_silver_550.webp'),(33,5,'0006305_silver_550.webp'),(34,5,'0006306_silver_550.webp'),(35,5,'0006307_silver_550.webp'),(36,5,'0006308_silver_550.webp');
/*!40000 ALTER TABLE `image_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `productName` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `crrPrice` varchar(30) NOT NULL,
  `oldPrice` varchar(30) NOT NULL,
  `cate_id` int unsigned NOT NULL,
  `slug` varchar(255) NOT NULL,
  `imgName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `cate_id` (`cate_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`cate_id`) REFERENCES `categories` (`cate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'iPhone 14 Pro Max 128GB','26.790.000','34.990.000',1,'iphone-14-pro-max-128gb','iphone-14-pro-max-128gb.png'),(2,'iPhone 14 Pro 128GB','24.990.000','30.990.000',1,'iphone-14-pro-128gb','iphone-14-pro-128gb.png'),(3,'iPhone 14 128GB','18.990.000','24.990.000',1,'iphone-14-128gb','iphone-14-128gb.png'),(4,'iPhone 14 Plus 128GB','21.590.000','27.990.000',1,'iphone-14-plus-128gb','iphone-14-plus-128gb.png'),(5,'iPad gen 9 10.2 inch WiFi 64GB','6.990.000','9.990.000',2,'ipad-gen-9-102-inch-wifi-64gb','0006205_ipad-gen-9-102-inch-wifi-64gb_240.png'),(6,'iPad Pro M2 11 inch WiFi 128GB','20.590.000','23.990.000',2,'ipad-pro-m2-11-inch-wifi-128gb','0007071_ipad-pro-m2-11-inch-wifi-128gb_240.png'),(7,'iPad Pro M2 12.9 inch WiFi 128GB','28.390.000','32.990.000',2,'ipad-pro-m2-129-inch-wifi-128gb','0007301_ipad-pro-m2-129-inch-wifi-128gb_240.png'),(8,'iPad Gen 10th 10.9 inch WiFi 64GB','10.990.000','13.990.000',2,'ipad-gen-10th-109-inch-wifi-64gb','0009725_ipad-gen-10th-109-inch-wifi-64gb_240.png'),(9,'MacBook Air M1 2020 (8GB RAM | 256GB SSD)','18.590.000','28.990.000',3,'macbook-air-m1-2020-8gb-ram-256gb-ssd','0000723_macbook-air-m1-2020-8gb-ram-256gb-ssd_240.png'),(10,'MacBook Air M2 2022 (8GB RAM | 256GB SSD)','27.590.000','32.990.000',3,'macbook-air-m2-2022-8gb-ram-256gb-ssd','0008502_macbook-air-m2-2022-8gb-ram-256gb-ssd_240.png'),(11,'MacBook Pro 13 inch M2 (10 core| 8GB RAM| 256GB SSD) ','29.690.000','35.990.000',3,'macbook-pro-13-inch-m2-10-core-8gb-ram-256gb-ssd','0008682_macbook-pro-13-inch-m2-10-core-8gb-ram-256gb-ssd_240.png'),(15,'MacBook Pro 14 inch M2 Pro (16 Core| 16GB| 512GB)','47.550.000','55.000.000',3,'macbook-pro-14-inch-m2-pro-16-core-16gb-512g','0011267_macbook-pro-14-inch-m2-pro-16-core-16gb-512gb_240.jpeg'),(16,'Apple Watch Series 7 Nhôm GPS','7.890.000','11.990.000',4,'apple-watch-series-7-nhom-gps','0001025_apple-watch-series-7-nhom-gps_240.png'),(17,'Apple Watch SE Nhôm 2022 GPS','6.090.000','8.990.000',4,'apple-watch-se-2022-nhom-gps','0000896_apple-watch-se-2022-nhom-gps_240.png'),(18,'Apple Watch Series 8 41mm nhôm GPS','9.390.000','11.990.000',4,'apple-watch-series-8-41mm-nhom-gps','0001031_apple-watch-series-8-41mm-nhom-gps_240.png'),(19,' Apple Watch Ultra LTE 49mm Alpine Loop size S','19.990.000','23.990.000',4,'apple-watch-ultra-lte-49mm-alpine-loop-size-s','0008913_apple-watch-ultra-lte-49mm-alpine-loop-size-s_240.png'),(20,'AirPods Max','12.590.000','13.990.000',5,'airpods-max','0012005_airpods-max_240.webp'),(21,'AirPods 2','2.690.000','4.390.000',5,'airpods-2','0006052_airpods-2_240.jpeg'),(22,' Tai nghe Apple AirPods 3 sạc có dây Lightning','4.190.000','5.490.000',5,'tai-nghe-apple-airpods-3-sac-co-day-lightning','0006057_tai-nghe-apple-airpods-3-sac-co-day-lightning_240.jpeg'),(23,'AirPods Pro 2','5.990.000','6.790.000',5,'airpods-pro-2','0000211_airpods-pro-2_240.png'),(24,'Sạc 20W USB-C Power Adapter ','510.000','690.000',6,'sac-20w-usb-c-power-adapter','0001395_sac-20w-usb-c-power-adapter_240.png'),(25,'Magic Mouse 2','1.630.000','2.990.000',6,'magic-mouse-2','0001421_magic-mouse-2_240.jpeg'),(26,' iPhone 14 Pro Max Leather Case with MagSafe','1.590.000','1.990.000',6,'iphone-14-pro-max-leather-case-with-magsafe','0001742_iphone-14-pro-max-leather-case-with-magsafe_240.jpeg'),(27,'Pencil 1 (2022)','2.290.000','2.990.000',6,'pencil-1-2022','0010774_pencil-1-2022_240.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-15 23:48:46
