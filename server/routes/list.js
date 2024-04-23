// routes/list.js
const express = require('express');
const listController = require('../controllers/listController');
const router = express.Router();

router.get('/wishlist', listController.getAllWishListedMovies);
router.get('/watched', listController.getAllWatchedMovies);
router.post('/wishlist', listController.addMovieToWantToWatch);

module.exports = router;