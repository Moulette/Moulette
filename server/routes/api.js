// routes/api.js
import express from "express";
import fetch from "node-fetch";
import apiController from "../controllers/apiController.js";
const router = express.Router();

console.log(apiController);

// New route for fetching movie data by ID
router.get(
  "/:id",
  apiController.loggingMiddleware,
  apiController.getMovieById,
  (req, res) => {
    console.log("Exiting the get id route");
    return res.status(200).json(res.locals.movieData); // Directly return the JSON data from OMDB API
  },
);

// // New route for fetching movie data by ID
// router.get("/:id", async (req, res) => {
//   console.log("Inside the get/id");
//   const { id } = req.params;

//   try {
//     const movieResponse = await fetch(
//       `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`,
//     );
//     const movieData = await movieResponse.json();
//     console.log(movieData);
//     return res.status(200).json(movieData); // Directly return the JSON data from OMDB API
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while fetching movie data." });
//   }
// });

export default router;
