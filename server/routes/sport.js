'use strict';
const express = require('express');
const router = express.Router();

const SportModel = require('../models/SportModel');

router.get('/', (req, res) => {
    // get all sports
    const sportName = req.query.sportName; // filter by name
    res.send(`/sports sportName = ${sportName}`);
});

router.get('/:id', (req, res) => {
    // get sport with id = req.params.id
    res.send(`sport with id = ${req.params.id}`);
});

module.exports = router;