import sqlite3

# Connect to database file (creates it if it doesn't exist)
conn = sqlite3.connect("river_project.db")
cursor = conn.cursor()

# 1. Transactions Ledger (Stores points awarded from ANY form)
cursor.execute("""
CREATE TABLE IF NOT EXISTS point_transactions (
    transaction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    submission_id TEXT UNIQUE,
    user_id TEXT NOT NULL,
    form_source TEXT NOT NULL,  -- 'Form_1_Observation' or 'Form_2_AI'
    base_points INTEGER NOT NULL,
    optional_points INTEGER NOT NULL,
    total_earned INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
""")

# 2. View to automatically aggregate points per user across all forms
cursor.execute("""
CREATE VIEW IF NOT EXISTS user_point_totals AS
SELECT 
    user_id,
    SUM(total_earned) AS total_points,
    COUNT(transaction_id) AS total_submissions
FROM point_transactions
GROUP BY user_id;
""")

conn.commit()
conn.close()
print("Database and tables initialized successfully!")