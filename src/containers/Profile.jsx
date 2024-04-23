import UserHeader from '../components/UserHeader';
import MovieList from '../components/MovieList';

const Profile = () => {


  return (
    <div className="flex flex-col justify-start p-5">
      <UserHeader />
      <MovieList />
    </div>
  );
};

export default Profile;
