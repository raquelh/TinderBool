'use strict';
const express = require('express');
const router = express.Router();

const SportModel = require('../models/SportModel');

router.get('/', (req, res) => {
    // get all sports
    const sportName = req.query.sportName; // filter by name

    SportModel.find({sportName: new RegExp(sportName, "i")}, (err, modelRes) => {
        if (err) {
            console.log('could not find sport');
            res.status(400).send();
        } else {
            console.log('found sport', modelRes);
            res.send(modelRes);
        }
    });
});

router.get('/:id', (req, res) => {
    // get sport with id = req.params.id
    // res.send(`sport with id = ${req.params.id}`);

    SportModel.findById(req.params.id, (err, modelRes) => {
        if (err) {
            console.log('could not find sport with id', req.params.id);
            res.status(404).send();
        } else {
            console.log('found ', modelRes);
            res.send(modelRes);
        }
    });
});

module.exports = router;