const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))

const registerRoutes = require("./queries");

app.get("/", (req, res) => {
    res.send("App is working!");
});

app.use("/", registerRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});