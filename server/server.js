'use strict';

const express = require('express');
const app = express();
const router = require('./routes/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dbConnectionString = 'mongodb://127.0.0.1/tinderbool';
mongoose.connect(dbConnectionString, {useNewUrlParser: true});
mongoose.connection.on('error', () => {
    console.log('there was an error connection to mongodb');
});

app.use(bodyParser.json());
app.use('/', router);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen('3000', () => {
    console.log('listening on port 3000');
});