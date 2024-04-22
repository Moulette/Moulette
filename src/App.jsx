import { useState } from 'react';
import NavBar from './components/NavBar';
import Profile from './containers/Profile';
import RatingPage from './containers/RatingPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [profileDisplayed, setProfileDisplayed] = useState(false);

  return (
    <>
      <NavBar profileDisplayed={profileDisplayed} setProfileDisplayed={setProfileDisplayed} loggedIn={setLoggedIn} />
      {profileDisplayed ? <Profile /> : <RatingPage />}
    </>
  )
}

export default App
