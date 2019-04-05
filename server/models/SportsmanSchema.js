'use strict';

const mongoose = require('mongoose');

const SportsmanSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    cpf: {
        type: String,
        unique: true,
        required: true
    },
    sports: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sport'
    }],
    birthDate: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    }
});

module.exports = SportsmanSchema;