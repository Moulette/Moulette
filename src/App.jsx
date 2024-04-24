import { useState } from "react";
import NavBar from "./components/NavBar";
import Profile from "./containers/Profile";
import RatingPage from "./containers/RatingPage";
import Login from "./components/Login";

function App() {
  const [currentUser, setCurrentUser] = useState("Ryan");
  const [profileDisplayed, setProfileDisplayed] = useState(false);

  let renderedComponent = <Login setCurrentUser={setCurrentUser} />;

  if (currentUser !== null) {
    renderedComponent = profileDisplayed ? (
      <Profile currentUser={currentUser} />
    ) : (
      <RatingPage currentUser={currentUser} />
    );
  }

  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-zinc-100">
      <div className="">
        <NavBar
          profileDisplayed={profileDisplayed}
          setProfileDisplayed={setProfileDisplayed}
          currentUser={currentUser}
        />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        {renderedComponent}
      </div>
    </div>
  );
}

export default App;
