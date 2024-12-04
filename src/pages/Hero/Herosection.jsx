import Heroimage from "./Hero_image/Heroimage";

const Herosection = () => {
  return (
    <>
      <section className="backdrop-blur-xl bg-[#ffffff0e] backdrop-sepia-0 w-[90%] lg:w-[80%] md:w-[80%] mx-auto mt-20  shadow-2xl p-10 rounded-lg mb-3 flex items-center">
        <div className="flex items-center flex-col gap-6">
          <div className=" px-4 flex flex-col md:flex-row md:items-center lg:px-12">
            {/* Left Side */}
            <div className="text-left  mb-8 md:mb-0">
              <h1 className="text-4xl lg:w-[80%] md:text-6xl font-bold text-white">
                Its Big world out there .{" "}
                <span className="text-orange-500">go and explore</span>
              </h1>
            </div>
            {/* Right Side */}
            <div className=" md:text-left max-w-lg">
              <p className="text-lg  text-white mb-6">
                Discover unique opportunities and experiences crafted just for
                you. Explore the world like never before and dive into the best
                moments of your life.
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
                Discover Now
              </button>
            </div>
          </div>

          <Heroimage />
        </div>
      </section>
    </>
  );
};

export default Herosection;
