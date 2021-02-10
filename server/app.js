const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/routes');


const app = express();


app.use(userRouter);
app.get('/', (req, res) => res.send("architectureIcons server"));

















app.listen(process.env.PORT || 5000)