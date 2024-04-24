// routes/api.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = '61d58e1f'; // Your OMDB API key

// Existing route for fetching movie data by title
router.get('/:title', async (req, res) => {
  const { title } = req.params;

  try {
    const movieResponse = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`
    );
    const posterResponse = await axios.get(
      `http://img.omdbapi.com/?apikey=${API_KEY}&t=${title}`
    );

    const movieData = movieResponse.data;
    const posterUrl = posterResponse.data.Poster;

    res.json({
      movieData,
      posterUrl,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching movie data.' });
  }
});

// New route for fetching movie data by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const movieResponse = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    const posterResponse = await axios.get(
      `http://img.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );

    const movieData = movieResponse.data;
    const posterUrl = posterResponse.data.Poster;

    res.json({
      movieData,
      posterUrl,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching movie data.' });
  }
});

module.exports = router;
