DROP DATABASE IF EXISTS Library_Database;
CREATE DATABASE Library_Database;
USE Library_Database;

-- parent table for items
CREATE TABLE items (
    item_id INT AUTO_INCREMENT UNIQUE,
    item_type VARCHAR(20) NOT NULL, -- This column specifies the type of item (book, ebook, dvd, etc.)
    barcode INT NOT NULL UNIQUE,
    creation_date DATE,
    item_status ENUM('available', 'checked out', 'on hold'),
    location VARCHAR(20),
    reservation_id VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (item_id)
);

-- iteams that can be checked out
-- Child table for books
CREATE TABLE books (
    book_id INT AUTO_INCREMENT UNIQUE,
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
		ON DELETE SET NULL ON UPDATE CASCADE
);

-- Child table for ebooks
CREATE TABLE ebooks (
    ebook_id INT AUTO_INCREMENT UNIQUE,
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
		ON DELETE SET NULL ON UPDATE CASCADE
);

-- Child table for DVDs
CREATE TABLE dvds (
    dvd_id INT AUTO_INCREMENT UNIQUE,
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
		ON DELETE SET NULL ON UPDATE CASCADE
);

-- Child table for records
CREATE TABLE records (
    record_id INT AUTO_INCREMENT UNIQUE,
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
		ON DELETE SET NULL ON UPDATE CASCADE
);

