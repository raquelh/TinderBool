'use strict';
const express = require('express');
const router = express.Router();

const SportsmanModel = require('../models/SportsmanModel');

router.get('/', (req, res) => {
    SportsmanModel.find({}, (err, sportspeople) => {
        console.log('callback running');
        if (err) {
            console.log('there was an error');
            res.status(404).send();
        } else {
            console.log('sportspeople are');
            console.log(sportspeople)
            res.send(sportspeople);
        }
    });
});

router.get('/:id', (req, res) => {
    SportsmanModel.findById(req.params.id, (err, sportsman) => {
        console.log('sportsman:');
        console.log(sportsman);
        if (err) {
            res.status(404).send();
        } else {
            res.send(sportsman);
        }
    });
});

router.post('/', (req, res) => {
    const sportsman = new SportsmanModel({
        ...req.body,
        // TODO: password: hashed_password 
    });
    console.log(sportsman);
    sportsman.save(err => {
        if (err) {
            console.log('could not save');
            console.log(err);
            res.status(400).send();
        } else {
            console.log('saved successfully');
            res.status(201).send();
        }
    });
});

router.put('/:id', (req, res) => {
    res.send(`edit sportsman with id = ${req.params.id}`);

    SportsmanModel.findOneAndUpdate({'_id': req.params.id}, req.body, (err, doc, updateRes) => {
        if (err) {
            console.log('failed to update');
            res.status(400).send();
        } else {
            console.log('did update');
            res.status(201).send();
        }
    });
});

router.get('/:id/sports', (req, res) => {
    SportsmanModel.findById(req.params.id, (err, sportsman) => {
        if (err) {
            res.status(404).send();
        } else {
            console.log('found', sportsman)
            res.send({"sports": sportsman.sports || []});
        }
    });
});

module.exports = router;