
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const sqlite = require("sqlite");
const bcrypt = require('bcrypt');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const API_KEY = "ABC";

app.get('/', (req, res) => {
    let resp = "The server is set up correctly";
    res.status(200).send(resp);
});

// FIXME: Currently saving plain_password just to debug. REMOVE LATER
app.post('/register', async (req, res) => {
    let auth_key = req.body.auth_key;
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;

    if (auth_key != API_KEY) {
        res.status(401).send("Incorrect auth key");
        return;
    }

    try {
        let data = await queryDB("SELECT * FROM Person WHERE email = ?", [email]);

        // If the given email already exists in our database
        if (data.length != 0) {
            res.status(409).send("User already exists");
        } else {
            let hash_password = await bcrypt.hash(password, 10);
            queryDB("INSERT INTO Person \
                    (userName, plain_password, hash_password, email) \
                    VALUES (?, ?, ?, ?", [userName, password, hash_password, email]);

            res.status(200).send();
        }
    } catch(e) {
        res.status(500).send();
    }
})

app.post('/login', async (req, res) => {

    // We read the given data from the req
    let auth_key = req.body.auth_key;
    let email = req.body.email;
    let password = req.body.password;

    if (auth_key != API_KEY) {
        res.status(401).send("Incorrect auth key");
        return;
    }

    try {
        let data = await queryDB("SELECT * FROM Person WHERE email = ?", [email]);

        // If the given email does not exist in our database
        if (data.length == 0) {
            res.status(401).send("Invalid login credentials");
            return;
        }

        // We do this because the response from queryDB is in the form of a JSON object inside a list.
        let hash_password = data[0].hash_password;
        let result = await bcrypt.compare(password, hash_password);

        if (result) {
            // Since the data is a JSON object inside a list, we have to have this line to just get the JSON object
            data = data[0];

            // We delete sensative data and return (userName, email, personality) back to the client
            delete data.id;
            delete data.hash_password;
            delete data.plain_password;

            res.status(200).json(data);
        } else {
            res.status(401).send("Invalid login credentials");
        }

    } catch (e) {
        res.status(500).send();
    }

})

app.post('/update', async (req, res) => {

})

// Function to query database with proper async and await
async function queryDB (query, placeholder) {
    let db = await getConn();
    let content = await db.all(query, placeholder);
    await db.close();
    return content;
}

// Function to establish a connection to a database
async function getConn() {
    const db = await sqlite.open({
        filename: "user.db",
        driver: sqlite3.Database
    });

    return db;
}

const PORT = 5000;

// This part actually starts the "server"
// and tells you which port to listen, in our cases, port 5000.
app.listen(PORT,console.log(`Server started on port ${PORT}`));
