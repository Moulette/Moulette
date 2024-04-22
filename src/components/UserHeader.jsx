const UserHeader = () => {

  return (
    <div className="flex flex-row justify-start">
      <img className="rounded-full" src="https://placehold.co/100x100" />
      <div className="flex ml-5 flex-col justify-start items-start">
        <h3 className="font-bold">Joe Schmoe</h3>
        <p>Los Angeles, CA</p>
      </div>
    </div>
  );
};

export default UserHeader;
