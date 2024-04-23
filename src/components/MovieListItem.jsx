const MovieListItem = ({ poster, title, year }) => {
  return (
    <div className="mt-5 flex min-w-full flex-row justify-start rounded-xl bg-stone-200 p-5">
      <img className="h-32" src={poster} />
      <div className="ml-5 flex flex-col items-start justify-start">
        <h3 className="font-bold">
          {title} ({year})
        </h3>
        <p>Added in April</p>
      </div>
    </div>
  );
};

export default MovieListItem;
