const MovieListTabs = ({ currentTab, toggleTab }) => {
  return (
    <div>
      <div className="mt-5 flex flex-row justify-around">
        <div
          onClick={() => {
            if (currentTab !== "Watch List") toggleTab();
          }}
          className={
            (currentTab === "Watch List" ? "bg-stone-400 font-bold text-neutral-50" : "") +
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
            (currentTab === "Watched" ? "bg-stone-400 font-bold text-neutral-50" : "") +
            " p-3 text-center w-1/2"
          }
        >
          Watched
        </div>
      </div>
      <hr className="border-2 border-stone-400"/>
    </div>
  );
};

export default MovieListTabs;
