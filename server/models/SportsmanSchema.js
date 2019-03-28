'use strict';

const mongoose = require('mongoose');

const SportsmanSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    cpf: {
        type: String,
        unique: true
    },
    sports: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sport'
    }]
});

module.exports = SportsmanSchema;