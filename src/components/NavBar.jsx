import React from 'react';
import avatar from '../assets/avatar.svg';
import xMark from '../assets/xMark.svg';

const NavBar = ({ profileDisplayed, setProfileDisplayed, setLoggedIn }) => {
  return (
    <div className="flex justify-between items-center m-2 mx-10">
      <div className=""></div>
      <p>Moulette</p>
      <div onClick={() => setProfileDisplayed(!profileDisplayed)}>
        <img
          className="h-6 text-grey-500"
          src={profileDisplayed ? xMark : avatar}
        />
      </div>
    </div>
  );
};

export default NavBar;
