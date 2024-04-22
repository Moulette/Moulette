import { useState } from "react";
import UserHeader from '../components/UserHeader';

const Profile = () => {
  const [currentTab, setCurrentTab] = useState('Watch List');



  return (
    <div className="flex flex-col justify-start p-10">
      <UserHeader />
      <h1>Tabbed Sections</h1>
      <h1>Table Components</h1>
    </div>
  );
};

export default Profile;
