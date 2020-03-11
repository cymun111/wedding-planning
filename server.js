const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nodemailer = require('nodemailer');


const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.use(express.static(path.resolve('./client')));

const api = require('./routes/api');
app.use('/api', api)

app.use((req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'));
});


app.listen(port, () => console.log(`Server started on port ${port}`));
