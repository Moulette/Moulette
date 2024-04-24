import PosterImage from "./PosterImage";

const PosterPicker = ({ currentMovies }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
          <PosterImage movie={currentMovies[0]} top={true} />
        <div className="absolute top-0">
          <PosterImage movie={currentMovies[1]} />
        </div>
      </div>
    </div>
  );
};

export default PosterPicker;
