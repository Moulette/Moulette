// server/controllers/listController.js
const pool = require('../db');

const listController = {
  getAllWishListedMovies: async (req, res, next) => {
    try {
      const result = await pool.query('SELECT * FROM want_to_watch');
      return res.status(200).json(result.rows);
    } catch (error) {
      return next(error);
    }
  },

  getAllWatchedMovies: async (req, res, next) => {
    try {
      const result = await pool.query('SELECT * FROM watched');
      return res.status(200).json(result.rows);
    } catch (error) {
      return next(error);
    }
  },

  addMovieToWantToWatch: async (req, res, next) => {
    const { userId, movieId } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO want_to_watch (user_id, movie_id) VALUES ($1, $2)',
        [userId, movieId]
      );
      return res.status(201).json({ message: 'Movie added to want-to-watch list.' });
    } catch (error) {
      return next(error);
    }
  }
};

module.exports = listController;