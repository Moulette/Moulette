import PosterPicker from "../components/PosterPicker";
import MenuPicker from "../components/MenuPicker";

const RatingPage = () => {
  return (
    <div className="flex min-h-full flex-col items-center justify-end p-5">
      <div className="flex-1 flex">
        <PosterPicker />
      </div>
      <div className="">
        <MenuPicker />
      </div>
    </div>
  );
};

export default RatingPage;
