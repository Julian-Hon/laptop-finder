import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {

  return (
    <nav className="bg-purple-400 p-4 shadow-md rounded-b-sm font-mono">
      <div className="container mx-auto flex justify-between items-center ">
      <Link to="/" className="block px-4 py-2 text-white ">
              Laptop Finder
            </Link>
        <ul className="block md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-blue-600 md:bg-transparent transition-all duration-300 ease-in-out">
          <li>
            <Link to="/" className="block px-4 py-2 text-white hover:bg-purple-500 hover:rounded-sm">
              Home
            </Link>
          </li>
          <li>
            <Link to="/favourites" className="block px-4 py-2 text-white  hover:bg-purple-500 hover:rounded-sm">
              Favorites
            </Link>
          </li>
          <li>
            <Link to="/history" className="block px-4 py-2 text-white  hover:bg-purple-500 hover:rounded-sm">
              History
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;