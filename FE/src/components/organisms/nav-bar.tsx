import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white w-full">
      <div className=" mx-auto px-4 sm:px-6 md:px-10 lg:px-28">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <div className="text-black font-bold text-lg">☀</div>
                </div>
                <span className="text-xl font-bold">Logoipsum</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className=" flex items-baseline xl:space-x-8 md:space-x-3">
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors py-2 text-sm font-medium"
              >
                HOME
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors py-2 text-sm font-medium"
              >
                OUR SCREENS
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors py-2 text-sm font-medium"
              >
                SCHEDULE
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors py-2 text-sm font-medium"
              >
                MOVIE LIBRARY
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors py-2 text-sm font-medium "
              >
                LOCATION & CONTACT
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <a
              href="#"
              className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
            >
              OUR SCREENS
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
            >
              SCHEDULE
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
            >
              MOVIE LIBRARY
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
            >
              LOCATION & CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
