const express = require('express');
const router = express.Router();
const sportsmanRouter = require('./sportsman');

router.use('/sportsman', sportsmanRouter);

module.exports = router;