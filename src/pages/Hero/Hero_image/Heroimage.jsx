import heroimg from "../../../assets/forest.jpg";
const Heroimage = () => {
  return (
    <>
      <div
        className="relative w-[100%] h-[200px] lg:w-[100%] bg-cover mt-2 mx-auto bg-center lg:h-[500px]"
        style={{
          backgroundImage: `url(${heroimg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      {/* Search Bar */}
      <form className=" hidden lg:block  w-full px-0 md:px-20 z-10">
        <div className="bg-backdrop-blur-xl  bg-[#ffffff0e] backdrop-sepia-0 shadow-2xl  rounded-lg p-6 flex flex-wrap gap-4 justify-between items-center">
          {/* From */}
          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-gray-200 mb-1">From</label>
            <input
              type="text"
              placeholder="Bali, Indonesia"
              className="border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* To */}
          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-gray-200 mb-1">To</label>
            <input
              type="text"
              placeholder="Bali, Indonesia"
              className="border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Dates */}
          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-gray-200 mb-1">Dates</label>
            <input
              type="text"
              placeholder="Select a date range"
              className="border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-gray-200 mb-1">Guests</label>
            <input
              type="text"
              placeholder="Number of your guests"
              className="border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Search Button */}
          <div>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 21l6-6m0 0l-6-6m6 6H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Heroimage;
