import sqlite3  # Import SQLite library

# Step 1: Connect to database (creates it if not exists)
conn = sqlite3.connect('database.db')
cursor = conn.cursor()

# Step 2: Drop old table (only if making changes to structure)
cursor.execute("DROP TABLE IF EXISTS legal_info")

# Step 3: Create a new table with columns for documents and links
cursor.execute('''
    CREATE TABLE legal_info (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        doc_link TEXT,  -- File path for PDF or document
        article_url TEXT  -- External link to an official website
    )
''')

# Step 4: Insert sample legal information into the database
cursor.execute("INSERT INTO legal_info (title, description, doc_link, article_url) VALUES (?, ?, ?, ?)", 
               ("Free Legal Aid in Karnataka", 
                "Learn about free legal aid services provided by KSLSA.",
                "static/docs/legal_aid_guide.pdf",
                "https://kslsa.kar.nic.in"))

cursor.execute("INSERT INTO legal_info (title, description, doc_link, article_url) VALUES (?, ?, ?, ?)", 
               ("Women's Rights in Karnataka", 
                "Detailed information on legal rights for women in Karnataka.",
                "static/docs/womens_rights.pdf",
                "https://ncw.nic.in"))

# Step 5: Save changes and close connection
conn.commit()
conn.close()

print("Database updated successfully!")
