import { useState } from "react";
import NavBar from "./components/NavBar";
import Profile from "./containers/Profile";
import RatingPage from "./containers/RatingPage";
import Login from "./components/Login";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [profileDisplayed, setProfileDisplayed] = useState(false);

  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-zinc-100">
      <div className="">
        <NavBar
          profileDisplayed={profileDisplayed}
          setProfileDisplayed={setProfileDisplayed}
          currentUser={currentUser}
        />
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <div className={currentUser === null ? 'flex flex-1 flex-col justify-start' : 'hidden'}>
          <Login setCurrentUser={setCurrentUser} />
        </div>
        <div className={profileDisplayed && currentUser !== null ? 'flex flex-1 flex-col justify-start' : 'hidden'}>
          <Profile currentUser={currentUser} />
        </div>
        <div className={!profileDisplayed && currentUser !== null ? 'flex flex-1 flex-col justify-start' : 'hidden'}>
          <RatingPage currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
