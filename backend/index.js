const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
const db = require('./queries');


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get("/", (req, res) => {
    res.send("App is working!");
})

app.get('/products', db.getUsers)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});