CREATE TABLE CompanyRegistry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_id INTEGER NOT NULL,
    is_in_registry BOOLEAN NOT NULL,
    FOREIGN KEY (company_id) REFERENCES Companies(id)
);

CREATE TABLE AI_CompanyRegistry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_id INTEGER NOT NULL,
    is_specializing_in_ai BOOLEAN NOT NULL,
    FOREIGN KEY (company_id) REFERENCES Companies(id)
);