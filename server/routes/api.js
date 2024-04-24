// routes/api.js
import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

const API_KEY = '61d58e1f'; // Your OMDB API key

// New route for fetching movie data by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const movieResponse = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    const movieData = await movieResponse.json();

    res.json(movieData);  // Directly return the JSON data from OMDB API
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching movie data.' });
  }
});

export default router;
