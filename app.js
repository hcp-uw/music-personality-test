
// These are something you don't have to worry about, just make sure they are there.
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const sqlite = require("sqlite");
const multer = require("multer");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none())


// This is an example of an "end point" for the backend we are building.
// '/' means that just going to "localhost:5000" will output this endpoint.
// (req, res) is a shorthand (request, response), technically the two arguments can be anything like (a, b) but
// we tend to use (req, res) for clarity.
//
// Request: What we received. for example, the website could give us a username and password which a user typed in.
// These "things" the website gives us will be in JSON format.
//
// Response: What we give back to the website. For example, If we continue the request example, we would connect to a
// database in this end point and see if the user name and password a user has provided to the website is valid or not.
// Then if it is valid, we would "respond" to the website and say that the credentials are correct.
//
// Res Status: These are the "status" of the end point. This is where things like error 404 comes from.
// Since status 404 is "Not Found". There are a lot of status but we can keep with the basics and generally will
// only use 200, some 400s, and 500.
// To learn more, https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//
// Res Send: Actual content to send back to website. It can be anything: bool, string, or JSON.
//
// Res End: It means we are done with this end point. We shouldn't interact with the website after writing this.
//---------------------------------------------
app.get('/', (req, res) => {
    resp = {
        "message": "Sam has set up this end point, HELLOOO",
    }
    res.status(200);
    res.send(resp)
    res.end();
});
//---------------------------------------------


// This is another example of an "end point".
// You can connect to this end point by going to "localhost:5000/person/ANY_NAME"
// For example I can do "localhost:5000/person/sam" or "localhost:5000/person/ben".
// The :name inside the get method is saying that :name is a parameter and can be access from the
// request parameter like I did on line 45.
//---------------------------------------------
app.get('/person/:name', async (req, res) => {
    let query = "SELECT * FROM Person WHERE userName = ?";
    let output = await queryDB(query, req.params.name);
    res.send(output);
});
//---------------------------------------------

app.get('/thing/:name', (req, res) => {
    let name = req.params.name;
    res.send(name);
})

// This is another example of an "end point".
// You can connect to this end point by going to "localhost:5000/error"
// The page will say "This localhost page can’t be found" and give you a "HTTP ERROR 404"
//---------------------------------------------
app.get('/error', (req, res) => {
    res.status(404);
    res.end();
});
//---------------------------------------------

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


// Set up the port number to process.evnv.Port or to 5000 (since we didn't give it process.env.PORT, it defaults to 5000).
// For more information, https://stackoverflow.com/questions/1946193/whats-the-whole-point-of-localhost-hosts-and-ports-at-all
const PORT = process.env.PORT || 5000;

// This part actually starts the "server" (only accessible on your computer for now!)
// and tells you which port to listen, in most cases, port 5000.
app.listen(PORT,console.log(
    `Server started on port ${PORT}`));