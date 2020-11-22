CREATE TABLE IF NOT EXISTS notifications(
   notification_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name varchar(50) NOT NULL,
   details text
);
