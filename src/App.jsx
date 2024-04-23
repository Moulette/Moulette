import { useState } from "react";
import NavBar from "./components/NavBar";
import Profile from "./containers/Profile";
import RatingPage from "./containers/RatingPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [profileDisplayed, setProfileDisplayed] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <div className="h-28">
        <NavBar
          profileDisplayed={profileDisplayed}
          setProfileDisplayed={setProfileDisplayed}
          loggedIn={loggedIn}
        />
      </div>
      <div className="flex-1">
        {profileDisplayed ? <Profile /> : <RatingPage />}
      </div>
    </div>
  );
}

export default App;
