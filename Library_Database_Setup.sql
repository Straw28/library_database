DROP DATABASE IF EXISTS Library_Database;
CREATE DATABASE Library_Database;
USE Library_Database;


-- create library tables
CREATE TABLE authors( 
	author_id INT PRIMARY KEY,
    author_name VARCHAR(100)
);

-- iteams that can be checked out
CREATE TABLE books (
	author VARCHAR(100),
	author_id INT, -- author identifies
	b_barcode INT NOT NULL,
	call_number VARCHAR(20),
	creation_date DATE,
	genre VARCHAR(20),
	isbn VARCHAR(13),
	item_status ENUM('available', 'unavailable'),
	location VARCHAR(20),
	publisher VARCHAR(100),
	reservation_id VARCHAR(100) DEFAULT NULL,
	title VARCHAR(100),
    -- bool flag for mature or not
    PRIMARY KEY(b_barcode),
	FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE ebooks (
	author VARCHAR(100),
	author_id INT, -- author identifies
	eb_barcode INT NOT NULL,
	call_number VARCHAR(20),
	creation_date DATE,
	genre VARCHAR(20),
	isbn VARCHAR(13),
	item_status ENUM('available', 'unavailable'),
	location VARCHAR(20),
	publisher VARCHAR(100),
	reservation_id VARCHAR(100) DEFAULT NULL,
	title VARCHAR(100),
    PRIMARY KEY(eb_barcode),
	FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE dvds (
	author VARCHAR(100),
	author_id INT, -- author identifies
	dvd_barcode INT NOT NULL,
	call_number VARCHAR(20),
	creation_date DATE,
	genre VARCHAR(20),
	isbn VARCHAR(13),
	item_status VARCHAR(100),
	location VARCHAR(20),
	publisher VARCHAR(100),
	reservation_id VARCHAR(100) DEFAULT NULL,
	title VARCHAR(100),
    PRIMARY KEY(dvd_barcode),
	FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE records (
	author VARCHAR(100),
	author_id INT, -- author identifies
	r_barcode INT NOT NULL,
	call_number VARCHAR(20),
	creation_date DATE,
	genre VARCHAR(20),
	isbn VARCHAR(13),
	item_status VARCHAR(100),
	location VARCHAR(20),
	publisher VARCHAR(100),
	reservation_id VARCHAR(100) DEFAULT NULL,
	title VARCHAR(100),
    PRIMARY KEY(r_barcode),
	FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE laptops (
	access VARCHAR(20),
	l_barcode INT NOT NULL,
	installed_software VARCHAR(100),
	item_status VARCHAR(100),
	laptop_id INT,
	laptop_name VARCHAR(50),
	laptop_security VARCHAR(100),
	laptop_storage VARCHAR(100),
	last_maintenance DATE,
	location VARCHAR(20),
	make VARCHAR(100),
	model VARCHAR(100),
	network_connectivity BOOLEAN,
	num_checkouts SMALLINT,
	operating_system VARCHAR(100),
	ram VARCHAR(100),
	reservation_id VARCHAR(100) DEFAULT NULL,
	vendor_information VARCHAR(100),
    PRIMARY KEY(l_barcode)

);

CREATE TABLE tablets (
	access VARCHAR(20),
	t_barcode INT NOT NULL,
	installed_software VARCHAR(100),
	item_status VARCHAR(100),
	last_maintenance DATE,
	location VARCHAR(20),
	make VARCHAR(100),
	model VARCHAR(100),
	network_connectivity BOOLEAN,
	num_checkouts SMALLINT,
	operating_system VARCHAR(100),
	ram VARCHAR(100),
	reservation_id VARCHAR(100) DEFAULT NULL,
	tablet_id INT,
	tablet_name VARCHAR(50),
	tablet_security VARCHAR(100),
	tablet_storage VARCHAR(100),
	vendor_information VARCHAR(100),
    PRIMARY KEY(t_barcode)

);

CREATE TABLE chargers (
	charge_barcode INT NOT NULL,
	charger_id INT,
	charger_name VARCHAR(50),
	charger_type VARCHAR(100),
	num_checkouts SMALLINT,
	reservation_id VARCHAR(100) DEFAULT NULL,
	vendor_information VARCHAR(100),
    PRIMARY KEY(charge_barcode)

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
	duration DECIMAL,
	item_barcode INT NOT NULL,
	item_status VARCHAR(100),
	item_type VARCHAR(20),
	member_id INT,
	notification_preference VARCHAR(20),
	pickup_deadline DATETIME,
	reservation_date DATETIME,
	reservation_id INT PRIMARY KEY,

    FOREIGN KEY (member_id) REFERENCES members(member_id),
    FOREIGN KEY (item_barcode) REFERENCES books(b_barcode),
    FOREIGN KEY (item_barcode) REFERENCES ebooks(eb_barcode),
    FOREIGN KEY (item_barcode) REFERENCES dvds(dvd_barcode),
    FOREIGN KEY (item_barcode) REFERENCES records(r_barcode),
    FOREIGN KEY (item_barcode) REFERENCES laptops(l_barcode),
    FOREIGN KEY (item_barcode) REFERENCES tablets(t_barcode),
    FOREIGN KEY (item_barcode) REFERENCES chargers(charge_barcode)
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
	amount INT,
	dropoff_deadline DATETIME,
	fine_id INT PRIMARY KEY,
	fine_status VARCHAR(20),
	fine_type VARCHAR(20),
	ibsn VARCHAR(13),
	item_barcode INT NOT NULL,
	item_type VARCHAR(20),
	member_id INT,
	notification_preference VARCHAR(20),
	payment_amount DECIMAL(10, 2),
	payment_date DATETIME,

    FOREIGN KEY (member_id) REFERENCES members(member_id),
    FOREIGN KEY (item_barcode) REFERENCES books(b_barcode),
    FOREIGN KEY (item_barcode) REFERENCES ebooks(eb_barcode),
    FOREIGN KEY (item_barcode) REFERENCES dvds(dvd_barcode),
    FOREIGN KEY (item_barcode) REFERENCES records(r_barcode),
    FOREIGN KEY (item_barcode) REFERENCES laptops(l_barcode),
    FOREIGN KEY (item_barcode) REFERENCES tablets(t_barcode),
    FOREIGN KEY (item_barcode) REFERENCES chargers(charge_barcode)
);

-- add library constraints
-- unique constraints
ALTER TABLE authors ADD CONSTRAINT unique_author_id UNIQUE (author_id);
ALTER TABLE books ADD CONSTRAINT unique_isbn UNIQUE (isbn);
ALTER TABLE ebooks ADD CONSTRAINT unique_isbn UNIQUE (isbn);
ALTER TABLE dvds ADD CONSTRAINT unique_isbn UNIQUE (isbn);
ALTER TABLE records ADD CONSTRAINT unique_isbn UNIQUE (isbn);
ALTER TABLE laptops ADD CONSTRAINT unique_laptop_id UNIQUE (laptop_id);
ALTER TABLE tablets ADD CONSTRAINT unique_tablet_id UNIQUE (tablet_id);
ALTER TABLE chargers ADD CONSTRAINT unique_charger_id UNIQUE (charger_id);
ALTER TABLE printers ADD CONSTRAINT unique_printer_id UNIQUE (printer_id);
ALTER TABLE computers ADD CONSTRAINT unique_computer_id UNIQUE (computer_id);
ALTER TABLE reservations ADD CONSTRAINT unique_reservation_id UNIQUE (reservation_id);
ALTER TABLE members ADD CONSTRAINT unique_member_id UNIQUE (member_id);
ALTER TABLE employees ADD CONSTRAINT unique_employee_id UNIQUE (employee_id);
ALTER TABLE donations ADD CONSTRAINT unique_donation_id UNIQUE (donation_id);
ALTER TABLE acquisitions ADD CONSTRAINT unique_acquisition_id UNIQUE (acquisition_id);
ALTER TABLE fines ADD CONSTRAINT unique_fine_id UNIQUE (fine_id);

-- foreign key constraints
ALTER TABLE books ADD CONSTRAINT fk_books_author FOREIGN KEY (author_id) REFERENCES authors(author_id);
ALTER TABLE ebooks ADD CONSTRAINT fk_ebooks_author FOREIGN KEY (author_id) REFERENCES authors(author_id);
ALTER TABLE dvds ADD CONSTRAINT fk_dvds_author FOREIGN KEY (author_id) REFERENCES authors(author_id);
ALTER TABLE records ADD CONSTRAINT fk_records_author FOREIGN KEY (author_id) REFERENCES authors(author_id);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_member FOREIGN KEY (member_id) REFERENCES members(member_id);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_book FOREIGN KEY (item_barcode) REFERENCES books(b_barcode);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_ebook FOREIGN KEY (item_barcode) REFERENCES ebooks(eb_barcode);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_dvd FOREIGN KEY (item_barcode) REFERENCES dvds(dvd_barcode);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_record FOREIGN KEY (item_barcode) REFERENCES records(r_barcode);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_laptop FOREIGN KEY (item_barcode) REFERENCES laptops(l_barcode);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_tablet FOREIGN KEY (item_barcode) REFERENCES tablets(t_barcode);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_charger FOREIGN KEY (item_barcode) REFERENCES chargers(charge_barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_member FOREIGN KEY (member_id) REFERENCES members(member_id);
ALTER TABLE fines ADD CONSTRAINT fk_fines_book FOREIGN KEY (item_barcode) REFERENCES books(b_barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_ebook FOREIGN KEY (item_barcode) REFERENCES ebooks(eb_barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_dvd FOREIGN KEY (item_barcode) REFERENCES dvds(dvd_barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_record FOREIGN KEY (item_barcode) REFERENCES records(r_barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_laptop FOREIGN KEY (item_barcode) REFERENCES laptops(l_barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_tablet FOREIGN KEY (item_barcode) REFERENCES tablets(t_barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_charger FOREIGN KEY (item_barcode) REFERENCES chargers(charge_barcode);

-- Check constraints
ALTER TABLE reservations ADD CONSTRAINT chk_reservation_duration CHECK (duration >= 0);
ALTER TABLE members ADD CONSTRAINT chk_member_borrow_limit CHECK (borrowing_history IS NULL OR CHAR_LENGTH(borrowing_history) < 5);
ALTER TABLE members ADD CONSTRAINT chk_member_device_limit CHECK (
    (library_card_number IS NOT NULL AND member_type = 'resident') OR
    (library_card_number IS NULL AND member_type != 'resident')
);

-- Age threshold for mature books
SET @mature_book_age_threshold = 18;

DELIMITER //
CREATE TRIGGER before_insert_books
BEFORE INSERT ON books
FOR EACH ROW
BEGIN
    DECLARE author_dob DATE;
    SET author_dob = (SELECT date_of_birth FROM members WHERE member_id = NEW.author_id);

    IF NEW.title LIKE '%mature%' AND DATEDIFF(NOW(), author_dob) <= (@mature_book_age_threshold * 365) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot insert book. Member is not old enough to access mature content.';
    END IF;
END;
//
DELIMITER ;
-- if a held book becomes available
/*
CREATE TRIGGER hold_pick_up_is_ready AFTER UPDATE ON reservations FOR EACH ROW
BEGIN
    IF OLD.item_status <> new.item_status THEN

    END IF;
END$$

DELIMITER ;

*/
-- check for memebership
DELIMITER //
CREATE TRIGGER before_insert_members
BEFORE INSERT ON members
FOR EACH ROW
BEGIN
    IF DATEDIFF(NEW.registration_date, NOW()) > 1095 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot insert member. Membership expiration exceeds the allowed duration.';
    END IF;
END;
//
DELIMITER ;