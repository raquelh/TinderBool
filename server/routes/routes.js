const express = require('express');
const router = express.Router();

const sportsmanRouter = require('./sportsman');
const sportRouter = require('./sport');

router.use('/sportsman', sportsmanRouter);
router.use('/sport', sportRouter);

module.exports = router;