import { useState } from "react";
import NavBar from "./components/NavBar";
import Profile from "./containers/Profile";
import RatingPage from "./containers/RatingPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [profileDisplayed, setProfileDisplayed] = useState(false);

  return (
    <>
      <div className="size-full flex flex-col justify-start">
        <div className="h-48">
          <NavBar
            profileDisplayed={profileDisplayed}
            setProfileDisplayed={setProfileDisplayed}
            loggedIn={setLoggedIn}
          />
        </div>
        <div className="h-max">
        {profileDisplayed ? <Profile /> : <RatingPage />}
        </div>
      </div>
    </>
  );
}

export default App;
