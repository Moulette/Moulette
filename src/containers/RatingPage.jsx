import { useEffect, useState } from "react";
import PosterPicker from "../components/PosterPicker";
import MenuPicker from "../components/MenuPicker";

/**
 * Container that holds the screen for rating/picking movies. Can either be done with the poster
 * view or with a menue item set at the bottom of the page
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
  const updateCurrentMovies = () => {
    // slice to create a copy of just first element of the array
    const newMoviesArray = currentMovies.slice(0, 1);

    // TODO MAKE THIS A FETCH REQUEST
    const newMovie = {
      movieId: "tt0095327",
      title: "Grave of the Fireflies",
      year: 1988,
    };

    // add the new movie to the copied array
    newMoviesArray.unshift(newMovie);

    // use setCurrentMovies to update state
    setCurrentMovies(newMoviesArray);
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
          handleDontWatch={handleDontWatch}
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
