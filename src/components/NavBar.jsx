import React from "react";
import avatar from "../assets/avatar.svg";
import xMark from "../assets/xMark.svg";

const NavBar = ({ profileDisplayed, setProfileDisplayed, setLoggedIn }) => {
  return (
    <div className="m-2 mx-10 flex h-1/2 items-center justify-between">
      <div className=""></div>
      <h1 className="text-3xl">Moulette</h1>
      <div onClick={() => setProfileDisplayed(!profileDisplayed)}>
        <img
          className="text-grey-500 h-6"
          src={profileDisplayed ? xMark : avatar}
        />
      </div>
    </div>
  );
};

export default NavBar;
