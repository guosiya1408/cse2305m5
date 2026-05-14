const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

/* Middleware */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Serve Static Files */
app.use(express.static(__dirname));

/* Open index.html */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

/* Form Submission */
app.post("/submit", (req, res) => {

    console.log("Form Submitted:");
    console.log(req.body);

    res.send(`
        <h1>Form Submitted Successfully!</h1>
        <a href="/">Go Back</a>
    `);

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});