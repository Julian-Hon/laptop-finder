import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Logo
        </Link>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-blue-600 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:flex-row md:items-center md:w-auto`}
        >
          <li>
            <Link to="/" className="block px-4 py-2 text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block px-4 py-2 text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block px-4 py-2 text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;