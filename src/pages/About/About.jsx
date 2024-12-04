import swizerland from "../../../src/assets/aboutsection.jpg";
const About = () => {
  return (
    <>
      <section className="backdrop-blur-xl bg-[#ffffff0e] backdrop-sepia-0 w-[90%] lg:w-[80%] md:w-[80%] mx-auto  shadow-2xl mt-4 lg:mt-20 py-12">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={swizerland}
              alt="Nature Landscape"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className=" text-white text-md font-semibold uppercase mb-2">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
              The Best And Most Trusted{" "}
              <span className="text-orange-500">Service</span>
            </h2>
            <p className="text-white text-base mb-6">
              We are the largest holiday service provider in the world with
              partners and places spread all over the world by prioritizing
              service and customer satisfaction.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition">
              Learn More
            </button>

            {/* Stats Section */}
            <div className="flex flex-wrap gap-8 mt-8 justify-center md:justify-start">
              <div>
                <h3 className="text-2xl font-bold text-white">200+</h3>
                <p className="text-orange-500">Customer & Partners</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">500+</h3>
                <p className="text-orange-500">Place In The World</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">1k+</h3>
                <p className="text-orange-500">Success Journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
