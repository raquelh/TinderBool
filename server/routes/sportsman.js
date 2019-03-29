'use strict';
const express = require('express');
const router = express.Router();

const SportsmanModel = require('../models/SportsmanModel');

router.get('/', (req, res) => {
    SportsmanModel.find((err, sportspeople) => {
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
        
    });
    res.send('add sportsman');
});

router.put('/:id', (req, res) => {
    res.send(`edit sportsman with id = ${req.params.id}`);
});

router.get('/:id/sports', (req, res) => {
    res.send(`Get all the sports of sportsman with id = ${req.params.id}`);
});

module.exports = router;