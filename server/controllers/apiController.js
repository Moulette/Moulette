import express from "express";
import fetch from "node-fetch";

const apiController = {};

const API_KEY = "61d58e1f"; // OMDB API key

apiController.getMovieById = async (req, res, next) => {
  try {
    console.log("Inside apiController.getMoviesById");
    const { id } = req.params;

    const movieResponse = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`,
    );
    const movieData = await movieResponse.json();
    res.locals.movieData = movieData;
    return next();
  } catch (err) {
    return next(err);
  }
};

apiController.loggingMiddleware = (req, res, next) => {
  console.log("Were inside the logging middleware");
  return next();
};

export default apiController;
