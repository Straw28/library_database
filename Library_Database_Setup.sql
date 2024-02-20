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
    INDEX (barcode),
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
    INDEX (barcode),
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
	INDEX (barcode),
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
    INDEX (barcode),
    creation_date DATE,
    -- author identifies
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE laptops (
    laptop_id INT PRIMARY KEY,
    laptop_name VARCHAR(50),
    make VARCHAR(100),
    model VARCHAR(100),
    location VARCHAR(20),
    operating_system VARCHAR(100),
    laptop_storage VARCHAR(100),
    ram VARCHAR(100),
    last_maintenance DATE,
    network_connectivity BOOLEAN,
    item_status VARCHAR(100),
    access VARCHAR(20),
    vendor_information VARCHAR(100),
    installed_software VARCHAR(100),
    laptop_security VARCHAR(100),
    reservation_id VARCHAR(100) DEFAULT NULL,
    num_checkouts SMALLINT,
    barcode VARCHAR(12),
    INDEX (barcode)
);

CREATE TABLE tablets (
    tablet_id INT PRIMARY KEY,
    tablet_name VARCHAR(50),
    make VARCHAR(100),
    model VARCHAR(100),
    location VARCHAR(20),
    operating_system VARCHAR(100),
    tablet_storage VARCHAR(100),
    ram VARCHAR(100),
    last_maintenance DATE,
    network_connectivity BOOLEAN,
    item_status VARCHAR(100),
    access VARCHAR(20),
    vendor_information VARCHAR(100),
    installed_software VARCHAR(100),
    tablet_security VARCHAR(100),
    reservation_id VARCHAR(100) DEFAULT NULL,
    num_checkouts SMALLINT,
    barcode VARCHAR(12),
    INDEX (barcode)
);

CREATE TABLE chargers (
    charger_id INT PRIMARY KEY,
    charger_name VARCHAR(50),
    charger_type VARCHAR(100),
    vendor_information VARCHAR(100),
    reservation_id VARCHAR(100) DEFAULT NULL,
    num_checkouts SMALLINT,
    barcode VARCHAR(12),
    INDEX (barcode)
);


-- devices that can be used 
CREATE TABLE printers (
	printer_id INT PRIMARY KEY,
    printer_name VARCHAR(100),
    location VARCHAR(20),
    printer_type VARCHAR(100),
    printer_status VARCHAR(100),
    vendor_information VARCHAR(100),
    number_print_jobs SMALLINT,
    features VARCHAR(100),
    barcode VARCHAR(12),
    network_connectivity BOOLEAN
);

CREATE TABLE computers (
    computer_id INT PRIMARY KEY,
    computer_name VARCHAR(50),
    make VARCHAR(100),
    model VARCHAR(100),
    location VARCHAR(20),
    operating_system VARCHAR(100),
    computer_storage VARCHAR(100),
    ram VARCHAR(100),
    last_maintenance DATE,
    network_connectivity BOOLEAN,
    computer_status VARCHAR(100),
    access VARCHAR(20),
    vendor_information VARCHAR(100),
    installed_software VARCHAR(100),
    computer_security VARCHAR(100)
);


-- users of the library
CREATE TABLE members (
    member_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    address VARCHAR(255),
    email_address VARCHAR(100),
    phone_number VARCHAR(15),
    date_of_birth DATE,
    member_type VARCHAR(20),
    member_status VARCHAR(20),
    registration_date DATE,
    expiration_date DATE,
    borrowing_history TEXT,
    requests TEXT,
    library_card_number VARCHAR(20),
    fine_id INT
);

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    address VARCHAR(255),
    email_address VARCHAR(100),
    phone_number VARCHAR(15),
    date_of_birth DATE,
    ssn VARCHAR(9),
    employee_role VARCHAR(50),
    department VARCHAR(50),
    hire_date DATE,
    employee_status VARCHAR(20),
    supervisor INT,
    salary DECIMAL(10, 2),
    direct_deposit_routing_number INT
);


