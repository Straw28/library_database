DROP DATABASE IF EXISTS Library_Database;
CREATE DATABASE Library_Database;
USE Library_Database;

-- parent table for items
CREATE TABLE items (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    item_type VARCHAR(20) NOT NULL, -- This column specifies the type of item (book, ebook, dvd, etc.)
    title VARCHAR(100),
    author VARCHAR(100),
    author_id INT,
    barcode INT NOT NULL,
    call_number VARCHAR(20),
    creation_date DATE,
    genre VARCHAR(20),
    isbn VARCHAR(13),
    item_status VARCHAR(100),
    location VARCHAR(20),
    publisher VARCHAR(100),
    reservation_id VARCHAR(100) DEFAULT NULL
);

-- iteams that can be checked out
-- Child table for books
CREATE TABLE books (
    book_id INT PRIMARY KEY,
    item_id INT UNIQUE,
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Child table for ebooks
CREATE TABLE ebooks (
    ebook_id INT PRIMARY KEY,
    item_id INT UNIQUE,
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Child table for DVDs
CREATE TABLE dvds (
    dvd_id INT PRIMARY KEY,
    item_id INT UNIQUE,
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Child table for records
CREATE TABLE records (
    record_id INT PRIMARY KEY,
    item_id INT UNIQUE,
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Child table for laptops
CREATE TABLE laptops (
    laptop_id INT PRIMARY KEY,
    item_id INT UNIQUE,
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Child table for tablets
CREATE TABLE tablets (
    tablet_id INT PRIMARY KEY,
    item_id INT UNIQUE,
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Child table for chargers
CREATE TABLE chargers (
    charger_id INT PRIMARY KEY,
    item_id INT UNIQUE,
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);



-- devices that can be used 
CREATE TABLE printers (
	print_barcode INT NOT NULL,
	features VARCHAR(100),
	location VARCHAR(20),
	network_connectivity BOOLEAN,
	number_print_jobs SMALLINT,
	printer_id INT PRIMARY KEY,
	printer_name VARCHAR(100),
	printer_status VARCHAR(100),
	printer_type VARCHAR(100),
	vendor_information VARCHAR(100)

);

CREATE TABLE computers (
	access VARCHAR(20),
	computer_id INT PRIMARY KEY,
	computer_name VARCHAR(50),
	computer_security VARCHAR(100),
	computer_status VARCHAR(100),
	computer_storage VARCHAR(100),
	installed_software VARCHAR(100),
	last_maintenance DATE,
	location VARCHAR(20),
	make VARCHAR(100),
	model VARCHAR(100),
	network_connectivity BOOLEAN,
	operating_system VARCHAR(100),
	ram VARCHAR(100),
	vendor_information VARCHAR(100)
);


-- users of the library
CREATE TABLE members (
	address VARCHAR(255),
	borrowing_history TEXT,
	date_of_birth DATE,
	email_address VARCHAR(100),
	expiration_date DATE,
	fine_id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	library_card_number VARCHAR(20),
	member_id INT PRIMARY KEY,
	member_status VARCHAR(20),
	member_type VARCHAR(20),
	phone_number VARCHAR(15),
	registration_date DATE,
	requests TEXT
	-- keep track of bday
);

CREATE TABLE employees (
	address VARCHAR(255),
	date_of_birth DATE,
	department VARCHAR(50),
	direct_deposit_routing_number INT,
	email_address VARCHAR(100),
	employee_id INT PRIMARY KEY,
	employee_role VARCHAR(50),
	employee_status VARCHAR(20),
	first_name VARCHAR(50),
	hire_date DATE,
	last_name VARCHAR(50),
	phone_number VARCHAR(15),
	salary DECIMAL(10, 2),
	ssn VARCHAR(9),
	supervisor INT

);


-- reservation entity
CREATE TABLE reservations (
    reservation_id INT PRIMARY KEY,
    item_id INT NOT NULL,
    item_type VARCHAR(20),  -- Indicates the type of item (book, ebook, dvd, etc.)
    member_id INT,
    notification_preference VARCHAR(20),
    pickup_deadline DATETIME,
    reservation_date DATETIME,
    duration DECIMAL,
    item_status VARCHAR(100),
    FOREIGN KEY (item_id) REFERENCES items(item_id),
    FOREIGN KEY (member_id) REFERENCES members(member_id)
);


-- monetary entities
CREATE TABLE donations (
	amount DECIMAL(10, 2),
	donation_id INT PRIMARY KEY,
	donation_type VARCHAR(100),
	email VARCHAR(100),
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	phone_number VARCHAR(15),
	summary TEXT,
	tax_deductible BOOLEAN,
	tax_receipt VARCHAR(20)

);

CREATE TABLE acquisitions (
	acquisition_date DATE,
	acquisition_id INT PRIMARY KEY,
	acquisition_type VARCHAR(100),
	amount DECIMAL(10, 2),
	created_by VARCHAR(100),
	invoice_number BIGINT,
	purchase_order_number BIGINT,
	vendor_name VARCHAR(50)

);

CREATE TABLE fines (
    fine_id INT PRIMARY KEY,
    item_id INT NOT NULL,
    item_type VARCHAR(20),  -- Indicates the type of item (book, ebook, dvd, etc.)
    member_id INT,
    notification_preference VARCHAR(20),
    dropoff_deadline DATETIME,
    amount INT,
    fine_type VARCHAR(20),
    fine_status VARCHAR(20),
    payment_date DATETIME,
    payment_amount DECIMAL(10, 2),
    FOREIGN KEY (item_id) REFERENCES items(item_id),
    FOREIGN KEY (member_id) REFERENCES members(member_id)
);
