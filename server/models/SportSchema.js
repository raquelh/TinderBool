'use strict';
const mongoose = require('mongoose');

const SportSchema = new mongoose.Schema({
    sportName: {
        type: String,
        unique: true
    },
    minPeople: {
        type: Number,
        min: 1
    }
});

module.exports = SportSchema;