-- reservation entity 
CREATE TABLE reservations (
    reservation_id INT PRIMARY KEY,
    member_id INT,
    item_type VARCHAR(20),  -- Indicates the type of item (book, ebook, dvd, etc.)
    item_barcode VARCHAR(12) DEFAULT NULL,  -- Barcode for items that have one
    reservation_date DATETIME,
    item_status VARCHAR(100),
    pickup_deadline DATETIME,
    notification_preference VARCHAR(20),
    duration DECIMAL,
    FOREIGN KEY (member_id) REFERENCES members(member_id),
    FOREIGN KEY (item_barcode) REFERENCES books(barcode),
    FOREIGN KEY (item_barcode) REFERENCES ebooks(barcode),
    FOREIGN KEY (item_barcode) REFERENCES dvds(barcode),
    FOREIGN KEY (item_barcode) REFERENCES records(barcode),
    FOREIGN KEY (item_barcode) REFERENCES laptops(barcode),
    FOREIGN KEY (item_barcode) REFERENCES tablets(barcode),
    FOREIGN KEY (item_barcode) REFERENCES chargers(barcode)
);


-- monetary entities
CREATE TABLE donations (
    donation_id INT PRIMARY KEY,
	first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone_number VARCHAR(15),
    donation_type VARCHAR(100),
    summary TEXT,
    tax_deductible BOOLEAN,
    tax_receipt VARCHAR(20),
    amount DECIMAL(10, 2)
);

CREATE TABLE acquisitions (
    acquisition_id INT PRIMARY KEY,
    purchase_order_number BIGINT,
    vendor_name VARCHAR(50),
    invoice_number BIGINT,
    acquisition_date DATE,
    acquisition_type VARCHAR(100),
    amount DECIMAL(10, 2),
    created_by VARCHAR(100)
);

CREATE TABLE fines (
    fine_id INT PRIMARY KEY,
    member_id INT,
    item_type VARCHAR(20),  -- Indicates the type of item (book, ebook, dvd, etc.)
    item_barcode VARCHAR(12) DEFAULT NULL,  -- Barcode for items that have one
    ibsn VARCHAR(13),
    dropoff_deadline DATETIME,
    notification_preference VARCHAR(20),
    amount INT,
    fine_type VARCHAR(20),
    fine_status VARCHAR(20),
    payment_date DATETIME,
    payment_amount DECIMAL(10, 2),
    FOREIGN KEY (member_id) REFERENCES members(member_id),
    FOREIGN KEY (item_barcode) REFERENCES books(barcode),
    FOREIGN KEY (item_barcode) REFERENCES ebooks(barcode),
    FOREIGN KEY (item_barcode) REFERENCES dvds(barcode),
    FOREIGN KEY (item_barcode) REFERENCES records(barcode),
    FOREIGN KEY (item_barcode) REFERENCES laptops(barcode),
    FOREIGN KEY (item_barcode) REFERENCES tablets(barcode),
    FOREIGN KEY (item_barcode) REFERENCES chargers(barcode)
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
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_book FOREIGN KEY (item_barcode) REFERENCES books(barcode);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_ebook FOREIGN KEY (item_barcode) REFERENCES ebooks(barcode);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_dvd FOREIGN KEY (item_barcode) REFERENCES dvds(barcode);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_record FOREIGN KEY (item_barcode) REFERENCES records(barcode);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_laptop FOREIGN KEY (item_barcode) REFERENCES laptops(barcode);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_tablet FOREIGN KEY (item_barcode) REFERENCES tablets(barcode);
ALTER TABLE reservations ADD CONSTRAINT fk_reservations_charger FOREIGN KEY (item_barcode) REFERENCES chargers(barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_member FOREIGN KEY (member_id) REFERENCES members(member_id);
ALTER TABLE fines ADD CONSTRAINT fk_fines_book FOREIGN KEY (item_barcode) REFERENCES books(barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_ebook FOREIGN KEY (item_barcode) REFERENCES ebooks(barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_dvd FOREIGN KEY (item_barcode) REFERENCES dvds(barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_record FOREIGN KEY (item_barcode) REFERENCES records(barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_laptop FOREIGN KEY (item_barcode) REFERENCES laptops(barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_tablet FOREIGN KEY (item_barcode) REFERENCES tablets(barcode);
ALTER TABLE fines ADD CONSTRAINT fk_fines_charger FOREIGN KEY (item_barcode) REFERENCES chargers(barcode);

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