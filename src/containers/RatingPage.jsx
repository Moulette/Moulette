// RatingPage.jsx
import { useEffect, useState } from "react";
import PosterPicker from "../components/PosterPicker";
import MenuPicker from "../components/MenuPicker";

// Castle in the Sky	tt0092067
// My Neighbor Totoro	tt0096283
// Grave of the Fireflies	tt0095327
// Kiki's Delivery Service	tt1620833
// Only Yesterday	tt0102587
// Porco Rosso	tt0104652
// Ocean Waves	tt0108432
// Pom Poko	tt0110008
// Whisper of the Heart	tt0113824
// Princess Mononoke	tt0119698
// My Neighbors the Yamadas	tt0206013
// Spirited Away	tt0245429
// The Cat Returns	tt0347618
// Howl's Moving Castle	tt0347149
// Tales from Earthsea	tt0495596
// Ponyo	tt0876563
// Arrietty	tt1568921
// From Up on Poppy Hill	tt1798188
// The Wind Rises	tt2013293
// The Tale of the Princess Kaguya	tt2576852
// When Marnie Was There	tt3398268
// The Red Turtle	tt3666024
// Earwig and the Witch	tt12441478
// The Boy and the Heron	tt6587046

const movieIds = [
  "tt0092067",
  "tt0096283",
  "tt0095327",
  "tt1620833",
  "tt0102587",
  "tt0104652",
  "tt0108432",
  "tt0110008",
  "tt0113824",
  "tt0119698",
  "tt0206013",
  "tt0245429",
  "tt0347618",
  "tt0347149",
  "tt0495596",
  "tt0876563",
  "tt1568921",
  "tt1798188",
  "tt2013293",
  "tt2576852",
  "tt3398268",
  "tt3666024",
  "tt12441478",
  "tt6587046",
];

// Function to return a random movie ID from the array
function getRandomMovieId() {
  const randomIndex = Math.floor(Math.random() * movieIds.length);
  return movieIds[randomIndex];
}

/**
 * Container that holds the screen for rating/picking movies. Can either be done with the poster
 * view or with a menu item set at the bottom of the page
 */
const RatingPage = ({ currentUser }) => {
  let tempMoviesDefinition = [
    {
      movieId: "tt0092067",
      title: "Castle in the Sky",
      year: 1986,
    },
    {
      movieId: "tt0096283",
      title: "My Neighbor Totoro",
      year: 1988,
    },
  ];

  // State holding two movies, the first index is on top, the second index is behind
  const [currentMovies, setCurrentMovies] = useState(tempMoviesDefinition);

  /**
   * Helper function that moves the later of two movies to the front, and fetches a new movie for the back
   *
   * Assumes that the first index movie has already been delt with
   */
  const updateCurrentMovies = async () => {
    try {
      const randomMovieId = getRandomMovieId();
      console.log('Going to fetch from the api endpoint');
      const response = await fetch(`http://localhost:4000/api/${randomMovieId}`);
      console.log('Fetched from the api endpoint, response is: ', response);

      // Check if the response is OK
      if (!response.ok) {
        throw new Error(
          `Failed to fetch movie with ID ${randomMovieId}. Status: ${response.status}`,
        );
      }

      const data = await response.json();
      console.log('Data body is: ', data.body);
      const newMovie = {
        movieId: randomMovieId,
        title: data.Title, // Ensure these keys match the API response
        year: data.Year,
      };

      const newMoviesArray = currentMovies.slice(0, 1);
      newMoviesArray.unshift(newMovie);
      setCurrentMovies(newMoviesArray);
    } catch (error) {
      console.error("Failed to fetch new movie:", error);
    }
  };

  /**
   * Function to handle that you don't want to watch the current movie
   */
  const handleDontWatch = async () => {
    // make a call to the API that updates status with userID and the current movie (index 1)
    alert(
      `User ${currentUser} is not going to watch ${currentMovies[1].title}`,
    );

    // call updateCurrentMovies
    updateCurrentMovies();
  };

  /**
   * Function to handle that you already watched the current movie (add to watched)
   */
  const handleWatched = () => {
    // make a call to the API that updates status with userID and the current movie (index 1)
    alert(`User ${currentUser} has already watched ${currentMovies[1].title}.`);

    // call updateCurrentMovies
    updateCurrentMovies();
  };

  /**
   * Function to handle that you want to add the movie to your watch list
   */
  const handleAddWatchList = () => {
    // make a call to the API that updates status with userID and the current movie (index 1)
    alert(
      `User ${currentUser} wants to add ${currentMovies[1].title} to their watch list.`,
    );

    // call updateCurrentMovies
    updateCurrentMovies();
  };

  return (
    <div className="flex min-h-full flex-col items-center justify-end p-5">
      <div className="flex flex-1">
        <PosterPicker
          currentMovies={currentMovies}
          handleWatched={handleWatched}
          handleAddWatchList={handleAddWatchList}
        />
      </div>
      <div className="">
        <MenuPicker
          handleDontWatch={handleDontWatch}
          handleWatched={handleWatched}
          handleAddWatchList={handleAddWatchList}
        />
      </div>
    </div>
  );
};

export default RatingPage;
