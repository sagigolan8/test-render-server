const express = require('express');
const router = express.Router();
const { getFood } = require('../controllers/getFood');

router.get('/', (req, res) => res.send('Food api - https://test-render-server.onrender.com/{Some_food}'));

router.get('/:food', getFood);

module.exports = router;
