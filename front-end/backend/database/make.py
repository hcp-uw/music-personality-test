import sqlite3
import random
import string
import bcrypt

def gen_password(length:int):
    letter = string.ascii_letters + string.digits
    result_str = ''.join(random.choice(letter) for i in range(length))
    return result_str


def gen_email(name:str):
    domain = ["gmail.com", "yahoo.com", "aol.com", "outlook.com", "icloud.com"]
    return (name + "@" + random.choice(domain))


def gen_personality():
    output = ""
    letters = [["F", "E"], ["L", "V"], ["T", "N"], ["C", "U"]]

    for letter in letters:
        output += random.choice(letter)
    return output

def encrypt(password:str):
    bytes = password.encode()
    salt = bcrypt.gensalt(rounds=10)
    hash = bcrypt.hashpw(bytes, salt)
    hash = hash.decode()
    return hash




conn = sqlite3.connect("user.db")
cur = conn.cursor()

conn.executescript(
"""
DROP TABLE IF EXISTS Data;

CREATE TABLE Data (
    "Type"  TEXT,
    "Content"   TEXT
);

INSERT INTO Data (Type, Content) VALUES ("Salt_Rounds", "10");
""")

conn.executescript(
"""
DROP TABLE IF EXISTS Person;

CREATE TABLE Person (
	"ID"    INTEGER UNIQUE,
	"userName"    TEXT UNIQUE,
	"plain_password"    TEXT,
    "hash_password"     TEXT,
	"email"    TEXT UNIQUE,
	"personality"    TEXT,
	PRIMARY KEY("ID" AUTOINCREMENT)
);
""")

with open("Database/names.txt", "r") as f:

    for line in f.readlines():
        line = line.split("\t")

        name = line[1].strip()
        password = gen_password(random.randint(6,10))
        hash_pass = encrypt(password)
        email = gen_email(name)
        personality = gen_personality()
        records = name, password, hash_pass, email, personality
        query = "INSERT INTO \"Person\" (userName, plain_password, hash_password, email, personality) VALUES (?, ?, ?, ?, ?)"
        cur.execute(query, records)
        conn.commit()

conn.close()






