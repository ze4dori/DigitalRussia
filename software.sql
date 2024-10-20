CREATE TABLE SoftwareClasses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE SoftwareSubclasses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    software_class_id INT,
    name VARCHAR(255) NOT NULL,
    FOREIGN KEY (software_class_id) REFERENCES SoftwareClasses(id)
);

CREATE TABLE CompanySoftware (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_id INT,
    subclass_id INT,
    FOREIGN KEY (company_id) REFERENCES Companies(id),
    FOREIGN KEY (subclass_id) REFERENCES SoftwareSubclasses(id)
);