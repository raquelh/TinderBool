'use strict';
const mongoose = require('mongoose');

const SportSchema = require('./SportSchema');

const SportModel = mongoose.model('Sport', SportSchema);

module.exports = SportModel;