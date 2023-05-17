import sqlite3
import random
import string

def gen_password(length):
    letter = string.ascii_letters + string.digits
    result_str = ''.join(random.choice(letter) for i in range(length))
    return result_str


def gen_email(name):
    domain = ["gmail.com", "yahoo.com", "aol.com", "outlook.com", "icloud.com"]
    return (name + "@" + random.choice(domain))


def gen_personality():
    output = ""
    letters = [["F", "E"], ["L", "V"], ["T", "N"], ["C", "U"]]

    for letter in letters:
        output += random.choice(letter)
    return output


conn = sqlite3.connect("user.db")
cur = conn.cursor()

with open("names.txt", "r") as f:

    for line in f.readlines():
        line = line.split("\t")

        name = line[1].strip()
        password = gen_password(random.randint(6,10))
        email = gen_email(name)
        personality = gen_personality()
        records = name, password, email, personality
        query = "INSERT INTO \"Person\" (userName, password, email, personality) VALUES (?, ?, ?, ?)"
        #print(query, records)
        cur.execute(query, records)
        conn.commit()

conn.close()






