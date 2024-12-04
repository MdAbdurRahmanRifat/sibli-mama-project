import Logosvg from "./Logosvg";

const Navbar = () => {
  return (
    <>
      <nav className="backdrop-blur-lg bg-[#ffffff0e] backdrop-sepia-0 shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div  className="flex items-center gap-2 text-2xl font-bold text-white w-12 h-2">
                <div>
                <Logosvg />
                </div>
                <span>Travel Agent</span>
              </div>
            </div>

            {/* Links */}
            <div className="hidden md:flex space-x-6">
              <a
                href="/features"
                className="text-white hover:text-gray-600 transition"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white hover:text-gray-600 transition"
              >
                About
              </a>
              <a
                href="/about"
                className="text-white hover:text-gray-600 transition"
              >
                Our Services
              </a>
              <a
                href="/contact"
                className="text-white hover:text-gray-600 transition"
              >
                Contact
              </a>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-800 rounded-lg hover:bg-gray-100 hover:text-gray-700 transition">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
