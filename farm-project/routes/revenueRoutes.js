const express = require('express');
const { createRevenue } = require('../controllers/revenueController');

const router = express.Router();

router.post('/', createRevenue);

module.exports = router;
