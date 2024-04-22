import React from "react";
import PosterPicker from "../components/PosterPicker";
import MenuPicker from "../components/MenuPicker";

const RatingPage = (props) => {
  return (
    <div className="flex flex-col justify-between items-center p-5">
      <div>
        <PosterPicker />
      </div>
      <div className="">
        <MenuPicker />
      </div>
    </div>
  );
};

export default RatingPage;
