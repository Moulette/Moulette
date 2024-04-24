const PosterImage = ({ movie, top = false }) => {
  return (
    <div className='h-[28rem] w-auto'>
      <img
        className={'h-full rounded-md border-8 border-white bg-white object-contain p-2'}
        src={`https://img.omdbapi.com/?i=${movie.movieId}&h=600&apikey=61d58e1f`}
      />
      <p className="w-full bg-white pb-2 text-center font-bold">{`${movie.title} (${movie.year})`}</p>
    </div>
  );
};

export default PosterImage;
