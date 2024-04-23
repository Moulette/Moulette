const UserHeader = () => {
  return (
    <div className="flex min-w-full flex-row justify-start rounded-3xl bg-stone-200 p-5">
      <img className="rounded-full" src="https://placehold.co/100x100" />
      <div className="ml-5 flex flex-col items-start justify-start">
        <h3 className="font-bold">Joe Schmoe</h3>
        <p>Los Angeles, CA</p>
      </div>
    </div>
  );
};

export default UserHeader;
