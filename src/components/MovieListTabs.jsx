const MovieListTabs = ({ currentTab, toggleTab }) => {
  return (
    <div>
      <div className="mt-5 flex flex-row justify-around">
        <div
          onClick={() => {
            if (currentTab !== "Watch List") toggleTab();
          }}
          className={
            (currentTab === "Watch List"
              ? "rounded-t-lg bg-zinc-400 font-bold text-neutral-50"
              : "") + " w-1/2 p-3 text-center"
          }
        >
          Watch List
        </div>
        <div
          onClick={() => {
            if (currentTab !== "Watched") toggleTab();
          }}
          className={
            (currentTab === "Watched"
              ? "rounded-t-lg bg-zinc-400 font-bold text-neutral-50"
              : "") + " w-1/2 p-3 text-center"
          }
        >
          Watched
        </div>
      </div>
      <hr className="border-2 border-zinc-400 shadow-md" />
    </div>
  );
};

export default MovieListTabs;
