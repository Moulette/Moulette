import { useState } from "react";
import MovieListTabs from "./MovieListTabs";
import MovieListItem from "./MovieListItem";

const MovieList = () => {
  const [currentTab, setCurrentTab] = useState("Watch List");

  const movies = [
    {
      poster: "https://img.omdbapi.com/?i=tt0119698&h=600&apikey=61d58e1f",
      title: "Princess Mononoke",
      year: 1997,
      listStatus: "Watch List",
    },
    {
      poster: "https://img.omdbapi.com/?i=tt0095016&h=600&apikey=61d58e1f",
      title: "Die Hard",
      year: 1988,
      listStatus: "Watched",
    },
    {
      poster: "https://img.omdbapi.com/?i=tt0119698&h=600&apikey=61d58e1f",
      title: "Princess Mononoke",
      year: 1997,
      listStatus: "Watch List",
    },
    {
      poster: "https://img.omdbapi.com/?i=tt0095016&h=600&apikey=61d58e1f",
      title: "Die Hard",
      year: 1988,
      listStatus: "Watched",
    },
    {
      poster: "https://img.omdbapi.com/?i=tt0119698&h=600&apikey=61d58e1f",
      title: "Princess Mononoke",
      year: 1997,
      listStatus: "Watch List",
    },
    {
      poster: "https://img.omdbapi.com/?i=tt0095016&h=600&apikey=61d58e1f",
      title: "Die Hard",
      year: 1988,
      listStatus: "Watched",
    },
  ];

  /**
   * Filter for the current tab, and then render components to the page.
   */
  const movieComponents = movies.filter((film) => film.listStatus === currentTab).map((film, index) => (
    <MovieListItem
      key={index}
      poster={film.poster}
      title={film.title}
      year={film.year}
    />
  ));

  /**
   * Set currentTab to toggle between Watch List and Watched
   */
  const toggleTab = () => {
    const newTab = currentTab === "Watch List" ? "Watched" : "Watch List";
    setCurrentTab(newTab);
  };

  return (
    <div className="mt-5">
      <MovieListTabs currentTab={currentTab} toggleTab={toggleTab} />
      <div className="overflow-auto">{movieComponents}</div>
    </div>
  );
};

export default MovieList;
