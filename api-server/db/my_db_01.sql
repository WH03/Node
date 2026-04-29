CREATE DATABASE  IF NOT EXISTS `my_db_01` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `my_db_01`;
-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: my_db_01
-- ------------------------------------------------------
-- Server version	8.0.43

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
-- Table structure for table `ev_article_cate`
--

DROP TABLE IF EXISTS `ev_article_cate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_article_cate` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `alias` varchar(45) NOT NULL,
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0表示数据没有被删除；\n1表示数据已经被删除了\n',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `alias_UNIQUE` (`alias`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='文章分类数据表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_article_cate`
--

LOCK TABLES `ev_article_cate` WRITE;
/*!40000 ALTER TABLE `ev_article_cate` DISABLE KEYS */;
INSERT INTO `ev_article_cate` VALUES (1,'科技','KeJi',1),(2,'历史','LiShi',1),(3,'新闻','xinwen',0);
/*!40000 ALTER TABLE `ev_article_cate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ev_articles`
--

DROP TABLE IF EXISTS `ev_articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_articles` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `cover_img` varchar(255) NOT NULL,
  `pub_date` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0表示没有被删除\n1表示已经被删除了',
  `cate_id` int NOT NULL,
  `author_id` int NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='文章表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_articles`
--

LOCK TABLES `ev_articles` WRITE;
/*!40000 ALTER TABLE `ev_articles` DISABLE KEYS */;
/*!40000 ALTER TABLE `ev_articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ev_users`
--

DROP TABLE IF EXISTS `ev_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `nickname` varchar(255) DEFAULT '' COMMENT '昵称',
  `email` varchar(255) DEFAULT '' COMMENT '邮箱',
  `user_pic` text COMMENT '头像',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COMMENT='用户数据表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_users`
--

LOCK TABLES `ev_users` WRITE;
/*!40000 ALTER TABLE `ev_users` DISABLE KEYS */;
INSERT INTO `ev_users` VALUES (1,'admin','000000','','',NULL),(2,'zs','$2a$10$DAgISnUpwL2jeW8VgKDFmuMgN/19pDfUzfkINnD/aBB.bGS37rDmW','2','aa@qq.com',NULL),(3,'admin1','$2a$10$8kSzmRzCOmvLsZJ93CNSTOrb.3ExKN3NV0Ke6Ujp7y3kChU8oQJ5S','','','data:image/png;base64,VE9PTUFOWVNFQ1JFVFM='),(4,'admin2','aaaaaa','','',NULL);
/*!40000 ALTER TABLE `ev_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL COMMENT '用户登录名',
  `password` varchar(45) NOT NULL COMMENT '用户登录密码',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '用户状态，是一个布尔值\n0表示用户状态正常\n1表示用户被禁用',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'zs','123456',0),(2,'ls','admin123',1),(3,'xh','654321',0),(4,'tony stark','888888',0),(6,'aaaa1','0000',1);
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

-- Dump completed on 2026-04-29 17:10:41
