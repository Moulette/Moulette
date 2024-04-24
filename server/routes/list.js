// routes/list.js
import express from 'express';
import { getAllWishListedMovies, getAllWatchedMovies, addMovieToWantToWatch } from '../controllers/listController';
const router = express.Router();

router.get('/wishlist', getAllWishListedMovies);
router.get('/watched', getAllWatchedMovies);
router.post('/wishlist', addMovieToWantToWatch);

export default router;