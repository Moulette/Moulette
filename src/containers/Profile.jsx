import UserHeader from "../components/UserHeader";
import MovieList from "../components/MovieList";

/**
 * Container that holds the profile page. Consistsn of a user section, and the list of their movies
 */
const Profile = () => {
  return (
    <div className="flex flex-col justify-start p-5">
      <UserHeader />
      <MovieList />
    </div>
  );
};

export default Profile;
