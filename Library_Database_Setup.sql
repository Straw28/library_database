DROP DATABASE IF EXISTS Library_Database;
CREATE DATABASE Library_Database;
USE Library_Database;

CREATE TABLE books (
	isbn VARCHAR(13) PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    publisher VARCHAR(100),
    genre VARCHAR(20),
    location VARCHAR(20),
    call_number VARCHAR(20),
    item_status VARCHAR(100),
    reservation_id VARCHAR(100) DEFAULT NULL,
    barcode VARCHAR(12),
    creation_date DATE,
    -- author identifies
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE ebooks (
	isbn VARCHAR(13) PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    publisher VARCHAR(100),
    genre VARCHAR(20),
    location VARCHAR(20),
    call_number VARCHAR(20),
    item_status VARCHAR(100),
    reservation_id VARCHAR(100) DEFAULT NULL,
    barcode VARCHAR(12),
    creation_date DATE,
    -- author identifies
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE dvds (
	isbn VARCHAR(13) PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    publisher VARCHAR(100),
    genre VARCHAR(20),
    location VARCHAR(20),
    call_number VARCHAR(20),
    item_status VARCHAR(100),
	reservation_id VARCHAR(100) DEFAULT NULL,
    barcode VARCHAR(12),
    creation_date DATE,
    -- author identifies
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE records (
	isbn VARCHAR(13) PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    publisher VARCHAR(100),
    genre VARCHAR(20),
    location VARCHAR(20),
    call_number VARCHAR(20),
    item_status VARCHAR(100),
    reservation_id VARCHAR(100) DEFAULT NULL,
    barcode VARCHAR(12),
    creation_date DATE,
    -- author identifies
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);


CREATE TABLE authors( 
	author_id INT PRIMARY KEY,
    author_name VARCHAR(100)
);
