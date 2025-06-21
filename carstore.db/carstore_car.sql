-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: carstore
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  `brand_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `brand_id` (`brand_id`),
  CONSTRAINT `car_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` VALUES (1,'3 Series','Sporty sedan with luxury feel','/images/bmw-3.jpg',1),(2,'X5','Spacious SUV with modern tech','/images/bmw-x5.jpg',1),(3,'i8','Fast hybrid sports car','/images/bmw-i8.jpg',1),(4,'Corolla','Reliable and fuel-efficient','/images/toyota-corolla.jpg',2),(5,'Camry','Comfortable family sedan','/images/Camry.jpg',2),(6,'Land Cruiser','Rugged off-road capability','/images/toyota-landcruiser.jpg',2),(7,'A4','Sleek design with great control','/images/Audi-A4.jpg',3),(8,'Q7','Luxury SUV with ample space','/images/Audi-Q7.jpg',3),(9,'R8','Fast supercar with V10 engine','/images/Audi-R8.jpg',3),(10,'C-Class','Compact luxury performance car','/images/Mercedes-C-Class.jpg',4),(11,'GLE','Premium family SUV','/images/mercedes-GLE.jpg',4),(12,'AMG GT','High-performance sports car','/images/mercedes-amg-gt.jpg',4),(13,'Civic','Popular compact city car','/images/honda-Civic.jpg',5),(14,'CR-V','Compact SUV with great mileage','/images/honda-CR-V.jpg',5),(15,'Accord','Spacious midsize sedan','/images/honda-Accord-v.jpg',5),(16,'Mustang','Iconic fast muscle car','/images/Ford-Mustang.jpg',6),(17,'Explorer','Versatile family SUV','/images/Ford-Explorer.jpg',6),(18,'F-150','Durable pickup truck','/images/Ford-F-150.jpg',6),(19,'Altima','Efficient and practical sedan','/images/Nissan-Altima.jpg',7),(20,'GT-R','Super fast performance coupe','/images/Nissan-GT-R.jpg',7);
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-21 19:25:00
