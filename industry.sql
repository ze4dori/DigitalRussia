CREATE TABLE CompanyIndustries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_id INTEGER NOT NULL,
    industry TEXT NOT NULL,
    FOREIGN KEY (company_id) REFERENCES Companies(id)
);