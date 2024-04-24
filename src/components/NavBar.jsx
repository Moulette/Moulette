import avatar from "../assets/avatar.svg";
import xMark from "../assets/xMark.svg";

/**
 * Component for the navbar at the top of the app. Controls if the profile is 
 * displayed (but that is only possible if a user is logged in).
 * @param {*} props - allows for setting a current user and controlling if the profile is displayed
 * @returns
 */
const NavBar = ({ profileDisplayed, setProfileDisplayed, currentUser }) => {
  return (
    <div className="flex h-full w-full items-center justify-between bg-zinc-300 p-2 px-10">
      <div className="">{/* Placeholder to keep three  */}</div>
      <h1 className="text-3xl">Moulette</h1>
      <div onClick={() => setProfileDisplayed(!profileDisplayed)}>
        <img
          className={currentUser === null ? "hidden" : "text-grey-500 h-6"}
          src={profileDisplayed ? xMark : avatar}
        />
      </div>
    </div>
  );
};

export default NavBar;
