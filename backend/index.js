const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))
const cors = require("cors");

// const corsOptions = {
//     origin: '*',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
// }
// app.use(cors(corsOptions));
app.use(cors());

const registerRoutes = require("./queries");

app.get("/", (req, res) => {
    res.send("App is working!");
});

app.use("/", registerRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});