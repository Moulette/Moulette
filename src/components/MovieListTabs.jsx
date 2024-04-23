const MovieListTabs = ({ currentTab, toggleTab }) => {
  return (
    <div>
      <div className="mt-5 flex flex-row justify-around">
        <div
          onClick={() => {
            if (currentTab !== "Watch List") toggleTab();
          }}
          className={
            (currentTab === "Watch List" ? "bg-gray-700 font-bold text-neutral-50" : "") +
            " p-3 text-center w-1/2"
          }
        >
          Watch List
        </div>
        <div
          onClick={() => {
            if (currentTab !== "Watched") toggleTab();
          }}
          className={
            (currentTab === "Watched" ? "bg-gray-700 font-bold text-neutral-50" : "") +
            " p-3 text-center w-1/2"
          }
        >
          Watched
        </div>
      </div>
      <hr className="border-2"/>
    </div>
  );
};

export default MovieListTabs;
