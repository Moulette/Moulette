import { useState } from "react";
import NavBar from "./components/NavBar";
import Profile from "./containers/Profile";
import RatingPage from "./containers/RatingPage";
import Login from "./components/Login";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [profileDisplayed, setProfileDisplayed] = useState(false);

  let renderedComponent = <Login setCurrentUser={setCurrentUser} />;

  if(currentUser !== null) {
    renderedComponent = profileDisplayed ? <Profile /> : <RatingPage />;
  }

  return (
    <div className="flex flex-col h-screen bg-zinc-100 overflow-y-auto">
      <div className="">
        <NavBar
          profileDisplayed={profileDisplayed}
          setProfileDisplayed={setProfileDisplayed}
          currentUser={currentUser}
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        {renderedComponent}
      </div>
    </div>
  );
}

export default App;
