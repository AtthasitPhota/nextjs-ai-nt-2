CREATE TABLE IF NOT EXISTS `customers` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `name` VARCHAR(255),
  `address` VARCHAR(500),
  `phone` VARCHAR(20),
  PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `orders` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `date` DATETIME,
  `customer_id` INT,
  `status` ENUM('delivered','received','processing'),
  `total_amount` DOUBLE,
  PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `order_items` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `order_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `price` DOUBLE NOT NULL,
  PRIMARY KEY(`id`)
);
