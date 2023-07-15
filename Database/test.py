import sqlite3
import bcrypt


conn = sqlite3.connect("user.db")

conn.executescript(
"""
CREATE TABLE Data (
    "Type"  TEXT,
    "Content"   TEXT
);

INSERT INTO Data (Type, Content) VALUES ("Salt_Rounds", "12");
INSERT INTO Data ()
""")
cur = conn.cursor()

username = "Roger"
cur.execute("SELECT * FROM Person Where userName = ?", [username])
data = cur.fetchall()[0]

plain_password = data[2].encode()
hash_password = data[3]

output= bcrypt.checkpw(plain_password, hash_password)
print(output)


cur.close()
