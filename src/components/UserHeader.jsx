/**
 * Card that displays the current user of the app. Currently hardcoded to be Ryan.
 */
const UserHeader = () => {
  return (
    <div className="flex min-w-full flex-row justify-start rounded-3xl bg-white p-5 shadow-lg">
      <img
        className="h-28 w-28 rounded-full"
        src="https://media.licdn.com/dms/image/C5603AQH89aF7fDuxYQ/profile-displayphoto-shrink_800_800/0/1661982850851?e=1719446400&v=beta&t=3IH842Pn3N08WAz_LuQC5-X-JQtlfZxolMdA_C4Uu8M"
      />
      <div className="ml-5 flex flex-col items-start justify-start">
        <h3 className="font-bold">Ryan McDaniel</h3>
        <p>New York, NY</p>
      </div>
    </div>
  );
};

export default UserHeader;
