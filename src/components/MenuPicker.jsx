import xMark from "../assets/xMark.svg";
import film from "../assets/film.svg";
import heart from "../assets/heart.svg";

/**
 * This component renders three buttons at the bottom of the rating screen
 * And then processes the associated actions from the parent component.
 * @param {*} props - used to handle each of the potential actions 
 * @returns 
 */
const MenuPicker = ({ handleDontWatch, handleWatched, handleAddWatchList }) => {
  return (
    <>
      <div className="flex justify-between">
        <div
          className="m-1 flex w-1/3 flex-col items-center text-wrap p-2 text-center"
          onClick={handleDontWatch}
        >
          <div className="h-14 w-14 overflow-hidden rounded-full bg-gray-200 p-3">
            <img src={xMark} />
          </div>
          <p className="mt-2 text-balance">Don&apos;t watch</p>
        </div>
        <div
          className="m-1 flex w-1/3 flex-col items-center text-wrap p-2 text-center"
          onClick={handleWatched}
        >
          <div className="h-14 w-14 overflow-hidden rounded-full bg-gray-200 p-3">
            <img src={film} />
          </div>
          <p className="mt-2 text-balance">Already watched</p>
        </div>
        <div
          className="m-1 flex w-1/3 flex-col items-center text-wrap p-2 text-center"
          onClick={handleAddWatchList}
        >
          <div className="h-14 w-14 overflow-hidden rounded-full bg-gray-200 p-3">
            <img src={heart} />
          </div>
          <p className="mt-2 text-balance">Add to watch list</p>
        </div>
      </div>
    </>
  );
};

export default MenuPicker;
