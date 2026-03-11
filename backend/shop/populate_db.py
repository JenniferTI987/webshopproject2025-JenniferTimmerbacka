import sqlite3

conn = sqlite3.connect('example.db')
c = conn.cursor()

# Create a table
c.execute('''CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)''')

# Insert some data
c.execute("INSERT INTO users (name) VALUES ('Alice')")
c.execute("INSERT INTO users (name) VALUES ('Bob')")

conn.commit()
conn.close()
print("Database populated!")
