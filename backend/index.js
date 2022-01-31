const express = require('express');
const cors = require('cors');
const router = require('./router');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded());

router.set(app);

app.listen(3000, () => {
    console.log("Listening");
});