-- Child table for laptops
CREATE TABLE laptops (
    laptop_id INT AUTO_INCREMENT UNIQUE,
    item_id INT,
    PRIMARY KEY (laptop_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
		ON DELETE SET NULL ON UPDATE CASCADE
);

-- Child table for tablets
CREATE TABLE tablets (
    tablet_id INT AUTO_INCREMENT UNIQUE,
    item_id INT,
    PRIMARY KEY (tablet_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
		ON DELETE SET NULL ON UPDATE CASCADE
);

-- Child table for chargers
CREATE TABLE chargers (
    charger_id INT AUTO_INCREMENT UNIQUE,
    item_id INT,
    PRIMARY KEY (charger_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
		ON DELETE SET NULL ON UPDATE CASCADE
);



-- devices that can be used 
CREATE TABLE printers (
	printer_id INT AUTO_INCREMENT UNIQUE,
	printer_name VARCHAR(100),
    printer_status ENUM('active', 'inactive'),
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
	computer_id INT AUTO_INCREMENT UNIQUE,
	computer_name VARCHAR(50),
	computer_security VARCHAR(100),
    computer_status ENUM('active', 'inactive'),
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
	member_id INT AUTO_INCREMENT UNIQUE,
    library_card_number VARCHAR(20) UNIQUE,
    member_status ENUM('active', 'inactive'),
	member_type ENUM('regular'),
    first_name VARCHAR(50),
	last_name VARCHAR(50),
    email_address VARCHAR(100) UNIQUE,
    phone_number VARCHAR(15),
    address VARCHAR(255),
	date_of_birth DATE,
    item_borrowing_history TEXT,
    device_borrowing_history TEXT,
	registration_date DATE,
    expiration_date DATE,
	requests TEXT,
    fine_id INT,
    password VARCHAR(255),
    PRIMARY KEY (member_id)
);

CREATE TABLE employees (
	employee_id INT AUTO_INCREMENT UNIQUE,
	employee_role VARCHAR(50),
	employee_status ENUM('active', 'inactive'),
    first_name VARCHAR(50),
	last_name VARCHAR(50),
    email_address VARCHAR(100),
	phone_number VARCHAR(15),
	address VARCHAR(255),
	date_of_birth DATE,
    ssn VARCHAR(9) UNIQUE,
    hourly_pay DECIMAL(3, 2),
    salary DECIMAL(10, 2),
	direct_deposit_routing_number INT UNIQUE	,
    hire_date DATE,
    department VARCHAR(50),
	supervisor INT,
    PRIMARY KEY (employee_id)
);


-- reservation entity
CREATE TABLE reservations (
    reservation_id INT AUTO_INCREMENT,
    item_id INT,
    item_type VARCHAR(20),  -- Indicates the type of item (book, ebook, dvd, etc.)
    member_id INT NOT NULL,
    employee_id INT,
    notification_preference VARCHAR(20),
    pickup_deadline DATETIME,
    reservation_date DATETIME,
    duration DECIMAL,
    item_status ENUM('available', 'unavailable', 'on hold'),
	PRIMARY KEY (reservation_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
		ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (member_id) REFERENCES members(member_id)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
		ON DELETE SET NULL ON UPDATE CASCADE
);


-- monetary entities
CREATE TABLE donations (
	donation_id INT AUTO_INCREMENT,
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
	acquisition_id INT AUTO_INCREMENT,
	acquisition_type VARCHAR(100),
	acquisition_date DATE,
	amount DECIMAL(10, 2),
	employee_id INT,
	invoice_number BIGINT,
	purchase_order_number BIGINT,
	vendor_name VARCHAR(50),
    PRIMARY KEY (acquisition_id),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
		ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE fines (
    fine_id INT AUTO_INCREMENT,
    item_id INT,
    item_type VARCHAR(20),  -- Indicates the type of item (book, ebook, dvd, etc.)
    member_id INT NOT NULL,
    employee_id INT,
    notification_preference VARCHAR(20),
    dropoff_deadline DATETIME,
    amount INT,
    fine_type VARCHAR(20),
    fine_status ENUM('active', 'no fines'),
    payment_date DATETIME,
    payment_amount DECIMAL(10, 2),
    PRIMARY KEY (fine_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
		ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (member_id) REFERENCES members(member_id)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
		ON DELETE SET NULL ON UPDATE CASCADE
);

-- Relationships
-- N:1 MEMBERS can borrow BOOKS, DVDS, E-BOOKS, RECORDS, LAPTOPS, CHARGERS, TABLETS
ALTER TABLE books ADD CONSTRAINT fk_books_member FOREIGN KEY (item_id) REFERENCES items(item_id);
ALTER TABLE ebooks ADD CONSTRAINT fk_ebooks_member FOREIGN KEY (item_id) REFERENCES items(item_id);
ALTER TABLE dvds ADD CONSTRAINT fk_dvds_member FOREIGN KEY (item_id) REFERENCES items(item_id);
ALTER TABLE records ADD CONSTRAINT fk_records_member FOREIGN KEY (item_id) REFERENCES items(item_id);
ALTER TABLE laptops ADD CONSTRAINT fk_laptops_member FOREIGN KEY (item_id) REFERENCES items(item_id);
ALTER TABLE chargers ADD CONSTRAINT fk_chargers_member FOREIGN KEY (item_id) REFERENCES items(item_id);
ALTER TABLE tablets ADD CONSTRAINT fk_tablets_member FOREIGN KEY (item_id) REFERENCES items(item_id);

-- N:1 MEMBERS can create RESERVATIONS to place items on hold for pickup
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_member FOREIGN KEY (member_id) REFERENCES members(member_id);

-- N:1 MEMBERS can have FINES on overdue materials
ALTER TABLE fines ADD CONSTRAINT fk_fines_member FOREIGN KEY (member_id) REFERENCES members(member_id);

-- N:1 MEMBERS can use PRINTERS and COMPUTERS
ALTER TABLE printers ADD CONSTRAINT fk_printers_member FOREIGN KEY (printer_barcode) REFERENCES items(barcode);
ALTER TABLE computers ADD CONSTRAINT fk_computers_member FOREIGN KEY (computer_id) REFERENCES items(item_id);

-- N:1 EMPLOYEES can manage RESERVATIONS
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_employee FOREIGN KEY (employee_id) REFERENCES employees(employee_id);

-- N:1 EMPLOYEES can make many ACQUISITIONS
ALTER TABLE acquisitions ADD CONSTRAINT fk_acquisitions_employee FOREIGN KEY (employee_id) REFERENCES employees(employee_id);

-- N:1 EMPLOYEES can renew BOOKS, DVDS, E-BOOKS, RECORDS
ALTER TABLE fines ADD CONSTRAINT fk_fines_employee_renew FOREIGN KEY (employee_id) REFERENCES employees(employee_id);

-- N:1 MEMBERS can renew BOOKS, DVDS, E-BOOKS, RECORDS
ALTER TABLE fines ADD CONSTRAINT fk_fines_member_renew FOREIGN KEY (member_id) REFERENCES members(member_id);

-- N:1 EMPLOYEES can check in BOOKS, DVDS, E-BOOKS, RECORDS, LAPTOPS, CHARGERS, TABLETS
ALTER TABLE fines ADD CONSTRAINT fk_fines_employee_checkin FOREIGN KEY (employee_id) REFERENCES employees(employee_id);

-- Additional Constraints
-- An item can’t be checked out if the member has a fine on their record
ALTER TABLE fines ADD CONSTRAINT chk_no_checkout_with_fine CHECK (fine_status = 'active');

-- When an item is held or checked out, then the item can’t be borrowed
ALTER TABLE items ADD CONSTRAINT chk_no_borrow_when_held_or_checked_out CHECK (reservation_id IS NULL AND item_status = 'available');

-- Members can only check out books, dvds, e-books, records, laptops, chargers, and tablets
ALTER TABLE items ADD CONSTRAINT chk_allowed_item_types CHECK (item_type IN ('Book', 'E-Book', 'DVD', 'Record', 'Laptop', 'Charger', 'Tablet'));


-- Library limitations
-- Limit of 5 items borrowed per member
ALTER TABLE members ADD CONSTRAINT chk_max_items_borrowed CHECK (CHAR_LENGTH(item_borrowing_history) < 5);

-- Limit of 1 device per member
ALTER TABLE members ADD CONSTRAINT chk_max_devices_borrowed CHECK (CHAR_LENGTH(device_borrowing_history) < 1);

-- Limit of 1 library card per name & address
ALTER TABLE members ADD CONSTRAINT unique_name_address_library_card UNIQUE (first_name, last_name, address, library_card_number);

-- Non-residents can’t create a membership card
ALTER TABLE members ADD CONSTRAINT chk_non_resident_membership CHECK (member_type != 'Non-Resident');

-- Memberships will expire after 3 years
ALTER TABLE members ADD CONSTRAINT chk_membership_expiration CHECK (expiration_date <= DATE_ADD(registration_date, INTERVAL 3 YEAR));

-- Triggers
-- Update salary when hourly_pay is updated
CREATE TRIGGER before_hourly_pay_update
BEFORE UPDATE ON employees 
FOR EACH ROW 
SET NEW.salary = (NEW.hourly_pay * 2080);

-- Update salary when a new employee is inserted
CREATE TRIGGER before_hourly_pay_insert
BEFORE INSERT ON employees
FOR EACH ROW
SET NEW.salary = (NEW.hourly_pay * 2080);

-- inserting some starter elements
-- Inserting data into the items table
INSERT INTO items (item_type, barcode, creation_date, item_status, location)
VALUES ('Book', 123456, '2024-02-26', 'available', 'Shelf A');

-- Inserting data into the books table
INSERT INTO books (book_id, item_id, title, author, author_id, call_number, genre, isbn, publisher)
VALUES (1, 1, 'The Great Gatsby', 'F. Scott Fitzgerald', 101, 'C123', 'Fiction', '9781234567890', 'Scribner');
