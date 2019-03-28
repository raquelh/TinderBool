'use strict';

const mongoose = require('mongoose');

const SportsmanSchema = require('./SportsmanSchema');

const SportsmanModel = mongoose.model('Sportsman', SportsmanSchema);

module.exports = SportsmanModel;