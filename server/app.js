const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;
const onTapLogin = require("./one-tap-signin");
var bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.post("/api/one-tap-authentication",onTapLogin.OneTapLogin)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))