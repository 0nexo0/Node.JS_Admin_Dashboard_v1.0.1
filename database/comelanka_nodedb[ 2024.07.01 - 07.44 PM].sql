-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: comelanka_nodedb
-- ------------------------------------------------------
-- Server version	5.5.5-10.10.2-MariaDB

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
-- Table structure for table `blog_details`
--

DROP TABLE IF EXISTS `blog_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_details` (
  `nID` int(11) NOT NULL AUTO_INCREMENT,
  `cTitile` varchar(255) NOT NULL,
  `cAuthor` varchar(255) NOT NULL,
  `cImageUrl` varchar(255) NOT NULL,
  `cPostDate` varchar(255) NOT NULL,
  `cfstPara` varchar(999) DEFAULT NULL,
  `cSecPara` varchar(999) DEFAULT NULL,
  `cTrdPara` varchar(999) DEFAULT NULL,
  `cSecTitle` varchar(255) DEFAULT NULL,
  `cSecFstPara` varchar(999) DEFAULT NULL,
  `cSecSecPara` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`nID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_details`
--

LOCK TABLES `blog_details` WRITE;
/*!40000 ALTER TABLE `blog_details` DISABLE KEYS */;
INSERT INTO `blog_details` VALUES (1,'Hello Sri Lanka','Gimhan Hashintha','/uploads/1719694299851-Artist Creates Life-Size Crochet Skeleton Complete With Organs.jpg','2024.07.01','sdasdaddsda','sdasd','sdasd','asdas','dasdasdas','dasdasd'),(2,'Hello India','Nexo Raiden','/uploads/1719693909434-download (5)-modified.png','2024.07.01','sadasd','sadasd','asda','sdas','dasd','asdasd');
/*!40000 ALTER TABLE `blog_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_overviews`
--

DROP TABLE IF EXISTS `blog_overviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_overviews` (
  `nID` int(11) NOT NULL AUTO_INCREMENT,
  `cTitile` varchar(255) NOT NULL,
  `cAuthor` varchar(255) NOT NULL,
  `cImageUrl` varchar(255) NOT NULL,
  `cPostDate` varchar(255) NOT NULL,
  PRIMARY KEY (`nID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_overviews`
--

LOCK TABLES `blog_overviews` WRITE;
/*!40000 ALTER TABLE `blog_overviews` DISABLE KEYS */;
INSERT INTO `blog_overviews` VALUES (2,'Hello Sri Lanka','Gimhan Hashintha','hello.png','2024.06.30'),(3,'xcfzxc','','/uploads/1719836924560-IMG-20240625-WA0005.jpg','zxczx'),(4,'','','/uploads/1719836981196-IMG-20240625-WA0008.jpg','');
/*!40000 ALTER TABLE `blog_overviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `nID` int(11) NOT NULL AUTO_INCREMENT,
  `cName` varchar(100) NOT NULL,
  `cPhoneNumber` int(20) NOT NULL,
  `cEmail` varchar(100) NOT NULL,
  `cNumOfMembers` int(11) DEFAULT 0,
  `cNumOfChilds` int(11) DEFAULT 0,
  `cNew` varchar(45) DEFAULT NULL,
  `cChkInDate` date DEFAULT NULL,
  `cChkOutDate` date DEFAULT NULL,
  `cAccommodation` varchar(45) DEFAULT NULL,
  `cPkgName` varchar(100) DEFAULT NULL,
  `cMessage` varchar(500) DEFAULT NULL,
  `nTrnStatus` int(1) DEFAULT 0,
  `nBookingNo` char(7) DEFAULT '0000000',
  PRIMARY KEY (`nID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (4,'ssd',0,'',0,0,NULL,NULL,NULL,NULL,NULL,NULL,1,'0000000'),(5,'sdsd',0,'',0,0,NULL,NULL,NULL,NULL,NULL,NULL,1,'0000000'),(6,'Gimhan',0,'gimhan@email.com',5,2,'hello','2002-03-11','2003-04-11','hotel','bronze','hi',1,'0000001'),(7,'Gimhan',0,'gimhan@email.com',5,2,'hello','2002-03-11','2003-04-11','hotel','bronze','hi',1,'0000002'),(8,'Gimhan',753286645,'gimhan@email.com',5,2,'hello','2002-03-11','2003-04-11','hotel','bronze','hi',1,'0000003'),(9,'Gimhan Hashintha',753286645,'tharu.gimhan00@gmail.com',5,2,'Hi','2024-06-30','2024-07-02','Kabana','Wild Life Tour','I need to travel to Jungle',1,'0000004'),(10,'Nexo Raiden',753286645,'tharu.gimhan00@gmail.com',14,2,'sadasd','2024-06-20','2024-07-06','Forest_Camping','Family Trip To Sri Lanka','asdasd',1,'0000005'),(11,'Nexo Raiden',753286645,'zenoxtic@gmail.com',14,2,'sadasd','2024-07-03','2024-08-01','Small_Trailer','Best Of Sri Lanka','sadasda',0,'0000006'),(12,'Gimhan',753286645,'tharu.gimhan00@gmail.com',14,2,'sadasd','2024-07-18','2024-08-08','Small_Trailer','Family Trip To Sri Lanka','sadas',0,'0000007'),(13,'Nexo Raiden',753286645,'tharu.gimhan01@gmail.com',14,3,'sadasd','2024-07-04','2024-08-01','Forest_Camping','Family Trip To Sri Lanka','sadasd',0,'0000008');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `nCommentID` int(11) NOT NULL AUTO_INCREMENT,
  `cParentCmntID` int(11) NOT NULL,
  `cComment` varchar(200) NOT NULL,
  `cCmntSenderName` varchar(40) NOT NULL,
  `cDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`nCommentID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member_profiles`
--

DROP TABLE IF EXISTS `member_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member_profiles` (
  `nID` int(11) NOT NULL AUTO_INCREMENT,
  `cName` varchar(100) NOT NULL,
  `cPosition` varchar(100) NOT NULL,
  `cImageUrl` varchar(255) NOT NULL,
  `cFacebookLink` varchar(255) DEFAULT NULL,
  `cTwitterLink` varchar(255) DEFAULT NULL,
  `cLinkedinLlink` varchar(255) DEFAULT NULL,
  `cWhatsappNo` varchar(255) DEFAULT NULL,
  `cEducation` varchar(255) DEFAULT NULL,
  `cLocation` varchar(255) DEFAULT NULL,
  `cSkills` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_profiles`
--

LOCK TABLES `member_profiles` WRITE;
/*!40000 ALTER TABLE `member_profiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `member_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sidebar_images`
--

DROP TABLE IF EXISTS `sidebar_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sidebar_images` (
  `nID` int(11) NOT NULL AUTO_INCREMENT,
  `cImgName` varchar(45) NOT NULL,
  `cImgUrl` varchar(255) NOT NULL,
  PRIMARY KEY (`nID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sidebar_images`
--

LOCK TABLES `sidebar_images` WRITE;
/*!40000 ALTER TABLE `sidebar_images` DISABLE KEYS */;
INSERT INTO `sidebar_images` VALUES (2,'Gimhan Hashintha','/uploads/1719839106170-monkey.png'),(3,'Gimhan Hashintha','/uploads/1719839679455-elephant.png'),(4,'Gimhan Hashintha','/uploads/1719839687731-fort.png'),(5,'Gimhan Hashintha','/uploads/1719839697576-ninearch.png'),(6,'Gimhan Hashintha','/uploads/1719839706141-sripadaya.png'),(7,'Gimhan Hashintha','/uploads/1719839713210-waterfall.png');
/*!40000 ALTER TABLE `sidebar_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_members`
--

DROP TABLE IF EXISTS `team_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_members` (
  `nID` int(11) NOT NULL AUTO_INCREMENT,
  `cName` varchar(100) NOT NULL,
  `cPosition` varchar(100) NOT NULL,
  `cFacebookLink` varchar(255) DEFAULT NULL,
  `cTwitterLink` varchar(255) DEFAULT NULL,
  `cLinkedinLink` varchar(255) DEFAULT NULL,
  `cWhatsappNo` varchar(255) DEFAULT NULL,
  `cImageUrl` varchar(255) NOT NULL,
  PRIMARY KEY (`nID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_members`
--

LOCK TABLES `team_members` WRITE;
/*!40000 ALTER TABLE `team_members` DISABLE KEYS */;
INSERT INTO `team_members` VALUES (29,'Gimhan Hashintha','Owner','fb','x','link','whstap','/uploads/1719693909434-download (5)-modified.png'),(30,'Nexo Raiden','Co-Owner','fb','x','link','whstap','/uploads/1719694299851-Artist Creates Life-Size Crochet Skeleton Complete With Organs.jpg');
/*!40000 ALTER TABLE `team_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `nUserID` int(11) NOT NULL AUTO_INCREMENT,
  `cUsername` varchar(45) NOT NULL,
  `cPassword` varchar(150) NOT NULL,
  `nStatus` tinyint(1) NOT NULL,
  PRIMARY KEY (`nUserID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'comelanka_nodedb'
--

--
-- Dumping routines for database 'comelanka_nodedb'
--
/*!50003 DROP PROCEDURE IF EXISTS `c_blogDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_blogDetails`(
    IN pageNum INT,
    IN postNum INT
)
BEGIN
      DECLARE offsetValue INT DEFAULT 0;
      SET offsetValue = (pageNum - 1) * postNum;
    SELECT
        nID, cTitile, cAuthor, cImageUrl, cPostDate,
        cfstPara, cSecPara, cTrdPara, cSecTitle, cSecFstPara, cSecSecPara
    FROM
        blog_details
    ORDER BY
        nID ASC
    LIMIT postNum OFFSET offsetValue;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_delComments` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_delComments`(
  IN delCmnt_ID INT
)
BEGIN 
    DELETE FROM comments WHERE nCommentID = delCmnt_ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_deleteBlogOverviews` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_deleteBlogOverviews`(
IN  del_ID INT
)
BEGIN
DELETE  FROM blog_overviews WHERE nID = del_ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_deleteMembers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_deleteMembers`(
	IN delete_id INT
 )
BEGIN
    DELETE FROM team_members WHERE nID = delete_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_inserSidebarImages` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_inserSidebarImages`(
   IN v_cImgName VARCHAR(45),
   IN v_cImgUrl VARCHAR(255)
)
BEGIN
   INSERT INTO sidebar_images( cImgName, cImgUrl)
   VALUES(v_cImgName, v_cImgUrl);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_insertBlogsOverview` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_insertBlogsOverview`(
   IN v_cTitile VARCHAR(255),
   IN v_cAuthor VARCHAR(255),
   IN v_cPostDate VARCHAR(255),
   IN v_cImageUrl VARCHAR(255)
)
BEGIN
 INSERT INTO blog_overviews (cTitile, cAuthor, cPostDate, cImageUrl)
  VALUES(v_cTitile, v_cAuthor, v_cPostDate, v_cImageUrl);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_insertBookings` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_insertBookings`(
     IN v_cName VARCHAR(100),
     IN v_cPhoneNumber INT(20),
     IN v_cEmail VARCHAR(100),
     IN v_cNumOfMembers INT(11),
     IN v_cNumOfChilds INT(11),
     IN v_cNew VARCHAR(45),
     IN v_cChkInDate DATE,
     IN v_cChkOutDate DATE,
     IN v_cAccommodation VARCHAR(45),
     IN v_cPkgName VARCHAR(100),
     IN v_cMessage VARCHAR(500)

)
BEGIN

         DECLARE v_cBookingID CHAR(7);
         SELECT MAX(nBookingNo) INTO v_cBookingID FROM bookings;
         
         IF v_cBookingID IS NULL OR v_cBookingID="000000" THEN
                    SET v_cBookingID=LPAD(1,7,'000000');
         ELSE     
					SET v_cBookingID=LPAD(v_cBookingID+1,7,'000000');
         END IF; 
         
         INSERT INTO bookings( cName, cPhoneNumber, cEmail, cNumOfMembers, cNumOfChilds, cNew, cChkInDate, cChkOutDate, cAccommodation, cPkgName, cMessage, nBookingNo)
         Values( v_cName, v_cPhoneNumber, v_cEmail, v_cNumOfMembers, v_cNumOfChilds, v_cNew, v_cChkInDate, v_cChkOutDate, v_cAccommodation, v_cPkgName, v_cMessage, v_cBookingID);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_insertMembers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_insertMembers`(
   IN v_cName VARCHAR(100),
   IN v_cPosition VARCHAR(100),
   IN v_cFacebookLink VARCHAR(255),
   IN v_cTwitterLink VARCHAR(255),
   IN v_cLinkedinLink VARCHAR(255),
   IN v_cWhatsappNo VARCHAR(255),
      IN v_cImageUrl VARCHAR(255)
)
BEGIN
 INSERT INTO team_members (cName, cPosition, cFacebookLink, cTwitterLink, cLinkedinLink, cWhatsappNo, cImageUrl)
  VALUES(v_cName, v_cPosition, v_cFacebookLink, v_cTwitterLink, v_cLinkedinLink, v_cWhatsappNo, v_cImageUrl);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_manageBookings` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_manageBookings`()
BEGIN
    SELECT * FROM bookings;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_selectBlogsCount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_selectBlogsCount`()
BEGIN
SELECT COUNT(nID) AS blogs  FROM blog_overviews;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_selectBlogsOverviewDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_selectBlogsOverviewDetails`()
BEGIN
SELECT * FROM blog_overviews;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_selectBookingsCount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_selectBookingsCount`()
BEGIN
SELECT COUNT(nID) AS bookings  FROM bookings;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_selectComments` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_selectComments`()
BEGIN
    SELECT * From comments;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_selectCommentsCount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_selectCommentsCount`()
BEGIN
SELECT COUNT(nCommentID) AS comments  FROM  comments;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_selectTeamMemberCount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_selectTeamMemberCount`()
BEGIN
SELECT COUNT(nID) AS Members  FROM team_members;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_selectTeamMembers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_selectTeamMembers`()
BEGIN
SELECT   cName, cPosition, cFacebookLink, cTwitterLink, cLinkedinLlink, cWhatsappNo, cImageUrl FROM  team_members;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_selectTeamMembersDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_selectTeamMembersDetails`()
BEGIN
SELECT  nID, cName, cPosition, cFacebookLink, cTwitterLink, cLinkedinLink, cWhatsappNo, cImageUrl FROM  team_members;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_selectTeamMembersDetailsById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_selectTeamMembersDetailsById`(
IN v_id INT
)
BEGIN
SELECT  * FROM  team_members WHERE nID = v_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_sideBarImages` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_sideBarImages`()
BEGIN
  SELECT * FROM sidebar_images;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `c_updateBookingStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `c_updateBookingStatus`(
    IN update_nID INT(11),
    IN v_nTrnStatus INT(1)
)
BEGIN
     UPDATE bookings
     SET nTrnStatus = v_nTrnStatus
     WHERE nID = update_nID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-01 19:44:38
