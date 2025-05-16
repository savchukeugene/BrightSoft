CREATE TABLE landing_pages (
        id SERIAL PRIMARY KEY,
        name TEXT,
        author TEXT,
        created_at DATE,
        updated_at DATE,
        url TEXT
    )