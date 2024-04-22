import React from "react";
import xMark from "../assets/xMark.svg";
import film from "../assets/film.svg";
import heart from "../assets/heart.svg";

const MenuPicker = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="m-1 flex w-1/3 flex-col items-center text-wrap p-2 text-center">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200 p-1">
            <img src={xMark} />
          </div>
          <p className="text-balance mt-2">Don't watch</p>
        </div>
        <div className="m-1 flex w-1/3 flex-col items-center text-wrap p-2 text-center">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200 p-1">
            <img src={film} />
          </div>
          <p className="text-balance mt-2">Already watched</p>
        </div>
        <div className="m-1 flex w-1/3 flex-col items-center text-wrap p-2 text-center">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200 p-1">
            <img src={heart} />
          </div>
          <p className="text-balance mt-2">Add to watch list</p>
        </div>
      </div>
    </>
  );
};

export default MenuPicker;
