require('dotenv').config();
const express = require('express');
const body_parser = require("body-parser");
const app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }))

app.use(express.static('src/public'));
app.post('/api/get_file', (req, res) => {
    if (req.body.password === process.env.PASSWORD) {
        res.sendFile(__dirname + '/public/secret.zip');
    } else {
        res.status(401).send('Wrong password');
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});
