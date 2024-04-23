import avatar from "../assets/avatar.svg";
import xMark from "../assets/xMark.svg";

const NavBar = ({ profileDisplayed, setProfileDisplayed, setLoggedIn }) => {
  return (
    <div className="flex h-full w-full items-center justify-between bg-zinc-300 p-2 px-10">
      <div className="">
        {/* Placeholder to keep three  */}
      </div>
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
