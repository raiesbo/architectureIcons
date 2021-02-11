const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/routes');
const cors = require('cors');
require("dotenv").config({ path: __dirname + '/.env' });


const app = express();



mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(err))


const corsOptions = {
    origin: "https://architectureicons.com",
    optionsSuccessStatus: 200
}


app.use(express.json()); // body-parser from express
app.use(cors());
app.use(userRoutes);

app.get('/', (req, res) => res.send("architectureIcons server"));

















app.listen(process.env.PORT || 5000)