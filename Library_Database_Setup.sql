DROP DATABASE IF EXISTS Library_Database;
CREATE DATABASE Library_Database;
USE Library_Database;

-- parent table for items
CREATE TABLE items (
    item_id INT AUTO_INCREMENT UNIQUE,
    item_type VARCHAR(20) NOT NULL, -- This column specifies the type of item (book, ebook, dvd, etc.)
    barcode INT NOT NULL UNIQUE,
    creation_date DATE,
    item_status VARCHAR(100),
    location VARCHAR(20),
    reservation_id VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (item_id)
);

-- iteams that can be checked out
-- Child table for books
CREATE TABLE books (
    book_id INT UNIQUE,
    item_id INT,
    title VARCHAR(100),
    author VARCHAR(100),
    author_id INT,
    call_number VARCHAR(20) UNIQUE,
    genre VARCHAR(20),
    isbn VARCHAR(13) UNIQUE,
    publisher VARCHAR(100),
    PRIMARY KEY (book_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Child table for ebooks
CREATE TABLE ebooks (
    ebook_id INT UNIQUE,
    item_id INT,
	title VARCHAR(100),
    author VARCHAR(100),
    author_id INT,
    call_number VARCHAR(20) UNIQUE,
    genre VARCHAR(20),
    isbn VARCHAR(13) UNIQUE,
    publisher VARCHAR(100),
    PRIMARY KEY (ebook_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Child table for DVDs
CREATE TABLE dvds (
    dvd_id INT UNIQUE,
    item_id INT,
    title VARCHAR(100),
    author VARCHAR(100),
    author_id INT,
    call_number VARCHAR(20) UNIQUE,
    genre VARCHAR(20),
    isbn VARCHAR(13) UNIQUE,
    publisher VARCHAR(100),
    PRIMARY KEY (dvd_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Child table for records
CREATE TABLE records (
    record_id INT UNIQUE,
    item_id INT,
    title VARCHAR(100),
    author VARCHAR(100),
    author_id INT,
    call_number VARCHAR(20) UNIQUE,
    genre VARCHAR(20),
    isbn VARCHAR(13) UNIQUE,
    publisher VARCHAR(100),
    PRIMARY KEY (record_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Child table for laptops
CREATE TABLE laptops (
    laptop_id INT UNIQUE,
    item_id INT,
    PRIMARY KEY (laptop_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Child table for tablets
CREATE TABLE tablets (
    tablet_id INT UNIQUE,
    item_id INT,
    PRIMARY KEY (tablet_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Child table for chargers
CREATE TABLE chargers (
    charger_id INT UNIQUE,
    item_id INT,
    PRIMARY KEY (charger_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);



-- devices that can be used 
CREATE TABLE printers (
	printer_id INT UNIQUE,
	printer_name VARCHAR(100),
	printer_status VARCHAR(100),
	printer_type VARCHAR(100),
	printer_barcode INT NOT NULL UNIQUE,
	features VARCHAR(100),
	location VARCHAR(20),
	network_connectivity BOOLEAN,
	number_print_jobs SMALLINT,
	vendor_information VARCHAR(100),
	PRIMARY KEY (printer_id)
);

CREATE TABLE computers (
	computer_id INT UNIQUE,
	computer_name VARCHAR(50),
	computer_security VARCHAR(100),
	computer_status VARCHAR(100),
	computer_storage VARCHAR(100),
	access VARCHAR(20),
	installed_software VARCHAR(100),
	last_maintenance DATE,
	location VARCHAR(20),
	make VARCHAR(100),
	model VARCHAR(100),
	network_connectivity BOOLEAN,
	operating_system VARCHAR(100),
	ram VARCHAR(100),
	vendor_information VARCHAR(100),
    PRIMARY KEY (computer_id)
);


-- users of the library
CREATE TABLE members (
	member_id INT UNIQUE,
    library_card_number VARCHAR(20) UNIQUE,
	member_status VARCHAR(20),
	member_type VARCHAR(20),
    first_name VARCHAR(50),
	last_name VARCHAR(50),
    email_address VARCHAR(100),
    phone_number VARCHAR(15),
    address VARCHAR(255),
	date_of_birth DATE,
    borrowing_history TEXT,
	registration_date DATE,
    expiration_date DATE,
	requests TEXT,
    fine_id INT,
    PRIMARY KEY (member_id)
);

CREATE TABLE employees (
	employee_id INT UNIQUE,
	employee_role VARCHAR(50),
	employee_status VARCHAR(20),
    first_name VARCHAR(50),
	last_name VARCHAR(50),
    email_address VARCHAR(100),
	phone_number VARCHAR(15),
	address VARCHAR(255),
	date_of_birth DATE,
    ssn VARCHAR(9) UNIQUE,
    salary DECIMAL(10, 2),
	direct_deposit_routing_number INT UNIQUE	,
    hire_date DATE,
    department VARCHAR(50),
	supervisor INT,
    PRIMARY KEY (employee_id)
);


-- reservation entity
CREATE TABLE reservations (
    reservation_id INT,
    item_id INT NOT NULL,
    item_type VARCHAR(20),  -- Indicates the type of item (book, ebook, dvd, etc.)
    member_id INT NOT NULL,
    notification_preference VARCHAR(20),
    pickup_deadline DATETIME,
    reservation_date DATETIME,
    duration DECIMAL,
    item_status VARCHAR(100),
	PRIMARY KEY (reservation_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id),
    FOREIGN KEY (member_id) REFERENCES members(member_id)
);


-- monetary entities
CREATE TABLE donations (
	donation_id INT,
	donation_type VARCHAR(100),
	amount DECIMAL(10, 2),
    first_name VARCHAR(50),
	last_name VARCHAR(50),
	email_address VARCHAR(100),
	phone_number VARCHAR(15),
	summary TEXT,
	tax_deductible BOOLEAN,
	tax_receipt VARCHAR(20),
	PRIMARY KEY (donation_id)
);

CREATE TABLE acquisitions (
	acquisition_id INT,
	acquisition_type VARCHAR(100),
	acquisition_date DATE,
	amount DECIMAL(10, 2),
	created_by VARCHAR(100),
	invoice_number BIGINT,
	purchase_order_number BIGINT,
	vendor_name VARCHAR(50),
    PRIMARY KEY (acquisition_id)
);

CREATE TABLE fines (
    fine_id INT,
    item_id INT NOT NULL,
    item_type VARCHAR(20),  -- Indicates the type of item (book, ebook, dvd, etc.)
    member_id INT NOT NULL,
    notification_preference VARCHAR(20),
    dropoff_deadline DATETIME,
    amount INT,
    fine_type VARCHAR(20),
    fine_status VARCHAR(20),
    payment_date DATETIME,
    payment_amount DECIMAL(10, 2),
    PRIMARY KEY (fine_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id),
    FOREIGN KEY (member_id) REFERENCES members(member_id)
);


-- add library constraints

-- Check constraints
ALTER TABLE reservations ADD CONSTRAINT chk_reservation_duration CHECK (duration >= 0);
ALTER TABLE members ADD CONSTRAINT chk_member_borrow_limit CHECK (CHAR_LENGTH(borrowing_history) < 5);
ALTER TABLE members ADD CONSTRAINT chk_member_device_limit CHECK (
    (library_card_number IS NOT NULL AND member_type = 'resident') OR
    (library_card_number IS NULL AND member_type != 'resident')
);
