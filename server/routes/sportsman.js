'use strict';
const express = require('express');
const router = express.Router();

const SportsmanModel = require('../models/SportsmanModel');

router.get('/', (req, res) => {
    SportsmanModel.find({}, (err, sportspeople) => {
        console.log('callback running');
        if (err) {
            console.log('there was an error');
            res.send('return all sportspeople aa');
        }
        console.log('sportspeople are');
        console.log(sportspeople)
        res.send('return all sportspeople');
    });
});

router.get('/:id', (req, res) => {
    SportsmanModel.findById(req.params.id, (err, sportsman) => {
        console.log('sportsman:');
        console.log(sportsman);
        res.send(`return sportsperson with id = ${req.params.id}`);
    });
});

router.post('/', (req, res) => {
    const sportsman = new SportsmanModel({
        ...req.body,
        // TODO: password: hashed_password 
    });
    console.log('sportsman');
    console.log(sportsman);
    res.send('add sportsman');
});

router.put('/:id', (req, res) => {
    res.send(`edit sportsman with id = ${req.params.id}`);
    // SportsmanModel.findById(req.params.id, (err, sportsman) => {

    // });

    SportsmanModel.findOneAndUpdate({'_id': req.params.id}, req.body);
});

router.get('/:id/sports', (req, res) => {
    res.send(`Get all the sports of sportsman with id = ${req.params.id}`);
});

module.exports = router;