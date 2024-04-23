import MovieListTabs from "./MovieListTabs";
import MovieListItem from "./MovieListItem";

const MovieList = () => {
  const movies = [
    {
      poster: "https://img.omdbapi.com/?i=tt0119698&h=600&apikey=61d58e1f",
      title: "Princess Mononoke",
      year: 1997,
    },
    {
      poster: "https://img.omdbapi.com/?i=tt0095016&h=600&apikey=61d58e1f",
      title: "Die Hard",
      year: 1988,
    },
  ];

  const movieComponents = movies.map((film, index) => (
    <MovieListItem
      key={index}
      poster={film.poster}
      title={film.title}
      year={film.year}
    />
  ));

  return (
    <div className="mt-5">
      <MovieListTabs />
      {movieComponents}
    </div>
  );
};

export default MovieList;
