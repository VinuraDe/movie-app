import React from "react";
import { Twitter, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white lg:px-20">
      <div className=" px-4 sm:px-10 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Company Information */}
          <div className="mb-6 md:mb-0 text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-2">IT Group</h3>
            <div className="text-sm text-white space-y-1">
              <p>C. Salvador de Madariaga, 1</p>
              <p>28027 Madrid</p>
              <p>Spain</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-white">Follow us on</span>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col lg:flex-row md:justify-between justify-center text-sm text-[#B7B7B7]">
            <div className="md:flex mb-4 md:mb-0 text-center gap-1 justify-center">
              <p>Copyright © {new Date().getFullYear()} IT Hotels.</p>
              <p> All rights reserved.</p>
            </div>
            <div className="items-center text-center space-x-2">
              <span>Photos by Felix Mooneeram & Serge Kutuzov on</span>
              <a
                href="https://unsplash.com"
                className="transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
