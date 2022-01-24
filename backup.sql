-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (arm64)
--
-- Host: localhost    Database: cryptid_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'cryptid'),(2,'paranormal'),(3,'ufo'),(4,'other');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_tag`
--

DROP TABLE IF EXISTS `post_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_id` int DEFAULT NULL,
  `tag_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_tag_tagId_postId_unique` (`post_id`,`tag_id`),
  KEY `tag_id` (`tag_id`),
  CONSTRAINT `post_tag_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `post_tag_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_tag`
--

LOCK TABLES `post_tag` WRITE;
/*!40000 ALTER TABLE `post_tag` DISABLE KEYS */;
INSERT INTO `post_tag` VALUES (1,1,6),(2,1,7),(3,1,8),(5,2,1),(6,2,3),(4,2,6),(7,3,4),(8,3,5),(9,3,9);
/*!40000 ALTER TABLE `post_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `report` text,
  `description` text,
  `location` varchar(255) DEFAULT NULL,
  `time_seen` datetime DEFAULT NULL,
  `time_filed` datetime NOT NULL,
  `category_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'I found myself in the woods late at night last Thursday. I heard a weird noise that sounded like a mix between a cat and a whale. I\'m pretty sure it was the mothman because now I have pinkeye...','noise that sounded like a mix between a cat and a whale','Dallas','2021-01-12 08:45:00','2021-01-15 20:42:57',1,2),(2,'No one can convince me that my great-uncle is anything other than the reincarnation of Dracula. He hates garlic and he never crosses the threshold of a home. He also never leaves his own home, but that\'s only coincedental.','he\'s my great-uncle, so, like, old?','Alaska',NULL,'2020-11-05 17:16:32',1,1),(3,'I saw a golumn-like creature under the Zakim Bridge last night. It asked me for change for the bus, but I\'m pretty sure it was going to use it on drugs.','golumn-like creature','Boston','2019-04-23 20:37:00','2019-04-23 10:35:03',1,3),(4,'A bog body was discovered last week in the bog near my gran\'s house. It looks a lot to me like a classic reptillian. They found it when they were mining for pete in the highlands. Pete the moss, not the person...','tall, lizard-like. long fingernails. ugly','Glasgow','2021-08-12 16:30:00','2021-08-17 19:42:57',4,3),(5,'My family home is being haunted by some douche bag that looks like Popeye. I can hear him talking about spinach every night while we eat dinner. It\'s disgusting. I\'ve always been more of a kale person myself.','bald, short, with one bum eye. Always holding an unlit pipe in his mouth','New Orleans',NULL,'2021-01-15 20:42:57',2,3),(6,'I know this sounds crazy, but I was abducted. Everything is different now. I can\'t focus on anything and I keep seeing this owl following me everywhere. It all started a few months ago after I was experiencing this very extreme insomnia. The owl first appeared to me and then I blacked out. When I woke up, I was on a lab table and there were these two figures standing above me. I couldn\'t make sense of the noise they were making but I remember their big, glassy eyes and skinny heads.','yellow skin, small head, big black eyes','Mystic, Connecticut','2021-08-15 04:48:29','2021-11-30 18:22:00',3,1),(7,'My librarian is definitely with the Men in Black. I don\'t know if this counts as a cryptid or as an alien, but she seems more of the Will Smith MIB persuasion than the other kind.','small frame, BIG glasses','Bath, Maine',NULL,'2021-12-07 15:25:42',3,2),(8,'I met this guy this one time who said he went camping and Bigfoot shook his tent to keep him up all night. He said it smelled like a swamp and must have been at least 8 ft tall to be able to reach the top of his tent.','tall, hairy, stinky. Ape-like hands','Dallas','2021-01-12 08:45:00','2021-01-15 20:42:57',1,3),(9,'not sure if this is the right spot to post this, but there\'s something weird with my bootcamp instructors. One of them is constantly mountain biking and the other one is just named \'Bobby\'. That\'s weird, right?','web developers. it\'s terrible.','University of New Hampshire',NULL,'2021-09-06 23:20:00',4,3),(10,'The ice cream man in my neighborhood is a rascal. Always getting kids worked up and playing his music too loud. If I had my way, there wouldn\'t be music! or ice cream. \nMan I\'m sad.','cheery, colorful, pistachio-flavored','Phippsburg, Maine','2022-01-02 16:00:00','2022-01-06 19:10:52',4,4),(15,'There is a thing that watches my apartment from the tree line. I only ever see it during snow storms, but it\'s been a cold winter so I\'ve seen it a lot recently. Its eyes glow blue and it has a spikey crown growing from its head. I keep feeling like it\'s going to turn me into one of them.','White, walks upright, glowing blue eyes','Bath, ME','2021-12-20 05:22:00','2022-01-07 14:21:37',1,4);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
INSERT INTO `Sessions` VALUES ('_EK_vaUKjhHRzlVZTCwKqyBuk18m4rLp','2022-01-25 15:36:06','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-01-04 17:04:01','2022-01-24 15:36:06');
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'screech'),(2,'woods'),(3,'mothman'),(4,'vampire'),(5,'garlic'),(6,'golumn'),(7,'boston'),(8,'walkinhere'),(9,'lochness'),(10,'alien'),(11,'ghost');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_post`
--

DROP TABLE IF EXISTS `user_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `post_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_post_userId_postId_unique` (`user_id`,`post_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `user_post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_post_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_post`
--

LOCK TABLES `user_post` WRITE;
/*!40000 ALTER TABLE `user_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `creatures` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'neckbeard54',NULL,NULL),(2,'sasquatchbeliever',NULL,NULL),(3,'badsmells297',NULL,NULL),(4,'emlabonte714','','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-24 11:19:29
