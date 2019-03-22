'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('return all sportspeople');
});

router.get('/:id', (req, res) => {
    res.send(`return sportsperson with id = ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send('add sportsman');
});

router.put('/:id', (req, res) => {
    res.send(`edit sportsman with id = ${req.params.id}`);
});

module.exports = router;