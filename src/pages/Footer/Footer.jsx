import { RxTwitterLogo } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="backdrop-blur-3xl bg-[#ffffff0e] backdrop-sepia-0 shadow-md  text-gray-200 mt-2 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Brand Information */}
            <div>
              <h1 className="text-xl font-bold text-white">Travel Agent</h1>
              <p className="mt-4">
                Your trusted partner for unforgettable travel experiences. Plan
                your next adventure with us!
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h2 className="text-lg font-semibold text-white">Quick Links</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#destinations"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Information */}
            <div>
              <h2 className="text-lg font-semibold text-white">Contact Us</h2>
              <p className="mt-4">123 Travel Street, Wanderlust City</p>
              <p>Email: info@travelagent.com</p>
              <p>Phone: +123 456 7890</p>
            </div>

            {/* Column 4: Follow Us */}
            <div>
            <h2 className="text-lg font-semibold text-white">Follow Us</h2>
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Twitter"
              >
                <RxTwitterLogo />
              </a>
              <a
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                
                aria-label="LinkedIn"
              >
               <FaLinkedinIn />
              </a>
            </div>
          </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            &copy; 2024 Travel Agent. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
