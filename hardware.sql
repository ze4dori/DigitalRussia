CREATE TABLE HardwareClasses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE HardwareSubclasses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hardware_class_id INT,
    name VARCHAR(255) NOT NULL,
    FOREIGN KEY (hardware_class_id) REFERENCES HardwareClasses(id)
);

CREATE TABLE CompanyHardware (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_id INT,
    subclass_id INT,
    FOREIGN KEY (company_id) REFERENCES Companies(id),
    FOREIGN KEY (subclass_id) REFERENCES HardwareSubclasses(id)
);